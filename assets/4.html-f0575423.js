const e=JSON.parse('{"key":"v-7674e45c","path":"/%E7%AE%97%E6%B3%95%E9%A2%98/%E5%9B%9E%E6%BA%AF/1.%E7%BB%84%E5%90%88/4.html","title":"组合总和2","lang":"zh-CN","frontmatter":{"title":"组合总和2","order":4,"category":["算法题","组合","回溯"],"description":"题目链接 组合总和 2 思路 题目中要求：元素在同一个组合内是可以重复的，但不同的组合不能相同，因此需要去重；关键在于：去重要在同一层中进行，同一层中使用过的元素不能再使用 同层判断的条件：index &gt; startindex这样才能保证比较的是同一层循环里的对象 注意点： 要判断树层去重的话，需要对数组排序！然后就可以根据candidates[i] == candidates[i - 1]来判断是否重复了","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E7%AE%97%E6%B3%95%E9%A2%98/%E5%9B%9E%E6%BA%AF/1.%E7%BB%84%E5%90%88/4.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"组合总和2"}],["meta",{"property":"og:description","content":"题目链接 组合总和 2 思路 题目中要求：元素在同一个组合内是可以重复的，但不同的组合不能相同，因此需要去重；关键在于：去重要在同一层中进行，同一层中使用过的元素不能再使用 同层判断的条件：index &gt; startindex这样才能保证比较的是同一层循环里的对象 注意点： 要判断树层去重的话，需要对数组排序！然后就可以根据candidates[i] == candidates[i - 1]来判断是否重复了"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-21T08:05:49.000Z"}],["meta",{"property":"article:author","content":"TX"}],["meta",{"property":"article:modified_time","content":"2024-01-21T08:05:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"组合总和2\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-21T08:05:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"TX\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"题目链接","slug":"题目链接","link":"#题目链接","children":[]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"实现","slug":"实现","link":"#实现","children":[]}],"git":{"createdTime":1705824349000,"updatedTime":1705824349000,"contributors":[{"name":"RezeLove","email":"1224745953@qq.com","commits":1}]},"readingTime":{"minutes":1.08,"words":323},"filePathRelative":"算法题/回溯/1.组合/4.md","localizedDate":"2024年1月21日","excerpt":"<h2> 题目链接</h2>\\n<p><a href=\\"https://leetcode.cn/problems/combination-sum-ii/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">组合总和 2</a></p>\\n<h2> 思路</h2>\\n<p>题目中要求：元素在同一个组合内是可以重复的，但不同的组合不能相同，因此需要去重；关键在于：去重要在同一层中进行，同一层中使用过的元素不能再使用<br>\\n同层判断的条件：<code>index &gt; startindex</code>这样才能保证比较的是同一层循环里的对象\\n注意点：</p>\\n<ul>\\n<li>要判断树层去重的话，需要对数组排序！然后就可以根据<code>candidates[i] == candidates[i - 1]</code>来判断是否重复了</li>\\n</ul>","autoDesc":true}');export{e as data};
