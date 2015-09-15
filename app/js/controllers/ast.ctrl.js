angular.module('app').controller('AstCtrl', ['$scope', function AstCtrl($scope){
  $scope.ast = ["if", [
                  [">", [
                     ["get", [
                        ["document", []],
                        ["[]", ["patient", "bmi"]]
                     ]],
                     ["integer", 40]
                  ]],
                  true,
                  false
               ]];
//  $scope.ast = [];
}]);
