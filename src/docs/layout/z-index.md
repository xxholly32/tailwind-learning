# Z-index

> 用于控制元素的堆栈顺序样式。

| class  | 属性           |
| ------ | -------------- |
| z-0    | z-index: 0;    |
| z-10   | z-index: 10;   |
| z-20   | z-index: 20;   |
| z-30   | z-index: 30;   |
| z-40   | z-index: 40;   |
| z-50   | z-index: 50;   |
| z-auto | z-index: auto; |

## 用法

使用 `z-{index}` 样式控制 Tailwind 中某个元素的堆栈顺序(或三维定位) ，无论该元素显示的顺序如何。

<div class="p-4">
  <div class="flex justify-center relative h-28 text-center transform translate-x-12">
    <div class="z-40 relative w-20 h-20 bg-fuchsia-500 border-r border-opacity-50 border-fuchsia-600 rounded-md shadow-md flex justify-center items-center text-white text-2xl font-extrabold">5</div>
    <div class="z-30 relative w-20 h-20 -left-6 top-2 bg-fuchsia-500 border-r border-opacity-50 border-fuchsia-600 rounded-md shadow-md flex justify-center items-center text-white text-2xl font-extrabold">4</div>
    <div class="z-20 relative w-20 h-20 -left-12 top-4 bg-fuchsia-500 border-r border-opacity-50 border-fuchsia-600 rounded-md shadow-md flex justify-center items-center text-white text-2xl font-extrabold">3</div>
    <div class="z-10 relative w-20 h-20 -left-18 top-6 bg-fuchsia-500 border-r border-opacity-50 border-fuchsia-600 rounded-md shadow-md flex justify-center items-center text-white text-2xl font-extrabold">2</div>
    <div class="z-0 relative w-20 h-20 -left-24 top-8 bg-fuchsia-500 rounded-md shadow-md flex justify-center items-center text-white text-2xl font-extrabold">1</div>
  </div>
</div>

```html
<div class="z-40 ...">5</div>
<div class="z-30 ...">4</div>
<div class="z-20 ...">3</div>
<div class="z-10 ...">2</div>
<div class="z-0 ...">1</div>
```

## 响应式

若要控制特定分辨率的 z-index，请向任何现有的 z-index class 类添加 `{screen}:` 前缀。例如，使用 `md:z-50` 将 `z-50` class 应用于中等及以上屏幕尺寸。

想了解更多关于响应式设计特性的信息，请查看[响应式设计文档](https://tailwindcss.com/docs/responsive-design)。

```html
<div class="z-0 md:z-50 ...">
  <!-- ... -->
</div>
```

## 定制

### Z-Index 刻度

默认情况下，Tailwind 提供 6 个刻度 `z-index` 和一个 auto。您可以通过编辑 Tailwind 配置的 `theme.zIndex` 部分来更改、添加或删除这些内容。

```js
  // tailwind.config.js
  module.exports = {
    theme: {
      zIndex: {
        '0': 0,
-       '10': 10,
-       '20': 20,
-       '30': 30,
-       '40': 40,
-       '50': 50,
+       '25': 25,
+       '50': 50,
+       '75': 75,
+       '100': 100,
        'auto': 'auto',
      }
    }
  }
```

## 负值

如果你想添加任何 z-index 的负类，它们的形式与 `Tailwind` 的[负 margin](https://tailwindcss.com/docs/margin#negative-margins)相同，请在配置文件中的键前面加上一个破折号:

```js
  // tailwind.config.js
  module.exports = {
    theme: {
      extend: {
        zIndex: {
+         '-10': '-10',
        }
      }
    }
  }
```

Tailwind 通过配置可以智能生成类，比如 `-z-10`，当它看到最前面的破折号时，而不是 `z--10`。

## 伪类

默认情况下，z-index 与响应式变量生效。

通过修改 `tailwind.config.js` 文件的 `variants` 属性，您可以控制为 `zIndex` 生成变量。

例如，这个配置也会生成 hover 和 active 伪类:

```js
 // tailwind.config.js
  module.exports = {
    variants: {
      extend: {
        // ...
+       zIndex: ['hover', 'active'],
      }
    }
  }
```

## 禁用

如果您不打算在项目中使用 z-index ，可以通过在配置文件的 `corePlugins` 部分将 `zIndex` 属性设置为 `false` 来完全禁用它们:

```js
// tailwind.config.js
  module.exports = {
    corePlugins: {
      // ...
+     zIndex: false,
    }
  }
```
