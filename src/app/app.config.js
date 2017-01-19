(function() {
  'use strict';

  angular
    .module('application')
    .config(ApplicationConfig);

  function ApplicationConfig($urlRouterProvider, $httpProvider, $translateProvider) {
    $urlRouterProvider.otherwise('home');

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
