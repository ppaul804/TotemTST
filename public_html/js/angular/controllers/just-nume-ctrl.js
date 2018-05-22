//Fornece os dados para a view
angular.module('toten')
    .controller('JustNumeCtrl', function ($scope, $http) {
        $scope.foto = "conteudo/Origem e Evolução do Trabalho/Historia do Trabalho no Brasil/Foto/História do Trabalho no Brasil.jpg";
        //$scope.legenda = "alguma legenda";
        //carrega um json de um arquivo externo. Caminho apartir de index.html
        $http.get('js/angular/controllers/hist-trab-subtopicos.json')
            .then(function (resultado) {
                $scope.subtopicos = resultado.data;
            });

        //Conteúdo da pagina (view)
        $scope.titulo = "JustNumeCtrl";
        $scope.texto = "A história do trabalho no Brasil, marcada pelo longo período de escravidão e exploração dos trabalhadores, é muito rica em informações, há diversas formas de relações trabalhistas, movimentos sociais, lutas, direitos e legislações. Contudo, entre o período colonial até a proteção estabelecida pela Consolidação das Leis do Trabalho (CLT) e pela Justiça do Trabalho (JT), muitos embates ideológicos, greves e até mesmo conflitos foram travados. Os tipos de trabalho se desenvolveram e mudaram, as relações de trabalho se modificaram e se adaptaram a cada novo cenário.	Em síntese, apresentamos aqui importantes eventos da história do nosso país, de nossos trabalhadores e do desenvolvimento social e econômico da nação. Dividido nas principais formas de governo a que o Brasil foi submetido (Colônia, Império e República), o conteúdo apresentado dará um panorama rápido do que foi a história do trabalho brasileiro e do caminho traçado até chegarmos à criação da Justiça do Trabalho.";
    });