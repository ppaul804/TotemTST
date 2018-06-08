//Fornece os dados para a view
angular.module('toten')
    .controller('AutoCtrl', function ($scope, $http) {
        $scope.foto = "conteudo/Justiça do Trabalho/Atores/Foto/atores.jpg";
        //$scope.legenda = "alguma legenda";
        //carrega um json de um arquivo externo. Caminho apartir de index.html
        $http.get('js/angular/controllers/jt/auto-subtopicos.json')
            .then(function (resultado) {
                $scope.subtopicos = resultado.data;
            });

        //Conteúdo da pagina (view)
        $scope.titulo = "Atores da Justiça do Trabalho no Brasil";
        $scope.texto = ["A Justiça do Trabalho concilia e julga as ações judiciais entre trabalhadores e empregadores e outras controvérsias decorrentes da relação de trabalho, bem como as demandas que tenham origem no cumprimento de suas próprias sentenças, inclusive as coletivas."," Os órgãos da Justiça do Trabalho são o Tribunal Superior do Trabalho (TST), os Tribunais Regionais do Trabalho (TRTs) e os Juízes do Trabalho. Os Juízes do Trabalho atuam nas Varas do Trabalho e formam a 1ª instância da Justiça do Trabalho. Os vinte e quatro (24) Tribunais Regionais do Trabalho são compostos por desembargadores e representam a 2ª Instância da Justiça do Trabalho. O Tribunal Superior do Trabalho é a última instância da Justiça do Trabalho e é composto por 27 ministros do Trabalho."," A estrutura da Justiça de Trabalho no Brasil conta também com outros atores fundamentais, como o Conselho Superior da Justiça do Trabalho (CSJT), a Procuradoria-Geral do Trabalho (PGT), a Escola Nacional de Formação e Aperfeiçoamento de Magistrados do Trabalho (ENAMAT) e a Associação Nacional dos Magistrados da Justiça do Trabalho (ANAMATRA)."];
    });