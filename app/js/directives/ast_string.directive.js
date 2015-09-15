angular.module('app')
  .directive("astString", [function(){
 return {
  restrict: 'E',
  scope: {
    ast: '='
  },
  templateUrl: '/partials/directives/ast-string.html',
    controller: function($scope){
      $scope.currentText = $scope.ast
      $scope.updateText = function(){
        $scope.ast = $scope.currentText;
      }
    }
 }
 }]);
