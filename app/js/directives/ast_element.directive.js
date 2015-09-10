angular.module('app')
  .directive("astElement", ["RecursionHelper", function(RecursionHelper){
    var expressions = ["if", ">", "get"];

    return {
      restrict: "E",
      scope: {
        ast: "="
      },
      templateUrl: '/partials/directives/ast-element.html',
      controller: function($scope) {
        $scope.astIsEmpty = function(){
          return angular.equals($scope.ast, []);
        };
        $scope.astIsIf = function(){
          return angular.equals($scope.ast[0], "if");
        };
        $scope.astIsGreaterThan = function(){
          return angular.equals($scope.ast[0], ">");
        };
        $scope.astIsInteger = function(){
          return angular.equals($scope.ast[0], "integer");
        };
        $scope.astIsGet = function(){
          return angular.equals($scope.ast[0], "get");
        };
        $scope.astIsUnknown = function() {
          return expressions.indexOf($scope.ast[0]) >= -1;
        };
        $scope.astIsArray = function() {
          return angular.isArray($scope.ast[0]);
        };
      },
      compile: function(element) {
        return RecursionHelper.compile(element, function(scope, iElement, iAttrs, controller, transcludeFn){
        console.log(scope.ast);
        });
      }
    };
  }]);
