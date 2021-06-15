<?php

/**
 * Class CWPC_Block
 * Handles Plugin functionality when using the Block Editor
 */
class CWPC_Block {
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

		$handle_base = CWPC::$slug.'_block_editor';
		$js_handle = $handle_base.'-js';
		$css_handle = $handle_base.'-css';
		$js_deps = ['wp-plugins', 'wp-edit-post', 'wp-element', 'wp-components', 'wp-data' ];
		wp_register_script( $js_handle, plugins_url( 'build/scripts/editor_block/editor_block.js', dirname(__FILE__)), $js_deps,true );
		wp_register_style( $css_handle, plugins_url( 'build/styles/editor_block.css', dirname(__FILE__)), '', true);

		wp_enqueue_script($js_handle);
		wp_enqueue_style($css_handle);
	}
}

if(!function_exists('cwpc_admin_enqueues')) {
	function cwpc_admin_enqueues($hook) {
		CWPC_Block::admin_enqueues($hook);
	}
}
add_action('admin_enqueue_scripts', 'cwpc_admin_enqueues', CWPC::$default_priority);
