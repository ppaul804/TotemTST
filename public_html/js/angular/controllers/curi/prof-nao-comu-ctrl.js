//Fornece os dados para a view
angular.module('toten')
    .controller('ProfNaoComuCtrl', function ($scope, $http) {
        //Conteúdo da pagina (view)
        $scope.titulo = "Dicionário de profissões pouco comuns";
        $http.get('js/angular/controllers/curi/prof-nao-comu-conteudo.json')
            .then(function (resultado) {
                $scope.conteudo = resultado.data;
            });
    });