angular.module('app')
  .directive("astElement", ["RecursionHelper", function(RecursionHelper){
    var expressions = ["if", ">", "get", "document","integer", "[]"];
    var primitives = ["string", "boolean"];

    return {
      restrict: "E",
      scope: {
        ast: "="
      },
      templateUrl: '/partials/directives/ast-element.html',
      controller: function($scope) {
        $scope.conditionalArray = ['if', '>'];
        $scope.valuesArray = ['get', 'document', 'integer', 'boolean', 'string', '[]'];

        $scope.deleteBlock = function(){
          console.log('test');
          $scope.ast = [];
        }
        $scope.createBlock = function(type) {
          console.log(type);
          if(type === 'if'){
            $scope.ast = ["if", [[],[],[]]];
          }
          if(type ==='boolean'){
            $scope.ast = true
          }
          if(type === '>'){
            $scope.ast = ['>', [[],[]]];
          }
          if(type === 'get'){
            $scope.ast = ['get', [[],[]]];
          }
          if(type === 'integer'){
            $scope.ast = ['integer', 0];
          }
          if(type === 'string'){
            $scope.ast = '';
          }
          if(type === 'document'){
            $scope.ast = ['document', [[]]];
          }
          if(type === '[]'){
            $scope.ast = ['[]', []];
          }
        };
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
        $scope.astIsPrimitive = function() {
          return primitives.indexOf(typeof $scope.ast) > -1;
        }
      },
      compile: function(element) {
        return RecursionHelper.compile(element, function(scope, iElement, iAttrs, controller, transcludeFn){
          console.log(scope.ast);
        });
      }
    };
  }]);
