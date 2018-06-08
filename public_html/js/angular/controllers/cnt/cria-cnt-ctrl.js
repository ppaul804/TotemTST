//Fornece os dados para a view
angular.module('toten')
    .controller('CriaCntCtrl', function ($scope, $http) {
        $scope.foto = "conteudo/CNT/A Criação do CNT/Foto/A Criação do CNT.bmp";
        //$scope.legenda = "alguma legenda";
        //carrega um json de um arquivo externo. Caminho apartir de index.html
        $http.get('js/angular/controllers/cnt/cria-cnt-subtopicos.json')
            .then(function (resultado) {
                $scope.subtopicos = resultado.data;
            });

        //Conteúdo da pagina (view)
        $scope.titulo = "A Criação do CNT";
        $scope.texto = ["O Conselho Nacional do Trabalho (CNT) foi criado pelo Decreto nº 16.027, de 30 de abril de 1923. Órgão vinculado ao Ministério da Agricultura, Indústria e Comércio e destinado à consulta dos “poderes públicos em assuntos referentes à organização do trabalho e da previdência social”.","As atribuições do órgão consistiam em estudar as diversas questões relativas ao trabalho e à previdência social, possuindo tríplice finalidade:","a.	Ser órgão consultivo do Ministério em matéria trabalhista;","b.	Funcionar como instância recursal em matéria previdenciária;","c.	Ser órgão autorizador das demissões dos empregados que, no serviço público, gozavam de estabilidade, por meio de inquérito administrativo.","Do ponto de vista organizacional, o conselho era integrado por 12 membros escolhidos pelo presidente da República, obedecendo à seguinte composição: dois representantes dos operários, dois representantes do patronato, dois altos funcionários do Ministério da Agricultura, e seis personalidades de conhecida competência no assunto.","Ocupava-se do dia normal de trabalho na indústria, dos sistemas de remuneração e dos contratos coletivos do trabalho, dos sistemas de conciliação e arbitragem, do trabalho de menores e de mulheres, da aprendizagem e ensino técnico, dos acidentes do trabalho, dos seguros sociais, das caixas de aposentadorias e pensões de ferroviários, das instituições de credito popular e das caixas de credito agrícola.","Entre 1924 e 1929, o CNT encarregou-se da discussão e da elaboração de anteprojetos de novas leis, bem como de reforma das leis existentes. Em 9 de setembro de 1946, pelo Decreto nº 9.797, transformou-se no Tribunal Superior do Trabalho. A Arquivoteca Digital do TST preserva e organiza fundos documentais produzidos e/ou acumulados pelo CNT e TST no desenvolvimento de suas atividades."];
    });