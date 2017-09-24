SystemJS.config({
    transpiler: 'plugin-babel',
    paths: {
        // paths serve as alias
        'npm:': './node_modules/'

    },
    map: {
        'app': 'app',
        'plugin-babel': 'npm:systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': 'npm:systemjs-plugin-babel/systemjs-babel-browser.js',
        'jquery': 'npm:jquery/dist/jquery.min.js',
        'sammy': 'npm:sammy/lib/sammy.js',
        'firebase': 'npm:firebase/firebase.js',
        'db': './app/modules/db.js',
        'data': './app/modules/data.js',
        'requester': 'app/utils/requester.js',
        'template': 'app/utils/template.js',
        'handlebars': 'npm:handlebars/dist/handlebars.min.js',
        'homeController': './app/controllers/home.controller.js'
    },
    packages: {
        'app': { main: 'main.js', defaultExtension: 'js' },
    }
});
