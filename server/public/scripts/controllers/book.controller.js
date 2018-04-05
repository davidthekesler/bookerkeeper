app.controller('BookController', ['BookAndGenreService', '$mdDialog', '$mdToast', function (BookAndGenreService, $mdDialog, $mdToast) {
    console.log('BookController has been loaded');
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

