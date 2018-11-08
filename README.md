# vue-todo

#### webpack 4 升级注意事项：

1. 版本变化

有些 loader、plugin 等需要升级

2. 配置变化

CommonsChunkPlugin 取消，用 optimize.splitchunk，也就是作为webpack 内置项去配置。

uglifyJSPlugin 取消了，用optimize.minimize

3. 插件变化

[webpack4升级指北](https://segmentfault.com/a/1190000013420383)

