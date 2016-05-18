/* Exception Handling*/
(function () {
    var configuration = function ($provide) {
        $provide.decorator('$exceptionHandler', ['$delegate', function ($delegate) {
            return function (exception, cause)
            {
                $delegate(exception, cause);
                alert(exception.message);
            }
        }]);
    }

    configuration.$inject = ['$provide'];


    angular.module('app')
    .config(configuration);
})();