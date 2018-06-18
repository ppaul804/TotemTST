//Módulo Principal
angular.module('toten', ['minhasDiretivas', 'ngRoute', 'ngCookies', 'ngTouch'])
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
            .when('/leiEloyChav', {
                templateUrl: 'views/cnt/leiEloyChav.html',
                controller: 'CriaCntCtrl' //origem dos dados
            })
            .when('/novoReguCnt', {
                templateUrl: 'views/cnt/novoReguCnt.html',
                controller: 'CriaCntCtrl' //origem dos dados
            })
            .when('/criaMiniTrab', {
                templateUrl: 'views/cnt/criaMiniTrab.html',
                controller: 'CriaCntCtrl' //origem dos dados
            })
            .when('/comiMistConc', {
                templateUrl: 'views/cnt/comiMistConc.html',
                controller: 'CriaCntCtrl' //origem dos dados
            })
            .when('/antContCons', {
                templateUrl: 'views/cnt/antContCons.html',
                controller: 'CriaCntCtrl' //origem dos dados
            })
            .when('/acerCnt', {
                templateUrl: 'views/cnt/acerCnt.html',
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
            .when('/csjtAuto', {
                templateUrl: 'views/jt/csjtAuto.html',
                controller: 'AutoCtrl' //origem dos dados
            })
            .when('/tstAuto', {
                templateUrl: 'views/jt/tstAuto.html',
                controller: 'AutoCtrl' //origem dos dados
            })
            .when('/trtsAuto', {
                templateUrl: 'views/jt/trtsAuto.html',
                controller: 'AutoCtrl' //origem dos dados
            })
            .when('/varaTrabAuto', {
                templateUrl: 'views/jt/varaTrabAuto.html',
                controller: 'AutoCtrl' //origem dos dados
            })
            .when('/pgtAuto', {
                templateUrl: 'views/jt/pgtAuto.html',
                controller: 'AutoCtrl' //origem dos dados
            })
            .when('/enamAuto', {
                templateUrl: 'views/jt/enamAuto.html',
                controller: 'AutoCtrl' //origem dos dados
            })
            .when('/anamAuto', {
                templateUrl: 'views/jt/anamAuto.html',
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
            .when('/jtPodeJudi', {
                templateUrl: 'views/tst/jtPodeJudi.html',
                controller: 'FatoHistCtrl' //origem dos dados
            })
            .when('/diviTstTurm', {
                templateUrl: 'views/tst/diviTstTurm.html',
                controller: 'FatoHistCtrl' //origem dos dados
            })
            .when('/tstEmBras', {
                templateUrl: 'views/tst/tstEmBras.html',
                controller: 'FatoHistCtrl' //origem dos dados
            })
            .when('/bandTst', {
                templateUrl: 'views/tst/bandTst.html',
                controller: 'FatoHistCtrl' //origem dos dados
            })
            .when('/mulhPionTst', {
                templateUrl: 'views/tst/mulhPionTst.html',
                controller: 'FatoHistCtrl' //origem dos dados
            })
            .when('/UtilServInte', {
                templateUrl: 'views/tst/UtilServInte.html',
                controller: 'FatoHistCtrl' //origem dos dados
            })
            .when('/refoPodeJudi', {
                templateUrl: 'views/tst/refoPodeJudi.html',
                controller: 'FatoHistCtrl' //origem dos dados
            })
            .when('/novaSedeTst', {
                templateUrl: 'views/tst/novaSedeTst.html',
                controller: 'FatoHistCtrl' //origem dos dados
            })
            .when('/leiProcElet', {
                templateUrl: 'views/tst/leiProcElet.html',
                controller: 'FatoHistCtrl' //origem dos dados
            })
            .when('/gestDocuTst', {
                templateUrl: 'views/tst/gestDocuTst.html',
                controller: 'FatoHistCtrl' //origem dos dados
            })
            .when('/PJeTst', {
                templateUrl: 'views/tst/PJeTst.html',
                controller: 'FatoHistCtrl' //origem dos dados
            })
            .when('/bndt', {
                templateUrl: 'views/tst/bndt.html',
                controller: 'FatoHistCtrl' //origem dos dados
            })
            .when('/tstSust', {
                templateUrl: 'views/tst/tstSust.html',
                controller: 'FatoHistCtrl' //origem dos dados
            })
            .when('/progInst', {
                templateUrl: 'views/tst/progInst.html',
                controller: 'ProgInstCtrl' //origem dos dados
            })
            .when('/concTrab', {
                templateUrl: 'views/tst/concTrab.html',
                controller: 'ProgInstCtrl' //origem dos dados
            })
            .when('/ExecTrab', {
                templateUrl: 'views/tst/ExecTrab.html',
                controller: 'ProgInstCtrl' //origem dos dados
            })
            .when('/trabSegu', {
                templateUrl: 'views/tst/trabSegu.html',
                controller: 'ProgInstCtrl' //origem dos dados
            })
            .when('/PjeProgInst', {
                templateUrl: 'views/tst/PjeProgInst.html',
                controller: 'ProgInstCtrl' //origem dos dados
            })
            .when('/pctiea', {
                templateUrl: 'views/tst/pctiea.html',
                controller: 'ProgInstCtrl' //origem dos dados
            })
            .when('/HistOral', {
                templateUrl: 'views/tst/HistOral.html',
                controller: 'ProgInstCtrl' //origem dos dados
            })
            .when('/JusLabo', {
                templateUrl: 'views/tst/JusLabo.html',
                controller: 'ProgInstCtrl' //origem dos dados
            })
            .when('/ArquDigiTst', {
                templateUrl: 'views/tst/ArquDigiTst.html',
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