# 样式断点

> 自定义项目的默认断点

---

您可以在 tailwind.config.js 文件的 theme.screens 定义项目的断点。这些键是您的 screen 名称(用作 Tailwind 响应式变量的前缀，如 md:text-center) ，代表的是适配最小的值。

默认断点的值针对常见分辨率的大小:

```js
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
};
```

屏 screen 数量以及大小都是可以自定义

例如，你可以使用设备名而不是尺寸简写:

```js
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
};
```

这些屏幕名称将反映在你的 `通用 classes` 中，所以这时候你的 `text-center` 样式看起来像这样:

```css
.text-center {
  text-align: center;
}

@media (min-width: 640px) {
  .tablet\:text-center {
    text-align: center;
  }
}

@media (min-width: 1024px) {
  .laptop\:text-center {
    text-align: center;
  }
}

@media (min-width: 1280px) {
  .desktop\:text-center {
    text-align: center;
  }
}
```

## 最大断点

如果您希望使用最大宽度作为断点而不是最小宽度作为断点，可以使用 max 键将屏幕指定为对象:

```js
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
    },
  },
};
```

如果需要，甚至可以同时使用 min-width 和 max-width 定义来创建断点，例如:

```js
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      sm: { min: '640px', max: '767px' },
      md: { min: '768px', max: '1023px' },
      lg: { min: '1024px', max: '1279px' },
      xl: { min: '1280px' },
    },
  },
};
```

## 多范围断点

<!-- TODO: 机翻 -->

有时，在多个范围中应用单个断点定义是有用的。

例如，假设您有一个侧边栏，并希望断点基于内容区域宽度而不是整个视区。你可以模拟一下，当边栏变得可见并缩小内容区域时，你的一个断点回落到一个更小的断点上:

```js
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      sm: '500px',
      md: [
        // Sidebar appears at 768px, so revert to `sm:` styles between 768px
        // and 868px, after which the main content area is wide enough again to
        // apply the `md:` styles.
        { min: '668px', max: '767px' },
        { min: '868px' },
      ],
      lg: '1100px',
      xl: '1400px',
    },
  },
};
```

## 自定义媒体查询

<!-- TODO: 机翻 -->

如果你需要为一个断点提供一个完全自定义的媒体查询，你可以使用一个带有原始键的对象:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      screens: {
        portrait: { raw: '(orientation: portrait)' },
        // => @media (orientation: portrait) { ... }
      },
    },
  },
};
```

## 打印样式处理

如果您需要专门为打印应用不同的样式，那么可以使用 raw 选项。

你所需要做的就是在 theme.extend.screen 下面添加一个 raw:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      screens: {
        print: { raw: 'print' },
        // => @media print { ... }
      },
    },
  },
};
```

然后你可以使用 `print:text-black` 来指定样式，只有当有人试图打印你的页面时才会应用这些样式:

```html
<div class="text-gray-700 print:text-black">
  <!-- ... -->
</div>
```

## 暗色

raw 选项甚至可以用来实现 暗色系:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      screens: {
        dark: { raw: '(prefers-color-scheme: dark)' },
        // => @media (prefers-color-scheme: dark) { ... }
      },
    },
  },
};
```

然后你可以使用 `dark:prefix` 在 dark 模式下对元素设置不同的样式:

```html
<div class="text-gray-700 dark:text-gray-200">
  <!-- ... -->
</div>
```

注意，由于这些 screen 变量是在 Tailwind 中实现的，所以**不能使用这种方法将断点与 dark 模式结合起来**，例如 `md:dark:text-gray-300` 是不会生效的。我们考虑在未来的版本支持这个问题。
