
(function () {
    'use strict'

    var cwMenuItemDirective = function () {
        return {
            require: '^cwMenu', // needs the cwMenu parent.
            transclude: false,
            scope: {
                label : '@',
                icon : '@',
                route : '@'
            },
            templateUrl: 'ext-modules/cwMenu/directives/cwMenuItemTemplate.html',
            link: function (scope, element, attrs, ctrl) {
                //JQuery onclick function and event to give us full control of the jquery event
                element.on('click', function (event) {
                    event.stopPropagation();
                    event.preventDefault();

                    /*
                        this needs to be called because the event is fired by Jquery and 
                        angular will have no clue that this is changing. 
                    */
                    scope.$apply(function () {
                        ctrl.setActiveItem(element);
                        ctrl.setRoute(scope.route);
                    });

                });

                scope.IsActive = function () {
                    ctrl.getActiveElement();
                    return element === ctrl.getActiveElement();
                }
            }
        }
    }

    //cwMenuItemDirective.$inject = ['$scope'];// not needed

    angular.module('cwMenu').directive('cwMenuItem', cwMenuItemDirective);
})();