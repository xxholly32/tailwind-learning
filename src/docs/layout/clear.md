# Clear

> 用于控制围绕元素的内容的包装的样式。

| class        | 属性          |
| ------------ | ------------- |
| clear-left  | clear: left;  |
| clear-right | clear: right; |
| clear-both  | clear: both;  |
| clear-none  | clear: none;  |

## Clear left

使用 `clear-left` 将元素定位在任何位于左浮动元素之前的元素之下。

<div class="bg-gray-200 p-4">
  <img class="float-left mr-4 my-2 h-24" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80">
  <img class="float-right ml-4 my-2 h-32" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80">
  <p class="clear-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.</p>
</div>

```html
<div class="bg-gray-200 p-4">
  <img
    class="float-left mr-4 my-2 h-24"
    src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
  />
  <img
    class="float-right ml-4 my-2 h-32"
    src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
  />
  <p class="clear-left">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et
    lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices
    condimentum velit. Proin velit libero, interdum ac rhoncus sit amet,
    pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras
    convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus
    mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum
    eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi
    consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula
    magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus
    suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar
    libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.
  </p>
</div>
```

## Clear right

使用 `clear-right` 将元素置于任何前面的右浮动元素之下。

<div class="bg-gray-200 p-4">
  <img class="float-left mr-4 my-2 h-32" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80">
  <img class="float-right ml-4 my-2 h-24" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80">
  <p class="clear-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.</p>
</div>

```html
<div class="bg-gray-200 p-4">
  <img
    class="float-left mr-4 my-2 h-32"
    src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
  />
  <img
    class="float-right ml-4 my-2 h-24"
    src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
  />
  <p class="clear-right">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et
    lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices
    condimentum velit. Proin velit libero, interdum ac rhoncus sit amet,
    pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras
    convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus
    mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum
    eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi
    consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula
    magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus
    suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar
    libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.
  </p>
</div>
```

## Clear both

使用 `clear-both` 将一个元素定位在所有前面的浮动元素之下。

<div class="bg-gray-200 p-4">
  <img class="float-left mr-4 my-2 h-24" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80">
  <img class="float-right ml-4 my-2 h-32" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80">
  <p class="clear-both">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.</p>
</div>

```html
<div class="bg-gray-200 p-4">
  <img
    class="float-left mr-4 my-2 h-24"
    src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
  />
  <img
    class="float-right ml-4 my-2 h-32"
    src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
  />
  <p class="clear-both">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et
    lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices
    condimentum velit. Proin velit libero, interdum ac rhoncus sit amet,
    pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras
    convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus
    mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum
    eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi
    consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula
    magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus
    suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar
    libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.
  </p>
</div>
```

## Don't clear

使用 `clear-none` 重置应用于元素的任何清除。这是 clear 属性的默认值。

<div class="bg-gray-200 p-4">
  <img class="float-left mr-4 my-2 h-24" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80">
  <img class="float-right ml-4 my-2 h-32" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80">
  <p class="clear-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.</p>
</div>

```html
<div class="bg-gray-200 p-4">
  <img
    class="float-left mr-4 my-2 h-24"
    src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
  />
  <img
    class="float-right ml-4 my-2 h-32"
    src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
  />
  <p class="clear-none">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et
    lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices
    condimentum velit. Proin velit libero, interdum ac rhoncus sit amet,
    pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras
    convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus
    mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum
    eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi
    consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula
    magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus
    suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar
    libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.
  </p>
</div>
```

## 响应式

若要控制特定分辨率的 clear，请向任何现有的 clear class 类添加 `{screen}:` 前缀。例如，使用 `md:clear-left` 将 `clear-left` class 应用于中等及以上屏幕尺寸。

```html
<p class="clear-right md:clear-left ...">
  <!-- ... -->
</p>
```

想了解更多关于响应式设计特性的信息，请查看[响应式设计文档](https://tailwindcss.com/docs/responsive-design)。

## 定制

### 响应式和伪类

默认情况下，clear 只和响应式变量生效。

您可以通过修改 `tailwind.config.js` 文件的变量部分中的 `variants` 属性来控制为 `clear` 生成变量。

例如，这个配置也会生成 `hover` 和 `focus` :

```js
 // tailwind.config.js
  module.exports = {
    variants: {
      extend: {
        // ...
+       clear: ['responsive', 'hover', 'focus'],
      }
    }
  }
```

## 禁用

如果您不打算在项目中使用 `clear`，可以通过在配置文件的 `corePlugins` 部分将 `clear` 属性设置为 `false` 来完全禁用它们:

```js
// tailwind.config.js
  module.exports = {
    corePlugins: {
      // ...
+     clear: false,
    }
  }
```
