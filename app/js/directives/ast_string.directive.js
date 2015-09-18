angular.module('app')
  .directive("astString", [function(){
    return {
    scope: {
      ast: '='
    },
    templateUrl: '/partials/directives/ast-string.html',
    controller: function($scope){
    }
   }
 }]);
