angular.module('iLearnApp').service('questionService', function ($http, ENDPOINT_URI) {
    var service = this,
        path = 'questions/';

    function getUrl() {
        return ENDPOINT_URI + path;
    }
    service.getAllQuestions = function () {
        return $http.get(getUrl());
    };
    service.getQuestion = function (id) {
        return $http.get(getUrl() + id);
    };
    service.insertQuestion = function (model) {
        return $http.post(getUrl(), model);
    };
    service.updateQuestion = function (id, model) {
        return $http.put(getUrl() + id, model);
    };
    service.deleteQuestion = function (id) {
        return $http.delete(getUrl() + id);
    };
});
