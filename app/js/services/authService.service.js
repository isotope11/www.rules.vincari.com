angular.module('app').factory('AuthService', function() {
  var AuthService = new Object();

  AuthService.get_auth_token = function(url, date){
    var api_id = '80be3a4b60c3b74be59aa6a20b8caccf';
    var api_secret = '649e4ab643936880038d16b1f611d269';
    var user_id = '79d747ee-ba80-47be-a6ce-38a6009c198a';
    var content_type = "application/json"
    var token_string = content_type +",,"+url+","+date;
    console.log(token_string);
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