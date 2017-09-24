export default class homeController {

    constructor(data, template) {
        this._data = data;
        this._template = template;
        this._categories = [];
    };

    test() {
        console.log('home controller test');
    }
    main() {
        const headerLen = $('header').length;
        if (headerLen < 1) {
            this._data.getCategories().then((r) => {
                for (var prop in r) {
                    this._categories.push(r[prop]);
                }
                this._template.loadTemplate('home').then((compiledTemplate) => {
                    $('#app-main').append(compiledTemplate(this._categories));
                })
            });
        }
    }
}
