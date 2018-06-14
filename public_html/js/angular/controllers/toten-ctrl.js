//Fornece os dados para a view
angular.module('toten')
    .controller('TotenCtrl', function ($scope, $cookies, $http) {
        /**
         * Define o filtro nos cookies do navegador
         * @param {type} filtro
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
         */
        $scope.printFiltro = function () {
            console.log($cookies.get("filtro"));
        };
        /**
         * Remove o cookie filtro
         */
        $scope.limpaFiltro = function () {
            console.log('filtro ' + $cookies.get("filtro") + ' removido');
            $cookies.remove("filtro");
        };

        /**
         * Configura o comportamento dos collapses (paineis)
         * @param {int} index indice do botão clicado
         */
        $scope.menuCollapses = function (index) {
            //todos os accordions (botões)
            $scope.accordions = document.getElementsByClassName("accordion");
            //os paineis estão sempre abaixo (proximo elemento html) ao accordions
            $scope.paineis = proxFilhos($scope.accordions);
            //painel clicado = $scope.paineis[index]
            //se tiver aberto
            if ($scope.paineis[index].classList.contains("in")) {
                //fecha todos
                $scope.paineis = $scope.fecharPaineis($scope.paineis);                
            }
            //senão
            else {
                //fecha todos
                $scope.paineis = $scope.fecharPaineis($scope.paineis);                
                //e abre painel clicado
                $scope.paineis[index].classList.add('in')
            }
        }
        /**
         * Fecha todos os paineis do menu
         * @param {array} os paineis
         * @returns {array} os paineis fechados
         */
        $scope.fecharPaineis = function (paineis) {
            var result=[];
            for (let i = 0; i < paineis.length; i++) {
                const painel = paineis[i];
                result[i] = painel.classList.remove('in');
            }
            return paineis;
        }
        /**
         * Faz um "slide" no vetor passado para o 
         * proximo elemento html 
         * @param um vetor com elementos html
         * @returns vetor com elementos filhos 
         * de cada elemento do vetor inicial
         */
        proxFilhos = function (array) {
            var result = [];
            for (let i = 0; i < array.length; i++) {
                const element = array[i];
                result[i] = element.nextElementSibling;
            }
            return result;
        }
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