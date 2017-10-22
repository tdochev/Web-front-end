export default class postController {

    constructor(data, template) {
        this._data = data;
        this._template = template;
        this._categories = [];
    };

    main() {
        this._template.loadTemplate('test').then((compiledTemplate) => {
            $('#app-main').html(compiledTemplate(this._categories));
        })
    }
}