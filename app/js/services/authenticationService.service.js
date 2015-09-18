var app = angular.module('app');

app.factory('AuthenticationService', ['$http', '$cookies', '$rootScope', function($http, $cookies, $rootScope){
  var AuthenticationService = new Object();

  AuthenticationService.setCredentials = function(api_key){
    $rootScope.globals = {
      currentUser: {
        api_key: api_key
      }
    }
    $http.defaults.headers.common['Authorization'] = 'Token token=' + api_key;
    $http.defaults.headers.common['Accept'] = "application/vnd.vincari_rules.v1";
    $http.defaults.headers.common['Content-Type'] = "application/json";
    $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    $cookies.globals = $rootScope.globals;
  }
  return AuthenticationService;
}]);