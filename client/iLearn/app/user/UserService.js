angular.module('iLearnApp').service('userService', function ($http, ENDPOINT_URI) {
    var service = this,
        path = 'users/';

    function getUrl() {
        return ENDPOINT_URI + path;
    }

    service.getAllUser = function () {
        return $http.get(getUrl());
    };

    service.getUser = function (id) {
        return $http.get(getUrl() + id);
    };

    service.getUserByFilter = function (filter, value) {
        return $http.get(getUrl() + filter + value);
    };

    service.insertUser = function (model) {
        return $http.post(getUrl(), model);
    };

    service.updateUser = function (id, model) {
        return $http.put(getUrl() + id, model);
    };

    service.deleteUser = function (id) {
        return $http.delete(getUrl() + id);
    };
});