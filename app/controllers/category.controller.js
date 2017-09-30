export default class categoryController {

    constructor(data, template) {
        this._data = data;
        this._template = template;
        this._categories = [];
    };

    main() {
        console.log('category controller test');
    }
    show(param) {
        console.log(`category controller ${param}`);
    }
}
