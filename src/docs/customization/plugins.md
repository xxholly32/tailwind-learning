# 编写插件

> 利用第三方插件扩展 Tailwind

---

插件可以让你使用 JavaScript 注册新的样式 而不是在 CSS 注入的样式表。

要开始制作你的第一个插件，从 `tailwindcss/plugin` 导入 Tailwind 的 `plugin` 函数，然后用一个匿名函数调用它，作为配置文件中插件列表中的第一个参数:

```js
// tailwind.config.js
const plugin = require("tailwindcss/plugin");

module.exports = {
  plugins: [
    plugin(function({ addUtilities, addComponents, e, prefix, config }) {
      // Add your custom styles here
    }),
  ],
};
```

插件函数接收一个单独的对象参数，这个参数可以被[分解](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)为几个辅助函数:

- `addUtilities()`, 用于注册新的 utility 样式
- `addComponents()`, 用于注册新的 component 样式
- `addBase()`, 用于注册新的 base 样式
- `addVariant()`, 用于注册自定义伪类
- `e()`, 用于在类名中使用的转义字符串
- `prefix()`, 用于将用户配置的前缀手动应用到选择器的各个部分
- `theme()`, 用于查找用户主题配置中的值
- `variants()`, 用于查找用户伪类配置中的值
- `config()`, 用于在用户的 tailwind 配置中查找值
- `postcss`, 与 [PostCSS](https://api.postcss.org/postcss.html) 进行直接操作

## 增加 utility 样式

`addutilties` 函数允许您在 `@tailwind utilities` 指令中注册要输出的新样式(以及内置 utility)。

utility 插件是在内置 utility 程序之后按照注册的顺序输出的，因此，如果一个插件与内置 utility 程序相同的名称，则 utility 插件将优先。

要从插件中添加新的 `通用 class`，调用 `addutilties`，使用 [css in-js 语法](https://tailwindcss.com/docs/plugins#css-in-js-syntax)传入样式:

```js
// tailwind.config.js
const plugin = require("tailwindcss/plugin");

module.exports = {
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        ".skew-10deg": {
          transform: "skewY(-10deg)",
        },
        ".skew-15deg": {
          transform: "skewY(-15deg)",
        },
      };

      addUtilities(newUtilities);
    }),
  ],
};
```

### 前缀和 important

默认情况下，utility 插件优先使用用户的[前缀](https://tailwindcss.com/docs/configuration#prefix)和 [important](https://tailwindcss.com/docs/configuration#important)。

这意味着，如果给出以下 Tailwind 配置：

```js
// tailwind.config.js
module.exports = {
  prefix: "tw-",
  important: true,
  // ...
};
```

... 上面的例子插件会生成以下 CSS:

```css
.tw-skew-10deg {
  transform: skewY(-10deg) !important;
}
.tw-skew-15deg {
  transform: skewY(-15deg) !important;
}
```

如果有需要去掉，您可以通过将一个 options 对象作为第二个参数传递给 addutilties 来选择不使用这种默认配置:

```js
// tailwind.config.js
const plugin = require("tailwindcss/plugin");

module.exports = {
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        // ...
      };

      addUtilities(newUtilities, {
        respectPrefix: false,
        respectImportant: false,
      });
    }),
  ],
};
```

### 响应式和伪类

要生成 responsive, hover, focus, active 或其他样式的伪类，请使用`variants`指定要生成的伪类:

```js
// tailwind.config.js
const plugin = require("tailwindcss/plugin");

module.exports = {
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        // ...
      };

      addUtilities(newUtilities, {
        variants: ["responsive", "hover"],
      });
    }),
  ],
};
```

如果你只需要指定变量，而不需要选择取消默认前缀或重要选项，你也可以直接传递变量数组作为第二个参数:

```js
// tailwind.config.js
const plugin = require("tailwindcss/plugin");

module.exports = {
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        // ...
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};
```

如果你想使用配置在 `tailwind.config.js` 文件的 `variants` 部分下伪类，你可以使用 `variants()` 函数来获取他们配置的伪类:

```js
// tailwind.config.js
const plugin = require("tailwindcss/plugin");

module.exports = {
  variants: {
    customPlugin: ["responsive", "hover"],
  },
  plugins: [
    plugin(function({ addUtilities, variants }) {
      const newUtilities = {
        // ...
      };

      addUtilities(newUtilities, variants("customPlugin"));
    }),
  ],
};
```

---

## 添加组件

addComponents 函数允许您在 `@tailwind components` 指令中注册要输出的新样式。

使用它来添加更多固执的复杂类，如 buttons, form controls, alerts 等; 这类预构建组件通常在其他框架中看到，您可能需要使用`通用 classes`覆盖它们。

要从插件中添加新的组件样式，调用 `addComponents`，使用 [css in-js 语法](https://tailwindcss.com/docs/plugins#css-in-js-syntax)传入样式:

```js
// tailwind.config.js
const plugin = require("tailwindcss/plugin");

module.exports = {
  plugins: [
    plugin(function({ addComponents }) {
      const buttons = {
        ".btn": {
          padding: ".5rem 1rem",
          borderRadius: ".25rem",
          fontWeight: "600",
        },
        ".btn-blue": {
          backgroundColor: "#3490dc",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#2779bd",
          },
        },
        ".btn-red": {
          backgroundColor: "#e3342f",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#cc1f1a",
          },
        },
      };

      addComponents(buttons);
    }),
  ],
};
```

### 前缀和 important

默认情况下，组件类自动使用用户的前缀首选项，但**不受用户 important 首选项的影响**。

这意味着，考虑到这种 Tailwind 配置:

```js
// tailwind.config.js
module.exports = {
  prefix: "tw-",
  important: true,
  // ...
};
```

... 上面的例子插件会生成以下 CSS:

```
.tw-btn {
  padding: .5rem 1rem;
  border-radius: .25rem;
  font-weight: 600;
}
.tw-btn-blue {
  background-color: #3490dc;
  color: #fff;
}
.tw-btn-blue:hover {
  background-color: #2779bd;
}
.tw-btn-blue {
  background-color: #e3342f;
  color: #fff;
}
.tw-btn-blue:hover {
  background-color: #cc1f1a;
}
```

虽然很少有很好的理由让组件声明 `!important`，但是如果您真的需要这样做，您可以随时添加`!important`:

```js
// tailwind.config.js
const plugin = require("tailwindcss/plugin");

module.exports = {
  plugins: [
    plugin(function({ addComponents }) {
      const buttons = {
        ".btn": {
          padding: ".5rem 1rem !important",
          borderRadius: ".25rem !important",
          fontWeight: "600 !important",
        },
        // ...
      };

      addComponents(buttons);
    }),
  ],
};
```

选择器中的所有类都默认前缀，所以如果你添加一个更复杂的样式，比如:

```js
// tailwind.config.js
const plugin = require("tailwindcss/plugin");

module.exports = {
  prefix: "tw-",
  plugins: [
    plugin(function({ addComponents }) {
      const components = {
        // ...
        ".navbar-inverse a.nav-link": {
          color: "#fff",
        },
      };

      addComponents(components);
    }),
  ],
};
```

... 将生成以下 CSS:

```css
.tw-navbar-inverse a.tw-nav-link {
  color: #fff;
}
```

如果选择不使用前缀，将一个 options 对象作为第二个参数传递给 addComponents:

```js
// tailwind.config.js
const plugin = require("tailwindcss/plugin");

module.exports = {
  prefix: "tw-",
  plugins: [
    plugin(function({ addComponents }) {
      const components = {
        // ...
      };

      addComponents(components, {
        respectPrefix: false,
      });
    }),
  ],
};
```

### 响应式和伪类

要生成 responsive, hover, focus, active 或其他样式的伪类，请使用`variants`指定要生成的伪类:

```js
// tailwind.config.js
const plugin = require("tailwindcss/plugin");

module.exports = {
  plugins: [
    plugin(function({ addComponents }) {
      const newComponents = {
        // ...
      };

      addComponents(newComponents, {
        variants: ["responsive", "hover"],
      });
    }),
  ],
};
```

如果你只需要指定变量，而不需要选择取消默认前缀，你也可以直接传递变量数组作为第二个参数:

```js
// tailwind.config.js
const plugin = require("tailwindcss/plugin");

module.exports = {
  plugins: [
    plugin(function({ addComponents }) {
      const newComponents = {
        // ...
      };

      addComponents(newComponents, ["responsive", "hover"]);
    }),
  ],
};
```

如果你想使用配置在 `tailwind.config.js` 文件的 `variants` 部分下伪类，你可以使用 `variants()` 函数来获取他们配置的伪类:

```js
// tailwind.config.js
const plugin = require("tailwindcss/plugin");

module.exports = {
  variants: {
    customPlugin: ["responsive", "hover"],
  },
  plugins: [
    plugin(function({ addComponents, variants }) {
      const newComponents = {
        // ...
      };

      addComponents(newComponents, variants("customPlugin"));
    }),
  ],
};
```

## 添加 base 样式

addBase 函数允许您在 `@tailwind base` 指令中注册要输出的新样式。

使用它添加诸如基本排版样式、全局样式或@font-face 规则之类的内容。

要从插件中添加新的基本样式，可以调用 `addBase`，使用 [css in-js 语法](https://tailwindcss.com/docs/plugins#css-in-js-syntax)传入样式:

```js
// tailwind.config.js
const plugin = require("tailwindcss/plugin");

module.exports = {
  plugins: [
    plugin(function({ addBase, config }) {
      addBase({
        h1: { fontSize: config("theme.fontSize.2xl") },
        h2: { fontSize: config("theme.fontSize.xl") },
        h3: { fontSize: config("theme.fontSize.lg") },
      });
    }),
  ],
};
```

因为基本样式的目标是像 `div`、 `h1`等选择器，所以它们不会使用 `prefix` 或 `important` 的默认配置。

---

## 转义类名

如果您的插件生成的类包含用户提供的字符串，您可以使用 `e` 函数转义这些类名，以确保非标准字符得到正确的自动处理。

例如，这个插件生成一组。`.rotate-{angle}` class，其中 `{angle}` 是用户提供的字符串。`e` 函数用于转义连接的类名，以确保 class 的生成类似 `.rotate-1/4` 的样式:

```js
// tailwind.config.js
const _ = require("lodash");
const plugin = require("tailwindcss/plugin");

module.exports = {
  theme: {
    rotate: {
      "1/4": "90deg",
      "1/2": "180deg",
      "3/4": "270deg",
    },
  },
  plugins: [
    plugin(function({ addUtilities, config, e }) {
      const rotateUtilities = _.map(config("theme.rotate"), (value, key) => {
        return {
          [`.${e(`rotate-${key}`)}`]: {
            transform: `rotate(${value})`,
          },
        };
      });

      addUtilities(rotateUtilities);
    }),
  ],
};
```

这个插件会生成如下 CSS:

```css
.rotate-1\/4 {
  transform: rotate(90deg);
}
.rotate-1\/2 {
  transform: rotate(180deg);
}
.rotate-3\/4 {
  transform: rotate(270deg);
}
```

要小心，只转义你需要转义的 class，不要提前优化类似所有前缀带:的 class。否则以 `:` 开头的伪类 `:hover` 或 :`focus`，这些字符也将会被转义。

此外，由于 CSS 对类名可以以哪些字符开头为规则(类名不能以数字开头，但可以包含一个数字) ，因此最好避免使用完整的类名(不仅仅是用户提供的部分) ，否则可能会产生不必要的转义序列:

```js
// Will unnecessarily escape `1`
`.rotate-${e("1/4")}` // Won't escape `1` because it's not the first character // => '.rotate-\31 \/4'
`.${e("rotate-1/4")}`;
// => '.rotate-1\/4'
```

---

## 手动添加选择器前缀

如果您正在编写一些只想在某些 class 前加前缀的复杂样式，那么可以使用前缀函数对应用用户配置的前缀进行细粒度控制。

例如，如果你正在创建一个插件，可以在一系列内部项目中重用，这些内部项目包括选择器中的现有 class，你可能只想给新 class 加上前缀:

```JS
// tailwind.config.js
const plugin = require('tailwindcss/plugin')

module.exports = {
  prefix: 'tw-',
  plugins: [
    plugin(function({ addComponents, prefix }) {
      addComponents({
        [`.existing-class > ${prefix('.new-class')}`]: {
          backgroundColor: '#fff',
        }
      })
    })
  ]
}
```

这将生成以下 CSS:

```css
.existing-class > .tw-new-class {
  background-color: #fff;
}
```

`prefix`函数将在选择器中的所有类中加上前缀，而忽略 base class，因此下面这样的复杂选择器是完全安全的:

---

## 引用用户配置

`config`, `theme`, 和 `variants`函数允许您使用点符号从用户的 Tailwind 配置中请求用户配置，如果配置不存在，则返回默认值。

例如，这个简化版本的[内置容器插件](https://tailwindcss.com/docs/container)使用主题函数来获取用户配置的断点:

```js
// tailwind.config.js
const _ = require("lodash");
const plugin = require("tailwindcss/plugin");

module.exports = {
  plugins: [
    plugin(function({ addComponents, theme }) {
      const screens = theme("screens", {});

      const mediaQueries = _.map(screens, (width) => {
        return {
          [`@media (min-width: ${width})`]: {
            ".container": {
              "max-width": width,
            },
          },
        };
      });

      addComponents([{ ".container": { width: "100%" } }, ...mediaQueries]);
    }),
  ],
};
```

但是，`theme` 函数实际上只是一个使用快捷方式 `config` 函数访问用户配置的 `theme` 配置:

```js
// 它们相等
config("theme.screens");
theme("screens");
```

注意：如果您想引用用户的 `variants` 配置，建议您使用 `variants()` 函数而不是 config 函数。

**Wrong**：不要使用 `config` 函数查找变量

```js
addUtilities(newUtilities, config("variants.customPlugin"));
```

**Right**： 改用 `variants()` 函数

```js
addUtilities(newUtilities, variants("customPlugin"));
```

因为 `variants` 在项目中有一个[全局的默认配置](https://tailwindcss.com/docs/configuring-variants#default-variants-reference)的，所以使用 `variants()` 函数可以让您轻松地使用默认的配置，而无需自己重新实现这个逻辑。

```js
// tailwind.config.js
const plugin = require("tailwindcss/plugin");

module.exports = {
  variants: ["responsive", "hover", "focus"],
  plugins: [
    plugin(function({ config, variants }) {
      config("variants.customPlugin");
      // => undefined

      variants("customPlugin");
      // => ['reponsive', 'hover', 'focus']
    }),
  ],
};
```

---

## 插件暴露配置

对于一个插件来说，暴露的接口选项非常有意义，用户可以根据这些接口选项来定制插件。

最好的方法是在用户的 `theme` 和 `variants` 中声明你自己的接口，并要求用户提供这些接口的定义，这样你就可以通过 `theme` 和 `variants` 访问并且实现它们。

例如，这里有一个插件(提取到它自己的模块)用于创建简单的渐变工具，它接受 `gradients` 和 `variants` 作为选项生成:

```js
// ./plugins/gradients.js
const _ = require("lodash");
const plugin = require("tailwindcss/plugin");

module.exports = plugin(function({ addUtilities, e, theme, variants }) {
  const gradients = theme("gradients", {});
  const gradientVariants = variants("gradients", []);

  const utilities = _.map(gradients, ([start, end], name) => ({
    [`.${e(`bg-gradient-${name}`)}`]: {
      backgroundImage: `linear-gradient(to right, ${start}, ${end})`,
    },
  }));

  addUtilities(utilities, gradientVariants);
});
```

要使用它，你需要在你的插件列表中 `require` 它，在 `theme` 和 `variants` 的 `gradients` 键下指定你的配置:

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
  variants: {
    gradients: ["responsive", "hover"],
  },
  plugins: [require("./plugins/gradients")],
};
```

## 提供默认选项

为了给你的插件提供默认 `theme` 和 `variants` 选项，给 Tailwind 的 `plugin` 函数传递第二个参数，传入你的默认值:

```js
// ./plugins/gradients.js
const _ = require("lodash");
const plugin = require("tailwindcss/plugin");

module.exports = plugin(
  function({ addUtilities, e, theme, variants }) {
    // ...
  },
  {
    theme: {
      gradients: (theme) => ({
        "blue-green": [theme("colors.blue.500"), theme("colors.green.500")],
        "purple-blue": [theme("colors.purple.500"), theme("colors.blue.500")],
        // ...
      }),
    },
    variants: {
      gradients: ["responsive", "hover"],
    },
  }
);
```

这个对象只是一个 [Tailwind config 对象](https://tailwindcss.com/docs/configuration)，它的所有属性和特性都与在 `Tailwind.config.js` 中使用的配置对象相同。

---

## CSS-in-JS 语法

每一个 `addutilties`、 `addComponents` 和 `addBase` 的配置我们都希望用 JavaScript 对象编写的 CSS。Tailwind 使用类似 CSS-in-JS 库(如 [Emotion](https://emotion.sh/docs/object-styles))，底层基于 [postcss-js](https://github.com/postcss/postcss-js)。

看下这个简单的 CSS 规则:

```css
.card {
  background-color: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
```

把它翻译成 CSS-in-JS

```js
addComponents({
  ".card": {
    "background-color": "#fff",
    "border-radius": ".25rem",
    "box-shadow": "0 2px 4px rgba(0,0,0,0.2)",
  },
});
```

为了方便起见，还可以用 camelCase 编写属性名，并自动转换为 dash-case:

```js
addComponents({
  ".card": {
    backgroundColor: "#fff",
    borderRadius: ".25rem",
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
  },
});
```

样式嵌套也受到支持(由 [postcss-nested](https://github.com/postcss/postcss-nested) 提供支持) ，使用的语法可能与您在 Sass 或 Less 中所熟悉的相同:

```js
addComponents({
  ".card": {
    backgroundColor: "#fff",
    borderRadius: ".25rem",
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
    "&:hover": {
      boxShadow: "0 10px 15px rgba(0,0,0,0.2)",
    },
    "@media (min-width: 500px)": {
      borderRadius: ".5rem",
    },
  },
});
```

...或者传入一个对象数组，可以重复使用同一个键:

```js
addComponents([
  {
    "@media (min-width: 500px)": {
      // ...
    },
  },
  {
    "@media (min-width: 500px)": {
      // ...
    },
  },
  {
    "@media (min-width: 500px)": {
      // ...
    },
  },
]);
```

## 添加伪类

`addVariant` 函数允许您注册自己的自定义伪类，这些伪类可以像内置的 hover, focus, active,等伪类一样使用。

要添加一个新的伪类，请调用 `addVariant` 函数，传入自定义伪类的名称，以及根据需要修改受影响的 CSS 规则的回调。

```js
const plugin = require("tailwindcss/plugin");

module.exports = {
  plugins: [
    plugin(function({ addVariant, e }) {
      addVariant("disabled", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`disabled${separator}${className}`)}:disabled`;
        });
      });
    }),
  ],
};
```

该回调接收一个对象，该对象可以被解构为以下部分:

- `modifySelectors` 简化添加基本伪类的帮助函数
- `separator` 配置[分割线](https://tailwindcss.com/docs/configuration#separator)
- `container` [PostCSS Container](https://postcss.org/api/#container) 包含了提供的所有基础伪类，可以在之上创建更复杂的伪类。

## 基础伪类

如果您想添加一个只需要更改选择器的简单伪类，请使用 `modifySelectors`

`modifySelectors` 接受一个函数，该函数接收一个对象，该对象可以被析构为以下几部分:

- `selector` 当前规则的未修改的完整选择器
- `className` 样式名（不带点）

传递给 `modifySelectors` 的函数应该只返回修改后的选择器。

例如，一个 `first-child` 插件可以这样写:

```js
// tailwind.config.js
const plugin = require("tailwindcss/plugin");

module.exports = {
  plugins: [
    plugin(function({ addVariant, e }) {
      addVariant("first-child", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`first-child${separator}${className}`)}:first-child`;
        });
      });
    }),
  ],
};
```

## 复杂的伪类

<!-- TODO:

如果您需要做的不仅仅是修改选择器(比如更改实际的规则声明，或者将规则包装到另一个 at-rule 中) ，那么您需要使用 `container` 实例。

通过使用 `container` 实例，您可以遍历给定模块或 `@variant` 块中的所有规则，并使用标准的 `PostCSS API` 对它们进行操作。

例如，这个插件创建了每个受影响实用程序的 `important`，在类前面加上一个叹号，然后修改每个重要声明: -->

## 使用自定义伪类

使用自定义伪类与使用 Tailwind 的内置伪类没有什么不同。

使用自定义伪类的 Tailwind 的核心插件，将它们添加到配置文件的 `variants` 部分:

```js
// tailwind.config.js
modules.exports = {
  variants: {
    borderWidths: ["responsive", "hover", "focus", "first-child", "disabled"],
  },
};
```

要在自己的 CSS 中使用带有自定义工具的自定义伪类，请使用 [at-rule 中的伪类](https://tailwindcss.com/docs/functions-and-directives#variants):

```css
@variants hover, first-child {
  .bg-cover-image {
    background-image: url('/path/to/image.jpg');
  }
}
```