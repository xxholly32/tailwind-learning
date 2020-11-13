# Tailwind 语法糖

> 介绍 Tailwind 自定义函数和指令

---

## @tailwind

使用 @Tailwind 指令将 Tailwind 的 `base`, `components`, `utilities` 和 `screens` 插入到 CSS 中。

```
/**
 * This injects Tailwind's base styles and any base styles registered by
 * plugins.
 */
@tailwind base;

/**
 * This injects Tailwind's component classes and any component classes
 * registered by plugins.
 */
@tailwind components;

/**
 * This injects Tailwind's utility classes and any utility classes registered
 * by plugins.
 */
@tailwind utilities;

/**
 * Use this directive to control where Tailwind injects the responsive
 * variations of each utility.
 *
 * If omitted, Tailwind will append these classes to the very end of
 * your stylesheet by default.
 */
 @tailwind screens;
```

## @apply

使用 @apply 将任何现有 `通用 class` 内联到您自己的自定义 CSS 中。

当您在 HTML 中找到希望提取到新组件的公共 `通用 class` 则需要使用这个指令。

```
.btn {
  @apply font-bold py-2 px-4 rounded;
}
.btn-blue {
  @apply bg-blue-500 text-white;
}
.btn-blue:hover {
  @apply bg-blue-700;
}
```

规则可以列在单独一行，也可以多行 @apply:

```
.btn {
  @apply font-bold;
  @apply py-2;
  @apply px-4;
  @apply rounded;
}
```

当然，你也可以把 @apply 和普通的 CSS 混合在一起:

```
.btn:hover {
  @apply bg-blue-700;
  transform: translateY(-1px);
}
```

默认情况下，任何与 @apply 内联的规则都会被删除，以避免产生问题:

```
/* Input */
.foo {
  color: blue !important;
}

.bar {
  @apply foo;
}

/* Output */
.foo {
  color: blue !important;
}

.bar {
  color: blue;
}
```

如果你想 @apply 一个现有的 class 并且需要 `!important`，那么在结尾地加上 `!important`:

```
/* Input */
.btn {
  @apply font-bold py-2 px-4 rounded !important;
}

/* Output */
.btn {
  font-weight: 700 !important;
  padding-top: .5rem !important;
  padding-bottom: .5rem !important;
  padding-right: 1rem !important;
  padding-left: 1rem !important;
  border-radius: .25rem !important;
}
```

注意，如果你使用 Sass/SCSS，你需要使用 Sass 的插值特性:

```
.btn {
  @apply font-bold py-2 px-4 rounded #{!important};
}
```

重要的是要明白 @apply `不能用于` 内联其他、伪类或响应式。相反，要在普通的 css 伪选择器或新媒体查询中使用它:

```
/* Won't work: */
.btn {
  @apply block bg-red-500;
  @apply hover:bg-blue-500;
  @apply md:inline-block;
}

/* Do this instead: */
.btn {
  @apply block bg-red-500;
}
.btn:hover {
  @apply bg-blue-500;
}
@screen md {
  .btn {
    @apply inline-block;
  }
}
```

