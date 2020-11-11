# 添加基础样式

在 Tailwind 上层加入全局基础样式的最佳实践

基本(或全局)样式是样式表开头的样式，它为基本 HTML 元素(如 a 、headings 等)设置缺省值，或者重置，比如[box-sizing reset](https://www.paulirish.com/2012/box-sizing-border-box-ftw/)。

我们称之为 [Preflight](https://tailwindcss.com/docs/preflight)，它实际上只是 [normalize.css](https://github.com/necolas/normalize.css/)，外加一层薄薄的覆盖样式。

对于大多数项目来说，Preflight 是一个很好的起点，但是如果您想添加自己的附加基础样式，这里有一些习惯用法的建议。

## 在 HTML 中使用 class

如果你只是想对 HTML 或 body 元素应用一些全局样式，可以考虑在 HTML 中向这些元素添加现有的 class，而不是编写新的 CSS:

```
<!doctype html>
<html lang="en" class="text-gray-900 antialiased leading-tight">
  <!-- ... -->
  <body class="min-h-screen bg-gray-100">
    <!-- ... -->
  </body>
</html>
```

## 使用 CSS

如果你想对特定的元素应用一些基本样式，最简单的方法就是在你的 CSS 中简单的添加它们。

```
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  h1 {
    @apply text-2xl;
  }
  h2 {
    @apply text-xl;
  }
}
```

通过使用 `@layer` 指令，Tailwind 将自动将这些样式移动到 `@tailwind base` 的同一位置，以避免意想不到的特殊问题。

使用 `@layer` 指令还会将会改变 tailwind 的内部打包方式。请阅读[我们的文档](https://tailwindcss.com/docs/controlling-file-size)了解更多细节。

最好使用 [@apply](https://tailwindcss.com/docs/functions-and-directives#apply) 或 [theme()](https://tailwindcss.com/docs/functions-and-directives#theme) 来方法来定义这些样式，以避免引入新的问题意外地偏离您的设计。

## @font-face rules

您可以使用相同的方法为您正在使用的任何自定义字体添加@font-face 规则:

```
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  @font-face {
    font-family: Proxima Nova;
    font-weight: 400;
    src: url(/fonts/proxima-nova/400-regular.woff) format("woff");
  }
}
```

## 使用插件

你也可以通过编写插件和使用 `addBase` 函数来添加基本样式:

```
// tailwind.config.js
const plugin = require('tailwindcss/plugin')

module.exports = {
  plugins: [
    plugin(function({ addBase, config }) {
      addBase({
        'h1': { fontSize: config('theme.fontSize.2xl') },
        'h2': { fontSize: config('theme.fontSize.xl') },
        'h3': { fontSize: config('theme.fontSize.lg') },
      })
    })
  ]
}
```

您使用 `addBase` 添加的任何样式都将自动包含在您的 `@tailwind base` 样式中。

## When to use a plugin 什么时候使用插件

一般来说，使用 CSS 为项目添加基本样式要比编写插件简单得多。

以下场景，你可以选择用插件：

- 您希望公开发布自己的基本样式，并使其他用户易于安装
- 您希望在公司的多个项目中重复使用基本样式，并且更喜欢共享 JS 依赖项，而不是 CSS 依赖项
