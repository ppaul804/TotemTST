//Fornece os dados para a view
angular.module('toten')
    .controller('NoMundCtrl', function ($scope, $http) {
        $scope.foto = "conteudo/Justiça do Trabalho/No Mundo/Foto/No Mundo.jpg";
        //$scope.legenda = "alguma legenda";    

        //Conteúdo da pagina (view)
        $scope.titulo = "A Justiça do Trabalho no Mundo";
        $scope.texto = ["Os primeiros organismos especializados na solução dos conflitos entre patrões e empregados surgiram na França e foram os denominados Conseils de Prud’hommes, em 1806. A bem-sucedida experiência francesa inspirou outros países da Europa a instituírem organismos independentes do Poder Judiciário para a apreciação das causas trabalhistas, através dos quais passaram a buscar fundamentalmente a conciliação, muito mais do que a autoritária imposição de uma solução pelo Estado. "," Assim, destaca-se que na Itália nasceram, em 1893, os Probiviri, substituídos em 1928 pela Magistratura do Trabalho; na Inglaterra surgiram, em 1919, os Tribunais Industriais; na Alemanha, em 1926, surgiu a Lei de Tribunais do Trabalho, precedidos de Tribunais Industriais; na Espanha surgiram, em 1908, os Tribunais Industriais para acidentes do trabalho, em 1926, os Comitês Paritários para conciliação e regulamentação do trabalho, em 1931, os Jurados Mistos e, em 1940, a Magistratura do Trabalho; e, finalmente, em Portugal, em 1931, surgiram os Tribunais de Árbitros Avindores, posteriormente substituídos pelos Tribunais do Trabalho. "," No Brasil, a Constituição de 1934 continha a primeira previsão sobre a Justiça do Trabalho instalada no País em 1941."];
    });