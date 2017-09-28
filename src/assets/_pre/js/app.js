//Inicia o modulo do Dashboard em Angular
var app = angular.module('app', ['ui.router']);

console.log(`Angular Module Initialized`);

// //Declara os modulos dos controllers do Login
app.controller('LoginController', loginController);

//Declara as configuracoes das Rotas
app.config(routes);
