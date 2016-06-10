var sample;
(function (sample) {
    var SampleComponentController = (function () {
        function SampleComponentController($compile) {
            this.$compile = $compile;
        }/*<auto_generate>*/SampleComponentController.$inject = ['$compile']; SampleComponentController.$componentName = 'SampleComponentController'/*</auto_generate>*/
        return SampleComponentController;
    }());/*<auto_generate>*/angular.module('sample').controller('SampleComponentController',SampleComponentController);/*</auto_generate>*/
    var SampleComponent = (function () {
        function SampleComponent() {
            this.templateUrl = '/sample.html';
            this.bindings = {
                text: '<'
            };
            this.controller = SampleComponentController;
        }/*<auto_generate>*/SampleComponent.$inject = []; SampleComponent.$componentName = 'sample'/*</auto_generate>*/
        return SampleComponent;
    }());/*<auto_generate>*/angular.module('sample').component('sample',new SampleComponent());/*</auto_generate>*/
})(sample || (sample = {}));
