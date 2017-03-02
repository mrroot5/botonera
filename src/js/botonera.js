(function () {
    'use strict';
    function foo(ev) {
        console.log(ev.keyCode);
    }
    function initEvents() {
        var elements = document.querySelectorAll(".btn-number-code");
        document.addEventListener("keyup", foo);
    }
    document.addEventListener("DOMContentLoaded", function (event) {
        initEvents();
    });
}());
