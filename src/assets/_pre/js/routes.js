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

  $stateProvider.state('home', {
    templateUrl: 'templates/home.html',
    controller: 'HomeController',
    url: '/home'
  });

  $stateProvider.state('products', {
    templateUrl: 'templates/products.html',
    controller: 'ProductsController',
    url: '/products'
  });

  $urlRouterProvider.otherwise('/login');
}
