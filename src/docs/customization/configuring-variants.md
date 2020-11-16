# 配置伪类

> 配置项目中的伪类变量

---

你可以通过配置`tailwind.config.js` 文件中的 `variants` 用于在 [响应式](https://tailwindcss.com/docs/responsive-design) 以及 [伪类变量](https://tailwindcss.com/docs/pseudo-class-variants) 的 `通用 classes`中

```js
// tailwind.config.js
module.exports = {
  variants: {
    appearance: ["responsive"],
    // ...
    borderColor: ["responsive", "hover", "focus"],
    // ...
    outline: ["responsive", "focus"],
    // ...
    zIndex: ["responsive"],
  },
};
```

每个属性都是一个核心插件名，指向要为该插件生成的伪类数组。下列配置现已得到官方支持:

- `'responsive'`
- `'group-hover'`
- `'focus-within'`
- `'first'`
- `'last'`
- `'odd'`
- `'even'`
- `'hover'`
- `'focus'`
- `'active'`
- `'visited'`
- `'disabled'`
- `'motion-safe'`
- `'motion-reduce'`

## 覆盖默认伪类

您指定的任何伪类都将通过插件 **覆盖** 默认伪类。

```js
// tailwind.config.js
module.exports = {
  variants: {
    // 只有 'active' 才会生效
    backgroundColor: ["active"],
  },
};
```

在重写缺省伪类时，确保始终指定要启用的所有伪类，而不仅仅是要添加的新伪类。

## 扩展默认伪类

如果你想为一个插件启用额外的伪类，除了默认值，你可以使用一个函数来配置你的伪类，而不是一个数组:

```js
// tailwind.config.js
module.exports = {
  variants: {
    // The 'active' variant will be generated in addition to the defaults
    backgroundColor: ({ after }) => after(["active"]),
  },
};
```

因为[伪类的顺序很重要](https://tailwindcss.com/docs/configuring-variants#ordering-variants)，所以我们提供了一些辅助函数作为参数，使得你可以在正确的位置添加新的伪类。

## before

Before 允许您向插件的默认伪类列表的开头添加新伪类。

```js
// tailwind.config.js
module.exports = {
  variants: {
    // 默认是 ['responsive', 'hover', 'focus']
    backgroundColor: ({ before }) => before(["active"], "focus"),
    // 输出: ['responsive', 'hover', 'active', 'focus']
  },
};
```

如果你想在列表中的特定伪类之前添加新的伪类，那么把它作为第二个参数传递:

```js
// tailwind.config.js
module.exports = {
  variants: {
    // 默认是 ['responsive', 'hover', 'focus']
    backgroundColor: ({ before }) => before(["active"], "focus"),
    // 输出: ['responsive', 'hover', 'active', 'focus']
  },
};
```

## after

After 允许您将新的伪类添加到插件默认伪类列表的末尾。

```js
// tailwind.config.js
module.exports = {
  variants: {
    // 默认是 ['responsive', 'hover', 'focus']
    backgroundColor: ({ after }) => after(["active"]),
    // 输出: ['responsive', 'hover', 'focus', 'active']
  },
};
```

如果你想在列表中的特定伪类后面添加新的伪类，把它作为第二个参数传递:

```js
// tailwind.config.js
module.exports = {
  variants: {
    // 默认是 ['responsive', 'hover', 'focus']
    backgroundColor: ({ after }) => after(["active"], "hover"),
    // 输出: ['responsive', 'hover', 'active', 'focus']
  },
};
```

## without

使用 without 可以禁用默认启用的伪类。

```js
// tailwind.config.js
module.exports = {
  variants: {
    // 默认是 ['responsive', 'hover', 'focus']
    backgroundColor: ({ without }) => without(["focus"]),
    // 输出: ['responsive', 'hover']
  },
};
```

## variants

variant 允许您检索特定插件的伪类，以便直接从中读取。

```js
// tailwind.config.js
module.exports = {
  variants: {
    // 默认 ['responsive', 'hover', 'focus']
    backgroundColor: ({ variants }) => [
      ...variants("backgroundColor"),
      "active",
    ],
    // 输出: ['responsive', 'hover', 'focus', 'active']
  },
};
```

这是一个最终方案，你可能永远不会使用。用 before, after 和 without 可以解决你几乎所有需求。

## 编写多个 helpers

以上的工具都可以在一起使用，比如在添加一个伪类的同时删除或者改变另一个伪类顺序，等

```js
// tailwind.config.js
module.exports = {
  variants: {
    // 默认 ['responsive', 'hover', 'focus']
    backgroundColor: ({ before, after, without }) =>
      without(
        ["focus"],
        before(["active"], "hover", after(["focus-within"], "responsive"))
      ),
    // 输出: [responsive', 'focus-within', 'active', 'hover']
  },
};
```

这看起来很复杂，你可能永远都不会使用。

## 伪类排序

需要注意的是，伪类是按照指定的顺序生成的，因此列表末尾的伪类优先于列表开头的伪类。

在这个例子中，`focus` 变量在 `backgroundColor` 中的优先级最高，但是 `hover` 在 `borderColor` 中的优先级最高:

```js
// tailwind.config.js
module.exports = {
  variants: {
    backgroundColor: ["hover", "focus"],
    borderColor: ["focus", "hover"],
  },
};
```

```css
/* Generated CSS */

.bg-black {
  background-color: #000;
}
.bg-white {
  background-color: #fff;
}
/* ... */

.hover\:bg-black:hover {
  background-color: #000;
}
.hover\:bg-white:hover {
  background-color: #fff;
}
/* ... */

.focus\:bg-black:focus {
  background-color: #000;
}
.focus\:bg-white:focus {
  background-color: #fff;
}
/* ... */

.border-black {
  border-color: #000;
}
.border-white {
  border-color: #fff;
}
/* ... */

.focus\:border-black:focus {
  border-color: #000;
}
.focus\:border-white:focus {
  border-color: #fff;
}
/* ... */

.hover\:border-black:hover {
  border-color: #000;
}
.hover\:border-white:hover {
  border-color: #fff;
}
/* ... */
```

这意味着给定以下 HTML:

```html
<input
  class="focus:bg-white hover:bg-black focus:border-white hover:border-black"
/>
```

... 如果输入同时悬浮和聚焦，背景会是白色，但边框会是黑色。

一般来说，我们建议对于内置的伪类使用以下顺序，尽管您可以自由地使用任何对您自己的项目最有意义的顺序:

```js
[
  "responsive",
  "group-hover",
  "group-focus",
  "focus-within",
  "first",
  "last",
  "odd",
  "even",
  "hover",
  "focus",
  "active",
  "visited",
  "disabled",
];
```

## 响应式伪类

响应式伪类是唯一不受 variants 配置中列表顺序影响的伪类。

这是因为响应式伪类会自动叠加伪类变量，这意味着如果你为一个工具同时指定响应式伪类和悬停伪类，Tailwind 也会生成响应式悬停伪类:

```js
// tailwind.config.js
module.exports = {
  variants: {
    backgroundColor: ["responsive", "hover"],
    borderColor: ["responsive", "focus"],
  },
};
```

```css
/* 生成的 CSS */

.bg-black {
  background-color: #000;
}
/* ... */
.hover\:bg-black:hover {
  background-color: #000;
}
/* ... */

.border-black {
  border-color: #000;
}
/* ... */
.focus\:border-black:focus {
  border-color: #000;
}
/* ... */

@media (min-width: 640px) {
  .sm\:bg-black {
    background-color: #000;
  }
  /* ... */
  .sm\:hover\:bg-black:hover {
    background-color: #000;
  }
  /* ... */

  .sm\:border-black {
    border-color: #000;
  }
  /* ... */
  .sm\:focus\:border-black:focus {
    border-color: #000;
  }
  /* ... */
}

@media (min-width: 768px) {
  .md\:bg-black {
    background-color: #000;
  }
  /* ... */
  .md\:hover\:bg-black:hover {
    background-color: #000;
  }
  /* ... */

  .md\:border-black {
    border-color: #000;
  }
  /* ... */
  .md\:focus\:border-black:focus {
    border-color: #000;
  }
  /* ... */
}

@media (min-width: 1024px) {
  .lg\:bg-black {
    background-color: #000;
  }
  /* ... */
  .lg\:hover\:bg-black:hover {
    background-color: #000;
  }
  /* ... */

  .lg\:border-black {
    border-color: #000;
  }
  /* ... */
  .lg\:focus\:border-black:focus {
    border-color: #000;
  }
  /* ... */
}

@media (min-width: 1280px) {
  .xl\:bg-black {
    background-color: #000;
  }
  /* ... */
  .xl\:hover\:bg-black:hover {
    background-color: #000;
  }
  /* ... */

  .xl\:border-black {
    border-color: #000;
  }
  /* ... */
  .xl\:focus\:border-black:focus {
    border-color: #000;
  }
  /* ... */
}
```

**响应变量被分组在一起，并且默认情况下插入在样式表的末尾**，以避免特异性问题。如果您希望自定义此行为，无论出于什么原因，您可以使用[@tailwind screen](https://tailwindcss.com/docs/functions-and-directives#tailwind) 指令来指定应该插入响应式伪类的位置。

## 默认伪类

您可以使用特殊的默认伪类配置来控制相对于其他正常或者有前缀的样式的位置

```js
// tailwind.config.js
module.exports = {
  variants: {
    backgroundColor: ["hover", "default", "focus"],
  },
};
```

```css
/* 生成的 CSS */

.hover\:bg-black:hover {
  background-color: #000;
}
.hover\:bg-white:hover {
  background-color: #fff;
}
/* ... */

.bg-black {
  background-color: #000;
}
.bg-white {
  background-color: #fff;
}
/* ... */

.focus\:bg-black:focus {
  background-color: #000;
}
.focus\:bg-white:focus {
  background-color: #fff;
}
/* ... */
```

以下一个高级特性，只有当您有一个自定义伪类(如下面示例中的子`children`)时才真正有用，这个伪类的优先级应该低于默认样式。

```js
// tailwind.config.js
module.exports = {
  variants: {
    backgroundColor: ["children", "default", "hover", "focus"],
  },
};
```

```css
/* 生成的 CSS */

.children\:bg-black > * {
  background-color: #000;
}
.children\:bg-white > * {
  background-color: #fff;
}

.bg-black {
  background-color: #000;
}
.bg-white {
  background-color: #fff;
}
/* ... */

.hover\:bg-black:hover {
  background-color: #000;
}
.hover\:bg-white:hover {
  background-color: #fff;
}
/* ... */

.focus\:bg-black:focus {
  background-color: #000;
}
.focus\:bg-white:focus {
  background-color: #fff;
}
/* ... */
```

了解有关在伪类插件文档中创建自定义伪类的[更多信息](https://tailwindcss.com/docs/plugins#adding-variants)。

---

## 配置全局伪类

为了指定一个应该应用于所有样式的全局伪类集，你可以直接为`variants`分配一个伪类数组，而不是单独配置伪类:

```js
// tailwind.config.js
module.exports = {
  variants: [
    "responsive",
    "group-hover",
    "disabled",
    "hover",
    "focus",
    "active",
  ],
};
```

请注意，为所有插件启用大量伪类将导致文件大小更大。在您这样做之前，请务必阅读我们的[控制文件大小指南](http://wtailwindcss.com/docs/controlling-file-size)。

---

## 使用自定义伪类

如果您编写或安装了一个添加了新伪类的[插件](https://tailwindcss.com/docs/plugins)，您可以通过将其包含在`variants`中来启用该伪类，就像它是一个内置伪类一样。

例如，[tailwindcss-interaction-variant](https://github.com/benface/tailwindcss-interaction-variants) 插件增加了一个 `group-disabled` 伪类(以及其他伪类) :

```js
// tailwind.config.js
{
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'group-disabled'],
  },
  plugins: [
    require('tailwindcss-interaction-variants')(),
  ],
}
```

了解有关在伪类插件文档中创建自定义伪类的[更多信息](https://tailwindcss.com/docs/plugins#adding-variants)。

---

## 默认伪类配置

这里是一个对 Tailwind 缺省变量配置的完整参考，当你想添加一个新的伪类同时保留缺省值时，这个参考非常有用。

```js
// Default configuration
module.exports = {
  // ...
  variants: {
    accessibility: ["responsive", "focus"],
    alignContent: ["responsive"],
    alignItems: ["responsive"],
    alignSelf: ["responsive"],
    appearance: ["responsive"],
    backgroundAttachment: ["responsive"],
    backgroundClip: ["responsive"],
    backgroundColor: ["responsive", "hover", "focus"],
    backgroundImage: ["responsive"],
    gradientColorStops: ["responsive", "hover", "focus"],
    backgroundOpacity: ["responsive", "hover", "focus"],
    backgroundPosition: ["responsive"],
    backgroundRepeat: ["responsive"],
    backgroundSize: ["responsive"],
    borderCollapse: ["responsive"],
    borderColor: ["responsive", "hover", "focus"],
    borderOpacity: ["responsive", "hover", "focus"],
    borderRadius: ["responsive"],
    borderStyle: ["responsive"],
    borderWidth: ["responsive"],
    boxShadow: ["responsive", "hover", "focus"],
    boxSizing: ["responsive"],
    container: ["responsive"],
    cursor: ["responsive"],
    display: ["responsive"],
    divideColor: ["responsive"],
    divideOpacity: ["responsive"],
    divideStyle: ["responsive"],
    divideWidth: ["responsive"],
    fill: ["responsive"],
    flex: ["responsive"],
    flexDirection: ["responsive"],
    flexGrow: ["responsive"],
    flexShrink: ["responsive"],
    flexWrap: ["responsive"],
    float: ["responsive"],
    clear: ["responsive"],
    fontFamily: ["responsive"],
    fontSize: ["responsive"],
    fontSmoothing: ["responsive"],
    fontVariantNumeric: ["responsive"],
    fontStyle: ["responsive"],
    fontWeight: ["responsive", "hover", "focus"],
    height: ["responsive"],
    inset: ["responsive"],
    justifyContent: ["responsive"],
    justifyItems: ["responsive"],
    justifySelf: ["responsive"],
    letterSpacing: ["responsive"],
    lineHeight: ["responsive"],
    listStylePosition: ["responsive"],
    listStyleType: ["responsive"],
    margin: ["responsive"],
    maxHeight: ["responsive"],
    maxWidth: ["responsive"],
    minHeight: ["responsive"],
    minWidth: ["responsive"],
    objectFit: ["responsive"],
    objectPosition: ["responsive"],
    opacity: ["responsive", "hover", "focus"],
    order: ["responsive"],
    outline: ["responsive", "focus"],
    overflow: ["responsive"],
    overscrollBehavior: ["responsive"],
    padding: ["responsive"],
    placeContent: ["responsive"],
    placeItems: ["responsive"],
    placeSelf: ["responsive"],
    placeholderColor: ["responsive", "focus"],
    placeholderOpacity: ["responsive", "focus"],
    pointerEvents: ["responsive"],
    position: ["responsive"],
    resize: ["responsive"],
    space: ["responsive"],
    stroke: ["responsive"],
    strokeWidth: ["responsive"],
    tableLayout: ["responsive"],
    textAlign: ["responsive"],
    textColor: ["responsive", "hover", "focus"],
    textOpacity: ["responsive", "hover", "focus"],
    textDecoration: ["responsive", "hover", "focus"],
    textTransform: ["responsive"],
    userSelect: ["responsive"],
    verticalAlign: ["responsive"],
    visibility: ["responsive"],
    whitespace: ["responsive"],
    width: ["responsive"],
    wordBreak: ["responsive"],
    zIndex: ["responsive"],
    gap: ["responsive"],
    gridAutoFlow: ["responsive"],
    gridTemplateColumns: ["responsive"],
    gridAutoColumns: ["responsive"],
    gridColumn: ["responsive"],
    gridColumnStart: ["responsive"],
    gridColumnEnd: ["responsive"],
    gridTemplateRows: ["responsive"],
    gridAutoRows: ["responsive"],
    gridRow: ["responsive"],
    gridRowStart: ["responsive"],
    gridRowEnd: ["responsive"],
    transform: ["responsive"],
    transformOrigin: ["responsive"],
    scale: ["responsive", "hover", "focus"],
    rotate: ["responsive", "hover", "focus"],
    translate: ["responsive", "hover", "focus"],
    skew: ["responsive", "hover", "focus"],
    transitionProperty: ["responsive"],
    transitionTimingFunction: ["responsive"],
    transitionDuration: ["responsive"],
    transitionDelay: ["responsive"],
    animation: ["responsive"],
  },
};
```
