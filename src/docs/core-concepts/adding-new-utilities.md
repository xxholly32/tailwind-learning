# 添加工具

扩展 Tailwind ，实现自定义的 class

尽管 Tailwind 提供了一个非常全面的 `通用 classes` 集合，但是您可能会遇到需要添加一些自己的`通用 classes` 的情况。

如果使用最好的方式去扩展框架，这里有一些最佳实践，帮助你扩展自己的 `通用 classes`

## 使用 CSS

向 Tailwind 添加自己的`通用 classes`最简单的方法是将它们添加到 CSS 中。

```
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .scroll-snap-none {
    scroll-snap-type: none;
  }
  .scroll-snap-x {
    scroll-snap-type: x;
  }
  .scroll-snap-y {
    scroll-snap-type: y;
  }
}
```

通过使用 `@layer` 指令，Tailwind 将自动将这些样式移动到与 `@tailwind utilities` 中相同的位置，以避免不必要的问题。

使用 `@layer` 指令还会将会改变 tailwind 的内部打包方式。请阅读[我们的文档](https://tailwindcss.com/docs/controlling-file-size)了解更多细节。

## 生成响应式

如果你想基于你的 tailwind.config.js 文件中定义的断点来创建你自己的`通用 class`，把你的`通用 class`装在 `@responsive` 指令中:

```
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  @responsive {
    .scroll-snap-none {
      scroll-snap-type: none;
    }
    .scroll-snap-x {
      scroll-snap-type: x;
    }
    .scroll-snap-y {
      scroll-snap-type: y;
    }
  }
}
```