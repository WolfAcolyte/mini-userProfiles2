angular.module('userProfiles').controller('MainController', function($scope, mainService) {

  $scope.getUsers = function() {
  	mainService.getUsers().then(function(response){
      console.log(response);
      $scope.users = response.data.data;
    }, function(error){
      console.log(error);
    });
  }


  $scope.getUsers();

});