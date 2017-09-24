import 'firebase';

firebase.initializeApp({
    apiKey: 'AIzaSyDR2l7Q-xApjh6RMvMohKscrt1KolKSSWs',
    authDomain: 'thestyle-97b48.firebaseapp.com',
    databaseURL: 'https://thestyle-97b48.firebaseio.com',
    projectId: 'thestyle-97b48',
    storageBucket: '',
    messagingSenderId: '111939691872'
});

export const db = firebase.database();
