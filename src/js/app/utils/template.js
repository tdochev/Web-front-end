/* globals Promise */


import Requester from './requester.js';
import Handlebars from 'handlebars';

export default class HandlebarsTemplate {
    constructor() {
        this._cacheObj = {};
        this._requester = new Requester();
    }

    compilePartial(partialName){
        System.import(`../templates/partials/${partialName}.handlebars`);
        this._requester.get(`${partialName}.handlebars`).then(template=>{
            Handlebars.registerPartial(partialName, template);
        });

    }

    loadTemplate(templateName) {
        if (this._cacheObj.hasOwnProperty(templateName)) {
            return Promise.resolve(this._cacheObj[templateName]);
        }

        System.import(`../templates/${templateName}.handlebars`);

        return this._requester.get(`${templateName}.handlebars`)
            .then(template => {
                const compiledTemplate = Handlebars.compile(template);
                this._cacheObj[templateName] = compiledTemplate;
                return Promise.resolve(compiledTemplate);
            });
    }
}
