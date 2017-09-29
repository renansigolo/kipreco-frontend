function homeController($scope, $state, $window, $http) {

  console.log('Home Controller Initialized');

  $scope.mercados = {};

  $scope.mercados = [{
    "nome": "Carrefour Express",
    "endereco": "Alameda Santos, 1787 - Bela Vista, São Paulo - SP, 01407-200",
    "logo": "http://via.placeholder.com/200x200",
    "numeroDePromocoes": "10",
    "produtos": [{
        "id": 1,
        "nome": "Arroz longo fino Tipo 1 Camil",
        "preco_antigo": "14,32",
        "preco_novo": "9,32",
        "img": "url",
        "link_detalhe": ""
      },
      {
        "id": 2,
        "nome": "Filé de peito de frango kg",
        "preco_antigo": "15,90",
        "preco_novo": "11,90",
        "img": "url",
        "link_detalhe": ""
      }
    ]
  }, {
    "nome": "Pão de Acúcar",
    "endereco": "R. Abílio Soares, 386 - Paraíso, São Paulo - SP, 04005-001",
    "horario_func": "Aberto:  07:00–23:00",
    "telefone": "+55 11 3057-1122",
    "logo": "http://via.placeholder.com/200x200",
    "numeroDePromocoes": "14",
    "produtos": [{
        "id": 1,
        "nome": "Arroz longo fino Tipo 1 Camil",
        "preco_antigo": "14,32",
        "preco_novo": "9,32",
        "img": "url",
        "link_detalhe": ""
      },
      {
        "id": 2,
        "nome": "Filé de peito de frango kg",
        "preco_antigo": "15,90",
        "preco_novo": "11,90",
        "img": "url",
        "link_detalhe": ""
      }
    ]
  }, {
    "nome": "Mini Mercado Extra",
    "endereco": "R. Pamplona, 1451 - Jardim Paulista, São Paulo - SP, 01405-001",
    "horario_func": "Aberto:  07:00–22:00",
    "telefone": "+55 (11) 3552-6284",
    "logo": "http://via.placeholder.com/200x200",
    "numeroDePromocoes": "134",
    "produtos": [{
        "id": 1,
        "nome": "Arroz longo fino Tipo 1 Camil",
        "preco_antigo": "14,32",
        "preco_novo": "9,32",
        "img": "url",
        "link_detalhe": ""
      },
      {
        "id": 2,
        "nome": "Filé de peito de frango kg",
        "preco_antigo": "15,90",
        "preco_novo": "11,90",
        "img": "url",
        "link_detalhe": ""
      }
    ],
  }]

}
