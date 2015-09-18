var app = angular.module('app');

app.factory('ClientService', ['$http', function($http){
  var ClientService = new Object();
  var baseUrl = 'http://localhost:3000/clients'

  ClientService.query = function(){
    return $http.get(baseUrl)
  }
  ClientService.show = function(id){
    return $http.get(baseUrl+'/'+id);
  }
  return ClientService;
}]);