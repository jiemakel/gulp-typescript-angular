var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var sample;
(function (sample) {
    var AbstractDirective = (function () {
        function AbstractDirective() {
        }
        return AbstractDirective;
    }());/*<auto_generate>*/angular.module('sample').directive('abstract',new AbstractDirective());/*</auto_generate>*/
    var SampleDirective = (function (_super) {
        __extends(SampleDirective, _super);
        function SampleDirective($compile) {
            _super.call(this);
            this.$compile = $compile;
            this.restrict = 'A';
            this.templateUrl = '/sample.html';
            this.scope = {
                text: '='
            };
        }
        SampleDirective.prototype.link = function (scope, element, attr) {
        };
        return SampleDirective;
    }(AbstractDirective));/*<auto_generate>*/angular.module('sample').directive('sample',new SampleDirective());/*</auto_generate>*/
})(sample || (sample = {}));
