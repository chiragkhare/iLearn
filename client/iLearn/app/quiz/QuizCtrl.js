/**
 * @ngdoc function
 * @name iLearnApp.controller:QuizCtrl
 * @description
 * # QuizCtrl
 * Controller of the iLearnApp
 */
angular.module('iLearnApp')
.controller('QuizCtrl', ['$scope', '$location', 'questionService', 'courseService', function ($scope, $location, questionService, courseService) {
    courseService.getAllCourse()
    .then(function (response) {
        alert("list");
        $scope.list = response.data;
    }, function (err) {
        alert("Adding Course Failed");
    });
    $scope.addQuestion = function () {
        if ($scope.course == null) {
            alert("select course");
            return;
        }

        if ($scope.question == null) {
            alert("plz provide question");
            return;
        }

        if ($scope.optionA == null) {
            alert("plz provide optiona");
            return;
        }

        if ($scope.optionB == null) {
            alert("plz provide optionb");
            return;
        }
        if ($scope.optionC == null) {
            alert("plz provide optionc");
            return;
        }
        if ($scope.optionD == null) {
            alert("plz provide optiond");
            return;
        }
        if ($scope.answer == null) {
            alert("plz provide answer");
            return;
        }

        var data =
        {
            CourseId: $scope.course,
            Question: $scope.question,
            OptionA: $scope.optionA,
            OptionB: $scope.optionB,
            OptionC: $scope.optionC,
            OptionD: $scope.optionD,
            Answer: $scope.answer
        }

        questionService.insertQuestion(data)
        .then(function (response) {
            alert("Adding Question success");
        }, function (err) {
            alert("Adding Question Failed");
        });
    }
}]);