如果你已经为你的工具[配置了一个前缀](https://tailwindcss.com/docs/configuration#prefix)，你可以选择省略前缀当你使用@apply，如果你喜欢简洁的语法:

```
/* Both of these will work */
.btn {
  @apply tw-font-bold tw-py-2 tw-px-4 tw-rounded;
}
.btn {
  @apply font-bold py-2 px-4 rounded;
}
```

## @layer

使用 @layer 指令告诉 Tailwind 属于一组自定义样式的 “块”。在 `base`, `components`, `utilities` 有效。

```
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  h1 {
    @apply text-2xl;
  }
  h2 {
    @apply text-xl;
  }
}

@layer components {
  .btn-blue {
    @apply bg-blue-500 text-white font-bold py-2 px-4 rounded;
  }
  .btn-blue:hover {
    @apply bg-blue-700;
  }
}

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

Tailwind 自动将 @layer 指令中的 CSS 移动到相应的 @Tailwind 规则中，因此您不必担心需要以特定顺序编写 CSS 以避免特殊问题。

在 @layer 指令中包装任何定制的 CSS 也会告诉 Tailwind 在清除该层时要考虑清除这些样式。请阅读我们的[控制文件大小文档](https://tailwindcss.com/docs/controlling-file-size)了解更多细节。

## @variants

您可以通过在 @variant 指令中包装它们的定义来生成响应式、`hover`, `focus`, `active`和其他伪类。

```
@variants focus, hover {
  .rotate-0 {
    transform: rotate(0deg);
  }
  .rotate-90 {
    transform: rotate(90deg);
  }
}
```

这将生成以下 CSS:

```
.rotate-0 {
  transform: rotate(0deg);
}
.rotate-90 {
  transform: rotate(90deg);
}

.focus\:rotate-0:focus {
  transform: rotate(0deg);
}
.focus\:rotate-90:focus {
  transform: rotate(90deg);
}

.hover\:rotate-0:hover {
  transform: rotate(0deg);
}
.hover\:rotate-90:hover {
  transform: rotate(90deg);
}
```

需要注意的是，**成果物是按照您指定它们的顺序生成的**。

所以，如果你想让 focus 优先于 hover，那么确保 focus 在 hover 之后:

```
/* Input */
@variants hover, focus {
  .banana {
    color: yellow;
  }
}

/* Output */
.banana {
  color: yellow;
}
.hover\:banana:hover {
  color: yellow;
}
.focus\:banana:focus {
  color: yellow;
}
```

@variants 所有能支持的伪类，以及[通过插件](https://tailwindcss.com/docs/plugins#adding-variants)添加的任何自定义伪类。

## @responsive

通过将 class 的定义包装在 @responsive 指令中，您可以生成自己 class 的响应式:

```
@responsive {
  .bg-gradient-brand {
    background-image: linear-gradient(blue, green);
  }
}
```

使用默认断点，这将生成以下类:

```
.bg-gradient-brand {
  background-image: linear-gradient(blue, green);
}

/* ... */

@media (min-width: 640px) {
  .sm\:bg-gradient-brand {
    background-image: linear-gradient(blue, green);
  }
  /* ... */
}

@media  (min-width: 768px) {
  .md\:bg-gradient-brand {
    background-image: linear-gradient(blue, green);
  }
  /* ... */
}

@media (min-width: 1024px) {
  .lg\:bg-gradient-brand {
    background-image: linear-gradient(blue, green);
  }
  /* ... */
}

@media (min-width: 1280px) {
  .xl\:bg-gradient-brand {
    background-image: linear-gradient(blue, green);
  }
  /* ... */
}
```

响应式将添加到 Tailwind 现有的媒体查询中，并放到样式表的最后。这可以确保带有响应前缀的类总是覆盖针对相同 CSS 属性的非响应类。

## @screen

使用 @screen 指令，您可以创建媒体查询，通过名称引用断点，而不是在自己的 CSS 中复制断点的值。

例如，假设有一个 640px 的 sm 断点，并且需要编写一些引用这个 sm 断点的自定义 CSS。

不用写下面的代码如下:

```
@media (min-width: 640px) {
  /* ... */
}
```

... 而是可以使用 @screen 指令并引用 sm 断点:

```
@screen sm {
  /* ... */
}
```

## theme()

使用 theme() 函数和 `.` 访问你的 Tailwind 配置值。

如果你只想为声明的一部分引用主题配置中的一个值，这可能是 @apply 的一个有用的替代方法:

```
.content-area {
  height: calc(100vh - theme('spacing.12'));
}
```

由于 Tailwind 使用嵌套的对象语法来定义其默认的调色板，因此请确保使用 `.` 来访问嵌套的颜色。

**Wrong**：访问嵌套颜色值时不要使用破折号语法

```
.btn-blue {
  background-color: theme('colors.blue-500');
}
```

**Right**：使用 `.` 表示法访问嵌套的颜色值

```
.btn-blue {
  background-color: theme('colors.blue.500');
}
```
