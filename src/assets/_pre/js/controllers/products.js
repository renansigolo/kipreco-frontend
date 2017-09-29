function productsController($scope, $state, $window, $http) {

  console.log('Products Controller Initialized');
  $scope.produtos = {};

  $scope.produtos = [{
    "mercado": "Carrefour Express",
    "endereco": "Alameda Santos, 1787 - Bela Vista, São Paulo - SP, 01407-200",
    "itens": [{
        "id": 1,
        "nome": "Arroz longo fino Tipo 1 Camil",
        "preco_antigo": "14,32",
        "preco_novo": "9,32",
        "img": "http://via.placeholder.com/200x200",
      },
      {
        "id": 2,
        "nome": "Filé de peito de frango kg",
        "preco_antigo": "15,90",
        "preco_novo": "11,90",
        "img": "http://via.placeholder.com/200x200",
      },
      {
        "id": 3,
        "nome": "Batata doce rosada kg",
        "preco_antigo": "3,99",
        "preco_novo": "2,32",
        "img": "http://via.placeholder.com/200x200",
      },
      {
        "id": 4,
        "nome": "Maminha extralimpa KG",
        "preco_antigo": "34,50",
        "preco_novo": "24,90",
        "img": "http://via.placeholder.com/200x200",
      },
      {
        "id": 5,
        "nome": "Achocolatado Nescau 400g",
        "preco_antigo": "6,92",
        "preco_novo": "4,35",
        "img": "http://via.placeholder.com/200x200",
      },
      {
        "id": 6,
        "nome": "Açúcar refinado União 1kg",
        "preco_antigo": "2,92",
        "preco_novo": "2,15",
        "img": "http://via.placeholder.com/200x200",
      },
    ]
  }]

}
