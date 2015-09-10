angular.module('app')
  .directive("astElement", ["RecursionHelper", function(RecursionHelper){
    var expressions = ["if", ">", "get", "document","integer", "[]"];

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
        // Probably not needed
        $scope.astIsBool = function(){
          return typeof $scope.ast === 'boolean';
        };
        $scope.astIsDocument = function(){
          return angular.equals($scope.ast[0], "document");
        };
        $scope.astIsArray = function(){
          return angular.equals($scope.ast[0], "[]");
        };
        $scope.astIsString = function() {
          return (typeof $scope.ast[0] === 'string' &&
            expressions.indexOf($scope.ast[0]) <= -1);
        };
        $scope.astIsUnknown = function() {
          // not buggy but output is verbose from RecursionsHelper compile.
          return false;
          // return expressions.indexOf($scope.ast[0]) <= -1;
        };
      },
      compile: function(element) {
        return RecursionHelper.compile(element, function(scope, iElement, iAttrs, controller, transcludeFn){
          console.log(scope.ast);
        });
      }
    };
  }]);
