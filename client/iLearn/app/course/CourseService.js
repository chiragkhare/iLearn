angular.module('iLearnApp').service('courseService', function ($http, ENDPOINT_URI) {
    var service = this,
        path = 'courses/';

    function getUrl() {
        return ENDPOINT_URI + path;
    }

    service.getAllCourse = function () {
        return $http.get(getUrl());
    };
    service.getCourse = function (id) {
        return $http.get(getUrl() + id);
    };
    service.insertCourse = function (model) {
        return $http.post(getUrl(), model );
    };
    service.updateCourse = function (id,model) {
        return $http.put(getUrl() + id,model);
    };
    service.deleteCourse = function (id) {
        return $http.delete(getUrl() + id);
    };
});
