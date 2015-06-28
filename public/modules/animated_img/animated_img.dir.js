/*globals angular */
'use strict';
angular.module('app')
  .directive('animatedImage', function ($famous, $interval) {
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
        var Transitionable = $famous['famous/transitions/Transitionable'];
        var duration = 3000 + parseInt(attr.animationOffset, 10);
        scope.rotate = new Transitionable(0);
        function animate() {
          scope.rotate.set(0, {duration: 0});
          scope.rotate.set(Math.PI * 2, {duration: duration});
        }
        // UI -> Model
        // Here we write handlers for the local widget’s UI events
        // and mutate the scope accordingly and/or call callbacks
        // on the scope to let the component know that something happened
        animate();
        $interval(animate, duration);
        // Model -> UI
        // Here we write watches on the isolate scope and change the
        // drawing of the widget according to changes in the model

        // Cleanup
        // Here we unregister from global events on scope destroy
      },
    };
  });