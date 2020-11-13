# 自定义配置

> 定制你的 Tailwind

---

因为 Tailwind 是一个用于构建定制用户界面的框架，它在设计之初就考虑到了定制。

默认情况下，Tailwind 会在你项目的根目录中配置一个可选的 `Tailwind.config.js` 文件，在那里你可以定义任何定制。

```js
// Example `tailwind.config.js` file

module.exports = {
  important: true,
  theme: {
    fontFamily: {
      display: ["Gilroy", "sans-serif"],
      body: ["Graphik", "sans-serif"],
    },
    extend: {
      colors: {
        cyan: "#9cdbff",
      },
      margin: {
        "96": "24rem",
        "128": "32rem",
      },
    },
  },
  variants: {
    opacity: ["responsive", "hover"],
  },
};
```

配置文件的每个部分都是可选的，因此您只需指定要更改的内容。任何缺失的部分将使用 Tailwind 的默认配置。

## 创建配置文件

当你安装 tailwindcss npm 包时，包含 Tailwind CLI 工具可以为你的项目生成一个 Tailwind 配置文件

```
npx tailwindcss init
```

这将在你的项目根目录下创建一个最小化的 `tailwind.config.js` 文件:

```
// tailwind.config.js
module.exports = {
  future: {},
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
```

## 使用不同的文件名

要使用除 `tailwind.config.js` 之外的名称，请在命令行上将其作为参数传递:

```bash
npx tailwindcss init tailwindcss-config.js
```

如果你使用一个自定义文件名，你需要在 PostCSS 配置中包含 Tailwind 插件时指定它:

```js
// postcss.config.js
module.exports = {
  plugins: [require("tailwindcss")("./tailwindcss-config.js")],
};
```

## 搭建默认配置

对于大多数用户，我们鼓励您尽可能地保持配置文件最小化，并且只配置您需要的内容。

如果你想创建一个包含所有 Tailwind 默认配置的完整配置文件，可以使用-- full 选项:

```bash
npx tailwindcss init --full
```

