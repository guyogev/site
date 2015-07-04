/*globals angular */
'use strict';
angular.module('app')
  .directive('animatedImage', function ($famous, curserPositionMidiator) {
    return {
      restrict: 'E',
      scope: {
        // Isolate scope parameter list
        title: '@',
        src: '@'
      },
      templateUrl: 'modules/animated_img/animated_img.view.html',
      link: function postLink(scope, elem, attr) {
        // Init

        var LOCKED = false;
        function lock() {
          LOCKED = true;
        }
        function unlock() {
          LOCKED = false;
        }
        var Transitionable = $famous['famous/transitions/Transitionable'];
        var SpringTransition = $famous['famous/transitions/SpringTransition'];
        Transitionable.registerMethod('spring', SpringTransition);
        var duration = 200;
        scope.rotate = new Transitionable(0);
        // UI -> Model
        // Here we write handlers for the local widget’s UI events
        // and mutate the scope accordingly and/or call callbacks
        // on the scope to let the component know that something happened
        scope.animate = function (event) {
          if (LOCKED) { return; }
          lock();
          var direction = curserPositionMidiator.isMoveingLeft() ? -2 : 2;
          scope.rotate.set(
            direction * 0.45 * Math.PI,
            {
              duration: duration,
              // method: 'spring',
              // period: duration,
              // dampingRatio: 0.1
            },
            function () {
              scope.rotate.set(
                0,
                {
                  duration: duration,
                },
                unlock
              );
            }
          );
        };
        // Model -> UI
        // Here we write watches on the isolate scope and change the
        // drawing of the widget according to changes in the model

        // Cleanup
        // Here we unregister from global events on scope destroy
      },
    };
  });