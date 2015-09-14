angular.module('app')
  .directive("astInteger", [function(){
    return {
      restrict: "E",
      scope: {
        ast: "="
      },
      templateUrl: '/partials/directives/ast-integer.html',
      controller: function($scope){
        $scope.innerInteger = $scope.ast[1];
        $scope.updateInteger = function(){
          $scope.ast[1] = $scope.innerInteger;
        }
      }
    };
  }]);
