/*globals angular*/

angular.module('app').factory('curserPositionMidiator',
  function () {
    'use strict';
    var x = 0, y = 0,
      moving_left,
      moving_up;
    var service = {};
    service.update = function (newX, newY) {
      if (!x) { x = newX; }
      if (!y) { y = newY; }
      moving_up = newY < y;
      moving_left = newX < x;
      x = newX;
      y = newY;
    };

    service.isMoveingLeft = function () { return moving_left; };
    service.isMoveingUp = function () { return moving_up; };

    return service;
  });
