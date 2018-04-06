app.controller('ShowBookDialogController', ['BookAndGenreService', '$mdDialog', function (BookAndGenreService, $mdDialog) {
    console.log('ShowBookDialogController has been loaded');
    const self = this;

    self.books = BookAndGenreService.books;
    self.genres = BookAndGenreService.genres;
    self.bookToAdd = BookAndGenreService.bookToAdd;
    self.addBook = BookAndGenreService.addBook;
    self.putBook = BookAndGenreService.putBook;
    self.deleteBook = BookAndGenreService.deleteBook;
    self.bookSelected = BookAndGenreService.bookSelected;
    self.bookToEdit = BookAndGenreService.bookToEdit;
    self.showBooks = BookAndGenreService.showBooks;
    self.genreSelected = BookAndGenreService.genreSelected;
    self.getBooks = BookAndGenreService.getBooks;
    self.getGenres = BookAndGenreService.getGenres;
    self.editBook = BookAndGenreService.editBook;

    self.getGenres();
    self.getBooks();

}]);//end BookController