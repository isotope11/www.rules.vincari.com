var app = angular.module('app');

app.factory('ApiService',['$http','$log', '$q', '$timeout', 'AuthService', function($http, $log, $q, $timeout, AuthService){
  var ApiService = new Object();

  ApiService.searchProcedure = function(i) {
    var deffered = $q.defer();
    var url = '/api/procedures?user_id=79d747ee-ba80-47be-a6ce-38a6009c198a';
    var date = new Date().toUTCString();
    console.log(date);

    var req = {
      method: 'GET',
      url: 'https://rules-cors.testing.complymd.com'+url,
      headers: {
        'Access-Control-Allow-Headers': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': AuthService.get_auth_token(url, date),
        'Date': date
      }
    }
    // probably don't need the nested promises
    $http(req).
    then(function(respone){
      deffered.resolve(response);
    }, function(error, code){
      $log.error(error);
      deffered.reject(error);
    });
    return deffered.promise
  }
  return ApiService;
}]);