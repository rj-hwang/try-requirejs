require.config({
  baseUrl: '.',
  paths: {
    domReady: '../tools/domReady.min',
    text: '../tools/text.min',          // 必须
  }
});

require(["domReady!", "m1", "text!t.txt"], function (document, m1, txt) {
  console.log(m1);
  console.log(txt);
  document.getElementById("info").innerHTML = "<pre>" + m1 + "</pre>";
});