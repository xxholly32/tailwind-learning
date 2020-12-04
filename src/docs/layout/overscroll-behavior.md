# overscroll-behavior

> 用于控制浏览器在到达滚动区域边界时的样式，本文 demo 需要在移动端展现，更多有关 overscroll-behavior 的 demo 请查看 [chatbox demo](https://ebidel.github.io/demos/chatbox.html)

| class                 | 属性                            |
| --------------------- | ------------------------------- |
| overscroll-auto      | overscroll-behavior: auto;      |
| overscroll-contain   | overscroll-behavior: contain;   |
| overscroll-none      | overscroll-behavior: none;      |
| overscroll-y-auto    | overscroll-behavior-y: auto;    |
| overscroll-y-contain | overscroll-behavior-y: contain; |
| overscroll-y-none    | overscroll-behavior-y: none;    |
| overscroll-x-auto    | overscroll-behavior-x: auto;    |
| overscroll-x-contain | overscroll-behavior-x: contain; |
| overscroll-x-none    | overscroll-behavior-x: none;    |

## Auto

使用 `overscroll-auto` 使用户可以在到达主滚动区域边界时继续滚动父滚动区域。

<div class="overscroll-auto overflow-auto h-32 bg-emerald-200 text-emerald-500 px-6 py-4 font-medium font-flow rounded-lg">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend rutrum auctor. Phasellus convallis sagittis augue ut ornare. Vestibulum et gravida lectus, sed ultrices sapien. Nullam aliquet elit dui, vitae hendrerit lectus volutpat eget. In porttitor tincidunt egestas. Pellentesque laoreet ligula at est vulputate facilisis. Etiam tristique justo ut odio placerat ornare. Cras bibendum, orci at ornare tincidunt, lacus nunc gravida enim, sit amet euismod nunc lectus in lectus. Ut dictum nulla et arcu aliquet ornare. Aliquam et dapibus lectus. Aenean mattis elit mi, sed ultricies augue consectetur id. Sed id magna malesuada, luctus urna a, bibendum tortor. Cras cursus cursus ex. Nulla fringilla elit vitae imperdiet scelerisque. Donec ac sem eu diam convallis mollis a sed leo. Proin congue augue turpis, eget rutrum dolor ultricies non. Nulla blandit venenatis dapibus. Sed tincidunt mollis elit, quis suscipit nibh eleifend quis. Donec ex lorem, auctor eu rutrum in, blandit id dolor. Nulla molestie arcu turpis. In id felis vulputate, tempor massa eget, malesuada mauris. Quisque fringilla consequat metus, luctus scelerisque leo fringilla vel.
  </p>
</div>

```html
<div class="overscroll-auto ...">Lorem ipsum dolor sit amet...</div>
```

## Contain

使用 `overscroll-contain` 可以防止目标区域中的滚动触发父元素中的滚动，但是在支持该元素的操作系统中滚动超过容器末端时，保留 “弹跳” 效果。

<div class="overscroll-contain overflow-auto h-32 bg-light-blue-200 text-light-blue-500 px-6 py-4 font-medium font-flow rounded-lg">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend rutrum auctor. Phasellus convallis sagittis augue ut ornare. Vestibulum et gravida lectus, sed ultrices sapien. Nullam aliquet elit dui, vitae hsendrerit lectus volutpat eget. In porttitor tincidunt egestas. Pellentesque laoreet ligula at est vulputate facilisis. Etiam tristique justo ut odio placerat ornare. Cras bibendum, orci at ornare tincidunt, lacus nunc gravida enim, sit amet euismod nunc lectus in lectus. Ut dictum nulla et arcu aliquet ornare. Aliquam et dapibus lectus. Aenean mattis elit mi, sed ultricies augue consectetur id. Sed id magna malesuada, luctus urna a, bibendum tortor. Cras cursus cursus ex. Nulla fringilla elit vitae imperdiet scelerisque. Donec ac sem eu diam convallis mollis a sed leo. Proin congue augue turpis, eget rutrum dolor ultricies non. Nulla blandit venenatis dapibus. Sed tincidunt mollis elit, quis suscipit nibh eleifend quis. Donec ex lorem, auctor eu rutrum in, blandit id dolor. Nulla molestie arcu turpis. In id felis vulputate, tempor massa eget, malesuada mauris. Quisque fringilla consequat metus, luctus scelerisque leo fringilla vel.
  </p>
</div>

```html
<div class="**overscroll-contain** ...">Lorem ipsum dolor sit amet...</div>
```

## None

使用 `.overscroll-none` 可以防止目标区域中的滚动触发父元素中的滚动，也可以防止滚动超过容器的末尾时出现“弹跳”效应。

<div class="overscroll-none overflow-auto h-32 bg-amber-200 text-amber-500 px-6 py-4 font-medium font-flow rounded-lg">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend rutrum auctor. Phasellus convallis sagittis augue ut ornare. Vestibulum et gravida lectus, sed ultrices sapien. Nullam aliquet elit dui, vitae hendrerit lectus volutpat eget. In porttitor tincidunt egestas. Pellentesque laoreet ligula at est vulputate facilisis. Etiam tristique justo ut odio placerat ornare. Cras bibendum, orci at ornare tincidunt, lacus nunc gravida enim, sit amet euismod nunc lectus in lectus. Ut dictum nulla et arcu aliquet ornare. Aliquam et dapibus lectus. Aenean mattis elit mi, sed ultricies augue consectetur id. Sed id magna malesuada, luctus urna a, bibendum tortor. Cras cursus cursus ex. Nulla fringilla elit vitae imperdiet scelerisque. Donec ac sem eu diam convallis mollis a sed leo. Proin congue augue turpis, eget rutrum dolor ultricies non. Nulla blandit venenatis dapibus. Sed tincidunt mollis elit, quis suscipit nibh eleifend quis. Donec ex lorem, auctor eu rutrum in, blandit id dolor. Nulla molestie arcu turpis. In id felis vulputate, tempor massa eget, malesuada mauris. Quisque fringilla consequat metus, luctus scelerisque leo fringilla vel.
  </p>
</div>

```html
<div class="**overscroll-none** ...">Lorem ipsum dolor sit amet...</div>
```

## 响应式

若要控制特定分辨率的 overscroll-behavior，请向任何现有的 overscroll-behavior class 类添加 `{screen}:` 前缀。例如，使用 `md:overscroll-contain` 将 `overscroll-contain` class 应用于中等及以上屏幕尺寸。

想了解更多关于响应式设计特性的信息，请查看[响应式设计文档](https://tailwindcss.com/docs/responsive-design)。

```html
<div class="overscroll-auto md:overscroll-contain lg:overscroll-none ...">
  <!-- ... -->
</div>
```

## 定制

### 伪类

默认情况下，overscroll-behavior 只和响应式变量生效。

您可以通过修改 `tailwind.config.js` 文件的变量部分中的 `variants` 属性来控制为 `overscrollBehavior` 生成变量。

例如，这个配置会生成 `hover` 和 `focus` 的伪类:

```js
 // tailwind.config.js
  module.exports = {
    variants: {
      extend: {
        // ...
+       overscrollBehavior: ['hover', 'focus'],
      }
    }
  }
```

## 禁用

如果您不打算在项目中使用 `overscrollBehavior`，可以通过在配置文件的 `corePlugins` 部分将 `overscrollBehavior` 属性设置为 `false` 来完全禁用它们:

```js
// tailwind.config.js
  module.exports = {
    corePlugins: {
      // ...
+     overscrollBehavior: false,
    }
  }
```
