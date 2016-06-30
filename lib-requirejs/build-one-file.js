({
  baseUrl: '../src',
  mainConfigFile: "../lib-requirejs/main.js",

  // 需要在命令行中指定的参数
  //name: "m3/m",
  //out: "../build/m3/m.js",

  // 优化 js 文件，uglify|none 默认 uglify
  optimize: "uglify",
  uglify: {
    output: {
      beautify: false  // 显示美化
    },
    mangle: false      // 变量混淆
  },

  // 内联 text! 依赖的文本文件内容
  inlineText: true,

  exclude: [
    "text",           // 排除 text 插件源码
    "css"             // 排除 css 插件源码
  ],

  // 压缩 css 文件内容：只适用于优化单个 css 文件
  optimizeCss: "standard",
})