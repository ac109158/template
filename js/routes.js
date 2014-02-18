"use strict";

angular.module('PortalApp.routes', ['ngRoute'])

// configure views; the authRequired parameter is used for specifying pages
// which should only be available while logged in
.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/dashboard', {
            templateUrl: 'partials/dashboard.html',
            controller: 'HomeCtrl'
        });

        $routeProvider.when('/profile', {
            templateUrl: 'partials/profile.html'
        });

        $routeProvider.when('/flot', {
            templateUrl: 'partials/flot.html'
        });

        $routeProvider.when('/morris', {
            templateUrl: 'partials/morris.html'
        });

        $routeProvider.when('/validation', {
            templateUrl: 'partials/validation.html'
        });

        $routeProvider.when('/basic-form-elements', {
            templateUrl: 'partials/basic-form-elements.html'
        });

        $routeProvider.when('/advanced-form-elements', {
            templateUrl: 'partials/advanced-form-elements.html'
        });

        $routeProvider.when('/calendar', {
            templateUrl: 'partials/calendar.html'
        });

        $routeProvider.when('/wysiwyg-editor', {
            templateUrl: 'partials/wysiwyg-editor.html'
        });

        $routeProvider.when('/dropzone-uploader', {
            templateUrl: 'partials/dropzone-uploader.html'
        });

        $routeProvider.when('/basic-tables', {
            templateUrl: 'partials/basic-tables.html'
        });

        $routeProvider.when('/advanced-tables', {
            templateUrl: 'partials/advanced-tables.html'
        });

        $routeProvider.when('/portlets', {
            templateUrl: 'partials/portlets.html'
        });

        $routeProvider.when('/buttons', {
            templateUrl: 'partials/buttons.html'
        });

        $routeProvider.when('/tabs-accordions', {
            templateUrl: 'partials/tabs-accordions.html'
        });

        $routeProvider.when('/buttons', {
            templateUrl: 'partials/buttons.html'
        });

        $routeProvider.when('/notifications', {
            templateUrl: 'partials/notifications.html'
        });

        $routeProvider.when('/sliders', {
            templateUrl: 'partials/sliders.html'
        });

        $routeProvider.when('/typography', {
            templateUrl: 'partials/typography.html'
        });

        $routeProvider.when('/icons', {
            templateUrl: 'partials/icons.html'
        });

        $routeProvider.when('/grid', {
            templateUrl: 'partials/grid.html'
        });

        $routeProvider.when('/mailbox', {
            templateUrl: 'partials/mailbox.html'
        });

        $routeProvider.when('/compose-message', {
            templateUrl: 'partials/compose-message.html'
        });

        $routeProvider.when('/message-content', {
            templateUrl: 'partials/message-content.html'
        });

        $routeProvider.when('/chat', {
            templateUrl: 'partials/chatBox.html'
        });

        $routeProvider.when('/faqs', {
            templateUrl: 'partials/faq.html'
        });

        $routeProvider.when('/invoice', {
            templateUrl: 'partials/invoice.html'
        });

        $routeProvider.when('/faqs', {
            templateUrl: 'partials/faq.html'
        });

        $routeProvider.when('/pricing', {
            templateUrl: 'partials/pricing.html'
        });

        $routeProvider.when('/search-results', {
            templateUrl: 'partials/search-results.html'
        });

        $routeProvider.when('/404', {
            templateUrl: 'partials/404.html'
        });

        $routeProvider.when('/500', {
            templateUrl: 'partials/500.html'
        });

        $routeProvider.when('/account', {
            authRequired: true, // must authenticate before viewing this page
            templateUrl: 'partials/account.html',
            controller: 'AccountCtrl'
        });

        $routeProvider.when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'LoginCtrl'
        });

        $routeProvider.otherwise({
            redirectTo: '/dashboard'
        });
    }
]);