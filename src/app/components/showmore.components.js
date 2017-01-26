(function(){
    'use strict';


    angular.module('application.components').directive('showMore', showMoreComponent());

    function showMoreComponent() {

        var logic = function(element) {
            if (element.hasClass('show')) {
                element.removeClass('show');
                element.addClass('hide');
            } else {
                element.removeClass('hide');
                element.addClass('show');
            }
        };

        var linkFn = function(scope, element, attrs){

            logic(element);

            scope.click = function() {
                logic(element);
            };
        };


        return {
            restrict: 'E',
            template: '<a ng-click="click"> click </a>',
            link: linkFn
        };
    }
})();