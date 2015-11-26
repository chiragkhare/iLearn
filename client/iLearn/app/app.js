angular
  .module('iLearnApp', ['ngRoute'])
  .constant('ENDPOINT_URI', 'http://localhost:3000/')
  .config(function ($routeProvider) {
      $routeProvider
        .when('/login', {
            templateUrl: 'app/user/login.html',
            controller: 'UserCtrl'
        })
        .when('/courseGrid', {
            templateUrl: 'app/course/coursesGrid.html',
            controller: 'CourseCtrl'
        })
        .when('/courseList', {
            templateUrl: 'app/course/coursesList.html',
            controller: 'CourseCtrl'
        })
        .when('/quiz', {
            templateUrl: 'app/quiz/quiz.html',
            controller: 'QuizCtrl'
        })
        .when('/createUser', {
            templateUrl: 'app/user/createUser.html',
            controller: 'UserCtrl'
        })
        .when('/editProfile', {
            templateUrl: 'app/user/editProfile.html',
            controller: 'UserCtrl'
        })
        .when('/questionAdd', {
            templateUrl: 'app/quiz/questionAdd.html',
            controller: 'QuizCtrl'
        })
          .when('/forgotPassword', {
              templateUrl: 'app/user/forgotPassword.html',
              controller: 'UserCtrl'
          })
          .when('/courseAdd', {
              templateUrl: 'app/course/courseAdd.html',
              controller: 'CourseCtrl'
          })
           .when('/sidebar', {
               templateUrl: 'components/sidebar/sidebar.html',
               controller: 'CourseCtrl'
           })
        .otherwise({
            redirectTo: '/login'
        });
  })
  .run(['$route', function ($route) {
      $route.reload();
  }]);