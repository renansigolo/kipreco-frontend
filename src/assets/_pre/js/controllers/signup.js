function signupController($scope, $state, $window, $http) {

  console.log('Signup Controller Initialized');

  $scope.data = {};
  $scope.meuPost = meuPost;

  var api = $http.get('http://54.232.215.109:3000').then(successCallback, errorCallback);

  function successCallback(retorno) {
    $scope.data.email = retorno.data.email;
    $scope.data.pass = retorno.data.pass;
  }

  function errorCallback() {
    console.log('OPs');

  }

  function meuPost() {
    $http.post('http://54.232.215.109:3000', $scope.data).then(successCallback, errorCallback);

    function successCallback(data) {
      console.log('FUNCIONOUUUU!');
      console.log(data);
    }

    function errorCallback() {
      console.log('AHHRRRR OPs');

    }
  }

  //
  // var apiPost = $http.post('http://localhost:8080').then(successCallback, errorCallback);
  //
  // function successCallback(retorno) {
  //
  //
  // }
  //
  // function errorCallback() {
  //   console.log('OPs');
  //
  // }

}
