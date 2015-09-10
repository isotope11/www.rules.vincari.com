angular.module('app')
  .directive("astArray", [function(){
    return {
      restrict: "E",
      scope: {
        ast: "="
      },
      templateUrl: '/partials/directives/ast-array.html'
    };
  }]);
