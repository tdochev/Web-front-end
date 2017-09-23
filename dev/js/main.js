console.log('in main!');

import 'firebase';

import Sammy from 'sammy';
import test from 'test';

firebase.initializeApp({
    apiKey: 'AIzaSyDR2l7Q-xApjh6RMvMohKscrt1KolKSSWs',
    authDomain: 'thestyle-97b48.firebaseapp.com',
    databaseURL: 'https://thestyle-97b48.firebaseio.com',
    projectId: 'thestyle-97b48',
    storageBucket: '',
    messagingSenderId: '111939691872'
});

const db = firebase.database();

const app = Sammy(function() {
    'use strict';

    this.get('#/', () => {
        db.ref('/post').set({
            test: 'test',
        }).catch((err) => {
            console.log(err);
        });

    });
    this.get('#/test', test);
});

// start the application
app.run('#/');
