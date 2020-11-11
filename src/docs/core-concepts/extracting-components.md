# 提取组件

> 处理重复并保证项目的可维护性

Tailwind 鼓励采用[实用优先](https://tailwindcss.com/docs/utility-first)的工作流，即最初只使用 ``通用 classes`` 实现设计，以避免过早抽象。

<!-- A marketing page card built entirely with ``通用 classes`` -->
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
<!-- A marketing page card built entirely with ``通用 classes`` -->
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

但随着项目的增长，您将不可避免地发现自己重复使用常见的 `通用 class` 组合，在许多不同的地方重新创建相同的组件。比如这些明显的小组件，按钮，表单元素，tag 等。

<!-- Repeating these classes for every button can be painful -->
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Button
</button>

```
<!-- Repeating these classes for every button can be painful -->
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Button
</button>
```

在多个组件实例之间保持一个长长的 ``通用 classes`` 维护起来会成为负担，所以当您开始遇到像痛苦的反复复制 ``通用 classes`` 时，提取一个组件将是一个好的方案。

## 提取 HTML 组件

定义 UI 组件所需的所有信息都能完全存在于 CSS 中，这种情况非常罕见ーー几乎总是需要使用一些重要的对应 HTML 结构。

**Wrong** 不要依赖 CSS 类来提取复杂的组件，看示例

<style>
  .vacation-card { /* ... */ }
  .vacation-card-info { /* ... */ }
  .vacation-card-eyebrow { /* ... */ }
  .vacation-card-title { /* ... */ }
  .vacation-card-price { /* ... */ }
</style>

<!-- Even with custom CSS, you still need to duplicate this HTML structure -->
<div class="vacation-card">
  <img class="vacation-card-image" src="https://images.unsplash.com/photo-1452784444945-3f422708fe5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=512&q=80" alt="Beach in Cancun">
  <div class="vacation-card-info">
    <div>
      <div class="vacation-card-eyebrow">Private Villa</div>
      <div class="vacation-card-title">
        <a href="/vacations/cancun">Relaxing All-Inclusive Resort in Cancun</a>
      </div>
      <div class="vacation-card-price">$299 USD per night</div>
    </div>
  </div>
</div>

```
<style>
  .vacation-card { /* ... */ }
  .vacation-card-info { /* ... */ }
  .vacation-card-eyebrow { /* ... */ }
  .vacation-card-title { /* ... */ }
  .vacation-card-price { /* ... */ }
</style>

<!-- Even with custom CSS, you still need to duplicate this HTML structure -->
<div class="vacation-card">
  <img class="vacation-card-image" src="..." alt="Beach in Cancun">
  <div class="vacation-card-info">
    <div>
      <div class="vacation-card-eyebrow">Private Villa</div>
      <div class="vacation-card-title">
        <a href="/vacations/cancun">Relaxing All-Inclusive Resort in Cancun</a>
      </div>
      <div class="vacation-card-price">$299 USD per night</div>
    </div>
  </div>
</div>
```

出于这个原因，通常最好将可重用的 UI 片段提取到模板部分或 JavaScript 组件中，而不是编写定制的 CSS 类。

通过为真实组件创造 template，您可以在 template 使用 ``通用 classes`` ，而不必在多个地方复制相同的类造成任何维护负担。

**Right** 创建一个 template 或 JavaScript 组件

```
<!-- In use -->
<VacationCard
  img="/img/cancun.jpg"
  imgAlt="Beach in Cancun"
  eyebrow="Private Villa"
  title="Relaxing All-Inclusive Resort in Cancun"
  pricing="$299 USD per night"
  url="/vacations/cancun"
/>

<!-- ./components/VacationCard.vue -->
<template>
  <div>
    <img class="rounded" :src="img" :alt="imgAlt">
    <div class="mt-2">
      <div>
        <div class="text-xs text-gray-600 uppercase font-bold">{{ eyebrow }}</div>
        <div class="font-bold text-gray-700 leading-snug">
          <a :href="url" class="hover:underline">{{ title }}</a>
        </div>
        <div class="mt-2 text-sm text-gray-600">{{ pricing }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['img', 'imgAlt', 'eyebrow', 'title', 'pricing', 'url']
  }
</script>
```

上面的例子使用了 [Vue](https://vuejs.org/v2/guide/components.html)，但是同样的方法也可以用于 [React 组件](https://reactjs.org/docs/components-and-props.html)、 [ERB 组件](https://guides.rubyonrails.org/v5.2/layouts_and_rendering.html#using-partials)、 [Blade 组件](https://laravel.com/docs/5.8/blade#components-and-slots)、 [Twig includes](https://twig.symfony.com/doc/2.x/templates.html#including-other-templates) 等。

## 使用 @apply 抽取 CSS 组件

对于像按钮和表单元素这样的小组件，创建一个 template 或 JavaScript 组件并且需要创建一个 css 样式感觉会比较重。

在这些情况下，您可以使用 Tailwind 的 @apply 指令能够轻松地将常见的实用模式提取到 CSS 组件类中。

下面是 .btn-blue 使用 @apply 的实现:

<button class="btn-blue">
  Button
</button>

<style>
.btn-blue {
  @apply bg-blue-500 text-white font-bold py-2 px-4 rounded;
}
.btn-blue:hover {
  @apply bg-blue-700;
}
</style>

```
<button class="btn-blue">
  Button
</button>

<style>
.btn-blue {
  @apply bg-blue-500 text-white font-bold py-2 px-4 rounded;
}
.btn-blue:hover {
  @apply bg-blue-700;
}
</style>
```

请注意，hover:、focus: 和 {screen}: 等不能直接应用，对适当的伪选择器或媒体查询应用原始方案处理。

为了避免意奇怪的问题，我们建议用 @layer components{ ... }指令包装您的定制组件样式，以告诉 Tailwind 这些样式属于哪个层:

```
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn-blue {
    @apply bg-blue-500 text-white font-bold py-2 px-4 rounded;
  }
  .btn-blue:hover {
    @apply bg-blue-700;
  }
}
```

Tailwind 会自动将这些样式移动到与 `@tailwind components` 对应的位置，因此您不必担心在源文件中的顺序问题。

使用 `@layer` 指令还会将会改变 tailwind 的内部打包方式。请阅读[我们的文档](https://tailwindcss.com/docs/controlling-file-size)了解更多细节。

## 保持可组装性

假设你有这两个按钮:

<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Button
</button>

<button class="bg-gray-400 hover:bg-gray-500 text-gray-800 font-bold py-2 px-4 rounded">
  Button
</button>

```
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Button
</button>

<button class="bg-gray-400 hover:bg-gray-500 text-gray-800 font-bold py-2 px-4 rounded">
  Button
</button>
```

实现上面 2 个按钮的代码可能如下：

```
@layer components {
  .btn-blue {
    @apply bg-blue-500 text-white font-bold py-2 px-4 rounded;
  }
  .btn-blue:hover {
    @apply bg-blue-700;
  }

  .btn-gray {
    @apply bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded;
  }
  .btn-gray:hover {
    @apply bg-gray-500;
  }
}
```

这样种实现**仍然存在潜在的复制的痛苦**

如果要更改所有按钮上 padding,font-weight,border-radius，你就不得不修改每个按钮的样式。

更好的方式是将相同的部分提取到一个单独的 class 中：

```
@layer components {
  .btn {
    @apply font-bold py-2 px-4 rounded;
  }

  .btn-blue {
    @apply bg-blue-500 text-white;
  }
  .btn-blue:hover {
    @apply bg-blue-700;
  }

  .btn-gray {
    @apply bg-gray-400 text-gray-800;
  }
  .btn-gray:hover {
    @apply bg-gray-500;
  }
}
```

现在，当你需要设计一个按钮时，你可以使用两个类:

```
<button class="btn btn-blue">
  Button
</button>

<button class="btn btn-gray">
  Button
</button>
```

现在只需编辑 .btn 类就可以很容易地在一个地方更改按钮的共享样式。

它还允许您添加新的一次性按钮样式，而无需强制创建新的组件类或复制共享样式:

<button class="btn bg-green-500 hover:bg-green-400 text-white">
  Button
</button>

```
<button class="btn bg-green-500 hover:bg-green-400 text-white">
  Button
</button>
```

## 编写组件插件

除了直接在 CSS 文件中编写组件 class 之外，你还可以通过编写自己的插件来添加组件 class:

```
// tailwind.config.js
const plugin = require('tailwindcss/plugin')

module.exports = {
  plugins: [
    plugin(function({ addComponents }) {
      const buttons = {
        '.btn': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
        },
        '.btn-blue': {
          backgroundColor: '#3490dc',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#2779bd'
          },
        },
        '.btn-red': {
          backgroundColor: '#e3342f',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#cc1f1a'
          },
        },
      }

      addComponents(buttons)
    })
  ]
}
```

如果您希望将 Tailwind 组件作为库发布，或者希望更容易地跨多个项目共享组件，那么这是一个很好的选择。

在[组件插件文档](https://tailwindcss.com/docs/plugins#adding-components)中了解更多信息。