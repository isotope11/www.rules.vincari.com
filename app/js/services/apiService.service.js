var app = angular.module('app');

app.factory('ApiService',['$http','$log', '$q', '$timeout', 'AuthService', function($http, $log, $q, $timeout, AuthService){
  var ApiService = new Object();

  ApiService.searchProcedure = function(i) {
    var deffered = $q.defer();
    var url = 'api/procedures';
    var date = new Date();

    var req = {
      method: 'GET',

      url: 'https://app.complymd.com/'+url,
      headers: {
        'Authorization': AuthService.get_auth_token(url, date)
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