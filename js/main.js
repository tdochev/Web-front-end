console.log('in main!');

import Sammy from 'sammy';

const app = Sammy(function() {
    'use strict';

    this.get('#/', () => {
        console.log('sammy');
    });
});

// start the application
app.run('#/');
