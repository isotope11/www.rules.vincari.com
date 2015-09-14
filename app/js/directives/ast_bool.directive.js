angular.module('app')
  .directive("astBool", [function(){
    return {
      restrict: "E",
      scope: {
        ast: "="
      },
      templateUrl: '/partials/directives/ast-bool.html',
      controller: function($scope){
        $scope.selectedItem = $scope.ast ? 'true' : 'false'
        $scope.update = function(){
          $scope.ast = $scope.selectedItem === 'true' ? true : false
          console.log($scope);
        }
      }
    };
  }]);
