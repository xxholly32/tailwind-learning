# 浏览器支持

> 从浏览器支持角度考虑框架选型

---

Tailwind 支持许多 CSS 特性，这些特性只能在现代浏览器中使用，比如[网格布局](https://tailwindcss.com/docs/grid-template-columns)、[对象适配](https://tailwindcss.com/docs/object-fit)/[位置](https://tailwindcss.com/docs/object-position)和[粘贴定位](https://tailwindcss.com/docs/position#sticky)，并使用其他现代 CSS 特性，比如自定义属性来实现[translate](https://tailwindcss.com/docs/translate)、[旋转](https://tailwindcss.com/docs/rotate)和[缩放](https://tailwindcss.com/docs/scale)等。

也就是说，因为 Tailwind 是一个如此低级的框架，你仍然可以轻松地使用它来构建需要支持旧浏览器(如 IE10/11)的网站。在旧版浏览器中使用 Tailwind，可以查看[文档](https://tailwindcss.com/docs/browser-support#using-tailwind-with-older-browsers)

## Autoprefixer

Tailwind 不会自动添加任何样式的浏览器前缀。相反，我们建议您使用 [Autoprefixer](https://github.com/postcss/autoprefixer)。

要使用它，请通过 npm 安装它:

```
# Using npm
npm install autoprefixer

# Using Yarn
yarn add autoprefixer
```

然后把它添加到你的 PostCSS 配置的插件列表的最后:

```
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
```
