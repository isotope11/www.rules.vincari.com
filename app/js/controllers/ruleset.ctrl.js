angular.module('app').controller('RuleSetCtrl', ['$scope', '$stateParams','RulesetService',
  function RuleSetCtrl($scope, $stateParams, RulesetService){

  var ruleset = RulesetService.show($stateParams.client_id, $stateParams.id).then(function(ruleset){
    $scope.ruleset = ruleset.data;
  })
}]);