(function () {
    'use strict'

    angular.module('cwFramework')
    .directive('cwFramework', function () {
        return {
           // relative : 'A',
            transclude: true,
            scope: {
                title : '@',
                subtitle : '@',
                iconFile : '@',
            },
            controller: 'cwFrameworkController',
            templateUrl: './ext-modules/cwFramework/directives/cwFrameworkTemplate.html',
            controllerAs: 'vm',
            bindToController: true, //required in 1.3+ with controllerAs
            /*
                Starting with Angular 1.3 you’ll also need to add a bindToController property as well to ensure that properties 
                are bound to the controller rather than to the scope. Here’s an example of the previous directive that has been converted to use the controllerAs syntax:
                http://weblogs.asp.net/dwahlin/creating-custom-angularjs-directives-part-6-using-controllers
            */
        };

    });
})();