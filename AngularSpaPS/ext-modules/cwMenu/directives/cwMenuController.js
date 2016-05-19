(function () {
    'use strict'
    var cwMenuController = function ($scope, $rootScope) {
        var vm = this;
        vm.activeElement;
        vm.route;
        vm.showMenu;

        var setActiveItem = function (element) {
            vm.activeElement = element;
        }

        var getActiveElement = function (element) {
            return vm.activeElement;
        }
        
        var setRoute = function (route) {
            // will only broadcast out to listeners of this controller
            $rootScope.$broadcast('cw-menu-item-selected-event', {route : route});
            //vm.route = route;
        }

        /*
            listening to //$rootScope.$broadcast('cw-menu-show', { show: vm.isMenuVisible });
        */
        $scope.$on('cw-menu-show', function (event, data) {
            vm.showMenu = data.show;

        });

        vm.setActiveItem = setActiveItem;
        vm.getActiveElement = getActiveElement; // give active element to lower directive. 
        vm.setRoute = setRoute;
    }

    cwMenuController.$inject = ['$scope', '$rootScope']
    angular.module('cwMenu').controller('cwMenuController', cwMenuController);
})();