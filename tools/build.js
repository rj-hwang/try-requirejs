({
  appDir: "../src",
  baseUrl: './',
  mainConfigFile: "../lib-requirejs/main.js",
  dir: "../build",
  paths: {
  },
  modules: [
    // 简单模块
    {
      name: "m1/m"
    },
    // 依赖简单模块的模块
    {
      name: "m2/m"
    },
    // 带 txt 文件依赖的模块
    {
      name: "m3/m",
      exclude: [
        "text"  // 排除 text 插件源码
      ]
    },
    // 带 css 文件依赖的模块
    {
      name: "m4/m",
      exclude: [
        "css"  // 排除 css 插件源码
      ]
    }
  ],

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

  // 压缩 css 文件内容
  optimizeCss: "standard",

  // 删除已合并的文件
  removeCombined: true,

  fileExclusionRegExp: /lib-requirejs/,
  keepBuildDir: false
})