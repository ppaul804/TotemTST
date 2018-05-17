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
            .otherwise({
                redirectTo: '/inicio' //se nenhuma rota for encontrada, volta para o inicio
            });
    });