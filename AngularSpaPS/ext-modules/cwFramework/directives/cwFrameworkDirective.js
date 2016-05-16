(function () {
    'use strict'

    angular.module('cwFramework')
    .directive('cwFramework', function () {
        return {
           // relative : 'A',
            transclude: false,
            scope: {},
            controller: 'cwFrameworkController',
            templateUrl: './ext-modules/cwFramework/directives/cwFrameworkTemplate.html'
        };

    });
})();