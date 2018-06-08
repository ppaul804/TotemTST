//Fornece os dados para a view
angular.module('toten')
    .controller('FatoHistCtrl', function ($scope, $http) {
        $scope.foto = "conteudo/TST/Fatos Históricos/Foto/TST.png";
        //$scope.legenda = "alguma legenda";
        //carrega um json de um arquivo externo. Caminho apartir de index.html
        $http.get('js/angular/controllers/tst/fato-hist-subtopicos.json')
            .then(function (resultado) {
                $scope.subtopicos = resultado.data;
            });

        //Conteúdo da pagina (view)
        $scope.titulo = "Fatos Históricos";
        $scope.texto = ["O Tribunal Superior do Trabalho - TST, com sede em Brasília-DF e jurisdição em todo o território nacional, é órgão de cúpula da Justiça do Trabalho, nos termos do artigo 111, inciso I, da Constituição da República, cuja função precípua consiste em uniformizar a jurisprudência trabalhista brasileira.        O TST é composto de vinte e sete ministros, escolhidos dentre brasileiros com mais de trinta e cinco e menos de sessenta e cinco anos, nomeados pelo presidente da República após aprovação pela maioria absoluta do Senado Federal, sendo:        I - um quinto dentre advogados com mais de dez anos de efetiva atividade profissional e membros do Ministério Público do Trabalho com mais de dez anos de efetivo exercício, observado o disposto no art. 94;        II - os demais dentre juízes dos Tribunais Regionais do Trabalho, oriundos da magistratura da carreira, indicados pelo próprio Tribunal Superior.                      Compõem a direção do TST no biênio 2016/2018:                 •	Presidente: Ministro Ives Gandra da Silva Martins Filho;        •	Vice-Presidente: Ministro Emmanoel Pereira;        •	Corregedor-Geral da Justiça do Trabalho: Ministro Renato de Lacerda Paiva."];
    });