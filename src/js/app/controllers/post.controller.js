export default class postController {

    constructor(data, template) {
        this._data = data;
        this._template = template;
        this._categories = [];
        this.context;
    };

    add(param) {
        console.log('in post add' + param);
        this._template.loadTemplate('test').then((compiledTemplate) => {
            this._data.getCategories().then(categories =>{
                this.context = {
                    categories: categories
                }
                console.log(this.context.categories);
                $('#app-main').html(compiledTemplate(this.context));
            });

            //Add Category
            $('#addCategoryBtn').on('click', ()=> {
                const categoryToAdd = $('#addCategory')[0].value;
                if(categoryToAdd){
                    $('#postCategory').append(`<option>${categoryToAdd}</option>`);
                    this._data.addCategorie(categoryToAdd);
                    console.log('Add category' + categoryToAdd);
                }
            });
        });
    }
}