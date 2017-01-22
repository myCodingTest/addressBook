(function() {
    'use strict';


    angular.module('application.components').component('showContact', contactComponent());

    function contactComponent() {

        return {
            bindings: {
                contact: '='
            },
            controller: function() {

                this.editContact = function () {
                    console.log('editMode');
                };
            },
            templateUrl: 'components/contact.component.tpl.html'
        };

    }

})();