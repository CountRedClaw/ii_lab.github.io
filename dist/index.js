(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SmokeTest;
    (function (SmokeTest) {
        function HelloWorld() {
            console.log("Hello World");
        }
        SmokeTest.HelloWorld = HelloWorld;
    })(SmokeTest = exports.SmokeTest || (exports.SmokeTest = {}));
    function greeter(person) {
        return "Hello, " + person;
    }
    var user = "Jane User";
    document.body.innerHTML = greeter(user);
});
//# sourceMappingURL=index.js.map