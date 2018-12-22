# carol-blog

> My private blog.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 我的博客
一直以来都想自己做一些个人项目, 于是想到了先做一个博客项目练练手。在GitHub上找了很多大神的开源博客项目来学习，慢慢的自己也完成了一个简单版本的博客，并部署上线。

目前项目已经全部部署到服务器，但域名还在备案，因此只能先通过IP地址访问。

[线上地址](http://120.78.219.91)

[前端项目](https://github.com/fakecarol0622/carol-blog)

[后端项目](https://github.com/fakecarol0622/carol-blog-node)

因为我做的这个项目功能并不复杂，所以非常适合大家用来练手哦，如果觉得有帮助欢迎给个star，感谢！

## 设计
参照了`hexo`的设计，自己用`css`实现。

## 技术栈

 `vue + vue-cli + vue-router`:整个项目用vue-cli脚手架创建，vue-router路由组件化开发实现单页应用的效果。

`webpack`:创建时使用了`webpack`构建开发环境，利用模块热启动`npm run dev`在开发环境下开发，并在开发完毕后`npm run build`打包成`dist`部署到云端。

`scss`:css预编译语言选用了`scss`

`axios`:使用axios进行异步请求，编写前端接口。

`Koa+ koa-router + koa-cors`:后台使用`koa`搭建，使用`koa-cors`跨域。

`mysql+sequelize`:文章数据的存储以及ORM

`nginx`:在云服务器中使用`nginx`进行代理

`pm2`:`node`进程管理，使后台保持运行。

## 准备完善的功能

 - 后台管理系统（需登录）
 - 评论

