(function() {
    'use strict';


    angular.module('application.components').component('showContact', contactComponent());

    function contactComponent() {

        return {
            bindings: {
                contact: '='
            },
            controller: function() {
                var ctrl = this;
                ctrl.editMode = false;

                this.editContact = function () {
                    ctrl.editMode = !ctrl.editMode;
                    return !ctrl.editMode;
                };
                
            },
            templateUrl: 'components/contact.component.tpl.html'
        };

    }

})();