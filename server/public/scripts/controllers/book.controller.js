app.controller('BookController', ['BookAndGenreService', '$mdDialog', function (BookAndGenreService, $mdDialog) {
    console.log('BookController has been loaded');

    const self = this;

    self.books = BookAndGenreService.books;
    self.genres = BookAndGenreService.genres;
    self.getBooks = BookAndGenreService.getBooks;
    self.getGenres = BookAndGenreService.getGenres;
    self.bookToAdd = BookAndGenreService.bookToAdd;
    self.addBook = BookAndGenreService.addBook;
    self.newBook = BookAndGenreService.newBook;
    self.editBook = BookAndGenreService.editBook;
    self.deleteBook = BookAndGenreService.deleteBook;
    self.rateBook = BookAndGenreService.rateBook;
    self.favorBook = BookAndGenreService.favorBook;
    

    self.getBooks();
    self.getGenres();

}]);//end BookController
