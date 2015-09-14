angular.module('app')
  .directive("astIf", [function(){
    return {
      restrict: "E",
      scope: {
        ast: "="
      },
      templateUrl: '/partials/directives/ast-if.html',
      controller: function($scope){}
    };
  }]);
