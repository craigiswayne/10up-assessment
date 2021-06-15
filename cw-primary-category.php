<?php
/**
 * Plugin Name:     CW | Primary Category
 * Plugin URI:      https://github.com/craigiswayne/10up-assessment
 * Description:     Allows you to assign a primary category
 * Author:          Craig Wayne
 * Author URI:      craigiswayne.com
 * Text Domain:     cw-primary-category
 * Domain Path:     /languages
 * Version:         0.0.1
 *
 * @package         CW_Primary_Category
 */

if ( !defined('ABSPATH') ) {
	die('Oops! This seems to be an invalid request.');
}

require_once plugin_dir_path(__FILE__).'core.php';

CWPC::init();
