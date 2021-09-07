var G;
(function (G) {
    function __emptyFunc() {
    }
    G.__emptyFunc = __emptyFunc;
})(G || (G = {}));
var env;
(function (env) {
    function test() {
        console.log(1111);
    }
    env.test = test;
})(env || (env = {}));
