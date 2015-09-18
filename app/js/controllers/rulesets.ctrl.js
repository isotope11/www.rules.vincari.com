angular.module('app').controller('RuleSetsCtrl', ['$scope','$stateParams','RulesetService', function RuleSetsCtrl($scope, $stateParams, RulesetService){
  console.log($stateParams);
  RulesetService.query($stateParams.client_id).then(function(rulesets){
    $scope.rulesets = rulesets.data;
  });
}]);