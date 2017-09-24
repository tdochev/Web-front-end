import Sammy from 'sammy';
import { db } from 'db';

console.log('in main');

const app = Sammy(function() {
    'use strict';

    this.get('#/', function() {
        $('title')[0].text = 'home';
    });

    this.get('#/test', () => {
        $('title')[0].text = 'test';
        // const newPostKey = db.ref().child('posts').push().key;
        // console.log(newPostKey);
        // var updates = {};
        // updates['/posts/' + newPostKey] = {
        //     name: 'test',
        //     text: 'test a test'
        // };

        // db.ref().update(updates);

    });

});

// start the application
app.run('#/');
