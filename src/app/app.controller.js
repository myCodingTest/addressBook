(function() {
  'use strict';

  angular
    .module('application')
    .controller('ApplicationController', ApplicationController);

  function ApplicationController(listService, $translate) {
    var app = this;

    app.pageTitle = 'Address Book';

    listService.getContactList().then(
        function (data) {
          app.contactList = data;
        }
    );

    app.currentLang = $translate.use();

    app.availableLang = ['IT', 'EN'];
    app.allLang = {
      'EN': 'en_EN',
      'IT': 'it_IT'
    };

    app.toggleLang = function(lang) {
      $translate.use(lang);
      app.currentLang = $translate.use();
    };

  }
})();
