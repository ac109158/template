(function() {
    'use strict';

    /* Services */

    angular.module('PortalApp.factories', ['PortalApp.service.login', 'PortalApp.service.firebase'])

    // put your services here!
    // .factory('factoryName', ['dependency', function(dependency) {}]);

}).
// when the components and the relevant templates have been
// loaded.
factory("DashLoader", function($rootScope, $templateCache, $q) {
    var deferred = $q.defer();
    var promise = null;

    function loadModule(successCallback, errorCallback) {
        successCallback = (successCallback || angular.noop);
        errorCallback = (errorCallback || angular.noop);
        // If the module has already been loaded then
        // simply bind the handlers to the existing promise.
        // No need to try and load the files again.
        if (promise) {
            return (
                promise.then(successCallback, errorCallback)
            );

        }
        promise = deferred.promise;
        // Wire the callbacks into the deferred outcome.
        promise.then(successCallback, errorCallback);
        // Load the module templates and components.
        // --
        // The first dependency here is an HTML file which
        // is loaded using the text! plugin. This will pass
        // the value through as an HTML string.
        require(
            [
                "../../partials/dashboard.html",
                "messenger.min.js",
                "messenger-theme-flat.js",
                'moment.js',
                'daterangepicker.js',
                'jquery.flot.js'
                'jquery.flot.resize.js',
                'jquery.sparkline.min.js',
                'jquery-jvectormap-1.2.2.min.js',
                'jquery-jvectormap-world-mill-en.js',
                'map-demo-data.js',
                'jquery.easypiechart.min.js',
                'jquery.dataTables.js',
                'datatables-bs3.js',
                'bootstrap-tokenfield.min.js',
                'scrollspy.js',
                'affix.js',
                'typeahead.min.js',
                'bootstrap-maxlength.js',
                'bootstrap-timepicker.min.js',
                'bootstrap-datepicker.js',
                'advanced-form-demo.js',
                'spin.min.js',
                'ladda.min.js',
                'bootstrap-multiselect.js',
                'fullcalendar.min.js',
                'summernote.min.js'
            ],
            function requrieSuccess(templatesHtml) {

                // Fill the template cache. The file content
                // is expected to be a list of top level
                // Script tags.
                $(templatesHtml).each(
                    function() {

                        var template = $(this);
                        var id = template.attr("id");
                        var content = template.html();

                        $templateCache.put(id, content);

                    }
                );
                // Module loaded, resolve deferred.
                $rootScope.$apply(
                    function() {

                        deferred.resolve();

                    }
                );
            },
            function requireError(error) {
                // Module load failed, reject deferred.
                $rootScope.$apply(
                    function() {
                        deferred.reject(error);
                    }
                );
            }
        );
        return (promise);
    }
    return (loadModule);
});