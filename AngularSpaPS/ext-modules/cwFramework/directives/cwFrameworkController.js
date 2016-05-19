(function () {
    'use strict'

    var cwFrameworkController = function ($scope, $rootScope, $window, $timeout) {
        var vm = this;
        vm.routeString = '';
        vm.Hello = 'HELOOOO';
        vm.isMenuVisible = true;
        vm.isMenuButtonVisible = true;
       

        var menuButtonClicked = function () {
            vm.isMenuVisible = !vm.isMenuVisible;
            broadcastMenuState();
            //$scope.$apply();
            // the call is likey to change the scope so call scope apply. 
        }

        var broadcastMenuState = function ()
        {
            $rootScope.$broadcast('cw-menu-show', {show : vm.isMenuVisible});
        }


        vm.menuButtonClicked = menuButtonClicked;

        /*Events area*/
        $scope.$on('cw-menu-item-selected-event', function (event, data) {
            vm.routeString = data.route;

            // after something is clicked the menu should go away
            checkWidth();
            broadcastMenuState(); // broadcast the show menu state after resizing
        });

        /*
            Events and JQuery
            wrap the window directive in a JQuery and use the JQ.on to fire a jquery event with a namespace of cwFramework.
            it'll be useful when we need to remove the event since it has a namespace.
        */
        $($window).on('resize.cwFramework', function () {
            // always have to do this inside a jquery function.
            $scope.$apply(function () {
                checkWidth();
                broadcastMenuState(); // broadcast the show menu state after resizing

            });
        });

        $scope.$on('destroy', function () {
            $($window).off('resize.cwFramework'); // remove the handler
        });

        var checkWidth = function () {
            // inner width has the scrollbar so you need to check the window width from jquery. 
            // take the full width of the view.
            var width = Math.max($($window).width(), $($window).innerWidth());
            vm.isMenuVisible = (width >= 768);
            vm.isMenuButtonVisible = !vm.isMenuVisible;

        }

        /*
            this will call the checkWidth outside of the normal digest process. 
            so the window width will be ready on load of the screen. 
            it doesn't need a scope apply because the scope will change. 
        */
        $timeout(function () {
            checkWidth();
        }, 0);
    };

    cwFrameworkController.$inject = ['$scope', '$rootScope', '$window', '$timeout'];

     angular.module('cwFramework')
    .controller('cwFrameworkController', cwFrameworkController);

  

   // angular.module('cwFramework')
   //.controller('cwFrameworkController', function ($scope) {

   //});
})();