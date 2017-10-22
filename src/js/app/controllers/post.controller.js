export default class postController {

    constructor(data, template) {
        this._data = data;
        this._template = template;
        this._categories = [];
    };

    add(param) {
        console.log('in post add' + param);
        this._template.loadTemplate('test').then((compiledTemplate) => {
            $('#app-main').html(compiledTemplate(this._categories));
        })
    }
}