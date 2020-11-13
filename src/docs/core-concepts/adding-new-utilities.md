# 自定义通用样式

> 扩展 Tailwind ，实现自定义的 class

---

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

将自动生成每个自定义 class 的前缀版本，你可以使用这些样式有条件地应用于不同的断点:

```
<!-- 表示默认使用 `scroll-snap-type: none` ，`scroll-snap-type: x` 用于medium以上的屏幕-->
<div class="scroll-snap-none md:scroll-snap-x"></div>
```

在响应式设计文档中[了解更多](https://tailwindcss.com/docs/responsive-design)。

## 生成伪类

如果您想创建自己`通用 class`的伪类，请将 class 包装在 @variant 指令中:

```
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  @variants hover, focus {
    .filter-none {
      filter: none;
    }
    .filter-grayscale {
      filter: grayscale(100%);
    }
  }
}
```

将自动生成每个自定义`通用 class`的前缀，你可以使用它们有条件地在不同的状态应用这些样式:

```
<div class="filter-grayscale hover:filter-none"></div>
```

伪类的生成顺序与在 @variant 指令中列出它们的顺序相同，因此，如果希望一个伪类优先于另一个伪类，请确保它在相对靠后:

```
/* Focus 优先于 hover */
@variants hover, focus {
  .filter-grayscale {
    filter: grayscale(100%);
  }
  /* ... */
}

/* Hover 优先于 focus */
@variants focus, hover {
  .filter-grayscale {
    filter: grayscale(100%);
  }
  /* ... */
}
```

如果您希望生成自定义`通用 class`的响应式以及伪类，请使用 @responsive 来包装 @variant:

```
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  @responsive {
    @variants hover, focus {
      .filter-none {
        filter: none;
      }
      .filter-grayscale {
        filter: grayscale(100%);
      }
    }
  }
}
```

在伪类文档中了解[更多信息](https://tailwindcss.com/docs/pseudo-class-variants)。
