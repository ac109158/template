'use strict';

/* Directives */


angular.module('PortalApp.directives', []).
directive('appVersion', ['version',
    function(version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        };
    }
]).
directive('logout', function() {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: 'partials/logout.html',
        link: function(scope, elm, attrs) {}
    };
}).
directive('dashboard', function() {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: 'partials/dashboard.html',
        link: function(scope, elm, attrs) {}
    };
});