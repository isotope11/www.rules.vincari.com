angular.module('app')
  .directive("astGet", [function(){
    return {
      restrict: "E",
      scope: {
        ast: "="
      },
      templateUrl: '/partials/directives/ast-get.html'
    };
  }]);
