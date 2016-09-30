var elixir = require('laravel-elixir');
require('laravel-elixir-livereload');
require('laravel-elixir-compress');

var basejs = [
    'bower_components/jquery/dist/jquery.min.js',
    'resources/assets/js/vendor/jquery.pjax.js',
    'resources/assets/js/vendor/moment.min.js',
    'resources/assets/js/vendor/zh-cn.min.js',
    'resources/assets/js/vendor/emojify.min.js',
    'resources/assets/js/vendor/jquery.scrollUp.js',
    'resources/assets/js/vendor/nprogress.js',
    'resources/assets/js/vendor/jquery.autosize.min.js',
    'resources/assets/js/vendor/prism.js',
    'resources/assets/js/vendor/jquery.textcomplete.js',
    'resources/assets/js/vendor/emoji.js',
    'resources/assets/js/vendor/marked.min.js',
    'resources/assets/js/vendor/ekko-lightbox.js',
    'resources/assets/js/vendor/localforage.min.js',
    'resources/assets/js/vendor/jquery.inline-attach.min.js',
    'resources/assets/js/vendor/snowfall.jquery.min.js',
    'resources/assets/js/vendor/upload-image.js',
    'resources/assets/js/vendor/messenger.js',
    // UIKit
    'bower_components/uikit/js/uikit.min.js',
    'bower_components/uikit/js/components/htmleditor.min.js',
    'bower_components/uikit/js/components/autocomplete.min.js',
    'bower_components/uikit/js/components/notify.min.js',
    'bower_components/uikit/js/components/tooltip.min.js',
    'bower_components/uikit/js/components/sticky.min.js',
    'bower_components/uikit/js/components/sortable.min.js',
    'bower_components/uikit/js/components/pagination.min.js',
    'bower_components/uikit/js/components/form-select.min.js',
];

elixir(function(mix) {
    mix
        .copy([
            'bower_components/font-awesome/fonts'
        ], 'public/assets/fonts/')

        .copy([
            'bower_components/uikit/less'
        ], 'resources/assets/less/uikit')

        .copy([
            'resources/assets/fonts/googlefont'
        ], 'public/build/assets/fonts/googlefont')

        .less([
            'resources/assets/less/pagekit/theme.less'
        ], 'public/build/assets/css/main.css')

        .sass([
            'base.scss',
        ], 'public/assets/css/styles.css')

        .scripts(basejs.concat([
            'resources/assets/js/main.js',
        ]), 'public/assets/js/scripts.js', './')

        // API Web View
        .sass([
            'api/api.scss'
        ], 'public/assets/css/api.css')
        // API Web View
        .scripts([
            'api/emojify.js',
            'api/api.js'
        ], 'public/assets/js/api.js')

        .version([
            'assets/css/styles.css',
            'assets/css/main.css',
            'assets/js/scripts.js',
            // API Web View
            'assets/css/api.css',
            'assets/js/api.js',
        ])

        .livereload();

    //if (production) {
    //    mix.compress();
    //}
});