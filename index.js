// http://requirejs.org/docs/api.html#config
// 此文件一般放在 index.html 文件所在的路径下
require.config({
  baseUrl: './src',           // 相对于引用此文件的index.html文件所在的路径
  paths: {
    tools: '../tools'
  },
  map: { // 相对于baseUrl路径，注意不要使用 ../ 路径，而要在 paths 中进行适当的映射
    '*': {
      // require-css 插件：https://github.com/guybedford/require-css
      'css': 'tools/css.min', 

      // require-text 插件：https://github.com/requirejs/text
      // 如果直接放在 baseUrl 下，可以不配置，自动使用 baseUrl/text.js
      'text': 'tools/text.min', 

      // http://requirejs.org/docs/api.html#pageload
      'domReady': 'tools/domReady.min'
    }
  }
});

require(["domReady!", "m1/m", "text!m1/m.txt"], function (document, m1, txt) {
  console.log("%s, %s", m1, txt);
  document.getElementById("info").innerText = m1 + "," + txt;
});