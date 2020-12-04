# Visibility

> 控制元素可见性的样式

| class     | 属性                 |
| --------- | -------------------- |
| visible   | visibility: visible; |
| invisible | visibility: hidden;  |

## invisible

使用 `.invisible` 隐藏元素，但仍然保持其在 DOM 中的位置，从而影响其他元素的布局(对比 `.hidden` 在 [display](https://tailwindcss.com/docs/display#hidden) 文档中)。

<div class="flex justify-center p-10 space-x-4">
  <div class="rounded-md bg-indigo-500 w-32 h-16 flex items-center justify-center text-white text-3xl font-extrabold">1</div>
  <div class="invisible rounded-md bg-indigo-500 w-32 h-16 flex items-center justify-center text-white text-3xl font-extrabold">2</div>
  <div class="rounded-md bg-indigo-500 w-32 h-16 flex items-center justify-center text-white text-3xl font-extrabold">3</div>
</div>

```html
<div class="flex justify-center space-x-4">
  <div>1</div>
  <div class="invisible ...">2</div>
  <div>3</div>
</div>
```

## Visible

使用 `visible` 使元素可见。这对于在不同屏幕尺寸下撤销不可见样式非常有用。

<div class="flex justify-center p-10 space-x-4">
  <div class="rounded-md bg-purple-500 w-32 h-16 flex items-center justify-center text-white text-3xl font-extrabold">1</div>
  <div class="visible rounded-md bg-purple-500 w-32 h-16 flex items-center justify-center text-white text-3xl font-extrabold">2</div>
  <div class="rounded-md bg-purple-500 w-32 h-16 flex items-center justify-center text-white text-3xl font-extrabold">3</div>
</div>

```html
<div class="flex justify-center space-x-4">
  <div>1</div>
  <div class="visible ...">2</div>
  <div>3</div>
</div>
```

## 响应式

若要控制特定分辨率的 visible，请向任何现有的 visible class 类添加 `{screen}:` 前缀。例如，使用 `md:visible` 将 `visible` class 应用于中等及以上屏幕尺寸。

想了解更多关于响应式设计特性的信息，请查看[响应式设计文档](https://tailwindcss.com/docs/responsive-design)。

```html
<div class="visible md:invisible ..."></div>
```

## 定制

### 伪类

默认情况下，visible 只和响应式变量生效。

您可以通过修改 `tailwind.config.js` 文件的变量部分中的 `variants` 属性来控制为 `visible` 生成变量。

例如，这个配置会生成 `hover` 和 `focus` 的伪类:

```js
 // tailwind.config.js
  module.exports = {
    variants: {
      extend: {
        // ...
+       visible: ['hover', 'focus'],
      }
    }
  }
```

## 禁用

如果您不打算在项目中使用 `visibility`，可以通过在配置文件的 `corePlugins` 部分将 `visibility` 属性设置为 `false` 来完全禁用它们:

```js
// tailwind.config.js
  module.exports = {
    corePlugins: {
      // ...
+     visibility: false,
    }
  }
```
