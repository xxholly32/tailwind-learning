# position

> 用于控制元素在 DOM 中的位置的样式。

| class    | 属性                |
| -------- | ------------------- |
| static   | position: static;   |
| fixed    | position: fixed;    |
| absolute | position: absolute; |
| relative | position: relative; |
| sticky   | position: sticky;   |

## Static

使用 `static` 使元素在正常的文档流排列。

任何偏移都将被忽略，元素也不会作为绝对定位子元素的位置参考。

<div class="relative bg-fuchsia-200 p-6">
  <div class="static h-32 bg-fuchsia-300 p-4 text-fuchsia-600 font-medium">
    <p>Static parent</p>
    <div class="absolute bottom-0 left-0 bg-fuchsia-500 p-4 text-fuchsia-50">
      <p>Absolute child</p>
    </div>
  </div>
</div>

```html
<div class="static ...">
  <p>Static parent</p>
  <div class="absolute bottom-0 left-0 ...">
    <p>Absolute child</p>
  </div>
</div>
```

## Relative

使用 `relative` 使文档流使用相对定位元素。

相对于元素的正常位置计算偏移量，元素将作为绝对定位子元素的位置参考。

<div class="relative bg-rose-200 p-6">
  <div class="relative h-32 bg-rose-300 p-4 text-rose-600 font-medium">
    <p>Static parent</p>
    <div class="absolute bottom-0 left-0 bg-rose-500 p-4 text-rose-50">
      <p>Absolute child</p>
    </div>
  </div>
</div>

```html
<div class="relative ...">
  <p>Static parent</p>
  <div class="absolute bottom-0 left-0 ...">
    <p>Absolute child</p>
  </div>
</div>
```

## Absolute

使用 `.absolute` 将元素定位在文档的正常流程之外，使相邻的元素表现得好像该元素不存在一样。

相对于具有 `static` 位置的最近父元素计算偏移量，元素将作为其他绝对定位子元素的位置引用。

<div class="space-y-6">
  <div>
    <p class="text-sm text-indigo-900 mb-2">With static positioning</p>
    <div class="relative bg-indigo-200 px-6 pt-2 pb-6 font-medium">
      <p class="mb-2 text-indigo-600">Relative parent</p>
      <div class="static bg-indigo-300 p-4 text-indigo-700">
        <p class="mb-2">Static parent</p>
        <div class="static bottom-0 left-0 bg-indigo-500 p-4 text-indigo-50 inline-block">
          <p>Static child</p>
        </div>
        <div class="bg-indigo-200 p-4 text-indigo-600 inline-block">
          <p>Static sibling</p>
        </div>
      </div>
    </div>
  </div>

  <div>
    <p class="text-sm text-indigo-900 mb-2">With absolute positioning</p>
    <div class="relative bg-indigo-200 px-6 pt-2 pb-6 font-medium">
      <p class="mb-2 text-indigo-600">Relative parent</p>
      <div class="static bg-indigo-300 p-4 text-indigo-700">
        <p class="mb-2">Static parent</p>
        <div class="absolute top-0 right-0 bg-indigo-500 p-4 text-indigo-50 inline-block">
          <p>Absolute child</p>
        </div>
        <div class="bg-indigo-200 p-4 text-indigo-600 inline-block">
          <p>Static sibling</p>
        </div>
      </div>
    </div>
  </div>
</div>

```html
<div class="static ...">
  <!-- Static parent -->
  <div class="static ..."><p>Static child</p></div>
  <div class="inline-block ..."><p>Static sibling</p></div>
  <!-- Static parent -->
  <div class="absolute ..."><p>Absolute child</p></div>
  <div class="inline-block ..."><p>Static sibling</p></div>
</div>
```

## Fixed

使用 `fixed` 来定位相对于浏览器窗口的元素。

偏移量是相对于视口计算的，元素将作为绝对定位子元素的位置参考。

<div class="overflow-hidden max-w-md mx-auto mt-4 mb-4 ring-4 ring-amber-300 rounded-xl">
  <div class="rounded-t-xl bg-amber-200 flex px-4 py-3">
    <div class="mr-6">
      <span class="inline-block rounded-full bg-amber-400 h-3 w-3 mr-1"></span>
      <span class="inline-block rounded-full bg-amber-400 h-3 w-3 mr-1"></span>
      <span class="inline-block rounded-full bg-amber-400 h-3 w-3"></span>
    </div>
    <div class="flex-1 bg-amber-100 rounded mr-4"></div>
  </div>
  <div class="relative bg-amber-100 text-amber-600 h-64 font-medium">
    <div class="absolute left-0 right-0 top-0 bg-amber-300 text-amber-700 z-10 px-4 py-3">
      Fixed child
    </div>
    <div class="absolute inset-0 overflow-auto pt-16 px-6 pb-4 space-y-4 font-flow">
      <p class="font-sans">Scroll me!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. </p>
      <p>Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
      <p>Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. </p>
      <p>Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. </p>
      <p>Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo. Sed pretium blandit orci. Ut eu diam at pede suscipit sodales. Aenean lectus elit, fermentum non, convallis id, sagittis at, neque. </p>
      <p>Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula. Nulla ut felis in purus aliquam imperdiet. Maecenas aliquet mollis lectus. Vivamus consectetuer risus et tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. </p>
      <p>Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. </p>
      <p>Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. </p>
    </div>
  </div>
