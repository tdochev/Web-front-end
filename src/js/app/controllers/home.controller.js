import './../../../images/logo.png';
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
            this._data.getCategories().then((r) => {
                for (var prop in r) {
                    this._categories.push(r[prop]);
                }
                this._template.compilePartial('nav');
                this._template.compilePartial('post');
                this._template.compilePartial('footer');
                this._template.loadTemplate('home').then((compiledTemplate) => {
                    const context = {
                        categories: this._categories
                    }
                    $('#app-main').html(compiledTemplate(context));
                })
            });
        
    }
}
