define('m1/m',[], function () {
    return "m1";
});
define('m2',["m1/m"], function (m1) {
    return "m2-dep-" + m1;
});
