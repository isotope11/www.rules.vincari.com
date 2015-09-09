var app = angular.module('app');

app.factory('ApiService',['$http','$log', '$q', '$timeout', 'AuthService', function($http, $log, $q, $timeout, AuthService){
  var ApiService = new Object();

  ApiService.searchProcedure = function(i) {
    var deffered = $q.defer();
    var url = 'api/procedures?query=lap+chole&report_type=Operative&user_id=79d747ee-ba80-47be-a6ce-38a6009c198a';
    var date = new Date().toUTCString();

    var req = {
      method: 'GET',

      url: 'https://rules-cors.testing.complymd.com/'+url,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': AuthService.get_auth_token(url, date),
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