//Fornece os dados para a view
angular.module('toten')
    .controller('setentaAnosAcorCtrl', function ($scope, $http) {
        $scope.foto = "conteudo/TST/70 Anos em Acórdãos/Foto/70 Anos em Acórdãos.jpg";
        //$scope.legenda = "alguma legenda";
        //carrega um json de um arquivo externo. Caminho apartir de index.html
        $http.get('js/angular/controllers/tst/setenta-anos-acor-ministros.json')
            .then(function (resultado) {
                $scope.lista = resultado.data;
            });

        //Conteúdo da pagina (view)
        $scope.titulo = "70 Anos em Acórdãos";
        $scope.texto = ["Os acórdãos aqui selecionados demonstram um pouco da história, da importância e da formação da jurisprudência do Tribunal Superior do Trabalho ao longo do tempo, reunindo as principais decisões do TST nas últimas décadas. As informações são baseadas no livro institucional intitulado “Tribunal Superior do Trabalho – 70 anos em acórdãos”. A publicação foi coordenada pelo ministro Alexandre Agra Belmonte em 2016, na qual destacam-se algumas participações por meio de acórdãos representativos aos 70 anos da Corte superior trabalhista. Foi produzida pela Editora JC e pelo Instituto Justiça e Cidadania. Organizada por ministros do TST antigos e atuais. A compilação retrata, por meio das decisões, a evolução na interpretação das questões trabalhistas, revelando o papel da Justiça do Trabalho na consolidação e na harmonização dos princípios fundamentais do valor social do trabalho e da livre iniciativa, que informam o Estado Democrático de Direito."];
    });