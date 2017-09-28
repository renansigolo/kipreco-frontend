//Configuracao das rotas
function routes($stateProvider, $urlRouterProvider) {

  $stateProvider.state('login', {
    templateUrl: 'templates/login.html',
    controller: 'LoginController',
    url: '/login'
  });

  $urlRouterProvider.otherwise('/login');
}
