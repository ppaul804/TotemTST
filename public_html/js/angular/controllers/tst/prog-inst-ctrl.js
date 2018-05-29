//Fornece os dados para a view
angular.module('toten')
    .controller('ProgInstCtrl', function ($scope, $http) {
        $scope.foto = "conteudo/TST/Programas Institucionais/Foto/Programas Institucionais.jpg";
        //$scope.legenda = "alguma legenda";
        //carrega um json de um arquivo externo. Caminho apartir de index.html
        $http.get('js/angular/controllers/tst/prog-inst-subtopicos.json')
            .then(function (resultado) {
                $scope.subtopicos = resultado.data;
            });

        //Conteúdo da pagina (view)
        $scope.titulo = "Programas Institucionais";
        $scope.texto = "O Tribunal Superior do Trabalho possui iniciativas que contribuem para que o órgão seja reconhecido não só pela sua função primordial de uniformizar a jurisprudência trabalhista brasileira, mas como incentivador de diversas iniciativas ligadas à cidadania. Exemplo disso, são os programas institucionais realizados, como a Semana Nacional de Conciliação Trabalhista, que visa implementar medidas para proporcionar maior celeridade aos processos trabalhistas e aprimorar os meios consensuais de resolução de conflitos.\n         Outro exemplo é o Programa de Execução Trabalhista que, dentre outras funções, tem o objetivo de divulgar medidas que auxiliem os magistrados da Justiça do Trabalho no cumprimento das Metas Nacionais. Já o Programa Trabalho Seguro, desenvolve importante papel na formulação e execução de projetos e ações nacionais voltados à prevenção de acidentes de trabalho e ao fortalecimento da Política Nacional de Segurança e Saúde no Trabalho. \n        Uma iniciativa considerada quebra de paradigma no Judiciário Brasileiro é o sistema de Processo Judicial Eletrônico (PJe), no qual lança-se mão da tecnologia da informação em prol de serviços mais eficientes, econômicos, céleres e acessíveis de qualquer localidade e temporalidade. Além disso, o TST possui o Programa de Combate ao Trabalho Infantil, que pretende mostrar que o trabalho infantil existe e precisa ser eliminado.\n        Para que essas e todas as outras atividades realizadas pelo Tribunal não sejam esquecidas, o TST conta com o Programa de História Oral, que busca consolidar a memória institucional da Corte, registrar sua contribuição para a história social brasileira e também fomentar a pesquisa de temas relacionados à evolução do direito e da Justiça do Trabalho.        ";
    });