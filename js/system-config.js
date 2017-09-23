/*  globals System, SystemJS */

System.config({
    map: {
        // System.js files
        'plugin-babel': '../node_modules/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': '../node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',

        // App files
        'main': 'js/main.js',

        // Library files
        'jquery': './../node_modules/jquery/dist/jquery.js',
        'sammy': './../node_modules/sammy/lib/min/sammy-latest.min.js',
    },
    transpiler: 'plugin-babel',

    meta: {
        '*.js': {
            babelOptions: {
                es2015: false,
                stage2: false,
                stage3: false

            }
        }
    }
});

SystemJS.import('main');
