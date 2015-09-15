angular.module('app')
  .directive("astInteger", [function(){
    return {
      restrict: "E",
      scope: {
        ast: "="
      },
      templateUrl: '/partials/directives/ast-integer.html',
      controller: function($scope){
      }
    };
  }]);
