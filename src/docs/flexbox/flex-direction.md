# Flex Direction

> 用于控制 flex 方向的样式

| class            | 属性                            |
| ---------------- | ------------------------------- |
| flex-row         | flex-direction: row;            |
| flex-row-reverse | flex-direction: row-reverse;    |
| flex-col         | flex-direction: column;         |
| flex-col-reverse | flex-direction: column-reverse; |

## Row

使用 `flex-row` 将 flex 项水平放置在与文本相同的方向上:

<div class="p-4">
  <div class="flex flex-row space-x-4">
    <div class="w-16 h-16 rounded-md bg-amber-500 text-white flex items-center justify-center text-2xl font-extrabold">1</div>
    <div class="w-16 h-16 rounded-md bg-amber-500 text-white flex items-center justify-center text-2xl font-extrabold">2</div>
    <div class="w-16 h-16 rounded-md bg-amber-500 text-white flex items-center justify-center text-2xl font-extrabold">3</div>
  </div>
</div>

```html
<div class="flex flex-row ...">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

## Row reversed

使用 `.flex-row-reverse` 将 flex 项水平放置在相反的方向:

<div class="p-4">
  <div class="flex flex-row-reverse space-x-reverse space-x-4">
    <div class="w-16 h-16 rounded-md bg-light-blue-500 text-white flex items-center justify-center text-2xl font-extrabold">1</div>
    <div class="w-16 h-16 rounded-md bg-light-blue-500 text-white flex items-center justify-center text-2xl font-extrabold">2</div>
    <div class="w-16 h-16 rounded-md bg-light-blue-500 text-white flex items-center justify-center text-2xl font-extrabold">3</div>
  </div>
</div>

```html
<div class="flex flex-row-reverse ...">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

## Column

使用 `.flex-col` 将 flex 项垂直放置:

<div class="p-4">
  <div class="flex flex-col space-y-4">
    <div class="h-16 rounded-md bg-emerald-500 text-white flex items-center justify-center text-2xl font-extrabold">1</div>
    <div class="h-16 rounded-md bg-emerald-500 text-white flex items-center justify-center text-2xl font-extrabold">2</div>
    <div class="h-16 rounded-md bg-emerald-500 text-white flex items-center justify-center text-2xl font-extrabold">3</div>
  </div>
</div>

```html
<div class="flex flex-col ...">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

## Column reversed

使用 `flex-col-reverse` 将 flex 项垂直定位到相反的方向:

<div class="p-4">
  <div class="flex flex-col-reverse space-y-reverse space-y-4">
    <div class="h-16 rounded-md bg-rose-500 text-white flex items-center justify-center text-2xl font-extrabold">1</div>
    <div class="h-16 rounded-md bg-rose-500 text-white flex items-center justify-center text-2xl font-extrabold">2</div>
    <div class="h-16 rounded-md bg-rose-500 text-white flex items-center justify-center text-2xl font-extrabold">3</div>
  </div>
</div>

```html
<div class="flex flex-col-reverse ...">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

## 响应式

若要控制特定分辨率的 flex direction，请向任何现有的类添加 `{screen}:` 前缀。例如，使用 `md:flex-row` 将 `flex-row` class 应用于中等及以上屏幕尺寸。

想了解更多关于响应式设计特性的信息，请查看[响应式设计文档](https://tailwindcss.com/docs/responsive-design)。

```html
<div class="flex flex-col md:flex-row ...">
  <!-- ... -->
</div>
```

## 定制

### 伪类

默认情况下，position 只和响应式变量生效。

您可以通过修改 `tailwind.config.js` 文件的变量部分中的 `variants` 属性来控制为 `flexDirection` 生成变量。

例如，这个配置会生成 `hover` 和 `focus` 的伪类:

```js
 // tailwind.config.js
  module.exports = {
    variants: {
      extend: {
        // ...
+       flexDirection: ['hover', 'focus'],
      }
    }
  }
```

## 禁用

如果您不打算在项目中使用 flex Direction，可以通过在配置文件的 `correplugins` 部分将 `flexDirection` 属性设置为 `false` 来完全禁用它们:

```js
// tailwind.config.js
  module.exports = {
    corePlugins: {
      // ...
+     flexDirection: false,
    }
  }
```
