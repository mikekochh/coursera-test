(function () {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.CheckTooMuch = function () {
            if ($scope.foodList === undefined || $scope.foodList.length == 0) {
                $scope.finalMessage = "Please enter data first";
                return;
            }

            var foodArray = $scope.foodList.split(',');
            if (foodArray.length <= 3) {
                $scope.finalMessage = "Enjoy!";
            }
            else {
                $scope.finalMessage = "Too much!";
            }
        }
    }
}

)();