angular.module('app').controller('ViewCtrl', ['$scope', 'ApiService', function ViewCtrl($scope, ApiService) {
  $scope.searchResults = ApiService.searchProcedure("...");
  $scope.searchResults.then(function(data){
    $scope.searchResults = data;
  });

  $scope.getSearchResults = function(){
    return $scope.searchResults;
  }

  $scope.onSearch = function(search){
    $scope.newResults = ApiService.searchProcedure(search);
    $scope.newResults.then(function(data){
      $scope.searchResults = data;
    });
  }

  $scope.onSelection = function(suggestion){
    console.log("Suggestion selected: " + suggestion );
  }
}]);
