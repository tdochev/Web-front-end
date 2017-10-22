export default class Post {
    constructor(title, content, category, author, date, imageUrl) {
        this.title = title;
        this.content = content;
        this.category = category;
        this.author = author;
        this.date = date;
        this.imageUrl = imageUrl;
        this.comments = [];
    }
}