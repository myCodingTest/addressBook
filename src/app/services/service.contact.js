(function(){
    'use strict';

    angular.module('application.services').factory('listService', listService);

    function listService($q, $http, lodash) {

        var contactList;

        var getContactList = function() {
            return $q(function(resolve, reject) {

                if(contactList) {
                    resolve(contactList);
                } else {
                    $http({
                        method: 'GET',
                        url: 'https://randomuser.me/api/?results=20'
                    }).then(function successCallback(response) {
                        contactList = response.data.results;
                        resolve(contactList);
                    }, function errorCallback(response) {
                        reject(response);
                    });
                }

            });

        };

        var updateUserData = function(user, userData) {
            var index = lodash.findIndex(contactList, user);
            contactList[index].name = userData.name;
        };

        return {
            getContactList: getContactList,
            updateUserData: updateUserData
        };

    }

})();