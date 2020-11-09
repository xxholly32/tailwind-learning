# 安装

## 1. 通过 npm 安装

```bash
# 使用 npm
npm install tailwindcss

# 使用 Yarn
yarn add tailwindcss
```

## 2. 添加 Tailwind 到你的项目

使用@tailwind 指令通过注入 tailwind `base`,`components` 和 `utilities` 样式到你的 css

```css
@tailwind base;

@tailwind components;

@tailwind utilities;
```

ailwind will swap these directives out at build time with all of its generated CSS.

If you're using `postcss-import` (or a tool that uses it under the hood, such as [Webpacker](https://github.com/rails/webpacker) for Rails), use our imports instead of the `@tailwind` directive to avoid issues when importing any of your own additional files:

```css
@import "tailwindcss/base";

@import "tailwindcss/components";

@import "tailwindcss/utilities";
```

## 3. 创建你的 Tailwind 配置文件

如果想要定制你项目中的 Tailwind，你可以在项目中创建配置文件 `tailwind.config.js` 或者运行 `npx tailwindcss init` 创建

也可以新增一个 基础的 postcss.config.js 文件或者运行 `npx tailwindcss init -p`

> 更多配置内容可以参考官方配置文档 [configuration documentation](https://tailwindcss.com/docs/configuration)

## 4. Tailwind 与项目 Css 结合

Tailwind 和 PostCss 结合

在大部分项目中，你可以在 Postcss 的配置中中加入 Tailwind 插件。通常加入到 `postcss.config.js` 文件中：

```js
module.exports = {
  plugins: [
    // ...
    require("tailwindcss"),
    require("autoprefixer"),
    // ...
  ],
};
```

我们已经在下面包含了一些流行工具的更具体的说明，但是关于如何开始使用 PostCSS 的说明，请参阅 [PostCSS 文档](https://github.com/postcss/postcss#usage)。

## 使用 Tailwind CLI

一些简单项目，可以利用 Tailwind CLI 工具转化成 css 文件使用：

```
npx tailwindcss build styles.css -o output.css

```

运行 `npx tailwindcss help build` 命令去学习更多有关 CLI 的配置。

## 工具示例

官方还有很多相关的项目配置示例，我这里就不展开了，比如 webpack，gulp，Laravel Mix；官方提供了 [文档](https://tailwindcss.com/docs/installation) 以及对应的示例项目 [setup-examples](https://github.com/tailwindlabs/tailwindcss-setup-examples) 自行下载参考。
