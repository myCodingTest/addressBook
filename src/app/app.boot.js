(function() {
  'use strict';

  angular
    .module('application', [
        'templates-app',
        'templates-common',
        'application.home',
        'application.list',
        'application.edit',
        'application.services',
        'ui.router',
        'pascalprecht.translate'
    ])
    .run(run);

  function run($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
      // react on state change events
    });
  }
})();
