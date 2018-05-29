//Fornece os dados para a view
angular.module('toten')
    .controller('OrgaEvolCntCtrl', function ($scope, $http) {
        $scope.foto = "conteudo/CNT/Organograma Evolutivo/Foto/Organograma Evolutivo.jpg";
        //$scope.legenda = "alguma legenda";
        //carrega um json de um arquivo externo. Caminho apartir de index.html
        $http.get('js/angular/controllers/cnt/orga-evol-cnt-subtopicos.json')
            .then(function (resultado) {
                $scope.subtopicos = resultado.data;
            });

        //Conteúdo da pagina (view)
        $scope.titulo = "Organograma Evolutivo do Conselho Nacional do Trabalho";
        $scope.texto = "Em 19 de fevereiro de 1928, com o Decreto nº 18.078, o CNT foi reorganizado, passando a exercer funções executivas nas questões do trabalho. O conselho foi habilitado a julgar os processos trabalhistas, podendo também propor ao governo as medidas que julgasse convenientes. Cabia-lhe fiscalizar as empresas nas questões do seguro contra acidentes de trabalho e da concessão de férias, com autoridade para aplicar multas. Finalmente, o  decreto  atribuiu  ao  CNT  a  função  de  mediador  para  o  acordo  ou  a  arbitragem  nas          questões coletivas entre operários e patrões. Nesse momento, Francisco Oliveira Passos, presidente do Centro Industrial do Brasil, tornou-se membro do conselho.\n Em 14 de julho de 1934, o Decreto nº 24.784 aprovou novo regulamento para o CNT, alterando  também  sua  composição.  O  conselho  passava  a  ser  integrado  por  18 membros, subindo para quatro o número de representantes tanto dos empregadores como dos empregados.\n Em  15  de  julho  do  mesmo  ano,  a reorganização  do  CNT  foi  fixada  pelo  Decreto  nº 1.346. O conselho passava a ser formado por 19 membros nomeados pelo presidente da República, a quem cabia igualmente escolher um presidente e dois vice-presidentes.\n O Decreto-Lei nº 3.710, de 14 de outubro de 1941, alterou a competência da Câmara         de Previdência Social do CNT, que passava a funcionar como “órgão de recursos das decisões dos institutos e caixas de aposentadorias e pensões”.";
    });