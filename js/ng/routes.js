"use strict";

angular.module('PortalApp.routes', ['ngRoute'])

// configure views; the authRequired parameter is used for specifying pages
// which should only be available while logged in
.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/dashboard', {
            templateUrl: 'js/ng/partials/dashboard.html',
            controller: 'HomeCtrl'
        });

        $routeProvider.when('/profile', {
            templateUrl: 'js/ng/partials/profile.html'
        });

        $routeProvider.when('/flot', {
            templateUrl: 'js/ng/partials/flot.html'
        });

        $routeProvider.when('/morris', {
            templateUrl: 'js/ng/partials/morris.html'
        });

        $routeProvider.when('/validation', {
            templateUrl: 'js/ng/partials/validation.html'
        });

        $routeProvider.when('/basic-form-elements', {
            templateUrl: 'js/ng/partials/basic-form-elements.html'
        });

        $routeProvider.when('/advanced-form-elements', {
            templateUrl: 'js/ng/partials/advanced-form-elements.html'
        });

        $routeProvider.when('/calendar', {
            templateUrl: 'js/ng/partials/calendar.html'
        });

        $routeProvider.when('/wysiwyg-editor', {
            templateUrl: 'js/ng/partials/wysiwyg-editor.html'
        });

        $routeProvider.when('/dropzone-uploader', {
            templateUrl: 'js/ng/partials/dropzone-uploader.html'
        });

        $routeProvider.when('/basic-tables', {
            templateUrl: 'js/ng/partials/basic-tables.html'
        });

        $routeProvider.when('/advanced-tables', {
            templateUrl: 'js/ng/partials/advanced-tables.html'
        });

        $routeProvider.when('/portlets', {
            templateUrl: 'js/ng/partials/portlets.html'
        });

        $routeProvider.when('/buttons', {
            templateUrl: 'js/ng/partials/buttons.html'
        });

        $routeProvider.when('/tabs-accordions', {
            templateUrl: 'js/ng/partials/tabs-accordions.html'
        });

        $routeProvider.when('/buttons', {
            templateUrl: 'js/ng/partials/buttons.html'
        });

        $routeProvider.when('/notifications', {
            templateUrl: 'js/ng/partials/notifications.html'
        });

        $routeProvider.when('/sliders', {
            templateUrl: 'js/ng/partials/sliders.html'
        });

        $routeProvider.when('/typography', {
            templateUrl: 'js/ng/partials/typography.html'
        });

        $routeProvider.when('/icons', {
            templateUrl: 'js/ng/partials/icons.html'
        });

        $routeProvider.when('/grid', {
            templateUrl: 'js/ng/partials/grid.html'
        });

        $routeProvider.when('/mailbox', {
            templateUrl: 'js/ng/partials/mailbox.html'
        });

        $routeProvider.when('/compose-message', {
            templateUrl: 'js/ng/partials/compose-message.html'
        });

        $routeProvider.when('/message-content', {
            templateUrl: 'js/ng/partials/message-content.html'
        });

        $routeProvider.when('/chat', {
            templateUrl: 'js/ng/partials/chatBox.html'
        });

        $routeProvider.when('/faqs', {
            templateUrl: 'js/ng/partials/faq.html'
        });

        $routeProvider.when('/invoice', {
            templateUrl: 'js/ng/partials/invoice.html'
        });

        $routeProvider.when('/faqs', {
            templateUrl: 'js/ng/partials/faq.html'
        });

        $routeProvider.when('/pricing', {
            templateUrl: 'js/ng/partials/pricing.html'
        });

        $routeProvider.when('/search-results', {
            templateUrl: 'js/ng/partials/search-results.html'
        });

        $routeProvider.when('/404', {
            templateUrl: 'js/ng/partials/404.html'
        });

        $routeProvider.when('/500', {
            templateUrl: 'js/ng/partials/500.html'
        });

        $routeProvider.when('/account', {
            authRequired: true, // must authenticate before viewing this page
            templateUrl: 'js/ng/partials/account.html',
            controller: 'AccountCtrl'
        });

        $routeProvider.when('/login', {
            templateUrl: 'js/ng/partials/login.html',
            controller: 'LoginCtrl'
        });

        $routeProvider.otherwise({
            redirectTo: '/dashboard'
        });
    }
]);
