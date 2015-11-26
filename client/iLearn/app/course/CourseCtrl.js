

/**
 * @ngdoc function
 * @name iLearnApp.controller:CourseCtrl
 * @description
 * # CourseCtrl
 * Controller of the iLearnApp
 */
angular.module('iLearnApp')
  .controller('CourseCtrl', ['$rootScope', '$scope', '$location', 'courseService', function ($rootScope, $scope, $location, courseService) {
      $scope.roleG = $rootScope.userData.Role;
      $scope.roleL = $rootScope.userData.Role;
      $scope.side = $rootScope.userData.Role;

      courseService.getAllCourse().
          then(function (response) {
              $scope.courseListG = response.data;
              $scope.courseListL = response.data;

          }, function (err) {
              alert("Error");
          }
      );

     
      $scope.addCourse = function () {

          if ($scope.courseName == null) {
              alert("course name can't empty");
              return 0;
          }

          if ($scope.courseDuration == null) {
              alert("course duration can't empty");
              return 0;

          }

          if ($scope.courseType == null) {
              alert("course type can't empty");
              return 0;
          }

          if ($scope.courseFee == null) {
              alert("course fee can't empty");
              return 0;
          }
          if ($scope.instructor == null) {
              alert("instructor name can't empty");
              return 0;
          }

          var data =
         {
             CourseName: $scope.courseName,
             Duration: $scope.courseDuration,
             CourseType: $scope.courseType,
             CourseFee: $scope.courseFee,
             Instructor: $scope.instructor
         }
          courseService.insertCourse(data)
             .then(function (response) {
                 alert("Adding Course success");
                
             }, function (err) {
                 alert("Adding Course Failed");
             });
         
      }



  }]);