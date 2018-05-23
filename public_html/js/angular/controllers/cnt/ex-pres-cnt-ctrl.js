//Fornece os dados para a view
angular.module('toten')
    .controller('ExPresCntCtrl', function ($scope, $http) {
        //Conteúdo da pagina (view)
        $scope.titulo = "Ministros Ex-Presidentes do CNT";
        //carrega um json de um arquivo externo. Caminho apartir de index.html
        $http.get('js/angular/controllers/cnt/ex-pres-cnt-galeria.json')
            .then(function (resultado) {
                $scope.galeria = resultado.data;
                console.log($scope.galeria);
            });
    });