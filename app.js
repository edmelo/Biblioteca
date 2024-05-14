// Classe Media
class Media {
    // Construtor da classe Media
    constructor(property) {
        this._property = property;
        this._title = property.title; // Título da mídia
        this._isCheckedOut = false; // Status de empréstimo da mídia
        this._ratings = []; // Classificações da mídia
    }

    // Método getter para o título
    get title() {
        return this._title;
    }

    // Método getter para o status de empréstimo
    get isCheckedOut() {
        return this._isCheckedOut;
    }

    // Método getter para as classificações
    get ratings() {
        return this._ratings;
    }

    // Método setter para o status de empréstimo
    set isCheckedOut(value) {
        this._isCheckedOut = value;
    }

    // Método para alternar o status de empréstimo
    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }

    // Método para calcular a classificação média
    getAverageRating() {
        const sum = this._ratings.reduce((acc, rating) => acc + rating, 0);
        const average = sum / this._ratings.length;
        return average;
    }

    // Método para adicionar uma nova classificação
    addRating(rating) {
        this._ratings.push(rating);
    }
}

// Classe Book que herda de Media
class Book extends Media {
    // Construtor da classe Book
    constructor(author, title, pages) {
        super({ title }); // Chama o construtor da classe pai
        this._author = author; // Autor do livro
        this._pages = pages; // Número de páginas do livro
    }

    // Método getter para o autor
    get author() {
        return this._author;
    }

    // Método getter para as páginas
    get pages() {
        return this._pages;
    }

    // Método para alternar o status de empréstimo
    toggleCheckOutStatus() {
        super.toggleCheckOutStatus();
    }

    // Método para adicionar uma nova classificação
    addRating(rating) {
        super.addRating(rating);
    }
}

// Classe Movie que herda de Media
class Movie extends Media {
    // Construtor da classe Movie
    constructor(director, title, runTime) {
        super({ title }); // Chama o construtor da classe pai
        this._director = director; // Diretor do filme
        this._runTime = runTime; // Duração do filme
    }

    // Método getter para o diretor
    get director() {
        return this._director;
    }

    // Método getter para a duração
    get runTime() {
        return this._runTime;
    }

    // Método para alternar o status de empréstimo
    toggleCheckOutStatus() {
        super.toggleCheckOutStatus();
    }

    // Método para adicionar uma nova classificação
    addRating(rating) {
        super.addRating(rating);
    }
}

// Criação de uma nova instância da classe Book
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

// Alteração do status de empréstimo
historyOfEverything.toggleCheckOutStatus();

// Exibição do status de empréstimo
console.log(historyOfEverything.isCheckedOut);

// Adição de novas classificações
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

// Exibição da classificação média
console.log(historyOfEverything.getAverageRating());

// Criação de uma nova instância da classe Movie
const speed = new Movie('Jan de Bont', 'Speed', 116);

// Alteração do status de empréstimo
speed.toggleCheckOutStatus();

// Exibição do status de empréstimo
console.log(speed.isCheckedOut);

// Adição de novas classificações
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

// Exibição da classificação média
console.log(speed.getAverageRating());
