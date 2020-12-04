# Flex

> 控制弹性项增长和缩小的样式

| class        | 属性            |
| ------------ | --------------- |
| flex-1       | flex: 1 1 0%;   |
| flex-auto    | flex: 1 1 auto; |
| flex-initial | flex: 0 1 auto; |
| flex-none    | flex: none;     |

## Initial

使用 `flex-initial` 来允许 flex 项目缩小而不是增长，考虑到它的初始大小:

<p class="text-sm text-indigo-600">当有额外空间时，区块不会增长</p>
<div class="mt-2 flex space-x-4">
  <div class="flex-initial rounded-md bg-indigo-500 text-white font-semibold flex items-center justify-center py-3 px-6">
    Short
  </div>
  <div class="flex-initial rounded-md bg-indigo-500 text-white font-semibold flex items-center justify-center py-3 px-6">
    Medium length
  </div>
</div>

<p class="mt-8 text-sm text-indigo-600">如果需要，区块会缩小</p>
<div class="mt-2 flex space-x-4">
  <div class="flex-initial rounded-md bg-indigo-500 text-white font-semibold flex items-center justify-center py-3 px-6">
    Short
  </div>
  <div class="flex-initial rounded-md bg-indigo-500 text-white font-semibold flex items-center justify-center py-3 px-6">
    Medium length
  </div>
  <div class="flex-initial rounded-md bg-indigo-500 text-white font-semibold flex items-center justify-center py-3 px-6">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui ad labore ipsam, aut rem quo repellat esse tempore id, quidem
  </div>
</div>
