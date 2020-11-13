# 伪类

> hover、 focus 等样式处理

---

类似于 Tailwind 如何处理[响应式设计](./responsive-design)，hover、 focus 等元素可以通过使用适当的伪类前缀来实现。

  <form class="flex w-full max-w-sm mx-auto">
    <input class="flex-1 bg-gray-200 hover:bg-white hover:border-gray-300 focus:outline-none focus:bg-white focus:shadow-outline focus:border-gray-300 appearance-none border border-transparent rounded w-full py-2 px-4 text-gray-700 leading-tight " type="email" placeholder="Your email">
    <button class="ml-4 flex-shrink-0 bg-teal-500 hover:bg-teal-600 focus:outline-none focus:shadow-outline text-white font-bold py-2 px-4 rounded" type="button">
      Sign Up
    </button>
  </form>

```html
<form>
  <input
    class="bg-gray-200 hover:bg-white hover:border-gray-300 focus:outline-none focus:bg-white focus:shadow-outline focus:border-gray-300 ..."
  />
  <button
    class="bg-teal-500 hover:bg-teal-600 focus:outline-none focus:shadow-outline ..."
  >
    Sign Up
  </button>
</form>
```

**注意：**由于文件大小方面的考虑，并非所有伪类变体都默认启用，但我们已经尽最大努力启用最常用的组合。

有关默认情况下启用哪些变量的完整列表，请参阅本页[末尾的引用表](https://tailwindcss.com/docs/pseudo-class-variants#default-variants-reference)。

果您需要针对一个 Tailwind 不支持的伪类，您可以通过编写一个插件来[扩展支持](https://tailwindcss.com/docs/pseudo-class-variants#creating-custom-variants)。

## Hover

添加 `hover:` 前缀到 class 中

<button type="button" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded focus:outline-none focus:shadow-outline">
    Hover me
  </button>

```html
<button
  type="button"
  class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded focus:outline-none focus:shadow-outline"
>
  Hover me
</button>
```

你可以在 `tailwind.config.js` 文件的变量部分中控制是否为某个工具启用悬停变量:

```
// tailwind.config.js
module.exports = {
  // ...
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus'],
  },
}
```

还有 Focue、Active、Group-hover、Group-focus、Focus-within、Focus-visible、Motion-safe、
Motion-reduce、Disabled、Visited、Checked、First-child、Last-child、Odd-child、Even-child 等伪类的用法请查看相关文档： [更多内容](https://tailwindcss.com/docs/pseudo-class-variants#focus)

## 与响应前缀组合

伪类变体也是响应式的，这意味着您可以在不同的 `media断点` 更改元素的 hover 样式。

要在特定`media断点`上应用伪类变量，请先添加响应前缀，然后再添加伪类前缀:

```
<div class="bg-orange-500 hover:bg-orange-600 sm:bg-green-500 sm:hover:bg-green-600 md:bg-red-500 md:hover:bg-red-600 lg:bg-indigo-500 lg:hover:bg-indigo-600 xl:bg-pink-500 xl:hover:bg-pink-600"></div>
```

## 自定义伪类

通过编写自定义插件，支持特殊的伪类需求。

例如，这个简单的插件增加了对禁用伪类变量的支持:

```
// tailwind.config.js
const plugin = require('tailwindcss/plugin')

module.exports = {
  plugins: [
    plugin(function({ addVariant, e }) {
      addVariant('disabled', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`disabled${separator}${className}`)}:disabled`
        })
      })
    })
  ]
}
```

在插件文档中了解有关编写插件的[更多信息](https://tailwindcss.com/docs/plugins#adding-variants)。

## 默认支持伪类

由于文件大小的考虑，在默认情况下，Tailwind 并不包括所有 class 的所有变量。

若要配置您的项目启用了哪些变量，请参阅配置变量文档。

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
