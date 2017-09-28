function loginController($scope, $state, $window, $http) {

  console.log('Login Controller Initialized');

  $scope.dados = {};

  var api = $http.get('http://api.fixer.io/latest?base=USD').then(successCallback, errorCallback);

  function successCallback(retorno) {
    $scope.dados.nome = retorno.data.rates.BRL;
  }

  function errorCallback() {
    console.log('OPs');

  }

}
