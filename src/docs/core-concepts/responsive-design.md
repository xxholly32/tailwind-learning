# 响应式设计

> 实用响应式设计能够构建自适应的用户界面。

---

每一个 Tailwind `通用 class` 能够有条件的加入不同的`media断点`，这使得只有 html 就可以简单实现复杂的响应式设计接口。

受常见的分辨率启发，默认情况下有四个`media断点`：

```
/* Small (sm) */
@media (min-width: 640px) { /* ... */ }

/* Medium (md) */
@media (min-width: 768px) { /* ... */ }

/* Large (lg) */
@media (min-width: 1024px) { /* ... */ }

/* Extra Large (xl) */
@media (min-width: 1280px) { /* ... */ }
```

要添加一个 `通用 class` 但只是让它在某个分辨率下生效，那你只需要在 uility class 上前面加入`media断点`名，并后面跟 `:` 字符：

```
<!-- 默认长度是16, medium screens 是32,large screens 是48 -->
<img class="w-16 md:w-32 lg:w-48" src="...">
```

这对框架中的**每个 `通用 class` 都适用**，这意味着你可以在给定的`media断点`上修改任何东西，甚至包括字母间距或光标样式。

下面是一个营销页面组件的简单示例，它在小屏幕上使用堆叠式布局，在大屏幕上使用并排式布局(调整浏览器的大小以查看实际操作) :

<div class="md:flex">
  <div class="md:flex-shrink-0">
    <img class="rounded-lg md:w-56" src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80" width="448" height="299" alt="Woman paying for a purchase">
  </div>
  <div class="mt-4 md:mt-0 md:ml-6">
    <div class="uppercase tracking-wide text-sm text-indigo-600 font-bold">Marketing</div>
    <a href="#" class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">Finding customers for your new business</a>
    <p class="mt-2 text-gray-600">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
  </div>
</div>

```html
<div class="md:flex">
  <div class="md:flex-shrink-0">
    <img
      class="rounded-lg md:w-56"
      src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
      width="448"
      height="299"
      alt="Woman paying for a purchase"
    />
  </div>
  <div class="mt-4 md:mt-0 md:ml-6">
    <div class="uppercase tracking-wide text-sm text-indigo-600 font-bold">
      Marketing
    </div>
    <a
      href="#"
      class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
      >Finding customers for your new business</a
    >
    <p class="mt-2 text-gray-600">
      Getting a new business off the ground is a lot of hard work. Here are five
      ideas you can use to find your first customers.
    </p>
  </div>
</div>
```

下面是上面这个例子的工作原理:

- 在默认情况下，外部的 `div` 是 `display: block`，但是添加 `md:flex` class，它就在 medium 和 larger 下是 `display: flex`
- 当父容器是一个 flex 容器时，我们希望确保图像永远不会缩小，因此我们添加了 `md:flex-shrink-0` 为了防止 medium 和 larger 屏幕的缩小。从技术上讲，我们可以直接使用 `flex-shrink-0` 因为它在 smaller 屏幕上不起作用，但为了更好的明确意思，建议还是加上。
- 在小屏幕上，默认情况下图像是实用默认宽度百分百的。在 medium 屏幕和以上的屏幕上，我们使用固定宽度，所以加上样式 `md:w-56`
- 在小屏幕上，内容部分使用 `mt-4` 在内容和图像之间添加一些空白。这个边距在水平布局中是不必要的。所以我们使用了 `md:mt-0` 取消了 margin，并且实用了 left mergin `md:ml-6`

在这个示例中，我们只使用了一种`media断点`方式，但是您也可以使用 sm、 lg 或 xl 响应前缀轻松定制其他大小的组件。

## 设备`media断点`优先

默认情况下，Tailwind 使用设备`media断点`优先规则，类似于 Bootstrap 或 Foundation。

这意味着非前缀 utilities (如 `uppercase`) 对所有屏幕尺寸都有效，而前缀 utilities (如 `md:uppercase`) 只对指定的`media断点`及以上有效。

下面的 class 的类分别加入`media断点`，改变颜色， 所有设备，sm、md、 lg 、 xl

```
<div class="bg-red-500 sm:bg-green-500 md:bg-blue-500 lg:bg-pink-500 xl:bg-teal-500"></div>
```

而不同的设备会有不同的颜色，这意味着，不是按照顺序，而是按照设备`media断点`优先的原则。

## 如何设置设备`media断点`

这种方法不同的地方是，要为移动设备设计单独样式，你需要使先设计一个非前缀版本的样式，而不是设计 `sm:` 前缀版本。不要认为 `sm:` 是“在小屏幕上” 的意思，而是 “在小`media断点`上”。

例子：

**Wrong** 不要使用 `sm:` 针对移动设备

```
<!-- 这个仅仅说明在640或者更大的屏幕上文本居中，而不是小屏幕下居中 -->
<div class="sm:text-center"></div>
```

**Right** 使用不带前缀的样式来锁定移动设备，并在较大的`media断点`处覆盖它们

```
<!-- 在手机端是居中, 640或者更大的屏幕上文本靠左 -->
<div class="text-center sm:text-left"></div>
```

由于这个特性，我们设计样式先考虑通用场景下的样式，然后再考虑 `sm` 屏幕，再考虑 `md` 屏幕...

## 如何锁定单个`media断点`

Tailwind 的`media断点`只包括最小宽度，不包括最大宽度，这意味着在较小`media断点`上添加的任何 class 也将应用于较大的`media断点`。

如果希望只在一个`media断点`上应用 class，解决方案是通过添加另一个`media断点`来撤消 class。

下面是一个例子，背景色在 md 断点处为红色，但在其他`media断点`处为青色:

```
<div class="bg-teal-500 md:bg-red-500 lg:bg-teal-500"></div>
```

请注意，这里我们不必为 sm 断点或 xl 断点指定背景颜色ーー您只需指定 class 何时开始生效，而不需要指定它何时停止。

## 自定义`media断点`

你可以在 `tailwind.config.js` 文件中定义自定义`media断点`:

```
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  }
}
```

[了解更多自定义断点信息](https://tailwindcss.com/docs/breakpoints)。
