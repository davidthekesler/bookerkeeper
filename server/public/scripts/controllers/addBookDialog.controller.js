app.controller('AddBookDialogController', ['BookAndGenreService', '$mdDialog', function (BookAndGenreService, $mdDialog) {
    console.log('AddBookDialogController has been loaded');
    const self = this;

    self.books = BookAndGenreService.books;
    self.genres = BookAndGenreService.genres;
    self.bookToAdd = BookAndGenreService.bookToAdd;
    self.addBook = BookAndGenreService.addBook;
    self.putBook = BookAndGenreService.putBook;
    self.deleteBook = BookAndGenreService.deleteBook;
    self.bookSelected = BookAndGenreService.bookSelected;
    self.bookToEdit = BookAndGenreService.bookToEdit;

}]);//end BookController