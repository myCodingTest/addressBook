(function() {
  'use strict';

  angular
    .module('application.edit', ['ui.router'])
    .config(EditConfig);

  function EditConfig($stateProvider) {
    $stateProvider.state( 'edit', {
      url: '/edit/:id',
      views: {
        "main": {
          controller: 'EditController',
          controllerAs: 'edit',
          templateUrl: 'edit/edit.tpl.html'
        }
      }
    });
  }
})();
