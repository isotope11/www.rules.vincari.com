angular.module('app').factory('AuthService', function() {
  var AuthService = new Object();

  AuthService.get_auth_token = function(url, date){
    var api_id = 'cd8f0c4eb0c3c917389972f0b8c0a180';
    var api_secret = '7cc599034bc5d8999b6a2253ad93091d';
    var content_type = "application/json"
    var token_string = content_type +",,"+url+","+date;
    var token = generate_token(token_string, api_secret);
    var header = "APIAuth "+api_id+":"+token
    return header;
  }

  var generate_token = function(token_string, api_secret) {
    var SHA1 = new Hashes.SHA1;
    return SHA1.b64_hmac(token_string, api_secret);
  }

  return AuthService;
});