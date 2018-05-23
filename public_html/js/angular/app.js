//Módulo Principal
angular.module('toten', ['minhasDiretivas', 'ngRoute', 'ngCookies'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/inicio', {
                templateUrl: 'views/inicio.html',
                controller: 'TotenCtrl' //origem dos dados
            })
            .when('/menu', {
                templateUrl: 'views/menu.html',
                controller: 'TotenCtrl' //origem dos dados
            })
            .when('/histTrab', {
                templateUrl: 'views/origEvol/histTrab.html',
                controller: 'HistTrabCtrl' //origem dos dados
            })
            .when('/brasColo', {
                templateUrl: 'views/origEvol/brasColo.html',
                controller: 'HistTrabCtrl' //origem dos dados
            })
            .when('/brasImpe', {
                templateUrl: 'views/origEvol/brasImpe.html',
                controller: 'HistTrabCtrl' //origem dos dados
            })
            .when('/brasRepu', {
                templateUrl: 'views/origEvol/brasRepu.html',
                controller: 'HistTrabCtrl' //origem dos dados
            })
            .when('/legiTrab', {
                templateUrl: 'views/origEvol/legiTrab.html',
                controller: 'LegiTrabCtrl' //origem dos dados
            })
            .when('/criaCnt', {
                templateUrl: 'views/cnt/criaCnt.html',
                controller: 'CriaCntCtrl' //origem dos dados
            })
            .when('/exPresCnt', {
                templateUrl: 'views/cnt/exPresCnt.html',
                controller: 'ExPresCntCtrl' //origem dos dados
            })
            .when('/orgaEvolCnt', {
                templateUrl: 'views/cnt/orgaEvolCnt.html',
                controller: 'OrgaEvolCntCtrl' //origem dos dados
            })
            .when('/noMund', {
                templateUrl: 'views/jt/noMund.html',
                controller: 'NoMundCtrl' //origem dos dados
            })
            .when('/noBras', {
                templateUrl: 'views/jt/noBras.html',
                controller: 'NoBrasCtrl' //origem dos dados
            })
            .when('/auto', {
                templateUrl: 'views/jt/auto.html',
                controller: 'AutoCtrl' //origem dos dados
            })
            .when('/criaCsjt', {
                templateUrl: 'views/csjt/criaCsjt.html',
                controller: 'CriaCsjtCtrl' //origem dos dados
            })
            .when('/exPresCsjt', {
                templateUrl: 'views/csjt/exPresCsjt.html',
                controller: 'ExPresCsjtCtrl' //origem dos dados
            })
            .when('/orgaEvolCsjt', {
                templateUrl: 'views/csjt/orgaEvolCsjt.html',
                controller: 'OrgaEvolCsjtCtrl' //origem dos dados
            })
            .when('/fatoHist', {
                templateUrl: 'views/tst/fatoHist.html',
                controller: 'FatoHistCtrl' //origem dos dados
            })
            .when('/progInst', {
                templateUrl: 'views/tst/progInst.html',
                controller: 'ProgInstCtrl' //origem dos dados
            })
            .when('/setentaAnosAcor', {
                templateUrl: 'views/tst/setentaAnosAcor.html',
                controller: 'setentaAnosAcorCtrl' //origem dos dados
            })
            .when('/justNume', {
                templateUrl: 'views/curi/justNume.html',
                controller: 'JustNumeCtrl' //origem dos dados
            })
            .when('/profNaoComu', {
                templateUrl: 'views/curi/profNaoComu.html',
                controller: 'ProfNaoComuCtrl' //origem dos dados
            })
            .when('/voceSabi', {
                templateUrl: 'views/curi/voceSabi.html',
                controller: 'VoceSabiCtrl' //origem dos dados
            })
            .otherwise({
                redirectTo: '/inicio' //se nenhuma rota for encontrada, volta para o inicio
            });
    });