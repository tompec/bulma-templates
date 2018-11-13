let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.js('src/js/app.js', 'docs/js/')
    .copy('src/index.html', 'docs/')
    .copyDirectory('src/templates', 'docs/templates')
    .sass('src/sass/index.scss', 'docs/')
    .sass('src/sass/login.scss', 'docs/templates/')
    .sass('src/sass/blog.scss', 'docs/templates/')
    .copyDirectory('src/img', 'docs/img');
