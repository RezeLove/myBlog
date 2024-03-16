const n=JSON.parse('{"key":"v-f16353a6","path":"/vue-learn/%E8%BF%90%E8%A1%8C%E6%97%B6/2.diff%E7%AE%97%E6%B3%95/4.html","title":"四、简单diff算法","lang":"zh-CN","frontmatter":{"title":"四、简单diff算法","icon":"laptop-code","order":4,"category":["使用指南"],"description":"减少 DOM 操作的方法 当遇到新旧虚拟节点都存在一组子节点时，最简单的方式是先卸载旧节点，再卸载新节点，但这种方式存在大量的 DOM 操作，性能开销极大 因此可以采用下面的方法一定程度减少性能开销： 比较新旧子节点长度，找到最短的长度 根据这个长度遍历新旧子节点，进行 patch 如果新子节点更长，则将剩余的挂载上去；如果旧节点更长，将剩余的卸载 DOM 复用-key 的使用 // oldchildren [ { type: \\"p\\" }, { type: \\"div\\" }, { type: \\"span\\", }, ]; // newchildren [ { type: \\"span\\", }, { type: \\"p\\" }, { type: \\"div\\" }, ];","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/vue-learn/%E8%BF%90%E8%A1%8C%E6%97%B6/2.diff%E7%AE%97%E6%B3%95/4.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"四、简单diff算法"}],["meta",{"property":"og:description","content":"减少 DOM 操作的方法 当遇到新旧虚拟节点都存在一组子节点时，最简单的方式是先卸载旧节点，再卸载新节点，但这种方式存在大量的 DOM 操作，性能开销极大 因此可以采用下面的方法一定程度减少性能开销： 比较新旧子节点长度，找到最短的长度 根据这个长度遍历新旧子节点，进行 patch 如果新子节点更长，则将剩余的挂载上去；如果旧节点更长，将剩余的卸载 DOM 复用-key 的使用 // oldchildren [ { type: \\"p\\" }, { type: \\"div\\" }, { type: \\"span\\", }, ]; // newchildren [ { type: \\"span\\", }, { type: \\"p\\" }, { type: \\"div\\" }, ];"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-21T08:05:49.000Z"}],["meta",{"property":"article:author","content":"TX"}],["meta",{"property":"article:modified_time","content":"2024-01-21T08:05:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"四、简单diff算法\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-21T08:05:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"TX\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"减少 DOM 操作的方法","slug":"减少-dom-操作的方法","link":"#减少-dom-操作的方法","children":[]},{"level":2,"title":"DOM 复用-key 的使用","slug":"dom-复用-key-的使用","link":"#dom-复用-key-的使用","children":[]},{"level":2,"title":"简单 diff 算法-找到需要移动的元素","slug":"简单-diff-算法-找到需要移动的元素","link":"#简单-diff-算法-找到需要移动的元素","children":[]},{"level":2,"title":"简单 diff 算法-移动元素","slug":"简单-diff-算法-移动元素","link":"#简单-diff-算法-移动元素","children":[]},{"level":2,"title":"简单 diff 算法-添加新元素","slug":"简单-diff-算法-添加新元素","link":"#简单-diff-算法-添加新元素","children":[]},{"level":2,"title":"简单 diff 算法-移除不存在的元素","slug":"简单-diff-算法-移除不存在的元素","link":"#简单-diff-算法-移除不存在的元素","children":[]}],"git":{"createdTime":1705824349000,"updatedTime":1705824349000,"contributors":[{"name":"RezeLove","email":"1224745953@qq.com","commits":1}]},"readingTime":{"minutes":3.71,"words":1114},"filePathRelative":"vue-learn/运行时/2.diff算法/4.md","localizedDate":"2024年1月21日","excerpt":"<h2> 减少 DOM 操作的方法</h2>\\n<p>当遇到新旧虚拟节点都存在一组子节点时，最简单的方式是先卸载旧节点，再卸载新节点，但这种方式存在大量的 DOM 操作，性能开销极大\\n因此可以采用下面的方法一定程度减少性能开销：</p>\\n<ol>\\n<li>比较新旧子节点长度，找到最短的长度</li>\\n<li>根据这个长度遍历新旧子节点，进行 patch</li>\\n<li>如果新子节点更长，则将剩余的挂载上去；如果旧节点更长，将剩余的卸载</li>\\n</ol>\\n<h2> DOM 复用-key 的使用</h2>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token comment\\">// oldchildren</span>\\n<span class=\\"token punctuation\\">[</span>\\n  <span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">type</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"p\\"</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">type</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"div\\"</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token literal-property property\\">type</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"span\\"</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">// newchildren</span>\\n<span class=\\"token punctuation\\">[</span>\\n  <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token literal-property property\\">type</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"span\\"</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">type</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"p\\"</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">type</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"div\\"</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
