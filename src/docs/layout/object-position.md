# Object Position

> 用于控制被替换元素的内容应该如何放置在其容器中的样式。

| class                | 属性                           |
| -------------------- | ------------------------------ |
| .object-bottom       | object-position: bottom;       |
| .object-center       | object-position: center;       |
| .object-left         | object-position: left;         |
| .object-left-bottom  | object-position: left bottom;  |
| .object-left-top     | object-position: left top;     |
| .object-right        | object-position: right;        |
| .object-right-bottom | object-position: right bottom; |
| .object-right-top    | object-position: right top;    |
| .object-top          | object-position: top;          |

## 用法

使用 `.object-{side}` 样式指定被替换元素的内容在其容器中的定位方式。

<div class="flex justify-around mb-8">
  <div class="flex-1">
    <p class="text-center text-sm text-gray-600 mb-1">.object-left-top</p>
    <img class="mx-auto bg-gray-400 w-24 h-24 object-left-top object-none" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80">
  </div>
  <div class="flex-1">
    <p class="text-center text-sm text-gray-600 mb-1">.object-top</p>
    <img class="mx-auto bg-gray-400 w-24 h-24 object-top object-none" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80">
  </div>
  <div class="flex-1">
    <p class="text-center text-sm text-gray-600 mb-1">.object-right-top</p>
    <img class="mx-auto bg-gray-400 w-24 h-24 object-right-top object-none" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80">
  </div>
</div>
<div class="flex justify-around mb-8">
  <div class="flex-1">
    <p class="text-center text-sm text-gray-600 mb-1">.object-left</p>
    <img class="mx-auto bg-gray-400 w-24 h-24 object-left object-none" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80">
  </div>
  <div class="flex-1">
    <p class="text-center text-sm text-gray-600 mb-1">.object-center</p>
    <img class="mx-auto bg-gray-400 w-24 h-24 object-center object-none" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80">
  </div>
  <div class="flex-1">
    <p class="text-center text-sm text-gray-600 mb-1">.object-right</p>
    <img class="mx-auto bg-gray-400 w-24 h-24 object-right object-none" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80">
  </div>
</div>
<div class="flex justify-around">
  <div class="flex-1">
    <p class="text-center text-sm text-gray-600 mb-1">.object-left-bottom</p>
    <img class="mx-auto bg-gray-400 w-24 h-24 object-left-bottom object-none" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80">
  </div>
  <div class="flex-1">
    <p class="text-center text-sm text-gray-600 mb-1">.object-bottom</p>
    <img class="mx-auto bg-gray-400 w-24 h-24 object-bottom object-none" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80">
  </div>
  <div class="flex-1">
    <p class="text-center text-sm text-gray-600 mb-1">.object-right-bottom</p>
    <img class="mx-auto bg-gray-400 w-24 h-24 object-right-bottom object-none" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80">
  </div>
</div>

```html
<img class="object-none object-left-top bg-gray-400 w-24 h-24" src="..." />
<img class="object-none object-top bg-gray-400 w-24 h-24" src="..." />
<img class="object-none object-right-top bg-gray-400 w-24 h-24" src="..." />
<img class="object-none object-left bg-gray-400 w-24 h-24" src="..." />
<img class="object-none object-center bg-gray-400 w-24 h-24" src="..." />
<img class="object-none object-right bg-gray-400 w-24 h-24" src="..." />
<img class="object-none object-left-bottom bg-gray-400 w-24 h-24" src="..." />
<img class="object-none object-bottom bg-gray-400 w-24 h-24" src="..." />
<img class="object-none object-right-bottom bg-gray-400 w-24 h-24" src="..." />
```

## 响应式

若要控制特定分辨率的 object-position ，请向任何现有的类添加 `{screen}:` 前缀。例如，使用 `md:object-top` 将 `object-top` class 应用于中等及以上屏幕尺寸。

```html
<img
  class="object-center sm:object-top md:object-right lg:object-bottom xl:object-left ..."
  src="..."
/>
```

想了解更多关于响应式设计特性的信息，请查看[响应式设计文档](https://tailwindcss.com/docs/responsive-design)。

## 定制

### Object Positioning

默认情况下，Tailwind 提供 9 个目标位置工具。你可以通过编辑顺风配置的 `theme.objectPosition` 部分来更改、添加或删除它们。

```js
// tailwind.config.js
  module.exports = {
    theme: {
      objectPosition: {
        bottom: 'bottom',
        center: 'center',
        left: 'left',
-       'left-bottom': 'left bottom',
-       'left-top': 'left top',
        right: 'right',
        'right-bottom': 'right bottom',
        'right-top': 'right top',
        top: 'top',
+       'center-bottom': 'center bottom'
+       'center-top': 'center top',
      }
    }
  }
```

### 响应式和伪类

默认情况下，objectFit 只和响应式变量生效。

您可以通过修改 `tailwind.config.js` 文件的变量部分中的 `variants` 属性来控制为 `objectPosition` 生成变量。

例如，这个配置也会生成 `hover` 和 `focus` :

```js
 // tailwind.config.js
  module.exports = {
    variants: {
      // ...
-     objectPosition: ['responsive'],
+     objectPosition: ['responsive', 'hover', 'focus'],
    }
  }
```

## 禁用

如果您不打算在项目中使用 `objectPosition`，可以通过在配置文件的 `corePlugins` 部分将 `objectPosition` 属性设置为 `false` 来完全禁用它们:

```js
// tailwind.config.js
  module.exports = {
    corePlugins: {
      // ...
+     objectPosition: false,
    }
  }
```
