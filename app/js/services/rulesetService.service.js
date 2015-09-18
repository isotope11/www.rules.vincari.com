var app = angular.module('app');

app.factory('RulesetService', ['$http', function($http){
  var RulesetService = new Object();
  var baseUrl = 'http://localhost:3000/clients'

  RulesetService.query = function(client_id){
    return $http.get(baseUrl+'/'+client_id+'/rulesets');
  };
  RulesetService.show = function(client_id, id){
    return $http.get(baseUrl+'/'+client_id+'/rulesets/'+id);
  };
  return RulesetService;
}]);