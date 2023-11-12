<?php

define("B_THEME_ROOT", get_stylesheet_directory_uri());
define("CSS_DIR", B_THEME_ROOT . "/css");
define("JS_DIR", B_THEME_ROOT . "/js");
define("IMG_DIR", B_THEME_ROOT . "/img");
define("LIBS_DIR", B_THEME_ROOT . "/libs");
define("FONTS_DIR", B_THEME_ROOT . "/fonts");
define("UPLOADS_DIR", wp_get_upload_dir()['baseurl']);

function register_styles() {
    wp_register_style('tiny-slider-css', LIBS_DIR . "/tiny-slider.css");
    wp_enqueue_style('tiny-slider-css');

    wp_register_style('main-css', CSS_DIR . "/main.css?");
    wp_enqueue_style('main-css');
}

function register_scripts() {
    wp_deregister_script('jquery');
    wp_register_script('jquery', LIBS_DIR . "/jquery-3.5.1.min.js", [], false, false);
    wp_enqueue_script('jquery');

    wp_register_script('tiny-slider-js', LIBS_DIR . "/tiny-slider.js", [], false, true);
    wp_enqueue_script('tiny-slider-js');

    wp_register_script('main-js', JS_DIR . "/main.js", ['jquery', 'tiny-slider-js'], date("h:i:s"), true);
    wp_enqueue_script('main-js');
}

function enchance_scripts($tag, $handle, $src) {
    if ($handle === 'main-js') {
        return "<script type='module' defer src='" . esc_url($src) . "'></script>";
    }

    return $tag;
}
add_filter('script_loader_tag', 'enchance_scripts', 10, 3);

function theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('custom-logo');
    add_theme_support('post-thumbnails');
    add_theme_support('widgets-block-editor');

    add_action('wp_enqueue_scripts', 'register_styles');
    add_action('wp_enqueue_scripts', 'register_scripts');
}
add_action('after_setup_theme', 'theme_setup');
