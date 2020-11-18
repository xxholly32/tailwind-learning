# display

> 用于控制元素的显示类型的样式

| class               | 属性                         |
| ------------------- | ---------------------------- |
| .block              | display: block;              |
| .inline-block       | display: inline-block;       |
| .inline             | display: inline;             |
| .flex               | display: flex;               |
| .inline-flex        | display: inline-flex;        |
| .table              | display: table;              |
| .table-caption      | display: table-caption;      |
| .table-cell         | display: table-cell;         |
| .table-column       | display: table-column;       |
| .table-column-group | display: table-column-group; |
| .table-footer-group | display: table-footer-group; |
| .table-header-group | display: table-header-group; |
| .table-row-group    | display: table-row-group;    |
| .table-row          | display: table-row;          |
| .flow-root          | display: flow-root;          |
| .grid               | display: grid;               |
| .inline-grid        | display: inline-grid;        |
| .contents           | display: contents;           |
| .hidden             | display: none;               |

## Block

使用. block 创建块级元素。

<div class="bg-gray-200 p-4">
  <span class="block text-gray-700 text-center bg-gray-400 px-4 py-2">1</span>
  <span class="block text-gray-700 text-center bg-gray-400 px-4 py-2 mt-2">2</span>
  <span class="block text-gray-700 text-center bg-gray-400 px-4 py-2 mt-2">3</span>
</div>

```html
<div class="bg-gray-200 p-4">
  <span class="block text-gray-700 text-center bg-gray-400 px-4 py-2">
    1
  </span>
  <span class="block text-gray-700 text-center bg-gray-400 px-4 py-2 mt-2">
    2
  </span>
  <span class="block text-gray-700 text-center bg-gray-400 px-4 py-2 mt-2">
    3
  </span>
</div>
```

## Flow-Root

使用. flow-root 创建具有自己的[块格式上下文](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context)的块级元素。

<div class="flow-root bg-gray-400">
  <div class="my-4 block text-gray-700 text-center bg-gray-500 px-4 py-2">1</div>
</div>
<div class="flow-root bg-gray-200">
  <div class="my-4 block text-gray-700 text-center bg-gray-400 px-4 py-2">2</div>
</div>

```html
<div class="flow-root bg-gray-400">
  <div class="my-4 block text-gray-700 text-center bg-gray-500 px-4 py-2">
    1
  </div>
</div>
<div class="flow-root bg-gray-200">
  <div class="my-4 block text-gray-700 text-center bg-gray-400 px-4 py-2">
    2
  </div>
</div>
```

## Inline Block

使用 `.inline-block` 创建行内块级元素。

<div class="bg-gray-200">
  <div class="inline-block text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
  <div class="inline-block text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
  <div class="inline-block text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
</div>

```html
<div class="bg-gray-200">
  <div class="inline-block text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
    1
  </div>
  <div class="inline-block text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
    2
  </div>
  <div class="inline-block text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
    3
  </div>
</div>
```

## Inline

使用 `.inline` 创建一个 `inline` 元素。

<div class="bg-gray-200">
  <div class="inline text-gray-700 text-center bg-gray-400 px-4 py-2">1</div>
  <div class="inline text-gray-700 text-center bg-gray-400 px-4 py-2">2</div>
  <div class="inline text-gray-700 text-center bg-gray-400 px-4 py-2">3</div>
</div>

```html
<div class="bg-gray-200">
  <div class="inline text-gray-700 text-center bg-gray-400 px-4 py-2">1</div>
  <div class="inline text-gray-700 text-center bg-gray-400 px-4 py-2">2</div>
  <div class="inline text-gray-700 text-center bg-gray-400 px-4 py-2">3</div>
</div>
```

## Flex

使用 `.flex` 创建块级 `flex` 容器。

<div class="flex bg-gray-200">
  <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
  <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
  <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
</div>

```html
<div class="flex bg-gray-200">
  <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
    1
  </div>
  <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
    2
  </div>
  <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
    3
  </div>
</div>
```

## Inline flex

使用 `.inline-flex` 创建一个 inline flex 容器。

<div class="inline-flex bg-gray-200">
  <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
  <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
  <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
</div>

```html
<div class="inline-flex bg-gray-200">
  <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
    1
  </div>
  <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
    2
  </div>
  <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
    3
  </div>
</div>
```

## Grid

使用 `.grid` 创建网格容器。

<div class="grid gap-4 grid-cols-3">
  <div class="bg-gray-300 h-12"></div>
  <div class="bg-gray-500 h-12"></div>
  <div class="bg-gray-300 h-12"></div>
  <div class="bg-gray-500 h-12"></div>
  <div class="bg-gray-300 h-12"></div>
  <div class="bg-gray-500 h-12"></div>
  <div class="bg-gray-300 h-12"></div>
  <div class="bg-gray-500 h-12"></div>
  <div class="bg-gray-300 h-12"></div>
</div>

