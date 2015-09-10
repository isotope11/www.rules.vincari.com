angular.module('app')
  .directive("astBool", [function(){
    return {
      restrict: "E",
      scope: {
        ast: "="
      },
      templateUrl: '/partials/directives/ast-bool.html'
    };
  }]);
