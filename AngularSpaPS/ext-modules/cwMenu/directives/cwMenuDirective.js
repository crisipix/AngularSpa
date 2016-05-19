
(function () {
    'use strict'

    var cwMenuDirective = function()
    {
        return {
            transclude: true,
            templateUrl: 'ext-modules/cwMenu/directives/cwMenuTemplate.html',
            scope : {},
            controller: 'cwMenuController',
            link: function (scope, element, attrs) { },
            controllerAs: 'vm',
            bindToController: true, //required in 1.3+ with controllerAs
        }
    }

    //cwMenuDirective.$inject = ['$scope']; // not needed

    angular.module('cwMenu').directive('cwMenu', cwMenuDirective);
})();