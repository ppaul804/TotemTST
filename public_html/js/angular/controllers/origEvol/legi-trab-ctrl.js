//Fornece os dados para a view
angular.module('toten')
    .controller('LegiTrabCtrl', function ($scope, $http) {
        $scope.foto = "conteudo/Origem e Evolução do Trabalho/Legislação Trabalhista/Foto/LegiTrabPrevia.png";
        //$scope.legenda = "alguma legenda";
        $scope.titulo = "Legislação Trabalhista";
        //carrega um json de um arquivo externo. Caminho apartir de index.html
        $http.get('js/angular/controllers/origEvol/legi-trab-leis.json')
            .then(function (resultado) {
                $scope.lista = resultado.data;
            });
    });