(function () {
    'use strict';

    angular
        .module('application.edit')
        .controller('EditController', EditController);

    function EditController($state, listService, lodash) {
        var edit = this;
        var contactUsername = $state.params.username;


        listService.getContactList().then(
        function (data) {
                var user = {login : {username: contactUsername}};
                edit.contact = lodash.filter(data, user)[0];
            }
        );

        this.save = function() {
            var user = {login : {username: contactUsername}};
            listService.updateUserData(user, edit.contact);

            $state.go('list', {}, {});
        };
    }
})();
