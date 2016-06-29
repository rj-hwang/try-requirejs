# [try-requirejs](https://github.com/rongjihuang/try-requirejs)
requirejs 模块合并

## 启动静态文件服务，然后访问 [http://127.0.0.1:3000/index.html]
```
$ node app.js
```

## 根据配置打包模块
```
$ r.js -o tools/build.js
```

## 优化前的效果访问 [http://127.0.0.1:3000/index.html]

## 优化后的效果访问 [http://127.0.0.1:3000/out/m1.html]

## 备注
在 windows 命令行环境下请将 r.js 改为 r.js.cmd