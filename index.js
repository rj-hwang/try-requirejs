// http://requirejs.org/docs/api.html#config
// 此文件一般放在 index.html 文件所在的路径下
require.config({
  baseUrl: './src',           // 相对于引用此文件的index.html文件所在的路径
  paths: {                    // 相对于 baseUrl
    m2: 'm2/m',

    // domReady 插件：http://requirejs.org/docs/api.html#pageload
    domReady: '../tools/domReady.min',

    // require-text 插件：https://github.com/requirejs/text
    text: '../tools/text.min',

    // require-css 插件：https://github.com/guybedford/require-css
    css: '../tools/css.min'
  }
});

require(["domReady!", "m2"], function (document, m2) {
  console.log(m2);
  document.getElementById("info").innerHTML = "<pre>" + m2 + "</pre>";
});