```html
<div class="grid gap-4 grid-cols-3">
  <!-- ... -->
</div>
```

## Inline Grid

使用 `.inline-grid` 创建内联网格容器。

<span class="inline-grid grid-cols-3 gap-x-4">
  <span>1</span>
  <span>1</span>
  <span>1</span>
</span>
<span class="inline-grid grid-cols-3 gap-x-4">
  <span>2</span>
  <span>2</span>
  <span>2</span>
</span>

```html
<span class="inline-grid grid-cols-3 gap-x-4">
  <span>1</span>
  <span>1</span>
  <span>1</span>
</span>
<span class="inline-grid grid-cols-3 gap-x-4">
  <span>2</span>
  <span>2</span>
  <span>2</span>
</span>
```

## Contents

使用 `.contents` 创建一个 "虚拟" 容器，其子容器的默认布局类似于父容器的。

<div class="flex bg-gray-200">
  <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
  <div class="contents">
    <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
    <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
  </div>
  <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">4</div>
</div>

```html
<div class="flex bg-gray-200">
  <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
    1
  </div>
  <div class="contents">
    <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
      2
    </div>
    <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
      3
    </div>
  </div>
  <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
    4
  </div>
</div>
```

## Table

使用 `.table`, `.table-row`, `.table-cell`, `.table-caption`, `.table-column`, `.table-column-group`, `.table-header-group`, `table-row-group`, 和 `.table-footer-group` 创建各自表元素的元素样式.

<div class="table w-full">
  <div class="table-row-group">
    <div class="table-row">
      <div class="table-cell bg-gray-400 text-gray-700 px-4 py-2 text-sm">A cell with more content</div>
      <div class="table-cell bg-gray-200 text-gray-700 px-4 py-2 text-sm">Cell 2</div>
      <div class="table-cell bg-gray-400 text-gray-700 px-4 py-2 text-sm">Cell 3</div>
    </div>
    <div class="table-row">
      <div class="table-cell bg-gray-200 text-gray-700 px-4 py-2 text-sm">Cell 4</div>
      <div class="table-cell bg-gray-400 text-gray-700 px-4 py-2 text-sm">A cell with more content</div>
      <div class="table-cell bg-gray-200 text-gray-700 px-4 py-2 text-sm">Cell 6</div>
    </div>
  </div>
</div>

```html
<div class="table w-full">
  <div class="table-row-group">
    <div class="table-row">
      <div class="table-cell bg-gray-400 text-gray-700 px-4 py-2 text-sm">
        A cell with more content
      </div>
      <div class="table-cell bg-gray-200 text-gray-700 px-4 py-2 text-sm">
        Cell 2
      </div>
      <div class="table-cell bg-gray-400 text-gray-700 px-4 py-2 text-sm">
        Cell 3
      </div>
    </div>
    <div class="table-row">
      <div class="table-cell bg-gray-200 text-gray-700 px-4 py-2 text-sm">
        Cell 4
      </div>
      <div class="table-cell bg-gray-400 text-gray-700 px-4 py-2 text-sm">
        A cell with more content
      </div>
      <div class="table-cell bg-gray-200 text-gray-700 px-4 py-2 text-sm">
        Cell 6
      </div>
    </div>
  </div>
</div>
```

## Hidden

使用 `.hidden` 要显示的 `display:none` 并将其从页面布局中移除(与 [.invisible](https://tailwindcss.com/docs/visibility#invisible) 不同)。

<div class="flex bg-gray-200">
  <div class="hidden text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
  <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
  <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
</div>

```html
<div class="flex bg-gray-200">
  <div class="hidden text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
    1
  </div>
  <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
  <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
</div>
```

## 响应式

若要控制特定不同分辨率元素的显示属性，请向任何现有的 display 样式添加 `{screen}:` 前缀。例如，使用 `md:inline-flex` 将 `inline-flex` 样式仅应用于中等屏幕尺寸及以上。

想了解更多关于响应式设计特性的信息，请查看[响应式设计文档](https://tailwindcss.com/docs/responsive-design)。

```html
<div class="flex sm:inline-flex md:block lg:hidden xl:flex ...">
  <!-- ... -->
</div>
```

## 定制

### 响应式和伪类

默认情况下，display 只和响应式变量生效。

您可以通过修改 `tailwind.config.js` 文件的变量部分中的 `variants` 属性来控制为 `display` 生成变量。

例如，这个配置也会生成 `hover` 和 `focus` :

```js
 // tailwind.config.js
  module.exports = {
    variants: {
      // ...
-     display: ['responsive'],
+     display: ['responsive', 'hover', 'focus'],
    }
  }
```

## 禁用

如果您不打算在项目中使用 `display`，可以通过在配置文件的 `corePlugins` 部分将 `display` 属性设置为 `false` 来完全禁用它们:

```js
// tailwind.config.js
  module.exports = {
    corePlugins: {
      // ...
+     display: false,
    }
  }
```
