var demo;
(function (demo) {
    var app = angular.module('app', ['ngAnimate', 'ngRoute', 'ui.bootstrap']);
    app.controller("FormCtrl", demo.FormCtrl);
})(demo || (demo = {}));
