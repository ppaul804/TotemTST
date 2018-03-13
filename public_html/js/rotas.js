/**
 * Inicializamos o angular.module com o mesmo nome que definimos na diretiva ng-app
 * E incluímos a dependência do ngRoute e ngAnimate
 */
var app = angular.module('toten', ['ngRoute', 'ngAnimate']);

/**
 * Como possuímos a variavel app definida acima com a inicialização do Angular
 * através do app.config conseguimos criar as configurações
 * definimos que essa configuração depende do $routeProvider e usamos na function($routeProvider)
 */
app.config(['$routeProvider', function($routeProvider) {
        $routeProvider
                /* aqui dizemos quando estivernos na url / vamos carregar o conteúdo da pagina inicila a home
                 no segundo parametro definimos um objeto contendo o templateUrl da nossa pagina home e o controller que irá
                 preparar o conteudo e processar outros eventos da página que veremos posteriormente */
                .when("/", {
                    templateUrl: "templates/home.html",
                    controller: "HomeCtrl"
                })
                // configuração das rotas bem parecidas para as outras paginas
                // Navegação
                .when("/nav", {
                    templateUrl: "templates/nav.html",
                    controller: "NavCtrl"
                })
                // PDF
                .when("/pdf", {
                    templateUrl: "pdf/web/wiewer.html",
                    controller: "PdfCtrl"
                })

                // 1 Origem e Evolução do Trabalho _____________________________________
                // 1.1 História do Trabalho no Brasil
                .when("/orig/histTrab", {
                    templateUrl: "templates/1_orig/histTrab/histTrab.html",
                    controller: "HistTrabCtrl"
                })
                // 1.2 Legislação Trabalhista
                .when("/orig/legiTrab", {
                    templateUrl: "templates/1_orig/legiTrab/legiTrab.html",
                    controller: "LegiTrabCtrl"
                })
                // 2 Conselho Nacional do Trabalho _____________________________________
                // 2.1 A Criação do CNT
                .when("/cnt/criaCnt", {
                    templateUrl: "templates/2_cnt/criaCnt/criaCnt.html",
                    controller: "CriaCntCtrl"
                })
                // 2.2 Organograma Evolutivo
                .when("/cnt/orgaEvol", {
                    templateUrl: "templates/2_cnt/orgaEvol/orgaEvol.html",
                    controller: "OrgaEvolCtrl"
                })
                // 2.3 Ex-Presidentes
                .when("/cnt/cntExPres", {
                    templateUrl: "templates/2_cnt/cntExPres/cntExPres.html",
                    controller: "CntExPresCtrl"
                })
                // 3 Justiça do Trabalho _______________________________________________
                // 3.1 No Mundo
                .when("/jt/noMund", {
                    templateUrl: "templates/3_jt/noMund/noMund.html",
                    controller: "NoMundCtrl"
                })
                // 3.2 No Brasil
                .when("/jt/noBras", {
                    templateUrl: "templates/3_jt/noBras/noBras.html",
                    controller: "NoBrasCtrl"
                })
                // 3.3 Atores da Justiça do Trabalho
                .when("/jt/ator", {
                    templateUrl: "templates/3_jt/ator/ator.html",
                    controller: "AtorCtrl"
                })
                // 4 Tribunal Superior do Trabalho _____________________________________
                // 4.1 Fatos Históricos
                .when("/tst/fatoHist", {
                    templateUrl: "templates/4_tst/fatoHist/fatoHist.html",
                    controller: "FatoHistCtrl"
                })
                // 4.2 Programas Institucionais
                .when("/tst/progInst", {
                    templateUrl: "templates/4_tst/progInst/progInst.html",
                    controller: "ProgInstCtrl"
                })
                // 4.3 70 Anos em Acórdãos
                .when("/tst/70AnosAcor", {
                    templateUrl: "templates/4_tst/70AnosAcor/70AnosAcor.html",
                    controller: "70AnosAcorCtrl"
                })
                // 5 Conselho Superior da Justiça do Trabalho __________________________
                // 5.1 Criação 
                .when("/csjt/cria", {
                    templateUrl: "templates/5_csjt/cria/cria.html",
                    controller: "CriaCtrl"
                })
                // 5.2 Ex-Presidentes
                .when("/csjt/csjtExPres", {
                    templateUrl: "templates/5_csjt/csjtExPres/csjtExPres.html",
                    controller: "CsjtExPresCtrl"
                })
                // 5.3 Membros
                .when("/csjt/memb", {
                    templateUrl: "templates/5_csjt/memb/memb.html",
                    controller: "MembCtrl"
                })
                // 6 Curiosidades ______________________________________________________
                // 6.1 Justiça e Números
                .when("/curi/justNume", {
                    templateUrl: "templates/6_curi/justNume/justNume.html",
                    controller: "JustNumeCtrl"
                })
                // 6.2 Dicionário de profissões pouco comuns
                .when("/curi/diciProf", {
                    templateUrl: "templates/6_curi/diciProf/diciProf.html",
                    controller: "DiciProfCtrl"
                })
                // 6.3 Você sabia?
                .when("/curi/voceSabi", {
                    templateUrl: "templates/6_curi/voceSabi/voceSabi.html",
                    controller: "VoceSabiCtrl"
                })

    }]);


app.controller('HomeCtrl', function($scope, $location) {
});

app.controller('NavCtrl', function($scope, $location) {
});

app.controller('PdfCtrl', function($scope, $location) {
});

app.controller('HistTrabCtrl', function($scope, $location) {
});

app.controller('LegiTrabCtrl', function($scope, $location) {
});

app.controller('CriaCntCtrl', function($scope, $location) {
});

app.controller('OrgaEvolCtrl', function($scope, $location) {
});

app.controller('CntExPresCtrl', function($scope, $location) {
});

app.controller('NoMundCtrl', function($scope, $location) {
});

app.controller('NoBrasCtrl', function($scope, $location) {
});

app.controller('AtorCtrl', function($scope, $location) {
});

app.controller('FatoHistCtrl', function($scope, $location) {
});

app.controller('ProgInstCtrl', function($scope, $location) {
});

app.controller('70AnosAcorCtrl', function($scope, $location) {
});

app.controller('JustNumeCtrl', function($scope, $location) {
});

app.controller('CriaCtrl', function($scope, $location) {
});

app.controller('CsjtExPresCtrl', function($scope, $location) {
});

app.controller('MembCtrl', function($scope, $location) {
});

app.controller('DiciProfCtrl', function($scope, $location) {
});

app.controller('VoceSabiCtrl', function($scope, $location) {
});

