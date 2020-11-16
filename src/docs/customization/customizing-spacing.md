# 自定义间距

> 自定义项目中的间距

---

你可以使用`tailwind.config.js` 的 `theme.spacing` 配置项可以覆盖 Tailwind 的[默认配置](https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale)

```js
// tailwind.config.js
module.exports = {
  theme: {
    spacing: {
      "1": "8px",
      "2": "12px",
      "3": "16px",
      "4": "24px",
      "5": "32px",
      "6": "48px",
    },
  },
};
```

默认情况下，这个配置和 [padding](https://tailwindcss.com/docs/padding), [margin](https://tailwindcss.com/docs/margin), [width](https://tailwindcss.com/docs/width), and [height](https://tailwindcss.com/docs/height) `通用 classes` 共享，所以，上面的配置也同样会覆盖类似 `.p-2`, `.mt-3`, `.w-5`, `.h-6` 等样式。

---

## 覆盖默认的间距的范围

正如在[主题文档](https://tailwindcss.com/docs/theme#overriding-the-default-theme)中所描述的，如果你想覆盖默认的间距范围，你可以使用你的 `tailwind.config.js` 文件的 `theme.spacing` 部分:

这将禁用 Tailwind 的默认间距生成类，如 `p-sm`，`m-md`，`w-lg` 和 `h-xl`。

---

## 扩展默认的间距范围

如主题文档所述，如果你想扩展默认的间距范围，你可以使用你的 `tailwind.config.js` 文件的 `theme.extend.spacing` 部分:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      spacing: {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
      },
    },
  },
};
```

这将生成类，如 `p-72`、 `m-84` 和 `h-96`，以及所有的 Tailwind 默认的间距/大小 `通用 classes`。

--- 

## 默认间距项

<!-- TODO:移动文档 -->

[参考官方配置文档](https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale)