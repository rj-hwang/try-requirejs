# [try-requirejs](https://github.com/rongjihuang/try-requirejs)
requirejs 模块的合并优化

## 优化整个项目
```
$ r.js -o tools/build.js
```

## 优化单个模块 (合并依赖的模块、控制是否混淆)
```
# 默认：去除注释、不混淆变量
$ r.js -o lib-requirejs/build-one-file.js name=m4/m out=build/m4/m.js

# 去除注释、混淆变量
$ r.js -o lib-requirejs/build-one-file.js name=m4/m out=build/m4/m.js uglify={mangle=true}
```

## 优化单个 css 文件 (去除注释、空格、换行符)
```
$ r.js -o optimizeCss=standard cssIn=src/m4/m.css out=build/m4.css
```

## 提醒
在 windows 命令行环境下请将 r.js 改为 r.js.cmd