</div>

```html
<div>
  <div class="fixed ...">
    Fixed child
  </div>

  Scroll me! Lorem ipsum...
</div>
```

## Sticky

> 注意，在 IE11 中不支持

使用 `.sticky` 将元素定位为相对的，直到它跨过指定的阈值，然后将其视为固定的，直到其父元素在屏幕外。

相对于元素的正常位置计算偏移量，元素将作为绝对定位子元素的位置参考。

<div class="h-64 overflow-auto">
  <div>
    <div class="sticky top-0 bg-emerald-200 px-2 py-1 font-semibold text-emerald-600 rounded-md">Sticky Heading 1</div>
    <p class="py-4 font-medium text-emerald-500">Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. </p>
  </div>
  <div>
    <div class="sticky top-0 bg-emerald-200 px-2 py-1 font-semibold text-emerald-600 rounded-md">Sticky Heading 2</div>
    <p class="py-4 font-medium text-emerald-500">Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo. Sed pretium blandit orci. Ut eu diam at pede suscipit sodales. Aenean lectus elit, fermentum non, convallis id, sagittis at, neque. </p>
  </div>
  <div>
    <div class="sticky top-0 bg-emerald-200 px-2 py-1 font-semibold text-emerald-600 rounded-md">Sticky Heading 3</div>
    <p class="py-4 font-medium text-emerald-500">Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula. Nulla ut felis in purus aliquam imperdiet. Maecenas aliquet mollis lectus. Vivamus consectetuer risus et tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. </p>
  </div>
  <div>
    <div class="sticky top-0 bg-emerald-200 px-2 py-1 font-semibold text-emerald-600 rounded-md">Sticky Heading 4</div>
    <p class="py-4 font-medium text-emerald-500">Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. </p>
  </div>
  <div>
    <div class="sticky top-0 bg-emerald-200 px-2 py-1 font-semibold text-emerald-600 rounded-md">Sticky Heading 5</div>
    <p class="py-4 font-medium text-emerald-500">Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo. Sed pretium blandit orci. Ut eu diam at pede suscipit sodales. Aenean lectus elit, fermentum non, convallis id, sagittis at, neque. </p>
  </div>
  <div>
    <div class="sticky top-0 bg-emerald-200 px-2 py-1 font-semibold text-emerald-600 rounded-md">Sticky Heading 6</div>
    <p class="py-4 font-medium text-emerald-500">Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula. Nulla ut felis in purus aliquam imperdiet. Maecenas aliquet mollis lectus. Vivamus consectetuer risus et tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. </p>
  </div>
</div>

```html
<div>
  <div class="sticky top-0 ...">Sticky Heading 1</div>
  <p class="py-4">Quisque cursus...</p>
</div>
<div>
  <div class="sticky top-0 ...">Sticky Heading 2</div>
  <p class="py-4">Integer lacinia...</p>
</div>
<div>
  <div class="sticky top-0 ...">Sticky Heading 3</div>
  <p class="py-4">Nullam mauris...</p>
</div>
<!-- etc. -->
```

## 响应式

若要控制特定分辨率的 position，请向任何现有的 position class 类添加 `{screen}:` 前缀。例如，使用 `md:position` 将 `position` class 应用于中等及以上屏幕尺寸。

想了解更多关于响应式设计特性的信息，请查看[响应式设计文档](https://tailwindcss.com/docs/responsive-design)。

```html
<div class="relative h-32 ...">
  <div class="inset-x-0 bottom-0 relative md:absolute"></div>
</div>
```

## 定制

### 伪类

默认情况下，position 只和响应式变量生效。

您可以通过修改 `tailwind.config.js` 文件的变量部分中的 `variants` 属性来控制为 `position` 生成变量。

例如，这个配置会生成 `hover` 和 `focus` 的伪类:

```js
 // tailwind.config.js
  module.exports = {
    variants: {
      extend: {
        // ...
+       position: ['hover', 'focus'],
      }
    }
  }
```

## 禁用

如果您不打算在项目中使用 `position`，可以通过在配置文件的 `corePlugins` 部分将 `position` 属性设置为 `false` 来完全禁用它们:

```js
// tailwind.config.js
  module.exports = {
    corePlugins: {
      // ...
+     position: false,
    }
  }
```
