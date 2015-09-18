angular.module('app').controller('LoginCntrl', ['$location', '$scope', function LoginCntrl($location, $scope){
  $scope = {
    dataLoading: false,
    email: '',
    password: '',
    error: ''
  }

  $scope.login = function(){
    vm.dataLoading = true;
    // call authentication
    console.log($scope.dataLoading);
    vm.dataLoading = false;
  }
}]);