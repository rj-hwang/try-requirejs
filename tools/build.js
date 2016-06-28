// https://github.com/requirejs/r.js/blob/master/build/example.build.js
({
    baseUrl: "../src",      // 相对于此文件所在的路径
    paths: {
        m2: 'm2/m'
    },
    name: "m2",
    out: "../out/m2.js",    // 相对于此文件所在的路径
    optimize: "none",       // uglify|none
    map: {                  // 相对于baseUrl路径
        '*': {
            // require-css 插件：https://github.com/guybedford/require-css
            'css': '../tools/css.min'
            // require-text 插件：https://github.com/requirejs/text
            //,'text': 'ui-libs/requirejs/plugins/text/2.0.14/text'
        }
    }
})