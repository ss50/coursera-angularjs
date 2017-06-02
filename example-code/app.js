(function () {
  'use strict'
  angular.module('NameCalculator', [])
        .controller('NameCalculatorController', dependencyInjection);

        function dependencyInjection($scope, $filter, $injector) {
          $scope.name = "";
          $scope.totalValue = 0;
          $scope.upper = function() {
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
          }

          $scope.displayNumeric = function() {
            var totalNameValue = calculateNumericForString($scope.name);
            $scope.totalValue = totalNameValue;
          };

          function calculateNumericForString(string) {
            var totalStringValue = 0;
            for (var i = 0; i < string.length; i++) {
              totalStringValue += string.charCodeAt(i);
            }
            return totalStringValue;
          }

          console.log($injector.annotate(dependencyInjection));
        }

        function AnnotateMe(name, job) {
          return "something";
        }
})();
