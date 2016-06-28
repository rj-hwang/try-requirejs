# [try-requirejs](https://github.com/rongjihuang/try-requirejs)
requirejs 文件合并学习

## 启动静态文件服务，然后访问 [http://127.0.0.1:3000/index.html]
```
$ node app.js
```


## 将有依赖关系的两个模块进行合并
src/m2/m.js 依赖 src/m1/m.js, 合并成一个文件 out/m2.js
```
> r.js.cmd -o tools/build.js    -- windows
$ r.js -o tools/build.js        -- Linux or Unix
```