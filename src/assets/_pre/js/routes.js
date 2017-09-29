//Configuracao das rotas
function routes($stateProvider, $urlRouterProvider) {

  $stateProvider.state('login', {
    templateUrl: 'templates/login.html',
    controller: 'LoginController',
    url: '/login'
  });
  $stateProvider.state('signup', {
    templateUrl: 'templates/signup.html',
    controller: 'SignupController',
    url: '/signup'
  });

  $urlRouterProvider.otherwise('/login');
}
