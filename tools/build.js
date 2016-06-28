// https://github.com/requirejs/r.js/blob/master/build/example.build.js
({
    baseUrl: "../src",      // 相对于此文件所在的路径
    paths: {
        m2: 'm2/m'
    },
    name: "m2",
    out: "../out/m2.js",    // 相对于此文件所在的路径
    optimize: "none"        // uglify|none
})