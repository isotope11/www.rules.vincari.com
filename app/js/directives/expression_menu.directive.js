angular.module('app')
  .directive('expressionMenu', [function() {
    return {
      restrict: 'A',
      link: function(scope, elem, attrs) {
        $('div.dropdown-toggle').dropdown();
      }
    };
}])
