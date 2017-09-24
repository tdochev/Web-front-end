/* globals System*/

import Sammy from 'sammy';
import Data from 'data';
import HandlebarsTemplate from 'template';

console.log('in main');

const data = new Data();
const template = new HandlebarsTemplate();

//Load menu and etc...
loadControllerWithAction('home', 'main');

function loadControllerWithAction(controller, action) {
    if (controller !== undefined && action !== undefined) {
        System.import(`../app/controllers/${controller}.controller.js`).then((controllerRef) => {
            const currentController = new controllerRef.default(data, template);
            currentController.main();
        });
    }
}

const app = Sammy(function() {
    'use strict';

    this.get('#/', () => {});

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
