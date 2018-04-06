app.controller('GenreController', ['BookAndGenreService', '$mdDialog', '$mdToast', function (BookAndGenreService, $mdDialog, $mdToast) {
    console.log('GenreController has been loaded');
    const self = this;

 
    self.books = BookAndGenreService.books;
    self.genres = BookAndGenreService.genres;
    self.getGenres = BookAndGenreService.getGenres;
    self.getBooks = BookAndGenreService.getBooks;
    self.genreToAdd = BookAndGenreService.genreToAdd;
    self.addGenre = BookAndGenreService.addGenre;
    self.deleteGenre = BookAndGenreService.deleteGenre;
    self.showBooks = BookAndGenreService.showBooks;

    self.getGenres();
    self.getBooks();

}]);//end GenreController