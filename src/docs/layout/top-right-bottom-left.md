# Top / Right / Bottom / Left

> 控制元素位置的样式。

内容过多，API 请查看[官方 demo](https://tailwindcss.com/docs/top-right-bottom-left)

## 使用

使用 `{top|right|bottom|left|inset}-0` 样式将绝对定位的元素锚定在最近定位的父元素的边缘上。

结合利用 Tailwind 的 padding 和 margin，您可能会发现，可以通过精确的样式控制实现以下这些绝对定位元素。

<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
  <div class="relative p-2 h-32 w-32 bg-emerald-300 bg-stripes bg-stripes-white rounded-md">
    <div class="absolute inset-x-0 top-0 h-16 bg-emerald-500 text-white font-extrabold text-2xl flex items-center justify-center rounded-md">1</div>
  </div>
  <div class="relative p-2 h-32 w-32 bg-emerald-300 bg-stripes bg-stripes-white rounded-md">
    <div class="absolute inset-y-0 right-0 w-16 bg-emerald-500 text-white font-extrabold text-2xl flex items-center justify-center rounded-md">2</div>
  </div>
  <div class="relative p-2 h-32 w-32 bg-emerald-300 bg-stripes bg-stripes-white rounded-md">
    <div class="absolute inset-x-0 bottom-0 h-16 bg-emerald-500 text-white font-extrabold text-2xl flex items-center justify-center rounded-md">3</div>
  </div>
  <div class="relative p-2 h-32 w-32 bg-emerald-300 bg-stripes bg-stripes-white rounded-md">
    <div class="absolute inset-y-0 left-0 w-16 bg-emerald-500 text-white font-extrabold text-2xl flex items-center justify-center rounded-md">4</div>
  </div>
  <div class="relative p-2 h-32 w-32 bg-emerald-300 bg-stripes bg-stripes-white rounded-md">
    <div class="absolute inset-0 bg-emerald-500 text-white font-extrabold text-2xl flex items-center justify-center rounded-md">5</div>
  </div>
  <div class="relative p-2 h-32 w-32 bg-emerald-300 bg-stripes bg-stripes-white rounded-md">
    <div class="absolute left-0 top-0 h-16 w-16 bg-emerald-500 text-white font-extrabold text-2xl flex items-center justify-center rounded-md">6</div>
  </div>
  <div class="relative p-2 h-32 w-32 bg-emerald-300 bg-stripes bg-stripes-white rounded-md">
    <div class="absolute top-0 right-0 h-16 w-16 bg-emerald-500 text-white font-extrabold text-2xl flex items-center justify-center rounded-md">7</div>
  </div>
  <div class="relative p-2 h-32 w-32 bg-emerald-300 bg-stripes bg-stripes-white rounded-md">
    <div class="absolute right-0 bottom-0 h-16 w-16 bg-emerald-500 text-white font-extrabold text-2xl flex items-center justify-center rounded-md">8</div>
  </div>
  <div class="relative p-2 h-32 w-32 bg-emerald-300 bg-stripes bg-stripes-white rounded-md">
    <div class="absolute bottom-0 left-0 h-16 w-16 bg-emerald-500 text-white font-extrabold text-2xl flex items-center justify-center rounded-md">9</div>
  </div>
</div>

```html
<!-- Span top edge -->
<div class="relative h-32 w-32 ...">
  <div class="absolute inset-x-0 top-0 h-16 w-16 ...">1</div>
</div>

<!-- Span right edge -->
<div class="relative h-32 w-32 ...">
  <div class="absolute inset-y-0 right-0 w-16 ...">1</div>
</div>

<!-- Span bottom edge -->
<div class="relative h-32 w-32 ...">
  <div class="absolute inset-x-0 bottom-0 h-16 w-16 ...">1</div>
</div>

<!-- Span left edge -->
<div class="relative h-32 w-32 ...">
  <div class="absolute inset-y-0 left-0 w-16 ...">1</div>
</div>

<!-- Fill entire parent -->
<div class="relative h-32 w-32 ...">
  <div class="absolute inset-0 ..."></div>
</div>

<!-- Pin to top left corner -->
<div class="relative h-32 w-32 ...">
  <div class="absolute left-0 top-0 h-16 w-16 ...">1</div>
</div>

<!-- Pin to top right corner -->
<div class="relative h-32 w-32 ...">
  <div class="absolute top-0 right-0 h-16 w-16 ...">1</div>
</div>

<!-- Pin to bottom right corner -->
<div class="relative h-32 w-32 ...">
  <div class="absolute bottom-0 right-0 h-16 w-16 ...">1</div>
</div>

<!-- Pin to bottom left corner -->
<div class="relative h-32 w-32 ...">
  <div class="absolute bottom-0 left-0 h-16 w-16 ...">1</div>
</div>
```

## 响应式

若要控制特定分辨率的样式实现，请向任何现有的类添加 `{screen}:` 前缀。例如，使用 `md:inset-y-0` 将 `inset-y-0` class 应用于中等及以上屏幕尺寸。

想了解更多关于响应式设计特性的信息，请查看[响应式设计文档](https://tailwindcss.com/docs/responsive-design)。

```html
<div class="relative h-32 ...">
  <div class="absolute inset-0 md:inset-y-0 ..."></div>
</div>
```

## 定制

### Top / Right / Bottom / Left 比例

默认情况下，顺风只提供 `0` 和 `auto` top/right/bottom/left/inset 样式。你可以通过编辑 `tailwind.config.js` 文件的 `theme.inset` 部分来更改、添加或删除这些内容。

```js
  // tailwind.config.js
  module.exports = {
    theme: {
      inset: {
        '0': 0,
-       auto: 'auto',
+       '1/2': '50%',
      }
    }
  }
```

## 负值

如果你想添加任何 top/right/bottom/left 的负类，它们的形式与 `Tailwind` 的[负 margin](https://tailwindcss.com/docs/margin#negative-margins)相同，请在配置文件中的键前面加上一个破折号:

```js
  // tailwind.config.js
  module.exports = {
    theme: {
      extend: {
        inset: {
+         '-16': '-4rem',
        }
      }
    }
  }
```

Tailwind 通过配置可以智能生成类，比如 `-top-16`，当它看到最前面的破折号时，而不是 `top-16`。

## 伪类

默认情况下，top、 right、 bottom、 left 和 inset 与响应式变量生效。

通过修改 `tailwind.config.js` 文件的 `variants` 属性，您可以控制为 top、 right、 bottom、 left 和 inset 生成变量。

例如，这个配置也会生成 hover 和 focus 伪类:

```js
 // tailwind.config.js
  module.exports = {
    variants: {
      extend: {
        // ...
+       inset: ['hover', 'focus'],
      }
    }
  }
```

## 禁用

如果您不打算在项目中使用 top、 right、 bottom、 left 和 inset，可以通过在配置文件的 `corePlugins` 部分将 top、 right、 bottom、 left 和 inset 属性设置为 `false` 来完全禁用它们:

```js
// tailwind.config.js
  module.exports = {
    corePlugins: {
      // ...
+     inset: false,
    }
  }
```
