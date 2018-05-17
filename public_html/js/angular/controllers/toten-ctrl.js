//Fornece os dados para a view
angular.module('toten')
        .controller('TotenCtrl', function ($scope, $cookies) {
            /*
             * Define o filtro nos cookies do navegador
             * @param {type} filtro
             * @returns {undefined}
             */
            $scope.setFiltro = function (filtro) {
                $cookies.put("filtro", filtro);
                console.log('cookie ' + $cookies.get("filtro") + ' inserido');
            };
            /*
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
            /*
             * Exibe o cookie no console
             * @returns {undefined}
             */
            $scope.printFiltro = function () {
                console.log($cookies.get("filtro"));
            };
            /*
             * Remove o cookie filtro
             * @returns {undefined}
             */
            $scope.limpaFiltro = function () {
                $cookies.remove("filtro");
                console.log('filtro ' + $cookies.get("filtro") + ' removido');
            };
            /*
             * fecha os outros collapses da view
             * @returns {undefined}
             */
            $scope.fechaCollapses = function () {
                $("button").click(function () {
                    $("div").removeClass('in');
                });
            };
            /*
             * Abre o collapse dentro de uma div
             */
            $scope.abreCollapses = function (url) {
                $(".collapse").ready(function () {
                    $(".collapse").addClass('in');
                });
            };
            $scope.menuLista = [//um JavaScript Object Notation
                {
                    index: "origEvol",
                    imagem: "img/1origEvol.png",
                    titulo: "Origem e Evolução",
                    topicos: [
                        {
                            titulo: "História do trabalho no Brasil",
                            url: "#!/histTrab"
                        },
                        {
                            titulo: "Legislação Trabalhista",
                            url: "#!/legiTrab"
                        }
                    ]//fim topicos
                },
                {
                    index: "cnt",
                    imagem: "img/2cnt.png",
                    titulo: "CNT",
                    topicos: [
                        {
                            titulo: "Criação",
                            url: "#!/criaCnt"
                        },
                        {
                            titulo: "Ex-Presidentes",
                            url: "#!/exPresCnt"
                        },
                        {
                            titulo: "Organograma Evolutivo",
                            url: "#!/orgaEvolCnt"
                        }
                    ]//fim topicos
                },
                {
                    index: "justTrab",
                    imagem: "img/3justTrab.png",
                    titulo: "Justiça do Trabalho",
                    topicos: [
                        {
                            titulo: "No Mundo",
                            url: "#!/noMund"
                        },
                        {
                            titulo: "No Brasil",
                            url: "#!/noBras"
                        },
                        {
                            titulo: "Autores",
                            url: "#!/auto"
                        }
                    ]//fim topicos
                },
                {
                    index: "csjt",
                    imagem: "img/4csjt.png",
                    titulo: "CSJT",
                    topicos: [
                        {
                            titulo: "Criação",
                            url: "#!/criaCsjt"
                        },
                        {
                            titulo: "Ex-Presidentes",
                            url: "#!/exPresCsjt"
                        },
                        {
                            titulo: "Organograma Evolutivo",
                            url: "#!/orgaEvolCsjt"
                        }
                    ]//fim topicos
                },
                {
                    index: "tst",
                    imagem: "img/5tst.png",
                    titulo: "TST",
                    topicos: [
                        {
                            titulo: "Fatos Históricos",
                            url: "#!/fatoHist"
                        },
                        {
                            titulo: "Programas Institucionais",
                            url: "#!/progInst"
                        },
                        {
                            titulo: "70 anos em Acórdãos",
                            url: "#!/70Anos"
                        }
                    ]//fim topicos
                },
                {
                    index: "curi",
                    imagem: "img/6curi.png",
                    titulo: "Curiosidades",
                    topicos: [
                        {
                            titulo: "Justiça em Números",
                            url: "#!/justNume"
                        },
                        {
                            titulo: "Profissões não comuns",
                            url: "#!/profInco"
                        },
                        {
                            titulo: "Você Sabia?",
                            url: "#!/voceSabi"
                        }
                    ]//fim topicos
                }
            ];//fim menuLista

            $scope.conteudoLista = [//um JavaScript Object Notation
                {
                    titulo: "titulo em TotemCtrl",
                    fotoUrl: "foto em TotemCtrl",
                    legenda: "legenda em TotemCtrl",
                    texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis mattis orci sit amet volutpat. Curabitur ut aliquam elit. Proin at odio rhoncus, dapibus tortor eget, aliquet purus. Pellentesque vitae enim luctus, sagittis urna quis, consectetur est. Integer tincidunt dignissim malesuada. Vivamus maximus dignissim lectus, eu malesuada dui ultricies ac. Aenean semper erat tortor, nec placerat erat hendrerit a. Nam quis dui sit amet ex tempus consequat. Integer aliquet posuere dui et molestie. Maecenas eget elementum mi, et euismod est. \n\
Morbi lacinia malesuada dui, nec vehicula ipsum dignissim vel. Vestibulum eu viverra nisi. Ut elementum cursus purus, accumsan rhoncus diam vulputate ut. Integer gravida porta urna. Curabitur mauris tellus, accumsan in erat eu, finibus lacinia nulla. Ut efficitur quam id sollicitudin convallis. Aliquam ultricies scelerisque ex, consequat aliquet lectus ultrices eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque fringilla vulputate volutpat."
                },
                {
                    titulo: "titulo2 em TotemCtrl",
                    fotoUrl: "foto2 em TotemCtrl",
                    legenda: "legenda2 em TotemCtrl",
                    texto: "Outro lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis mattis orci sit amet volutpat. Curabitur ut aliquam elit. Proin at odio rhoncus, dapibus tortor eget, aliquet purus. Pellentesque vitae enim luctus, sagittis urna quis, consectetur est. Integer tincidunt dignissim malesuada. Vivamus maximus dignissim lectus, eu malesuada dui ultricies ac. Aenean semper erat tortor, nec placerat erat hendrerit a. Nam quis dui sit amet ex tempus consequat. Integer aliquet posuere dui et molestie. Maecenas eget elementum mi, et euismod est. \n\
Morbi lacinia malesuada dui, nec vehicula ipsum dignissim vel. Vestibulum eu viverra nisi. Ut elementum cursus purus, accumsan rhoncus diam vulputate ut. Integer gravida porta urna. Curabitur mauris tellus, accumsan in erat eu, finibus lacinia nulla. Ut efficitur quam id sollicitudin convallis. Aliquam ultricies scelerisque ex, consequat aliquet lectus ultrices eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque fringilla vulputate volutpat."
                },
                {
                    titulo: "titulo3 em TotemCtrl",
                    fotoUrl: "foto3 em TotemCtrl",
                    legenda: "legenda3 em TotemCtrl",
                    texto: "Mais um lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis mattis orci sit amet volutpat. Curabitur ut aliquam elit. Proin at odio rhoncus, dapibus tortor eget, aliquet purus. Pellentesque vitae enim luctus, sagittis urna quis, consectetur est. Integer tincidunt dignissim malesuada. Vivamus maximus dignissim lectus, eu malesuada dui ultricies ac. Aenean semper erat tortor, nec placerat erat hendrerit a. Nam quis dui sit amet ex tempus consequat. Integer aliquet posuere dui et molestie. Maecenas eget elementum mi, et euismod est. \n\
Morbi lacinia malesuada dui, nec vehicula ipsum dignissim vel. Vestibulum eu viverra nisi. Ut elementum cursus purus, accumsan rhoncus diam vulputate ut. Integer gravida porta urna. Curabitur mauris tellus, accumsan in erat eu, finibus lacinia nulla. Ut efficitur quam id sollicitudin convallis. Aliquam ultricies scelerisque ex, consequat aliquet lectus ultrices eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque fringilla vulputate volutpat."
                }
            ];//fim conteudoLista
        })
        ;//fim controller TotenCtrl