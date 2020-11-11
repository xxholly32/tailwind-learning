# 实用第一

> 从实用性角度出发利用 utilities 实现复杂的组件

通常，无论何时设计样式，你都需要编写 CSS。

使用传统方法，自定义设计需要自定义 CSS

<div class="chat-notification">
  <div class="chat-notification-logo-wrapper">
    <img class="chat-notification-logo" src="/img/logo.svg" alt="ChitChat Logo">
  </div>
  <div class="chat-notification-content">
    <h4 class="chat-notification-title">ChitChat</h4>
    <p class="chat-notification-message">You have a new message!</p>
  </div>
</div>

<style>
  .chat-notification {
    display: flex;
    max-width: 24rem;
    margin: 0 auto;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  .chat-notification-logo-wrapper {
    flex-shrink: 0;
  }
  .chat-notification-logo {
    height: 3rem;
    width: 3rem;
  }
  .chat-notification-content {
    margin-left: 1.5rem;
    padding-top: 0.25rem;
  }
  .chat-notification-title {
    color: #1a202c;
    font-size: 1.25rem;
    line-height: 1.25;
  }
  .chat-notification-message {
    color: #718096;
    font-size: 1rem;
    line-height: 1.5;
  }
</style>

```html
<div class="chat-notification">
  <div class="chat-notification-logo-wrapper">
    <img
      class="chat-notification-logo"
      src="/img/logo.svg"
      alt="ChitChat Logo"
    />
  </div>
  <div class="chat-notification-content">
    <h4 class="chat-notification-title">ChitChat</h4>
    <p class="chat-notification-message">You have a new message!</p>
  </div>
</div>

<style>
  .chat-notification {
    display: flex;
    max-width: 24rem;
    margin: 0 auto;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  .chat-notification-logo-wrapper {
    flex-shrink: 0;
  }
  .chat-notification-logo {
    height: 3rem;
    width: 3rem;
  }
  .chat-notification-content {
    margin-left: 1.5rem;
    padding-top: 0.25rem;
  }
  .chat-notification-title {
    color: #1a202c;
    font-size: 1.25rem;
    line-height: 1.25;
  }
  .chat-notification-message {
    color: #718096;
    font-size: 1rem;
    line-height: 1.5;
  }
</style>
```

使用 Tailwind，您可以通过在 HTML 中直接应用预先存在的类来设计元素。

使用 utilities 库（Tailwind 核心库）构建自定义设计，而无需编写 CSS

<div class="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
  <div class="flex-shrink-0">
    <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo">
  </div>
  <div class="ml-6 pt-1">
    <h4 class="text-xl text-gray-900 leading-tight">ChitChat</h4>
    <p class="text-base text-gray-600 leading-normal">You have a new message!</p>
  </div>
</div>

```html
<div class="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
  <div class="flex-shrink-0">
    <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
  </div>
  <div class="ml-6 pt-1">
    <h4 class="text-xl text-gray-900 leading-tight">ChitChat</h4>
    <p class="text-base text-gray-600 leading-normal">
      You have a new message!
    </p>
  </div>
</div>
```

在上面的例子中，我们使用了:

- Tailwind's [flexbox](/docs/display#flex) 和 [padding](/docs/padding) utilities 库 (`flex`, `flex-shrink-0`, 和 `p-6`) 来控制卡片布局
- [max-width](/docs/max-width) 和 [margin](/docs/margin) utilities 库 (`max-w-sm` 和 `mx-auto`) 来限制卡片的宽度并使其水平居中
- background color](/docs/background-color), [border radius](/docs/border-radius), 和 [box-shadow](/docs/box-shadow) utilities 库 (`bg-white`, `rounded-lg`, and `shadow-xl`) 来设计卡片的外观
- [width](/docs/width) 和 [height](/docs/height) utilities 库 (`w-12` 和 `h-12`) 调整图像大小
- [margin](/docs/margin) 和 [padding](/docs/padding) utilities 库 (`ml-6` and `pt-1`) 定位卡片文本
- [font size](/docs/font-size), [text color](/docs/text-color), 和 [line-height](/docs/line-height) utilities 库 (`text-xl`, `text-gray-900`, `leading-tight`, 等.) 设计卡片文本样式

... 允许我们实现一个完全自定义的组件设计，而不用编写一行自定义的 CSS。

现在我知道你在想什么，“这个代码好混乱! ”你说得对，是有点难看。事实上，你几乎不可能在第一次看到它的时候就认可它ーー**你必须真正去尝试它。**

但是一旦你真的用这种方式创造了一些东西，你会很快发现一些它的真正重要好处:

