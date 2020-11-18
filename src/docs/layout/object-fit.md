# Object Fit

> 控制如何调整被替换元素的内容的样式。

| class              | 属性                   |
| ------------------ | ---------------------- |
| .object-contain    | object-fit: contain;   |
| .object-cover      | object-fit: cover;     |
| .object-fill       | object-fit: fill;      |
| .object-none       | object-fit: none;      |
| .object-scale-down | object-fit:scale-down; |

## Contain

使用 `.object-contain` 调整元素内容的大小，使其保持在容器中。

<div class="p-4">
  <p class="text-sm text-gray-600">.object-contain</p>
  <div class="bg-gray-400">
    <img class="h-48 w-full object-contain" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="">
  </div>
</div>
  
```html
<div class="bg-gray-400">
  <img class="object-contain h-48 w-full ...">
</div>
```

## Cover

使用 `.object-cover` 调整元素内容的大小以覆盖其容器。

<div class="p-4">
  <p class="text-sm text-gray-600">.object-cover</p>
  <div class="bg-gray-400">
    <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="">
  </div>
</div>

```html
<div class="bg-gray-400">
  <img class="object-cover h-48 w-full ..." />
</div>
```

## Fill

使用 `.object-fill` 拉伸元素的内容以适应其容器。

<div class="p-4">
  <p class="text-sm text-gray-600">.object-fill</p>
  <div class="bg-gray-400">
    <img class="h-48 w-full object-fill" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="">
  </div>
</div>

```html
<div class="bg-gray-400">
  <img class="object-fill h-48 w-full ..." />
</div>
```

## None

忽略使用.object-none 的容器大小，按原始大小显示元素的内容。

<div class="p-4">
  <p class="text-sm text-gray-600">.object-none</p>
  <div class="bg-gray-400">
    <img class="h-48 w-full object-none" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="">
  </div>
</div>

```html
<div class="bg-gray-400">
  <img class="object-none h-48 w-full ..." />
</div>
```

## Scale Down

但是如果需要，可以使用 `.object-scale-down` 来缩放元素以适应其容器。

<div class="p-4">
  <p class="text-sm text-gray-600">.object-scale-down</p>
  <div class="bg-gray-400">
    <img class="h-48 w-full object-scale-down" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=128&q=80" alt="">
  </div>
</div>

```html
<div class="bg-gray-400">
  <img class="object-scale-down h-48 w-full ..." />
</div>
```

## 响应式

若要控制特定分辨率的 object-fit ，请向任何现有的类添加 `{screen}:` 前缀。例如，使用 `md:object-scale-down` 将 `object-scale-down` class 应用于中等及以上屏幕尺寸。

```html
<div class="bg-gray-400">
  <img
    class="object-contain sm:object-cover md:object-fill lg:object-none xl:object-scale-down ..."
    src="..."
  />
</div>
```

想了解更多关于响应式设计特性的信息，请查看[响应式设计文档](https://tailwindcss.com/docs/responsive-design)。

## 定制

### 响应式和伪类

默认情况下，objectFit 只和响应式变量生效。

您可以通过修改 `tailwind.config.js` 文件的变量部分中的 `variants` 属性来控制为 `objectFit` 生成变量。

例如，这个配置也会生成 `hover` 和 `focus` :

```js
 // tailwind.config.js
  module.exports = {
    variants: {
      // ...
-     objectFit: ['responsive'],
+     objectFit: ['responsive', 'hover', 'focus'],
    }
  }
```

## 禁用

如果您不打算在项目中使用 `objectFit`，可以通过在配置文件的 `corePlugins` 部分将 `objectFit` 属性设置为 `false` 来完全禁用它们:

```js
// tailwind.config.js
  module.exports = {
    corePlugins: {
      // ...
+     objectFit: false,
    }
  }
```
