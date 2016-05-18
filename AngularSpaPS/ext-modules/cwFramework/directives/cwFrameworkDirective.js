(function () {
    'use strict'

    angular.module('cwFramework')
    .directive('cwFramework', function () {
        return {
           // relative : 'A',
            transclude: false,
            scope: {
                title : '@',
                subtitle : '@',
                iconFile : '@',
            },
            controller: 'cwFrameworkController',
            templateUrl: './ext-modules/cwFramework/directives/cwFrameworkTemplate.html'
        };

    });
})();