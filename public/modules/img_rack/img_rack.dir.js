/*globals angular */
'use strict';
angular.module('app')
  .directive('imgRack', function () {
    return {
      restrict: 'E',
      scope: {
        images: '='
      },
      templateUrl: 'modules/img_rack/img_rack.view.html',
      link: function postLink(scope, elem, attr) {
      },
    };
  });