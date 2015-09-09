// Declare app level module which depends on filters, and services
angular.module('app', [
  'ngSanitize',
  'ngResource',
  'ui.router',
  'autoComplete',
  'RecursionHelper'
])
	.constant('VERSION', '0.7.0')
	.config(function appConfig($stateProvider, $locationProvider, $urlRouterProvider) {
		$locationProvider.hashPrefix('!');
		$urlRouterProvider.otherwise("/view");

		$stateProvider.state('view', {
			url: "/view",
			views: {
				"mainView": {
					templateUrl: "partials/view.html",
					controller: 'ViewCtrl',
					controllerAs: 'view'
				}
			}
		}).state('ast', {
      url: '/ast',
      views: {
        "mainView": {
          templateUrl: "partials/ast_builder.html",
          controller: "AstCtrl"
        }
      }
    });

		// /!\ Without server side support html5 must be disabled.
		return $locationProvider.html5Mode(false);
	});
