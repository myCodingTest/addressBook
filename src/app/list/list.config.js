(function() {
  'use strict';

  angular
    .module('application.list', ['ui.router'])
    .config(ListConfig);

  function ListConfig($stateProvider) {
    $stateProvider.state( 'list', {
      url: '/',
      views: {
        "main": {
          controller: 'ListController',
          controllerAs: 'list',
          templateUrl: 'list/list.tpl.html'
        }
      }
    });
  }
})();
