app.controller('AddGenreDialogController', ['BookAndGenreService', '$mdDialog', function (BookAndGenreService, $mdDialog) {
    console.log('AddGenreDialogController has been loaded');
    const self = this;

    self.books = BookAndGenreService.books;
    self.genres = BookAndGenreService.genres;
    self.bookToAdd = BookAndGenreService.bookToAdd;
    self.genreToAdd = BookAndGenreService.genreToAdd;
    self.addBook = BookAndGenreService.addBook;
    self.addGenre = BookAndGenreService.addGenre;
    self.putBook = BookAndGenreService.putBook;
    self.deleteBook = BookAndGenreService.deleteBook;
    self.bookSelected = BookAndGenreService.bookSelected;
    self.bookToEdit = BookAndGenreService.bookToEdit;

}]);//end BookController