angular.module('app')
  .directive("astDocument", [function(){
    return {
      restrict: "E",
      scope: {
        ast: "="
      },
      templateUrl: '/partials/directives/ast-document.html'
    };
  }]);
