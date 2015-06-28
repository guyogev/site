/*globals angular */
'use strict';
angular.module('app', ['famous.angular']);

angular.module('app').controller('appCtl', function ($scope) {
  $scope.init = function () {
    $scope.img_rack_src = [
      'images/angular.png',
      'images/famous.png',
    ];
  };
});