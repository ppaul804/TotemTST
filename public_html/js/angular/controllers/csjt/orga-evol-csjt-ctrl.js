//Fornece os dados para a view
angular.module('toten')
    .controller('OrgaEvolCsjtCtrl', function ($scope, $http) {
        $scope.foto = "";
        //$scope.legenda = "alguma legenda";
        //carrega um json de um arquivo externo. Caminho apartir de index.html
        $http.get('js/angular/controllers/csjt/orga-evol-csjt-subtopicos.json')
            .then(function (resultado) {
                $scope.subtopicos = resultado.data;
            });

        //Conteúdo da pagina (view)
        $scope.titulo = "OrgaEvolCsjtCtrl?";
        $scope.texto = "Organograma Evolutivo do CSJT";
    });