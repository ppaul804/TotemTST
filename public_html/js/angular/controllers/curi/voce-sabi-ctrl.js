//Fornece os dados para a view
angular.module('toten')
    .controller('VoceSabiCtrl', function ($scope, $http) {
        
        //Conteúdo da pagina (view)
        $scope.titulo = "Você Sabia?";
        $http.get('js/angular/controllers/curi/voce-sabi-subtopicos.json')
            .then(function (resultado) {
                $scope.subtopicos = resultado.data;
            });
    });