import Post from './../../models/post.model';
import Helper from './../templates/helpers/handlebars-truncate-helper';

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
            this._data.getCategories().then(categories => {
                this.context = {
                    categories: categories
                }
                console.log(this.context.categories);
                $('#app-main').html(compiledTemplate(this.context));

                //add category
                $('#addCategoryBtn').on('click', () => {
                    const categoryToAdd = $('#addCategory')[0].value;
                    if (categoryToAdd) {
                        $('#postCategory').append(`<option>${categoryToAdd}</option>`);
                        this._data.addCategorie(categoryToAdd);
                        console.log('Add category' + categoryToAdd);
                    }
                });

                //add post
                $('#submitPost').on('click', () => {
                    const title = $('#postTitle')[0].value;
                    const contetnt = $('#postCongtent')[0].value;
                    const category = $('#postCategory')[0].value
                    const author = $('#postAuthor')[0].value;
                    const date = moment().format();
                    const imageUrl = 'https://lorempixel.com/222/180/';

                    const post = new Post(title, contetnt, category, author, date, imageUrl);
                    this._data.addPost(post);

                });
            });
        });
    }

    show(id) {
        this._template.compilePartial('nav');
        this._template.compilePartial('footer');
        this._template.loadTemplate('postPage').then((compiledTemplate) => {
            Promise.all([this._data.getPostByID(id), this._data.getCategories()]).then((result)=>{
                console.log(result);
                const context = {
                    post: result[0],
                    categories: result[1]
                };
                $('#app-main').html(compiledTemplate(context));
            });
            })
    }
}