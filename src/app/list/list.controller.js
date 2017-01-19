(function () {
    'use strict';

    angular
        .module('application.list')
        .controller('ListController', ListController);

    function ListController(listService) {
        var list = this;


        listService.getContactList().then(
            function (data) {
                list.contactList = data;
            }
        );
    }
})();
