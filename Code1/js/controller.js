app.controller("myctrl", ($scope, $sce, myfactory) => {
    $scope.loadSongs = () => {
        var artistName = $scope.artist;
        var pr = myfactory.callServer(artistName);
        pr.then(response => $scope.songs = response.data.results, err => $scope.error = err);
    }

});