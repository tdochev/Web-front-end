import { db } from './db.js'

export default class Data {
    constructor() {
        this._db = db;
    }
    addCategorie(categorie) {
        var newPostKey = this._db.ref().child('categories').push().key;
        var updates = {};
        updates['/categories/' + newPostKey] = categorie;
        return firebase.database().ref().update(updates);
    }
    getCategories() {
        return new Promise((resolve, reject) => {
            this._db.ref('/categories').once('value').then((snapshot) => {
                resolve(snapshot.val())
            });
        });
    }
    addPost(post) {
        var newPostKey = this._db.ref().child('posts').push().key;
        var updates = {};
        updates['/posts/' + newPostKey] = post;
        return firebase.database().ref().update(updates);
    }
    getPostByID(id) {
        return new Promise((resolve, reject) => {
            this._db.ref('/posts/' + id).once('value').then((snapshot) => {
                resolve(snapshot.val())
            });
        });;
    }
}
