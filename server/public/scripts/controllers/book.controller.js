app.controller('BookController', ['BookAndGenreService', '$mdDialog', function (BookAndGenreService, $mdDialog) {
    console.log('BookController has been loaded');
    const self = this;

    self.books = BookAndGenreService.books;
    self.genres = BookAndGenreService.genres;
    self.getBooks = BookAndGenreService.getBooks;
    self.getGenres = BookAndGenreService.getGenres;
    self.bookToAdd = BookAndGenreService.bookToAdd;
    self.addBook = BookAndGenreService.addBook;
    self.editBook = BookAndGenreService.editBook;
    self.deleteBook = BookAndGenreService.deleteBook;

    self.getBooks();
    self.getGenres();

 

    // function showToast(inputString) {
    //     $mdToast.show(
    //         $mdToast.simple()
    //           .textContent(inputString)
    //         //   .position(pinTo )
    //           .hideDelay(3000)
    //       );
    // };

}]);//end BookController
