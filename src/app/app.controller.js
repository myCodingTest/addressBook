(function() {
  'use strict';

  angular
    .module('application')
    .controller('ApplicationController', ApplicationController);

  function ApplicationController() {
    var app = this;

    app.pageTitle = 'Address Book';

    app.toggleLang = function() {
      if ($translate.use() === 'en_EN') {
        $translate.use('it_IT');
      } else {
        $translate.use('en_EN');
      }
    };

  }
})();