您将得到一个与 Tailwind 内部使用的[默认配置文件](https://github.com/tailwindlabs/tailwindcss/blob/v1/stubs/defaultConfig.stub.js)相同的文件。

## 主题

主题部分用于定义 color、font、border、断点等任何与网站视觉设计相关的内容。

```js
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      display: ["Gilroy", "sans-serif"],
      body: ["Graphik", "sans-serif"],
    },
    borderWidth: {
      default: "1px",
      "0": "0",
      "2": "2px",
      "4": "4px",
    },
    extend: {
      colors: {
        cyan: "#9cdbff",
      },
      spacing: {
        "96": "24rem",
        "128": "32rem",
      },
    },
  },
};
```

了解有关默认主题的[更多信息](https://tailwindcss.com/docs/theme)，以及如何在主题配置指南中对其进行定制。

## 变量

变量部分允许您控制为核心插件生成的变量

```
// tailwind.config.js
module.exports = {
  variants: {
    appearance: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus'],
    fill: [],
  },
}
```

在变量[配置指南](https://tailwindcss.com/docs/configuring-variants)中了解更多信息。

## 插件

插件部分允许你使用 Tailwind 注册第三方插件，这些插件可以生成额外的 `通用 class`、`components`、`base` 或者自定义变量

```js
// tailwind.config.js
module.exports = {
  plugins: [
    require("tailwindcss-transforms"),
    require("tailwindcss-transitions"),
    require("tailwindcss-border-gradients"),
  ],
};
```

在插件创作指南中[了解更多](https://tailwindcss.com/docs/plugins)关于编写插件的信息。

## 前缀

前缀允许您向 Tailwind 生成的所有 `通用 class类` 添加自定义前缀。当在现有的 CSS 之做命名分层还是非常方便的。

例如，您可以通过如下设置 prefix 来添加 tw- 的前缀:

```js
// tailwind.config.js
module.exports = {
  prefix: "tw-",
};
```

现在，每个 `通用 class` 都将生成配置的前缀:

```css
.tw-text-left {
  text-align: left;
}
.tw-text-center {
  text-align: center;
}
.tw-text-right {
  text-align: right;
}
/* etc. */
```

需要理解，这个前缀是添加到`通用 class`名的开头，而不是添加到整个类名。

这意味着具有像 sm: 或 hover: 这样的响应前缀或状态前缀的 class 仍然首先具有响应前缀或状态前缀，您的自定义前缀将会出现在冒号之后:

```html
<div class="tw-text-lg md:tw-text-xl tw-bg-red-500 hover:tw-bg-blue-500">
  <!-- -->
</div>
```

前缀只被添加到由 Tailwind 生成的类中; **您自己的自定义类中不会有前缀**。

这意味着如果你像这样添加你自己的响应工具:

```css
@responsive {
  .bg-brand-gradient {
    /* ... */
  }
}
```

...生成的响应类将没有您配置的前缀:

```css
.bg-brand-gradient {
  /* ... */
}
@media (min-width: 640px) {
  .sm\:bg-brand-gradient {
    /* ... */
  }
}
@media (min-width: 768px) {
  .md\:bg-brand-gradient {
    /* ... */
  }
}
@media (min-width: 992) {
  .lg\:bg-brand-gradient {
    /* ... */
  }
}
@media (min-width: 1280px) {
  .xl\:bg-brand-gradient {
    /* ... */
  }
}
```

如果你也想给你自己的 class 加上前缀，只需要在 class 名称定义中加上前缀:

```css
@responsive {
  .tw-bg-brand-gradient {
    /* ... */
  }
}
```

## important 配置

这个`important 配置`可以让你控制是否应该标记 `!important`。这个配置可以让 Tailwind 现有的 css 都高于默认的选择器。

要生成重要的实用程序，请将配置选项中的 `important` 设置为 true:

```js
// tailwind.config.js
module.exports = {
  important: true,
};
```

这将会使得所有 Tailwind `通用 classes` 都变成 `!important`

```css
.leading-none {
  line-height: 1 !important;
}
.leading-tight {
  line-height: 1.25 !important;
}
.leading-snug {
  line-height: 1.375 !important;
}
/* etc. */
```

请注意，通过启用此选项，您自己的任何自定义 classes 都不会自动标记为 `!important`。

如果你想让你自己的 classes `!important`，只要在每个声明的末尾添加 `!important`:

```css
@responsive {
  .bg-brand-gradient {
    background-image: linear-gradient(#3490dc, #6574cd) !important;
  }
}
```

设置为 `important:true` 非常实用，但是在合并第三方 JS 库时可能会引入一些问题，这些第三方 JS 库可以为你的元素添加内联样式ー在这种情况下，就是 Tailwind 的 `!important` 将会覆盖它们。例如，这在动画库中非常常见。

如果你没有面对这个问题，请直接跳到下一节！但是如果你可能会遇到这个问题，你可以通过提供一个 CSS 选择器而不是一个布尔值来处理 `important` 选项：

```js
// tailwind.config.js
module.exports = {
  important: "#app",
};
```

这个配置将在给定的选择器前面加上 `通用 classes` 的前缀，有效地增加它们的特殊性，而不是添加 `!important`

在指定了 `important` 的选择器之后，需要确保与你网站的根元素与其匹配。使用上面的例子，我们需要将根元素的 id 属性设置为 app，这样样式才能正常工作。

当你的配置都设置好了，你的根元素和你的 Tailwind 配置中的选择器匹配后，所有的 Tailwind `通用 classes` 都有足够高的级别去覆盖你的项目中使用的其他 class，而不是去干扰内联样式:

```html
<html>
  <!-- ... -->
  <style>
    .high-specificity .nested .selector {
      color: blue;
    }
  </style>
  <body id="app">
    <div class="high-specificity">
      <div class="nested">
        <!-- Will be red-500 -->
        <div class="selector text-red-500"><!-- ... --></div>
      </div>
    </div>

    <!-- Will be #bada55 -->
    <div class="text-red-500" style="color: #bada55;"><!-- ... --></div>
  </body>
</html>
```

## 分隔符

分隔符，允许您自定义应该使用什么字符或字符串将不同的前缀(screen, hover, focus,等)与`通用 classes`(text-center, items-end 等)分开。

默认情况下我们使用冒号(:) ，但是如果您使用的模板语言(如 Pug)不支持类名中的特殊字符，那么更改这一点会很有用。

```js
// tailwind.config.js
module.exports = {
  separator: "_",
};
```

## 插件配置

如果您的项目不需要使用一些 Tailwind 通常默认情况下会生成的类，那么 `核心插件` 允许您完全禁用。

如果你想禁用特定的核心插件，corePlugins 提供一个将这些插件设置为 false 的配置:

```js
// tailwind.config.js
module.exports = {
  corePlugins: {
    float: false,
    objectFit: false,
    objectPosition: false,
  },
};
```

如果你想把应该启用哪个核心插件列入白名单，提供一个包含你想使用的插件列表的数组:

```js
// tailwind.config.js
module.exports = {
  corePlugins: [
    "margin",
    "padding",
    "backgroundColor",
    // ...
  ],
};
```

如果你想禁用所有的 Tailwind 的插件，简单地使用 Tailwind 作为处理自定义插件的工具，那么返回一个空的数组:

```js
// tailwind.config.js
module.exports = {
  corePlugins: [],
};
```

所有核心插件的参考列表，可以[参考文档](https://tailwindcss.com/docs/configuration#core-plugins)

## 在 JavaScript 中引用

在 JavaScript 客户端中引用配置值通常很有用 ーー 例如，在 React 或 Vue 组件中动态应用内联样式时，访问一些主题值。

为了简化这个过程，Tailwind 提供了一个 resolveConfig ，你可以使用它来生成一个完全合并的配置对象:

```js
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "./tailwind.config.js";

const fullConfig = resolveConfig(tailwindConfig);

fullConfig.theme.width[4];
// => '1rem'

fullConfig.theme.screens.md;
// => '768px'

fullConfig.theme.boxShadow["2xl"];
// => '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
```
