angular.module('followApp', ['ngMaterial', 'ngRoute'])
.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
 
}]);