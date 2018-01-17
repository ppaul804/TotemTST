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
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider

        /* aqui dizemos quando estivernos na url / vamos carregar o conteúdo da pagina inicila a home
         no segundo parametro definimos um objeto contendo o templateUrl da nossa pagina home e o controller que irá
         preparar o conteudo e processar outros eventos da página que veremos posteriormente */
        .when("/", {
            templateUrl: "templates/home.html", 
            controller: "HomeCtrl"
        })
        // configuração das rotas bem parecidas para as outras paginas
        .when("/nav", {
            templateUrl: "templates/nav.html",
            controller: "NavCtrl"
        })
        .when("/orig", {
            templateUrl: "templates/1_orig/orig.html",
            controller: "OrigCtrl"
        })
        .when("/orig#openModal", {
            templateUrl: "templates/1_orig/orig.html#openModal",
        })
        .when("/cnt", {
            templateUrl: "templates/2_cnt/cnt.html",
            controller: "CntCtrl"
        })
        .when("/jt", {
            templateUrl: "templates/3_jt/.html",
            controller: "JtCtrl"
        })
        .when("/tst", {
            templateUrl: "templates/4_tst/tst.html",
            controller: "TstCtrl"
        })
        .when("/csjt", {
            templateUrl: "templates/5_csjt/csjt.html",
            controller: "CsjtCtrl"
        })
        .when("/curi", {
            templateUrl: "templates/6_curi/curi.html",
            controller: "CuriCtrl"
        })
        .when("/teste", {
            templateUrl: "templates/0_teste/teste.html",
            controller: "TesteCtrl"
        });
}]);


app.controller('HomeCtrl', function ($scope, $location) {
    
});

app.controller('NavCtrl', function ($scope, $location) {
    
});
 
app.controller('OrigCtrl', function ($scope, $location) {
    
});
 
app.controller('CntCtrl', function ($scope, $location) {
    
});
 
app.controller('JtCtrl', function ($scope, $location) {
    
});
 
app.controller('TstCtrl', function ($scope, $location) {
    
});
 
app.controller('CsjtCtrl', function ($scope, $location) {
    
});
 
app.controller('CuriCtrl', function ($scope, $location) {
    
});
 
app.controller('TesteCtrl', function ($scope, $location) {
 
});