export default class homeController {

    constructor(data) {
        this._data = data;
    }
    test() {
        console.log('home comtroller test');
    }
    main() {
        console.log('home comtroller main action');
        console.log(this._data);
    }
};
