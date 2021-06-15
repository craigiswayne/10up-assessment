<?php
# region CWPC Core Class
/**
 * Class CWPC
 * Core class for handling plugin functionality irrespective of which editor is being used
 */
class CWPC {

	public static $taxonomy = 'category';
	public static $slug = 'cwpc';
	public static $default_priority = 22;
	public static $meta_key = '_cwpc';

	public static function init(){
		add_action('init', ['CWPC', 'register_post_meta'], CWPC::$default_priority );
		add_action('rest_api_init', ['CWPC', 'register_rest_data'], CWPC::$default_priority );
		self::load_editor_specific_file();
	}

	public static function register_post_meta(){
		register_post_meta( 'post', self::$meta_key, [
			'show_in_rest' => true,
			'single' => true,
			'sanitize_callback' => 'sanitize_text_field',
			'type' => 'string',
			'auth_callback' => function() {
				return current_user_can( 'edit_posts' );
			}
		]);
	}

	public static function register_rest_data(){
		register_rest_field( 'post',
			self::$meta_key,
			[
				'get_callback' => function($post, $field_name, $request){
					return CWPC::get_id($post['id']);
				},
				'update_callback' => function($primary_cat_id, $post){
					CWPC::_save($post->ID, $primary_cat_id);
				},
				'schema' => array(
					'description' => __( 'Primary Category', 'cw-primary-category' ),
					'type'        => 'string'
				),
//				'schema' => null
			]
		);
	}

	protected static function load_editor_specific_file(){
		if(!CWPC::is_post_create_or_edit_screen()){
			return;
		}

		add_action('current_screen', function(){
			switch(CWPC::get_editor_style()){
				case 'classic':
					require_once plugin_dir_path(__FILE__).'classic-editor/classic-editor.php';
					break;
				case 'block':
					require_once plugin_dir_path(__FILE__).'block-editor/block-editor.php';
					break;
			}
		}, 99);
	}

	/**
	 * Actual updating of post meta
	 * @param $post_id
	 * @param $primary_cat_id
	 */
	public static function _save($post_id, $primary_cat_id){
		$sanitized = sanitize_text_field($primary_cat_id);
		update_post_meta( $post_id, self::$meta_key, $sanitized);
	}

	/**
	 * Gets the selected primary category ID
	 * @return string   category id
	 */
	public static function get_id($post_ID = null){
		if(!$post_ID){
			$post = get_post();
			$post_ID = $post->ID;
		}
		return get_post_meta($post_ID, self::$meta_key, true);
	}

	/**
	 * Gets the selected primary category as a WP_Term
	 * @return WP_Term | null
	 */
	public static function get($post_id = null){
		$cat_id = self::get_id($post_id);
		if(!$cat_id){
			return null;
		}
		return get_term($cat_id, self::$taxonomy);
	}

	/**
	 * Hooks into the post_link_category filter
	 * to ensure the primary category is used
	 * if applicable
	 * @see get_permalink
	 *
	 * @param $current_cat  WP_Term
	 * @param $all_cats     WP_Term[]
	 * @param $post         WP_Post
	 */
	public static function post_link_category($current_cat, $all_cats, $post){
		if($post->post_type !== 'post'){
			return $current_cat;
		}

		$primary_cat = CWPC::get($post->ID);
		if(!$primary_cat){
			return $current_cat;
		}
		return $primary_cat;
	}

	public static function is_post_create_or_edit_screen(){
		global $pagenow;
		$supported_screens = ['post.php', 'post-new.php'];

		/**
		 * We only care about the standard 'post' post_type
		 * This value is set on custom post types
		 */
		if(isset($_GET['post_type'])){
			return false;
		}

		return in_array($pagenow, $supported_screens);
	}

	/**
	 * Priortizes an array of WP_Term based on the primary category id
	 * @param $primary_cat_id	int|string
	 * @param $terms			WP_Term[]
	 *
	 * @return array|mixed|null[]
	 */
	public static function priortize($primary_cat_id, $terms){
		/**
		 * No Primary Category Found
		 * No need to proceed...
		 *
		 * OR
		 * less than 2 items, can't prioritize a list of 1 or 0 items
		 *
		 * ...Bail
		 */
		if(!$primary_cat_id || count($terms) < 2){
			return $terms;
		}

		// convert to integer for easier use later
		$primary_cat_id = +$primary_cat_id;

		/**
		 * Opted not to use an array_filter here,
		 * cause then i'd need to use an array_search to find the primary term
		 */
		$non_primary_terms = [];
		$primary_term = null;
		foreach($terms as $term){
			if(
				$term instanceof WP_Term &&
				$term->isPrimary = $term->term_id === $primary_cat_id
			){
				$primary_term = $term;
				continue;
			}

			$non_primary_terms[] = $term;
		}

		/**
		 * Although this post has a primary category post meta value,
		 * looks like that primary category is no longer linked to this post
		 */
		if(count($non_primary_terms) === count($terms)){
			return $terms;
		}

		/**
		 * Merge the two arrays by prioritizing the primary category
		 */
		return array_merge([$primary_term], $non_primary_terms);
	}

	/**
	 * Used to hook into the `get_the_terms` filter
	 * to priortize the Primary Category in the list for the frontend only
	 *
	 * @param $terms
	 * @param $post_id
	 * @param $taxonomy
	 *
	 * @return array|mixed|mixed[]|null[]
	 */
	public static function get_the_terms_prioritize($terms, $post_id, $taxonomy){

		/**
		 * Only care about the category taxonomy
		 */
		if($taxonomy !== self::$taxonomy){
			return $terms;
		}

		$primary_cat_id = self::get_id($post_id);

		return self::priortize($primary_cat_id, $terms);
	}

	/**
	 * Determines which editor is running
	 * @return string   'block' | 'classic' | null
	 */
	public static function get_editor_style(){
		$current_screen = get_current_screen();
		if(!$current_screen){
			return null;
		}
		return $current_screen->is_block_editor() ? 'block' : 'classic';
	}

}
# endregion

# region Overridable Methods
if(!function_exists('cwpc_get_id')){
	function cwpc_get_id($postID = null){
		return CWPC::get_id($postID);
	}
}


if(!function_exists('cwpc_get')){
	function cwpc_get($postID = null){
		return CWPC::cwpc_get($postID);
	}
}


if(!function_exists('cwpc_get_the_terms_prioritize')){
	function cwpc_get_the_terms_prioritize($terms, $post_id, $taxonomy){
		return CWPC::get_the_terms_prioritize($terms, $post_id, $taxonomy);
	}
}
add_filter('get_the_terms','cwpc_get_the_terms_prioritize', CWPC::$default_priority, 3);

if(!function_exists('cwpc_post_link_category')){
	function cwpc_post_link_category($current_cat, $all_cats, $post){
		return CWPC::post_link_category($current_cat, $all_cats, $post);
	}
}
add_filter('post_link_category', 'cwpc_post_link_category', CWPC::$default_priority, 3);
# endregion
