# Box Sizing

> 允许您以特定的方式定义匹配某个区域的特定元素。

| class        | 属性                     |
| ------------ | ------------------------ |
| box-border  | box-sizing: border-box;  |
| box-content | box-sizing: content-box; |

## 包含 borders 和 padding

使用 `box-border` 将元素的 `box-sizing` 设置为 `border-box`，告诉浏览器在给元素设置高度或宽度时包含元素的边框和填充。

这意味着一个 `100px × 100px` 的元素，带有 `2px` 的 `border` 和 `4px` 的 `padding` 将呈现为 `100px × 100px`，内部内容区域为 `88px × 88px`。

Tailwind 使默认的所有 [preflight 里的元素](https://tailwindcss.com/docs/preflight) 遵循这个模型。

<div class="box-border h-20 w-32 p-4 border-4 border-gray-400 bg-gray-200">
  <div class="h-full w-full bg-gray-400"></div>
</div>

```html
<div class="box-border h-20 w-32 p-4 border-4 border-gray-400 bg-gray-200">
  <div class="h-full w-full bg-gray-400"></div>
</div>
```

## 排除边框和填充

使用 `box-content` 将元素的 `box-size` 设置为 `content-box`，告诉浏览器在元素的指定宽度或高度上添加边框和填充。

这意味着一个 `100px × 100px` 的元素，带有 `2px` 的边框和 `4px` 的边距，实际上将呈现为 `112px × 112px`，内部内容区域为 `100px × 100px`。

<div class="box-content h-20 w-32 p-4 border-4 border-gray-400 bg-gray-200">
  <div class="h-full w-full bg-gray-400"></div>
</div>

```html
<div class="box-content h-20 w-32 p-4 border-4 border-gray-400 bg-gray-200">
  <div class="h-full w-full bg-gray-400"></div>
</div>
```

## 响应式

若要控制特定断点处的框大小，请向任何现有的框样式添加 `{screen}:` 前缀。例如，使用 `md:box-content` 将 `box-content` 样式用于中等及以上屏幕尺寸。

```html
<div class="box-border md:box-content ...">
  <!-- ... -->
</div>
```

想了解更多关于 Tailwind 的响应式设计，请查看[响应式设计文档](https://tailwindcss.com/docs/responsive-design)。

## 定制

### 响应式和伪类

默认情况下，盒大小的样式可以和响应式变量一起使用。

您可以通过修改 `tailwind.config.js` 文件的 `variants` 部分中的 `boxSize` 属性来控制为 `box-sizing` 生成变量。

例如，这个配置也会生成 `hover` 和 `focus` :

```js
 // tailwind.config.js
  module.exports = {
    variants: {
      extend: {
        // ...
+       boxSizing: ['hover', 'focus'],
      }
    }
  }
```

## 禁用

如果您不打算在项目中使用 `box-sizing`，可以通过在配置文件的 `correplugins` 部分将 `boxSizing` 属性设置为 `false` 来完全禁用它们:

```js
// tailwind.config.js
  module.exports = {
    corePlugins: {
      // ...
+     boxSizing: false,
    }
  }
```