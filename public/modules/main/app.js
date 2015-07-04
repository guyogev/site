/*globals angular */
'use strict';
angular.module('app', ['famous.angular']);

angular.module('app').controller('appCtl', function ($scope, curserPositionMidiator) {
  $scope.init = function () {
    $scope.img_rack_src = [
      'images/angular.png',
      'images/famous.png',
      'images/bower.png',
      'images/grunt.png',
      'images/rails.png',
      'images/js.png',
      'images/yoman.png',
      'images/docker.png',
      'images/AWS.png',
      'images/heroku.png',
      'images/new-relic.png',
    ];
  };

  $scope.upDateCurserDircetion = function (event) {
    curserPositionMidiator.update(event.pageX, event.pageY);
  };
});