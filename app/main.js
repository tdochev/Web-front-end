import Sammy from 'sammy';
import Data from 'data';

console.log('in main');

const data = new Data();

function loadControllerWithAction(controller, action) {
    if (controller !== undefined && action !== undefined) {
        System.import(`../app/controllers/${controller}.controller.js`).then((controllerRef) => {
            const currentController = new controllerRef.default(data);
            console.log(currentController);
            currentController[action]();
        });
    }
}

const app = Sammy(function() {
    'use strict';

    this.get('#/', () => {
        const controller = 'home';
        const action = 'main'
        loadControllerWithAction(controller, action);

    });

    this.get('#/:controller/:action', function() {
        const controller = this.params['controller'];
        const action = this.params['action'];
        loadControllerWithAction(controller, action);
    });

    this.get(/.*/, () => {
        $('title')[0].text = '404';
    });

});

// start the application
app.run('#/');
