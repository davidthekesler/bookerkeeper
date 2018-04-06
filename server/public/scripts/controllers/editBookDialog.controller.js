app.controller('EditBookDialogController', ['BookAndGenreService', '$mdDialog', function (BookAndGenreService, $mdDialog) {
    console.log('EditBookDialogController has been loaded');
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