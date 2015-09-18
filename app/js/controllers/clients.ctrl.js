angular.module('app').controller('ClientsCtrl',
  ['$scope','ClientService', 'AuthenticationService',
  function ClientsCtrl($scope, ClientService, AuthenticationService){
  $scope.api_key = ''
  $scope.clients = [];

  $scope.setApiKey = function(){
    AuthenticationService.setCredentials($scope.api_key);
    $scope.api_key = '';
    ClientService.query().then(function(clients){
      $scope.clients = clients.data;
    });
  }
}]);