app.controller('GenreController', ['BookAndGenreService', '$mdDialog', '$mdToast', function (BookAndGenreService, $mdDialog, $mdToast) {
    console.log('GenreController has been loaded');
    const self = this;

 

    function showToast(inputString) {
        $mdToast.show(
            $mdToast.simple()
              .textContent(inputString)
            //   .position(pinTo )
              .hideDelay(3000)
          );
    };

}]);//end BookController