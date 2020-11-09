# 控制文件大小

> 让你生产的 css 保持小而全的策略

使用默认配置，未压缩的 Tailwind CSS 开发版本喂 2413.4 KB，用 Gzip 和 Brotli 压缩的版本分别喂 190.2KB 和 46.2KB

这个听起来可能是很庞大，但是这是由设计确定的。

为了使开发体验尽可能高效，Tailwind 为您生成了数以千计的实用类，其中大多数您可能实际上并不会使用。

例如，Tailwind 支持了不同种类的大小，间距，甚至是不同的样式断点。这导致了数百种不同的组合，这些组合都是可用的，但不是所有都可能需要。

当项目构建的时候， 你可以选择使用 Tailwind 的 `purge` 选项来进行 `tree-shake` 来减少你最终构建项目的大小。当 Tailwind 删除未使用的样式后，一般都不会超过 10KB (压缩后)

## 编写可清除的 HTML

在开始使用 `purge` 之前，了解它的工作原理并构建正确的心智模型是非常重要的，以确保在为生产构建时不会意外地移除重要的样式。

[PurgeCSS](https://purgecss.com/) (我们在引擎中使用的库) 会查找 HTML 中的 classes。它不会尝试解析你的 HTML，寻找类属性或者动态执行你的 JavaScript，它只是在整个文件中寻找任何与这个正则表达式匹配的字符串:

```
/[^<>"'`\s]*[^<>"'`\s:]/g
```

这意味着避免 **在代码中避免动态字符串拼接创建 classes 这点非常重要**，否则 PurgeCSS 不会知道保留这些 classes。

不要使用字符串连接来创建 class 名：

```
<div :class="text-{{ error ? 'red' : 'green' }}-600"></div>
```

动态地选择一个完整的 class 名：

```
<div :class="{{ error ? 'text-red-600' : 'text-green-600' }}"></div>
```

只要类名完全出现在模板中，PurgeCSS 就不会删除它。

## 删除未使用的 CSS

首先，使用 `purge` 选项为所有模板文件提供一个路径数组:

```
// tailwind.config.js
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  theme: {},
  variants: {},
  plugins: [],
}
```

**此列表应包括项目中按名称引用任何样式的任何文件**。例如，如果您的项目中有一个 JS 文件可以动态切换 HTML 中的某些类，那么您应该确保将该文件包含在这个列表中。

现在，无论何时你使用 `NODE_ENV` 编译 CSS 到生产环境，Tailwind 会自动从 CSS 中清除未使用的样式。

更多 `purge` 配置可以查看[官方文档](https://tailwindcss.com/docs/controlling-file-size#enabling-manually)
