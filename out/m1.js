define("text!m1.txt", [], function() {
    return 'src/m1/m.js :\r\n<code>\r\ndefine(["text!m1.txt"], function (txt) {\r\n    return txt;\r\n})\r\n</code>\r\n\r\nsrc/m1/m.txt :\r\n<code>x...x</code>\r\n\r\n<code>$ r.js -o tools/build-m1.js</code>\r\n\r\nresult out/m1.js : \r\n<code>\r\ndefine("text!m1.txt", [], function() {\r\n    return \'x...x\';\r\n}), define("m1", [ "text!m1.txt" ], function(txt) {\r\n    return txt;\r\n});\r\n</code>';
}), define("m1", [ "text!m1.txt" ], function(txt) {
    return txt;
});