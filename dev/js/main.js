console.log('in main!');

import Sammy from 'sammy';
import test from 'test';

const app = Sammy(function() {
    'use strict';

    this.get('#/', () => {
        console.log('home');
    });

    this.get('#/test', test);
});

// start the application
app.run('#/');
