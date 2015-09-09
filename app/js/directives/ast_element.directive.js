angular.module('app')
  .directive("astElement", ["RecursionHelper", function(RecursionHelper){
    var expressions = ["if", ">"];

    return {
      restrict: "E",
      scope: {
        ast: "="
      },
      templateUrl: '/partials/directives/ast-element.html',
      controller: function($scope) {
        $scope.astIsIf = function(){
          return angular.equals($scope.ast[0], "if");
        };
        $scope.astIsGreaterThan = function(){
          return angular.equals($scope.ast[0], ">");
        };
        $scope.astIsUnknown = function() {
          return expressions.indexOf($scope.ast[0]) > -1;
        }
      },
      compile: function(element) {
        return RecursionHelper.compile(element, function(scope, iElement, iAttrs, controller, transcludeFn){
        // normal link function goes here
        });
      }
    };
  }]);
