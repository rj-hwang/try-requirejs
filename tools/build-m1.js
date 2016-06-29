// https://github.com/requirejs/r.js/blob/master/build/example.build.js
({
  baseUrl: "../src",      // 相对于此文件所在的路径
  paths: {                // 相对于 baseUrl
    m1: 'm1/m',

    // domReady 插件：http://requirejs.org/docs/api.html#pageload
    domReady: '../tools/domReady.min',

    // require-text 插件：https://github.com/requirejs/text
    text: '../tools/text.min'
  },

  name: "m1",          // 相对于 baseUrl
  out: "../out/m1.js",
  exclude: [
    "text"               // 不内联 text 插件的源码
  ],

  // 是否内联所有 text! 依赖，默认 true
  inlineText: true,

  // 是否优化 js 文件，uglify|none 默认 uglify
  optimize: "uglify",
  uglify: {
    output: {
      beautify: true         // 是否格式化代码的显示
    },
    mangle: false            // 是否混淆变量
  },
})