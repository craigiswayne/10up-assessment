<?php
if(!defined('ABSPATH')){
	exit('CWPC: Invalid Request');
}

class CWPC_Classic {

	/**
	 * Always update the post meta for the p
	 * ...even if there is no value
	 * This allows the user to unset the Primary Category Value
	 */
	public static function post_save_action($post_id){

		if(!current_user_can('edit_posts')){
			return;
		}

		$post = get_post($post_id);

		if(!$post){
			return;
		}

		if(wp_is_post_autosave($post)){
			return;
		}

		if(use_block_editor_for_post_type($post->post_type)){
			return;
		}

		$value = isset($_POST[CWPC::$meta_key]) ? $_POST[CWPC::$meta_key] : '';
		CWPC::_save($post->ID, $value);
	}

	/**
	 * Enqueues the css and js files needed for this plugin
	 * @param $hook
	 */
	public static function admin_enqueues($hook){
		global $post;

		/**
		 * Check that the current post type supports the category taxonomy
		 */
		if(!is_object_in_taxonomy( $post->post_type, CWPC::$taxonomy )){
			return;
		}

		$handle_base = CWPC::$slug.'_classic_editor';
		$js_handle = $handle_base.'-js';
		$css_handle = $handle_base.'-css';
		wp_register_style( $css_handle, plugins_url( 'build/styles/editor_classic.css', dirname(__FILE__)), '', true);
		wp_register_script( $js_handle, plugins_url( 'build/scripts/editor_classic.js', dirname(__FILE__)), '',true );

		wp_localize_script($js_handle, CWPC::$slug.'_localized', [
			'value' => CWPC::get_id(),
			'can_edit' => current_user_can('edit_posts')
		]);
		wp_enqueue_script($js_handle);
		wp_enqueue_style($css_handle);
	}

	/**
	 * Reorder category terms based on the primary category id
	 *
	 * @param $terms
	 * @param $taxonomies
	 * @param $query_vars
	 * @param $term_query
	 *
	 * @return array|mixed|null[]|\WP_Term[]
	 */
	public static function get_terms_prioritize_be($terms, $taxonomies, $query_vars, $term_query){

		/**
		 * We only care about the category tax
		 * sorry not sorry
		 */
		if(!in_array(CWPC::$taxonomy, array_values($taxonomies))){
			return $terms;
		}

		/**
		 * We only care about terms that are WP_Term objects
		 */
		if($query_vars && $query_vars['fields'] && $query_vars['fields'] !== 'all'){
			return $terms;
		}

		$primary_cat_id = CWPC::get_id();
		return CWPC::priortize($primary_cat_id, $terms);;
	}
}


## region Overridable Admin Methods
if(!function_exists('cwpc_save_action')){
	function cwpc_save_action($post_id){
		CWPC_Classic::post_save_action($post_id);
	}
}
add_action('save_post', 'cwpc_save_action', CWPC::$default_priority);

if(!function_exists('cwpc_admin_enqueues')) {
	function cwpc_admin_enqueues($hook) {
		CWPC_Classic::admin_enqueues($hook);
	}
}
add_action('admin_enqueue_scripts', 'cwpc_admin_enqueues', CWPC::$default_priority);

if(!function_exists('cwpc_get_terms_prioritize_be')){
	function cwpc_get_terms_prioritize_be($terms, $taxonomies, $query_vars, $term_query){
		return CWPC_Classic::get_terms_prioritize_be($terms, $taxonomies, $query_vars, $term_query);
	}
}
add_filter('get_terms', 'cwpc_get_terms_prioritize_be', CWPC::$default_priority, 4 );
## endregion

