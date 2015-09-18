angular.module('app').controller('ClientCtrl', ['$scope', '$stateParams','ClientService',
  function ClientCtrl($scope, $stateParams, ClientService){
  var client = ClientService.show($stateParams.id).then(function(client){
    $scope.client = client.data;
  })
}]);