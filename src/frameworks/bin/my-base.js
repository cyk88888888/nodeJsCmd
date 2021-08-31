var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var my;
(function (my) {
    /**
     * 测试注释111111111111111
     */
    var B = /** @class */ (function () {
        function B() {
        }
        B.prototype.onTest = function () {
        };
        return B;
    }());
    my.B = B;
    var A = /** @class */ (function (_super) {
        __extends(A, _super);
        function A() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        A.prototype.onTest = function () {
            console.log(1111111111111111);
        };
        return A;
    }(B));
    my.A = A;
    function signMix() {
        if (arguments.length === 0)
            return this;
        var param = arguments[0], str = this;
        if (typeof (param) === 'object') {
            for (var key in param)
                str = str.replace(new RegExp("\\{" + key + "\\}", "g"), param[key]);
            return str;
        }
        else {
            for (var i = 0; i < arguments.length; i++)
                str = str.replace(new RegExp("\\{" + i + "\\}", "g"), arguments[i]);
            return str;
        }
    }
    my.signMix = signMix;
})(my || (my = {}));
(function (my) {
    var M = /** @class */ (function () {
        function M() {
        }
        M.prototype.onTest = function () {
            console.log(1111111111111111);
        };
        return M;
    }());
    my.M = M;
    var N = /** @class */ (function (_super) {
        __extends(N, _super);
        function N() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        N.prototype.onTest = function () {
            console.log(1111111111111111);
        };
        return N;
    }(M));
    my.N = N;
})(my || (my = {}));
