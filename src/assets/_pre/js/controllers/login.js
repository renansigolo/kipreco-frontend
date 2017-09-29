function loginController($scope, $state, $window, $http) {

  console.log('Login Controller Initialized');

  $scope.data = {};
  $scope.meuPost = meuPost;

  var api = $http.get('http://localhost:3003').then(successCallback, errorCallback);

  function successCallback(retorno) {
    $scope.data.email = retorno.data.email;
    $scope.data.pass = retorno.data.pass;
  }

  function errorCallback() {
    console.log('OPs');
  }

  function meuPost() {
    $http.post('http://localhost:3003/', $scope.data).then(successCallback, errorCallback);

    function successCallback(data) {
      $state.go('home');
      console.log('FUNCIONOUUUU!');
      console.log(data);
    }

    function errorCallback() {
      console.log('AHHRRRR OPs');

    }
  }

}

// Server adress http://54.232.215.109:3000
