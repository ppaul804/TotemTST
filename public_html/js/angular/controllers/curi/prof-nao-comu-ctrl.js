//Fornece os dados para a view
angular.module('toten')
    .controller('ProfNaoComuCtrl', function ($scope, $http) {
        $scope.fotos = [{
                "url": "conteudo/Curiosidades/Dicionário de profissões pouco comuns/Chanfrador/Foto/Chanfrador.jpg",
                "legenda": ""
            }
        ]

        //Conteúdo da pagina (view)
        $scope.titulo = "Dicionário de profissões pouco comuns";
        $scope.texto = ["texto (lista na realidade)"];
    });