- **你不是在浪费精力去 classes 名称**. 不再需要添加像 `sidebar-inner-wrapper` 这样的命名去浪费精力，也不再需要为某些实际上只是一个 flex 容器的完美抽象名称而苦恼。
- **你的 CSS 停止增长**. 使用传统的方法，每次添加新特性时，CSS 文件都会变大。使用 utilities 程序，所有东西都是可重用的，所以你很少需要编写新的 CSS。
- **做出改变感觉更安全**. CSS 是全局的，当你改变它时，你永远不会知道你正在破坏什么。而 HTML 中的 class 是本地的，因此您可以更改它们，而不必担心出其他问题。

当您意识到使用预定义的 `通用 class`ss`HTML 是多么高效时，那么任何其他方式工作都会感觉像是一种折磨。

## 为什么不直接使用内联样式？

对这种方法的一个普遍反应是好奇，“这不就是内联样式吗? ”在某些方面是这样的ーー你可以将样式直接应用到元素上，而不是为它们分配一个类名，然后再对这个类进行样式化。

但是使用工具类比内联样式有一些重要的优势:

- **有限制的设计**. 使用内联样式，每个值都是一个神奇的数字. 使用 utilities 库, 您可以从预定义的设计系统中选择样式，这使得构建视觉上一致的 ui 变得更加容易.
- **响应式设计**. 你不能在内联样式中使用媒体查询，但是你可以使用 Tailwind 的[响应工具](/docs/responsive-design)轻松地构建完全响应的界面
- **伪类**. 内联样式不能针对像 hover 或 focus 这样的状态，但是 Tailwind 的[伪类变体](<(/docs/pseudo-class-variants)>)使得使用 utilities 类对这些状态进行样式化变得很容易

下面的例子是完全响应式的，包括一个带有悬停风格的按钮，并且完全使用工具类构建:

<div class="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
  <div class="sm:flex sm:items-center px-6 py-4">
    <img class="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full" src="/img/erin-lindford.jpg" alt="Woman's Face">
    <div class="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
      <p class="text-xl leading-tight">Erin Lindford</p>
      <p class="text-sm leading-tight text-gray-600">Product Engineer</p>
      <div class="mt-4">
        <button class="text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal">Message</button>
      </div>
    </div>
  </div>
</div>

```html
<div class="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
  <div class="sm:flex sm:items-center px-6 py-4">
    <img
      class="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full"
      src="/img/erin-lindford.jpg"
      alt="Woman's Face"
    />
    <div class="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
      <p class="text-xl leading-tight">Erin Lindford</p>
      <p class="text-sm leading-tight text-gray-600">Product Engineer</p>
      <div class="mt-4">
        <button
          class="text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal"
        >
          Message
        </button>
      </div>
    </div>
  </div>
</div>
```

## 可维护性问题

当使用 `实用主义` 的方法时，最大的可维护性问题是管理重复的样式组合。

通过[提取组件](https://tailwindcss.com/docs/extracting-components)(作为模板部分/javascript 组件)或使用 Tailwind 的 @apply 特性围绕常见的实用模式创建抽象，可以轻松地解决这个问题。

<button class="btn btn-blue">
  Button
</button>

```html
<!-- Using utilities -->
<button
  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
>
  Button
</button>

<!-- Extracting classes using @apply -->
<button class="btn btn-blue">
  Button
</button>

<style>
  .btn {
    @apply font-bold py-2 px-4 rounded;
  }
  .btn-blue {
    @apply bg-blue-500 text-white;
  }
  .btn-blue:hover {
    @apply bg-blue-700;
  }
</style>
```

除此之外，维护一个实用主义的 CSS 项目比维护一个大的 CSS 代码库要容易得多，因为 HTML 比 CSS 更容易维护。像 GitHub、 Heroku、 Kickstarter、 Twitch、 Segment 等大公司正在成功地使用这种方法。

如果你想了解其他人使用经验，请查看以下资源:

- [By The Numbers: A Year and a Half with Atomic CSS](https://medium.com/@johnpolacek/by-the-numbers-a-year-and-half-with-atomic-css-39d75b1263b4) by John Polacek
- [Building a Scalable CSS Architecture](https://blog.algolia.com/redesigning-our-docs-part-4-building-a-scalable-css-architecture/) by Sarah Dayan of Algolia
- [Diana Mounter on using ``通用 classes`s``es`tHub](http://www.fullstackradio.com/75), a podcast interview

更多信息，check out [The Case for Atomic/Utility-First CSS](https://johnpolacek.github.io/the-case-for-atomic-css/), curated by [John Polacek](https://twitter.com/johnpolacek).
