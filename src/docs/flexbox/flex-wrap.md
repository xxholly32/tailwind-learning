# Flex Wrap

> 用于控制折叠项的包装方式的样式。

| class             | 属性                     |
| ----------------- | ------------------------ |
| flex-wrap         | flex-wrap: wrap;         |
| flex-wrap-reverse | flex-wrap: wrap-reverse; |
| flex-nowrap       | flex-wrap: nowrap;       |

## Don't wrap

使用 `flex-nowrap` 来防止 flex 项目被包装，导致内部元素过大溢出容器:

<div class="flex flex-nowrap space-x-4">
  <div class="h-12 w-2/5 rounded-md text-white flex-none bg-emerald-500 flex items-center justify-center text-2xl font-semibold ">1</div>
  <div class="h-12 w-2/5 rounded-md text-white flex-none bg-emerald-500 flex items-center justify-center text-2xl font-semibold ">2</div>
  <div class="h-12 w-2/5 rounded-md text-white flex-none bg-emerald-500 flex items-center justify-center text-2xl font-semibold ">3</div>
</div>

```html
<div class="flex flex-nowrap">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

## Wrap normally

使用 `flex-wrap` 允许 flex 项包装:

<div class="flex flex-wrap -m-2">
  <div class="h-12 m-2 w-2/5 rounded-md text-white bg-light-blue-500 flex items-center justify-center text-2xl font-semibold ">1</div>
  <div class="h-12 m-2 w-2/5 rounded-md text-white bg-light-blue-500 flex items-center justify-center text-2xl font-semibold ">2</div>
  <div class="h-12 m-2 w-2/5 rounded-md text-white bg-light-blue-500 flex items-center justify-center text-2xl font-semibold ">3</div>
</div>

```html
<div class="flex flex-wrap">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

## Wrap reversed

使用 `flex-wrap-reverse` 将 flex 项反向包装:

<div class="flex flex-wrap-reverse -m-2">
  <div class="h-12 m-2 w-2/5 rounded-md text-white bg-purple-500 flex items-center justify-center text-2xl font-semibold ">1</div>
  <div class="h-12 m-2 w-2/5 rounded-md text-white bg-purple-500 flex items-center justify-center text-2xl font-semibold ">2</div>
  <div class="h-12 m-2 w-2/5 rounded-md text-white bg-purple-500 flex items-center justify-center text-2xl font-semibold ">3</div>
</div>

```html
<div class="flex flex-wrap-reverse">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

## 响应式

若要控制特定分辨率的 flex wrap，请向任何现有的类添加 `{screen}:` 前缀。例如，使用 `md:flex-wrap-reverse` 将 `flex-wrap-reverse` class 应用于中等及以上屏幕尺寸。

想了解更多关于响应式设计特性的信息，请查看[响应式设计文档](https://tailwindcss.com/docs/responsive-design)。

```html
<div class="flex flex-wrap md:flex-wrap-reverse ...">
  <!-- ... -->
</div>
```

## 定制

### 伪类

默认情况下，position 只和响应式变量生效。

您可以通过修改 `tailwind.config.js` 文件的变量部分中的 `variants` 属性来控制为 `flexWrap` 生成变量。

例如，这个配置会生成 `hover` 和 `focus` 的伪类:

```js
 // tailwind.config.js
  module.exports = {
    variants: {
      extend: {
        // ...
+       flexWrap: ['hover', 'focus'],
      }
    }
  }
```


## 禁用

如果您不打算在项目中使用 flex Direction，可以通过在配置文件的 `correplugins` 部分将 `flexWrap` 属性设置为 `false` 来完全禁用它们:

```js
// tailwind.config.js
  module.exports = {
    corePlugins: {
      // ...
+     flexWrap: false,
    }
  }
```
