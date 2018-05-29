//Fornece os dados para a view
angular.module('toten')
    .controller('ExPresCsjtCtrl', function ($scope, $http) {
        //Conteúdo da pagina (view)
        $scope.titulo = "Ministros Ex-Presidentes do CSJT (completar e ajustar ordem)";
        //$scope.legenda = "alguma legenda";
        $http.get('js/angular/controllers/csjt/ex-pres-csjt-galeria.json')
            .then(function (resultado) {
                $scope.galeria = resultado.data;
                console.log($scope.galeria);
            });
    });