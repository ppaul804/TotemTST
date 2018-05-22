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
                templateUrl: 'views/histTrab.html',
                controller: 'HistTrabCtrl' //origem dos dados
            })
            .when('/brasColo', {
                templateUrl: 'views/brasColo.html',
                controller: 'HistTrabCtrl' //origem dos dados
            })
            .when('/brasImpe', {
                templateUrl: 'views/brasImpe.html',
                controller: 'HistTrabCtrl' //origem dos dados
            })
            .when('/brasRepu', {
                templateUrl: 'views/brasRepu.html',
                controller: 'HistTrabCtrl' //origem dos dados
            })
            .when('/legiTrab', {
                templateUrl: 'views/legiTrab.html',
                controller: 'LegiTrabCtrl' //origem dos dados
            })
            .when('/criaCnt', {
                templateUrl: 'views/criaCnt.html',
                controller: 'CriaCntCtrl' //origem dos dados
            })
            .when('/exPresCnt', {
                templateUrl: 'views/exPresCnt.html',
                controller: 'ExPresCntCtrl' //origem dos dados
            })
            .when('/orgaEvolCnt', {
                templateUrl: 'views/orgaEvolCnt.html',
                controller: 'OrgaEvolCntCtrl' //origem dos dados
            })
            .when('/noMund', {
                templateUrl: 'views/noMund.html',
                controller: 'NoMundCtrl' //origem dos dados
            })
            .when('/noBras', {
                templateUrl: 'views/noBras.html',
                controller: 'NoBrasCtrl' //origem dos dados
            })
            .when('/auto', {
                templateUrl: 'views/auto.html',
                controller: 'AutoCtrl' //origem dos dados
            })
            .when('/criaCsjt', {
                templateUrl: 'views/criaCsjt.html',
                controller: 'CriaCsjtCtrl' //origem dos dados
            })
            .when('/exPresCsjt', {
                templateUrl: 'views/exPresCsjt.html',
                controller: 'ExPresCsjtCtrl' //origem dos dados
            })
            .when('/orgaEvolCsjt', {
                templateUrl: 'views/orgaEvolCsjt.html',
                controller: 'OrgaEvolCsjtCtrl' //origem dos dados
            })
            .when('/fatoHist', {
                templateUrl: 'views/fatoHist.html',
                controller: 'FatoHistCtrl' //origem dos dados
            })
            .when('/progInst', {
                templateUrl: 'views/progInst.html',
                controller: 'ProgInstCtrl' //origem dos dados
            })
            .when('/setentaAnosAcor', {
                templateUrl: 'views/setentaAnosAcor.html',
                controller: 'setentaAnosAcorCtrl' //origem dos dados
            })
            .when('/justNume', {
                templateUrl: 'views/justNume.html',
                controller: 'JustNumeCtrl' //origem dos dados
            })
            .when('/profNaoComu', {
                templateUrl: 'views/profNaoComu.html',
                controller: 'ProfNaoComuCtrl' //origem dos dados
            })
            .when('/voceSabi', {
                templateUrl: 'views/voceSabi.html',
                controller: 'VoceSabiCtrl' //origem dos dados
            })
            .otherwise({
                redirectTo: '/inicio' //se nenhuma rota for encontrada, volta para o inicio
            });
    });