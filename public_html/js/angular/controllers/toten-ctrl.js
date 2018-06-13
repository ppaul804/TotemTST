//Fornece os dados para a view
angular.module('toten')
    .controller('TotenCtrl', function ($scope, $cookies, $http) {
        /**
         * Define o filtro nos cookies do navegador
         * @param {type} filtro
         * @returns {undefined}
         */
        $scope.setFiltro = function (filtro) {
            $cookies.put("filtro", filtro);
            console.log('cookie ' + $cookies.get("filtro") + ' inserido');
        };
        /**
         * Carrega o dado do filtro que está no cookie 
         * do navegador e passa para o escopo do 
         * controller
         * Obs.: Os dados no controller não são 
         * modificados, só transportados do cookie 
         * para o controller, então para uso, esta 
         * função precisa ser chamada no começo da view
         * @returns {undefined} dado de cookie no escopo do controller
         */
        $scope.carregaFiltro = function () {
            $scope.filtro = $cookies.get("filtro");
            console.log('filtro ' + $cookies.get("filtro") + ' carregado');
        };
        /**
         * Exibe o cookie no console
         * @returns {undefined}
         */
        $scope.printFiltro = function () {
            console.log($cookies.get("filtro"));
        };
        /**
         * Remove o cookie filtro
         * @returns {undefined}
         */
        $scope.limpaFiltro = function () {
            $cookies.remove("filtro");
            console.log('filtro ' + $cookies.get("filtro") + ' removido');
        };
        $scope.menuCollapses = function () {
            var acc = document.getElementsByClassName("accordion");
            var todosPaineis = [];
            var todosAccordions = [];
            console.log(acc);
            for (let i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", function () {
                });

            }
        }
        /**
         * fecha os outros collapses da view
         * @returns {undefined}
         */
        $scope.fechaCollapses = function () {
            $("button").click(function () {
                $("div").removeClass('in');
            });
        };
        /**
         * Abre o collapse dentro de uma div
         */
        $scope.abreCollapses = function (url) {
            $(".collapse").ready(function () {
                $(".collapse").addClass('in');
            });
        };
        /**
         * Origem dos dados do menu
         */
        $http.get('js/angular/controllers/toten-ctrl-menu.json')
            .then(function (resultado) {
                $scope.menuLista = resultado.data;
            });
    }); //fim controller TotenCtrl