(function() {
  'use strict';

  angular
    .module('application')
    .config(ApplicationConfig);

  function ApplicationConfig($urlRouterProvider, $locationProvider, $translateProvider) {
    $urlRouterProvider.otherwise('home');

    // $locationProvider.html5Mode(true);

    $translateProvider.registerAvailableLanguageKeys(['it_IT', 'en_EN'], {
      'it_*': 'it_IT',
      'en_*': 'en_EN'
    });

    $translateProvider.useStaticFilesLoader({
      prefix: 'assets/locale/locale-',
      suffix: '.json'
    });

    $translateProvider.use('it_IT');
  }
})();
