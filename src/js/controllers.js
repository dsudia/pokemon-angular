app.controller('myController', ['$scope', 'apiCalls', function($scope, apiCalls) {
  var pokeData;
  var pokeImgUrl;
  $scope.pokeName = '';
  $scope.pokeImg = '';
  $scope.powName = '';
  $scope.getPokemon = function() {
    apiCalls.getPoke()
    .then(function(data) {
      $scope.pokeName = data.data.name;
      $scope.pokeImg = data.data.sprites.front_default;
      console.log($scope.pokeName, $scope.pokeImg);
    });
  };

  $scope.getPower = function() {
    apiCalls.getPow()
    .then(function(data) {
      $scope.powName = data.data.names[0].name;
    });
  };
}]);
