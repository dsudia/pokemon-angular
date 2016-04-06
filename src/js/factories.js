app.factory('apiCalls', function($http) {
  var pokeClass = {};

  function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  pokeClass.getPoke = function() {
    var pokeNum = getRandomIntInclusive(1, 721);
    return $http.get('http://pokeapi.co/api/v2/pokemon/' + pokeNum);
  };

  pokeClass.getPow = function() {
    var powNum = getRandomIntInclusive(1, 251);
    return $http.get('http://pokeapi.co/api/v2/ability/' + powNum);
  };

  return pokeClass;
});
