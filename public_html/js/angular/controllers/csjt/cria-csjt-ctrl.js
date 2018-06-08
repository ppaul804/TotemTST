//Fornece os dados para a view
angular.module('toten')
    .controller('CriaCsjtCtrl', function ($scope, $http) {
        $scope.foto = "conteudo/CSJT/Foto/CSJT.png";
        //$scope.legenda = "alguma legenda";
        //carrega um json de um arquivo externo. Caminho apartir de index.html
        $http.get('js/angular/controllers/csjt/cria-csjt-subtopicos.json')
            .then(function (resultado) {
                $scope.subtopicos = resultado.data;
            });

        //Conteúdo da pagina (view)
        $scope.titulo = "A Criação do CSJT";
        $scope.texto = ["O Conselho Superior da Justiça do Trabalho (CSJT) foi criado pela Emenda Constitucional n.º 45, de 30 de dezembro de 2004, com o acréscimo do art. 111-A. A sessão de instalação do CSJT ocorreu em 15 de junho de 2005. O Conselho exerce a supervisão administrativa, orçamentária, financeira e patrimonial da Justiça do Trabalho de primeiro e segundo graus. As decisões do CSJT têm efeito vinculante.        É integrado pelo presidente e vice-presidente do Tribunal Superior do Trabalho e pelo corregedor-geral da Justiça do Trabalho, membros natos. Também compõem o Conselho três ministros eleitos pelo Pleno do Tribunal Superior do Trabalho e cinco presidentes de Tribunais Regionais do Trabalho, cada um deles representando uma das cinco Regiões geográficas do País (Sul, Sudeste, Centro-Oeste, Nordeste e Norte).        Tem como missão “Exercer a supervisão administrativa, orçamentária, financeira e patrimonial da Justiça do Trabalho de 1º e 2º graus, a fim de promover seu aprimoramento em benefício da sociedade” e visa “Ser reconhecido perante a sociedade pela excelência desempenhada na supervisão, integração e desenvolvimento da Justiça do Trabalho de 1º e 2º graus”."];
    });