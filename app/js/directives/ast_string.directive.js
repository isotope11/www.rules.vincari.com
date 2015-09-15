angular.module('app')
  .directive("astString", [function(){
 return {
  restrict: 'AE',
  scope: {
    ast: '='
  },
  templateUrl: '/partials/directives/ast-string.html',
  controller: function($scope){
    console.log($scope.ast);
    $scope.currentText = $scope.ast
    $scope.updateText = function(){
      $scope.ast.push($scope.currentText);
    }
  }
 }
 }]);
