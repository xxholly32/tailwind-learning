# 主题

> 自定义项目的默认主题。

---

`tailwind.config.js` 的 theme 部分用于定义项目的 调色板、类型缩放、字体堆栈、断点、边界半径值, 等等。

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

我们提供了一个合理的[默认主题](https://github.com/tailwindlabs/tailwindcss/blob/v1/stubs/defaultConfig.stub.js#L5)和一系列非常丰富的值来帮助做配置，但是不要担心改变或者害怕去修改它; 我们鼓励你根据你的设计目标来定制它。

## 主题结构

theme 对象包含屏幕、颜色和间距的键，以及每个可定制的核心插件的键。

有关完整的[主题选项列表](https://tailwindcss.com/docs/theme#configuration-reference)，请参阅主题配置参考或[默认主题](https://github.com/tailwindlabs/tailwindcss/blob/v1/stubs/defaultConfig.stub.js#L5)。

## 屏幕自适应

Screen 选项允许您自定义项目中的响应式断点。

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
  },
};
```

若要了解更多信息，请参阅[自定义文档](https://tailwindcss.com/docs/breakpoints)。

## 颜色

color 选项允许您为项目自定义全局调色板。

```js
// tailwind.config.js
module.exports = {
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      gray: {
        100: "#f7fafc",
        // ...
        900: "#1a202c",
      },

      // ...
    },
  },
};
```

默认情况下，这些颜色由 backgroundColor、 textColor 和 borderColor 核心插件继承。

要了解更多信息，请参阅[颜色定制](https://tailwindcss.com/docs/customizing-colors)文档。

## 间隔

spacing 选项允许您为项目自定义全局间距和大小调整比例。

```js
// tailwind.config.js
module.exports = {
  theme: {
    spacing: {
      px: "1px",
      "0": "0",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "8": "2rem",
      "10": "2.5rem",
      "12": "3rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "32": "8rem",
      "40": "10rem",
      "48": "12rem",
      "56": "14rem",
      "64": "16rem",
    },
  },
};
```

默认情况下，这些值通过 padding, margin, negativeMargin, width 和 height 核心插件继承。

要了解更多信息，请参阅[间距自定义文档](https://tailwindcss.com/docs/customizing-spacing)。

## 核心插件

<!-- TODO:不是很懂暂不翻译 -->

## 自定义默认主题

开箱即用，项目将自动从[默认主题配置](https://github.com/tailwindlabs/tailwindcss/blob/v1/stubs/defaultConfig.stub.js#L5)继承。如果您想自定义默认主题，有以下几种方式。

### 覆盖默认主题

要覆盖 default theme 中的一个选项，请在 tailwind.config.js 文件中创建一个 theme 部分，并添加要覆盖的键值。

```js
// tailwind.config.js
module.exports = {
  theme: {
    // Replaces all of the default `opacity` values
    opacity: {
      "0": "0",
      "20": "0.2",
      "40": "0.4",
      "60": "0.6",
      "80": "0.8",
      "100": "1",
    },
  },
};
```

这将完全取代 Tailwind 对该键的默认配置，因此在上面的例子中，默认的 opacity 将会被覆盖。

你没有提供的任何值的样式都会从默认主题继承，所以在上面的例子中，颜色、间距、边框半径、背景位置等等会使用默认配置。

### 扩展默认主题

如果您希望保留主题选项的默认值，同时也要添加新值，那么可以在 theme.extend 键下添加扩展。

例如，如果你想添加一个额外的断点但是保留现有的断点，你可以扩展 screen 属性:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      // Adds a new breakpoint in addition to the default breakpoints
      screens: {
        "2xl": "1440px",
      },
    },
  },
};
```

当然，你可以覆盖默认主题的某些部分，也可以在相同的配置中扩展默认主题的其他部分:

```js
// tailwind.config.js
module.exports = {
  theme: {
    opacity: {
      "0": "0",
      "20": "0.2",
      "40": "0.4",
      "60": "0.6",
      "80": "0.8",
      "100": "1",
    },
    extend: {
      screens: {
        "2xl": "1440px",
      },
    },
  },
};
```

### 引用其他值

如果需要在主题中引用另一个值，可以通过提供一个函数而不是静态值来实现。通过定义一个 theme() 函数，您可以使用该函数查找主题中的其他值。

例如，你可以通过在你的填充配置中引用主题(颜色)来为你的调色板中的每一种颜色生成填充工具:

```js
// tailwind.config.js
module.exports = {
  theme: {
    colors: {
      // ...
    },
    fill: (theme) => theme("colors"),
  },
};
```

Theme() 函数从主题对象中找到您正在寻找的值，这样它就可以引用您自己的定制以及默认的主题值。

<!-- TODO:它还可以递归地工作，因此只要链的末尾有一个静态值，它就能够解析您正在寻找的值。 -->

### 引用默认主题

如果希望引用默认主题中的值，可以从 tailwindcss/defaultTheme 导入该值。

如果你想在 Tailwind 的默认字体堆栈中添加一个字体家族:

```js
// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
```

## 禁用整个核心插件

如果您不想为某个核心插件生成任何类，那么最好在您的 corePlugins 配置中将该插件设置为 false，而不是在您的主题配置中为该键提供一个空对象。

**Wrong**:不要在主题配置中分配空对象

```js
// tailwind.config.js
module.exports = {
  theme: {
    opacity: {},
  },
};
```

**Right**:在你的 coreplugins 配置中禁用插件

```js
// tailwind.config.js
module.exports = {
  corePlugins: {
    opacity: false,
  },
};
```

最终的结果是一样的，但是由于许多核心插件没有暴露任何配置，它们其实也是会被 corePlugins 禁用，所以最好实现保持一致。

## 添加自己的键值对

在许多情况下，需要将自己的键添加到主题对象中。

举个例子，是添加一个新的键，它包含多个核心插件。例如，你可以提取一个共享位置对象，这个对象可以被 backgroundPosition 和 objectPosition 插件引用:

```js
// tailwind.config.js
module.exports = {
  theme: {
    positions: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top",
    },
    backgroundPosition: (theme) => theme("positions"),
    objectPosition: (theme) => theme("positions"),
  },
};
```

另一个例子是在自定义插件中添加一个新的键来引用。例如，如果你已经为你的项目编写了一个 gradients 插件，你可以在你的主题对象上添加一个 gradients 键，让插件引用:

```js
// tailwind.config.js
module.exports = {
  theme: {
    gradients: (theme) => ({
      "blue-green": [theme("colors.blue.500"), theme("colors.green.500")],
      "purple-blue": [theme("colors.purple.500"), theme("colors.blue.500")],
      // ...
    }),
  },
  plugins: [require("./plugins/gradients")],
};
```

<!-- TODO:由于使用[主题函数](https://tailwindcss.com/docs/functions-and-directives#theme)可以在 CSS 中使用整个主题对象，所以您也可以添加一个键，以便能够在 CSS 中引用它。 -->

## 配置参考

除了 screens, colors 和 spacing，主题对象中的所有键都映射到了 Tailwind 的核心插件中。由于许多插件对应的 css 属性只接受一组静态值(比如 float) ，因此请注意，并非每个插件在主题对象中都有对应的键。

<!-- TODO: 为什么float没有键？-->

[官方配置项](https://tailwindcss.com/docs/theme#configuration-reference)都可以在 theme.extend 键下使用，以支持扩展默认主题。
