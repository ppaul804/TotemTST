//Módulo de Diretivas
angular.module('minhasDiretivas', [])
    .directive("modal", function () {
        var ddo = {}; //declaração da Directive Definition Object
        ddo.restrict = "AE"; //Atributo e Elemento
        ddo.transclude = true; //mantem os elementos filhos do controller. precisa da diretiva ng-transclude no template
        /**
         * '=' two-way data-binding;
         * '<' one-way data-binding;
         * '@' top-down binding;
         * '&' executar um método no escopo do pai;
         * Obs.: '@' para passar uma expressão e '=' você passa diretamente seu model
         */
        ddo.templateUrl = "js/angular/directives/modal.html";
        return ddo; //obrigatório retornar o objeto da diretiva
    })
    .directive("navegacao", function () {
        var ddo = {}; //declaração da Directive Definition Object
        ddo.restrict = "AE"; //Atributo e Elemento
        ddo.templateUrl = "js/angular/directives/navegacao.html";
        return ddo; //obrigatório retornar o objeto da diretiva
    })
    .directive("menuBotao", function () {
        var ddo = {}; //declaração da Directive Definition Object
        ddo.restrict = "AE"; //Atributo e Elemento
        ddo.transclude = true; //mantem os elementos filhos do controller. precisa da diretiva ng-transclude no template
        ddo.scope = {
            index: '@',
            imagem: '@', //espécie de atributo da tag (diretiva) no html.
            titulo: '@',
        };
        ddo.templateUrl = "js/angular/directives/menu-botao.html";
        return ddo; //obrigatório retornar o objeto da diretiva
    })
    .directive("menuLateral", function () {
        var ddo = {}; //declaração da Directive Definition Object
        ddo.restrict = "AE"; //Atributo e Elemento
        ddo.transclude = true; //mantem os elementos filhos do controller. precisa da diretiva ng-transclude no template
        ddo.scope = {
            filtro: '@' //espécie de atributo da tag (diretiva) no html.
        };
        ddo.templateUrl = "js/angular/directives/menu-lateral.html";
        return ddo; //obrigatório retornar o objeto da diretiva
    })
    .directive("conteudoPaginaTexto", function () {
        var ddo = {}; //declaração da Directive Definition Object
        ddo.restrict = "AE"; //Atributo e Elemento
        ddo.transclude = true; //mantem os elementos filhos do controller. precisa da diretiva ng-transclude no template
        ddo.scope = { //cria um escopo para diretiva
            titulo: '@', //espécie de atributo da tag (diretiva) no html.
            foto: '@',
            legenda: '@',
            texto: '@'
        };
        ddo.templateUrl = "js/angular/directives/conteudo-pagina-texto.html";
        return ddo; //obrigatório retornar o objeto da diretiva
    })
    .directive("conteudoPaginaLista", function () {
        var ddo = {}; //declaração da Directive Definition Object
        ddo.restrict = "AE"; //Atributo e Elemento
        ddo.transclude = true; //mantem os elementos filhos do controller. precisa da diretiva ng-transclude no template

        //A direitiva usará o mesmo escopo de onde é chamada, então não é necessário utilizar ddo.scope{};

        ddo.templateUrl = "js/angular/directives/conteudo-pagina-lista.html";
        return ddo; //obrigatório retornar o objeto da diretiva
    });