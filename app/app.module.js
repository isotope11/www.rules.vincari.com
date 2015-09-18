// Declare app level module which depends on filters, and services
angular.module('app', [
  'ngSanitize',
  'ngResource',
  'ui.router',
  'autoComplete',
  'RecursionHelper',
  'ngCookies'
  ])
.constant('VERSION', '0.7.0')
.config(function appConfig($stateProvider, $locationProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/view");

  $stateProvider
    .state('view', {
      url: "/view",
      views: {
        "mainView": {
          templateUrl: "partials/view.html",
          controller: 'ViewCtrl',
          controllerAs: 'view'
        }
      }
    })
    .state('ast', {
      url: '/ast',
      views: {
        "mainView": {
          templateUrl: "partials/ast_builder.html",
          controller: "AstCtrl"
        }
      }
    })
    .state('login', {
      url: '/login',
      views: {
        "mainView": {
          templateUrl: "partials/login.html",
          controller: "LoginCtrl"
        }
      }
    })
    .state('clients', {
      url: '/clients',
      views: {
        "mainView": {
          templateUrl: "partials/clients/index.html",
          controller: "ClientsCtrl"
        }
      }
    })
    .state('client', {
      url: '/client/:id',
      views: {
        "mainView": {
          templateUrl: "partials/clients/show.html",
          controller: "ClientCtrl"
        }
      }
    })
    .state('client_rulesets', {
      url: '/client/:client_id/rulesets',
      views: {
        "mainView": {
          templateUrl: "partials/rulesets/index.html",
          controller: "RuleSetsCtrl"
        }
      }
    })
    .state('client_ruleset', {
      url: '/client/:client_id/rulesets/:id',
      views: {
        "mainView": {
          templateUrl: "partials/rulesets/show.html",
          controller: "RuleSetCtrl"
        }
      }
    });

		// /!\ Without server side support html5 must be disabled.
		return $locationProvider.html5Mode(false);
	});
