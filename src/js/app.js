/* globals System*/

import Sammy from 'sammy';
import Data from './app/modules/data.js';
import HandlebarsTemplate from './app/utils/template.js';
import './../sass/main.scss';

console.log('in main');

const data = new Data();
const template = new HandlebarsTemplate();

//Load menu and etc...
loadControllerWithAction('home', 'main');

function loadControllerWithAction(controller, action, param) {
    if (controller !== undefined && action !== undefined) {
        System.import(`./app/controllers/${controller}.controller.js`).then((controllerRef) => {
            const currentController = new controllerRef.default(data, template);
            currentController[action](param);
        });
    }
}

const app = Sammy(function() {
    'use strict';

    this.get('#/', () => {});

    this.get('#/:controller/:action/:param', function() {
        const controller = this.params['controller'];
        const action = this.params['action'];
        const param = this.params['param'];
        loadControllerWithAction(controller, action, param);
    });

    this.get(/.*/, () => {
        $('title')[0].text = '404';
    });

});

// start the application
app.run('#/');