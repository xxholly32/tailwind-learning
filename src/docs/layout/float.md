# Float

> 用于控制围绕元素的内容的包装的样式。

| class        | 属性                                                                           |
| ------------ | ------------------------------------------------------------------------------ |
| float-right | float: right;                                                                  |
| float-left  | float: left;                                                                   |
| float-none  | float: none;                                                                   |
| clearfix    | &::after { <br/> content: ""; <br/> display: table; <br/> clear: both; <br/> } |

## Float right

使用 `.float-right` 将一个元素浮动到其容器的右边。

<div class="bg-gray-200 p-4">
  <img class="float-right ml-4 my-2 h-32" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.</p>
</div>

```html
<div class="bg-gray-200 p-4">
  <img
    class="float-right ml-4 my-2 h-32"
    src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
  />
  <p>
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

## Float left

使用 `.float-left` 将元素浮动到其容器的左侧。

<div class="bg-gray-200 p-4">
  <img class="float-left mr-4 my-2 h-32" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.</p>
</div>

```html
<div class="bg-gray-200 p-4">
  <img
    class="float-left mr-4 my-2 h-32"
    src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
  />
  <p>
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

## Don't float

使用 `.float-none` 重置应用于元素的 float 属性。这是 float 属性的默认值。

<div class="bg-gray-200 p-4">
  <img class="float-none mb-4 h-32" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.</p>
</div>

```html
<div class="bg-gray-200 p-4">
  <img
    class="float-none mb-4 h-32"
    src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
  />
  <p>
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

若要控制特定分辨率的 float，请向任何现有的 float class 类添加 `{screen}:` 前缀。例如，使用 `md:float-left` 将 `float-left` class 应用于中等及以上屏幕尺寸。

想了解更多关于响应式设计特性的信息，请查看[响应式设计文档](https://tailwindcss.com/docs/responsive-design)。

```html
<div class="bg-gray-200 p-4">
  <img
    class="float-right sm:float-left md:float-none lg:float-right xl:float-left m-2 h-32"
    src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
  />
  <!-- -->
</div>
```

## 定制

### 响应式和伪类

默认情况下，float 只和响应式变量生效。

您可以通过修改 `tailwind.config.js` 文件的变量部分中的 `variants` 属性来控制为 `float` 生成变量。

例如，这个配置会生成 `hover` 和 `focus` 的伪类:

```js
 // tailwind.config.js
  module.exports = {
    variants: {
      extend: {
        // ...
+       float: ['hover', 'focus'],
      }
    }
  }
```

## 禁用

如果您不打算在项目中使用 `float`，可以通过在配置文件的 `corePlugins` 部分将 `float` 属性设置为 `false` 来完全禁用它们:

```js
// tailwind.config.js
  module.exports = {
    corePlugins: {
      // ...
+     float: false,
    }
  }
```
