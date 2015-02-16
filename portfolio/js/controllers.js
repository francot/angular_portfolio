

var phonecatApp = angular.module('phonecatApp', ['ui.utils']);

phonecatApp.controller('PhoneListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });

    $scope.filters = { };

    $scope.orderProp = 'age';
  }])
