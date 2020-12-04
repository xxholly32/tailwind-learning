# Container

> 用于将元素的宽度固定到当前断点的组件。

| class      | 断点        | 属性               |
| ---------- | ----------- | ------------------ |
| container | 空          | width: 100%;       |
|            | sm (640px)  | max-width: 640px;  |
|            | md (768px)  | max-width: 768px;  |
|            | lg (1024px) | max-width: 1024px; |
|            | xl (1280px) | max-width: 1280px; |

## 用法

这个 `.container` 类设置元素的 `max-width` 以匹配当前断点的 `min-width`。适用于固定的屏幕尺寸，而不是适应全屏的页面。

注意，与其他框架中使用的容器不同，**Tailwind 的容器不会自动居中，也没有任何内置的水平填充**。

若要使容器居中，请使用 `.mx-auto` 样式:

```html
<div class="container mx-auto">
  <!-- ... -->
</div>
```

要添加水平填充，请使用 `.px-{size}` utilities 样式:

```html
<div class="container mx-auto px-4">
  <!-- ... -->
</div>
```

如果您希望默认情况下使容器居中或包含默认的水平填充，请参见[自定义选项](https://tailwindcss.com/docs/container#customizing)。

## 响应式

这个 `container` 还包括一些响应变量，比如默认情况下的 `md:container`，它允许你在容器中使用断点:

```html
<!-- Full-width fluid until the `lg` breakpoint, then lock to container -->
<div class="lg:container lg:mx-auto">
  <!-- ... -->
</div>
```

## 定制

### 默认居中

默认情况下，将配置文件的 `theme.container` 的 `center` 选项设置为 `true`:

```js
// tailwind.config.js
module.exports = {
  theme: {
    container: {
      center: true,
    },
  },
};
```

### padding

默认情况下要添加 padding，请在配置文件的 `theme.container` 部分使用 `padding` 选项指定需要的填充值:

```js
// tailwind.config.js
module.exports = {
  theme: {
    container: {
      padding: "2rem",
    },
  },
};
```

如果要为每个断点指定不同的填充值，请使用对象提供 `default` 值和任何特定于断点的值:

```js
// tailwind.config.js
module.exports = {
  theme: {
    container: {
      padding: {
        default: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
    },
  },
};
```

### 禁用响应式变量

如果你想禁用响应式变量，你可以通过在 `tailwind.config.js` 文件的 `variants` 部分设置 `container` 空数组来实现:

```js
// tailwind.config.js
  module.exports = {
    variants: {
      // ...
+     container: [],
    }
  }
```

### 完全禁用

如果你不打算使用 `.container` 你可以在配置文件的 `corePlugins` 部分设置 `container` 属性为 `false` 来完全禁用它:

```js
  // tailwind.config.js
  module.exports = {
    corePlugins: {
      // ...
+     container: false,
    }
  }
```