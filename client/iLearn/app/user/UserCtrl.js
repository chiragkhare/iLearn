'use strict'
/**
 * @ngdoc function
 * @name iLearnApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the iLearnApp
 */
angular.module('iLearnApp')
  .controller('UserCtrl', ['$rootScope', '$scope', '$location', 'userService', function ($rootScope, $scope, $location, userService) {
      //Function for Login Button In Login Page
      $scope.userLogin = function () {
          userService.getUserByFilter('?Email=', angular.lowercase($scope.userName))
             .then(function (response) {
                 if (response.data.length == 0) {
                     alert("Username is incorrect");
                     return;
                 }
                 else if (angular.lowercase($scope.userName) == response.data[0].Email) {
                     if ($scope.password == response.data[0].UserPassword) {
                         $rootScope.userData = response.data[0];
                         $location.path('/courseGrid');
                     }
                     else {
                         alert("Password is incorrect");
                     }
                 }
             }, function (err) {
                 alert("Login Failed");
             });
      }

      //Function for editProfile
      $scope.saveChanges = function () {

          if ($scope.userName == null) {
              alert("Name is rquired");
              return;
          }
          if ($scope.userPermanentAdd == null) {
              alert("Permanent Address is rquired");
              return;
          }
          if ($scope.userTemporaryAdd == null) {
              alert("Temporary Address is rquired");
              return;
          }
          if ($scope.userContact == null) {
              alert("Contact is rquired");
              return;
          }
          if ($scope.userAltContact == null) {
              alert("Alternative Contact is rquired");
              return;
          }
          if ($scope.userPassword == null) {
              alert("Password is rquired");
              return;
          }

          var data = {
              Name: $scope.userName,
              Email: $scope.userEmail,
              Address: [{ permanent: $scope.userPermanentAdd }, { temporary: $scope.userTemporaryAdd }],
              PhoneNum: [{ contact: $scope.userContact }, { altcontact: $scope.userAltContact }],
              UserPassword: $scope.userPassword,
          }

          userService.updateUser($rootScope.userData._id, data)
              .then(function (response) {
                  alert("Changes are saved successfully");
                  $location.path('/coursegrid');
              }, function (err) {
                  alert("faliure");
              });
      }

      //Function for createUser
      $scope.createAccount = function () {
          var data = {
              Name: $scope.name,
              Email: $scope.email,
              Address: [{ permanent: $scope.permanentAdd }, { temporary: $scope.temporaryAdd }],
              PhoneNum: [{ contact: $scope.contactNum }, { altcontact: $scope.altContactNum }],
              UserPassword: $scope.password,
              Gender: $scope.gender,
              Role: $scope.role
          }

          userService.insertUser(data)
              .then(function (succ) {
                  alert("Data Successfully Saved!");
              }, function (err) {
                  alert("faliure");
              });
      };

      function loadProfile() {
          if ($rootScope.userData) {
              $scope.userName = $rootScope.userData.Name;
              $scope.userEmail = $rootScope.userData.Email;
              $scope.userPermanentAdd = $rootScope.userData.Address[0].permanent;
              $scope.userTemporaryAdd = $rootScope.userData.Address[1].temporary;
              $scope.userContact = $rootScope.userData.PhoneNum[0].contact;
              $scope.userAltContact = $rootScope.userData.PhoneNum[1].altcontact;
              $scope.userPassword = $rootScope.userData.UserPassword;
              $scope.gender = $rootScope.userData.Gender;
              $scope.role = $rootScope.userData.Role;
          }
      }

      loadProfile();

      //Function for Email Button in Forget html page
      $scope.forgotGetEmail = function () {
          if ($scope.email == null) {
              alert("Please provide input.");
          }

          userService.getUserByFilter('?Email=', $scope.email)
             .then(function (response) {
                 if ($scope.email == response.data[0].Email) {
                     $scope.myValue = true;
                     //Function for Get Password Button in Forget html page
                     $scope.forgotGetPassword = function () {
                         if ($scope.phNum == response.data[0].PhoneNum[0].contact) {
                             $scope.myPwd = true;
                             $scope.pword = "Your Password is : " + response.data[0].UserPassword;
                         }
                         else {
                             alert("Invalid Credentials(pno)");
                         }
                     }

                 }
                 else {
                     alert("Invalid Credentials(email)");
                 }
             }, function (err) {
                 alert("Error  invalid credentilas!!!");
             });
      };
  }]);

