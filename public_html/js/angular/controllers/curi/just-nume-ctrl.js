//Fornece os dados para a view
angular.module('toten')
    .controller('JustNumeCtrl', function ($scope, $http) {
        $scope.fotos = [{
                "url": "conteudo/Curiosidades/Justiça e Números/Foto/Justiça e Números.png",
                "legenda": ""
            }
        ]

        //Conteúdo da pagina (view)
        $scope.titulo = "Justiça em Números";
        $scope.texto = ["Você parou para se questionar quantos processos o TST julga por ano? É importante que todos os cidadãos saibam que a Justiça do Trabalho conta com ministros, juízes, desembargadores e servidores que não medem esforços para que os seus direitos sejam respeitados.","Outra pergunta: você saberia responder o que profissionais como espeleólogo, herpetólogo, guaribador ou ictiólogo fazem? saiba que apesar de serem pouco conhecidas, esses e outras profissões fazem parte da realidade de muitos trabalhadores. Que tal descobrir com o que esses profissionais se ocupam e, quem sabe, encontrar alguma nova afinidade para sua vida profissional?","Aqui você saberá como o Dia do Trabalho é comemorado em outros países e até a quantidade de dias de férias que os trabalhadores têm direito mundo a fora. Além disso, se disserem que um processo julgado no TST já virou filme, você acredita? Convidamos você para descobrir essas e outras curiosidades."];
    });