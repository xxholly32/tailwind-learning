# 基础样式

> 一组 tailwind 的基础样式。

---

Preflight 是建立在 [normalize.css](https://github.com/necolas/normalize.css/) 之上的，是一组用于 Tailwind 项目的基本样式，旨在消除跨浏览器的不一致性，并使您更容易在这个约束下正确的展示。

当你在 CSS 中加入 `@Tailwind base` 时，Tailwind 自动注入这些样式:

```css
@tailwind base; /* Preflight 在这里注入 */

@tailwind components;

@tailwind utilities;
```

虽然大多数的 Preflight 样式都不会被使用 - 它们只是将默认值设置为你预想的一样 - 但有些可能和你预想的有所偏差。

有关 Preflight 应用的所有样式的完整参考，请参[阅样式表](https://unpkg.com/tailwindcss@1.9.6/dist/base.css)。

---

## 默认的边距被移除

预先删除所有的默认边距元素，如标题，引号，段落等。

```css
blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
figure,
p,
pre {
  margin: 0;
}
```

<!-- TODO: 没理解 -->

---

## 标题字体都没有样式

默认情况下，所有标题元素都是完全无样式的，并且与正常文本具有相同的字体大小和重量。

```css
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}
```

其中的原因有两方面:

- **它可以帮助你避免偏离你字体比例**。默认情况下，浏览器为标题分配大小，而这些标题并不存在于 Tailwind 的默认类型尺度中，也不能保证存在于你自己的字体比例中
- **在 UI 界面开发中，标题往往在视觉上被忽略。**默认情况下不设置标题样式意味着你应用到标题上的任何样式都是有意识进行的。

您始终可以通过添加自己的[基础样式](https://tailwindcss.com/docs/adding-base-styles)来向项目添加默认的标题样式。

如果你想有选择地在页面的文章风格部分引入合理的默认标题样式，我们推荐 [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) 插件。

---

## 列表是无样式的

有序列表和无序列表默认是无样式的，没有项目符号/数字，也没有边距或填充。

```css
ol,
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
```

如果您希望对列表进行样式化，可以使用 `list-style-type` 和 `list-style-position` 的 `通用classes`:

```html
<ul class="list-disc list-inside">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>
```

您可以通过添加自己的[基础样式](https://tailwindcss.com/docs/adding-base-styles)来向项目添加默认列表样式。

如果您希望有选择地将默认列表样式引入到页面的文章样式部分，我们推荐 [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) 插件。

---

## 图像是块级别的

默认情况下，图像和其他的可视化元素(如 `svg`、 `video`、 `canvas` 等)是 `display:block`。

```css
img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  vertical-align: middle;
}
```

这有助于避免使用 `display:inline` 的浏览器默认值时经常遇到的意外对齐问题。

如果你需要使这些元素使用 `inline` 而不是 `block`，简单地使用内联样式:

```html
<img class="inline" src="..." alt="..." />
```

---

## 全局边框

为了简单地通过添加 border 类来添加边框，Tailwind 使用以下规则覆盖了所有元素的默认边框样式:

```css
*,
*::before,
*::after {
  border-width: 0;
  border-style: solid;
  border-color: theme("borderColor.default", currentColor);
}
```

由于 `border` 类只设置 `border-width` 属性，这种重置确保添加该类时总是使用您配置的默认边框颜色添加 1px 的实线边框。

在集成某些第三方库(例如 [Google 地图](https://github.com/tailwindlabs/tailwindcss/issues/484))时，这可能会导致一些意想不到的结果。

当你遇到这种情况时，你可以通过自定义 CSS 覆盖 Preflight 样式来解决它们:

```css
.google-map * {
  border-style: none;
}
```

---

## 继承 Preflight

如果你想在 Preflight 上添加你自己的基础样式，只需在 @tailwind base 后添加到你的 CSS :

```css
@tailwind base;

h1 {
  @apply text-2xl;
}
h2 {
  @apply text-xl;
}
h3 {
  @apply text-lg;
}
a {
  @apply text-blue-600 underline;
}

@tailwind components;

@tailwind utilities;
```

在添加基本样式文档中了解[更多信息](https://tailwindcss.com/docs/adding-base-styles)。

---

## 禁用 Preflight

如果你想要完全禁用 Preflight，也许是因为你正在将 Tailwind 整合到一个现有的项目中，或者是因为你想要提供自己的基本样式，你所需要做的就是在你的 `Tailwind.config.js` 文件的 `correplugins` 设置 Preflight 为 false:

```js
// tailwind.config.js
  module.exports = {
    corePlugins: {
+     preflight: false,
    }
  }
```
