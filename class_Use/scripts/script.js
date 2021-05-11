class Book{
    constructor (title, authors, cover){
        this.title = title;
        this.authors = authors;
        this.cover = cover;
        Book.count++;
    }

    static count = 0;

    static getTemplate(){
        return `<div class="book-card"> <h3> {{title}} </h3> <p> {{authors}} </p> </div>`;
    }

    render(){
        return this.constructor.getTemplate().replace("{{title}}", this.title).replace("{{authors}}", this.authors);
    }
}

let book = new Book("Кобзар", "Т.Г. Шевченко", "");
document.writeln(book.render());
let book2 = new Book();