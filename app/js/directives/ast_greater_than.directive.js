angular.module('app')
  .directive("astGreaterThan", [function(){
    return {
      restrict: "E",
      scope: {
        ast: "="
      },
      templateUrl: '/partials/directives/ast-greater-than.html'
    };
  }]);
