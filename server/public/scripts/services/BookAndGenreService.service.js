app.service('BookAndGenreService', ['$http', '$mdToast', '$mdDialog', function($http, $mdToast, $mdDialog) {
    console.log('BookAndGenreService has been loaded');
    const self = this;

    self.books = {list: []};
    self.genres = {list: []};
    self.bookToAdd = {};
    self.genreToAdd = {};
    self.bookSelected = {};
    self.bookToEdit = {};
    self.genreSelected;

    self.getBooks = function () {
        //gets all the books from the server
    console.log('called getBooks');
    $http.get('/book').then(function(response){
    self.books.list = response.data;
     console.log(self.books.list);
     }).catch(function(error) {
        console.log('ERROR IN GET getBooks', error);
     })
 }//end getBooks

 self.getGenres = function () {
    //gets all the genres from the server
console.log('called getGenres');
$http.get('/genre').then(function(response){
self.genres.list = response.data;
 console.log(self.genres.list);
 }).catch(function(error) {
    console.log('ERROR IN GET getGenres', error);
 })
}//end getGenres

    self.addBook = function (bookInput) {
            let bookToSend = bookInput;
            bookToSend.score = 5;
            bookToSend.favorite = false;
            $http({
                method: 'POST',
                url: '/book',
                data: bookToSend
            }).then((response) => {
                $mdToast.show(
                    $mdToast.simple()
                      .textContent(`Success adding book!`)
                      .hideDelay(3000)
                  );
                self.getBooks();
                self.bookToAdd = {};
            }).catch((error) => {
                console.log('error making book POST request', error);
                $mdToast.show(
                    $mdToast.simple()
                      .textContent(`Something went wrong! Check the server!`)
                      .hideDelay(3000)
                  );
            });
    }   //end addBook

    self.addGenre = function (genreInput) {
        let genreToSend = genreInput;
        $http({
            method: 'POST',
            url: '/genre',
            data: genreToSend
        }).then((response) => {
            $mdToast.show(
                $mdToast.simple()
                  .textContent(`Success adding Genre!`)
                  .hideDelay(3000)
              );
            self.getGenres();
            self.genreToAdd = {};
        }).catch((error) => {
            console.log('error making genre POST request', error);
            $mdToast.show(
                $mdToast.simple()
                  .textContent(`Something went wrong! Check the server!`)
                  .hideDelay(3000)
              );
        });
}   //end addGenre

    self.editBook = function (bookSelected, ev) {
        console.log('called editBook');
        console.log(bookSelected);
        self.bookSelected = bookSelected;
        self.bookToEdit = bookSelected;
        $mdDialog.show({
            templateUrl: '/views/templates/editBookDialog.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: this.customFullscreen // Only for -xs, -sm breakpoints.
          });
    }//end editBook

    self.putBook = function (bookToPut, oldBook) {    
        console.log('called putBook');
        let bookToSend = bookToPut;
        closeBookEditDialog();
        $http({
            method: 'PUT',
            url: `/book/${bookToSend.id}`,
            data: bookToSend
        }).then((response) => {
            self.getBooks();
            self.getGenres();
        })
        .catch((error) => {
            console.log('error making request', error);
            alert('Something went wrong! Check the server.');
        });
    }//end putBook

    self.deleteBook = function (bookId, event) {
        console.log('called deleteBook');
         var confirm = $mdDialog.confirm()
                      .title('Delete Book?')
                      .targetEvent(event)
                      .ok('Yes')
                      .cancel('No');
                $mdDialog.show(confirm).then(function() {
                    console.log('/book/'+ bookId);
                    $http.delete('/book/' + bookId).then(function(response){
                        console.log('delete successful ', response);
                        self.getBooks();
                    }).catch(function(error) {
                        console.log('ERROR IN DELETE deleteBook', error);
                    });              
                }, function() {
                console.log('Delete Canceled.')
                });
    };//end deleteBook

    function closeBookEditDialog () {
        console.log('called closeBookEditDialog');
        $mdDialog.hide();
    }

    self.deleteGenre = function (genreId) {
        console.log('called deleteGenre');
         var confirm = $mdDialog.confirm()
                      .title('Delete Genre?')
                      .targetEvent(event)
                      .ok('Yes')
                      .cancel('No');
                $mdDialog.show(confirm).then(function() {
                    console.log('/genre/'+ genreId);
                    $http.delete('/genre/' + genreId).then(function(response){
                        console.log('delete successful ', response);
                        self.getGenres();
                    }).catch(function(error) {
                        console.log('ERROR IN DELETE deleteGenre', error);
                    });              
                }, function() {
                console.log('Delete Canceled.')
                });
    };//end deleteGenre

    self.showBooks = function (genreSelected, ev) {
        console.log('called showBooks');
        console.log(genreSelected);
        self.genreSelected = genreSelected;
        $mdDialog.show({
            templateUrl: '/views/templates/showBookDialog.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: this.customFullscreen // Only for -xs, -sm breakpoints.
          });
    }//end editBook

}]);