/*  globals System, SystemJS */
(function() {
    System.defaultJSExtensions = 'js';
    System.config({
        transpiler: 'plugin-babel',
        paths: {
            // paths serve as alias
            'npm:': './node_modules/'

        },
        map: {
            // System.js files
            'plugin-babel': 'npm:systemjs-plugin-babel/plugin-babel.js',
            'systemjs-babel-build': 'npm:systemjs-plugin-babel/systemjs-babel-browser.js',

            // App files
            'main': 'main',
            'test': 'test.js',

            // Library files
            'firebase': 'npm:firebase/firebase.js',
            'jquery': 'npm:jquery/dist/jquery.js',
            'sammy': 'npm:sammy/lib/min/sammy-latest.min.js',
        },
    });

})(this);
