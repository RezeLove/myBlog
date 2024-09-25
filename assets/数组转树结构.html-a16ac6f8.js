const n=JSON.parse('{"key":"v-28314556","path":"/%E5%89%8D%E7%AB%AF%E7%AC%94%E8%AE%B0/js/%E6%95%B0%E7%BB%84%E8%BD%AC%E6%A0%91%E7%BB%93%E6%9E%84.html","title":"数组转树相关问题","lang":"zh-CN","frontmatter":{"title":"数组转树相关问题","order":20,"category":["面试","JS"],"description":"数组转树 背景 在实际开发中，数组转树结构（通常称为树状结构或嵌套结构）非常常见，尤其是在处理具有层级关系的数据时，比如目录结构、组织架构、分类等。 一般来说，数组中的每个对象包含如下信息： id：节点的唯一标识符。 parentId：该节点的父节点的 ID。如果 parentId 为 null 或 undefined，表示该节点是根节点。 比如 const items = [ { id: 1, name: \\"Node 1\\", parentId: null }, { id: 2, name: \\"Node 2\\", parentId: 1 }, { id: 3, name: \\"Node 3\\", parentId: 1 }, { id: 4, name: \\"Node 4\\", parentId: 2 }, { id: 5, name: \\"Node 5\\", parentId: 3 }, ];","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E5%89%8D%E7%AB%AF%E7%AC%94%E8%AE%B0/js/%E6%95%B0%E7%BB%84%E8%BD%AC%E6%A0%91%E7%BB%93%E6%9E%84.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"数组转树相关问题"}],["meta",{"property":"og:description","content":"数组转树 背景 在实际开发中，数组转树结构（通常称为树状结构或嵌套结构）非常常见，尤其是在处理具有层级关系的数据时，比如目录结构、组织架构、分类等。 一般来说，数组中的每个对象包含如下信息： id：节点的唯一标识符。 parentId：该节点的父节点的 ID。如果 parentId 为 null 或 undefined，表示该节点是根节点。 比如 const items = [ { id: 1, name: \\"Node 1\\", parentId: null }, { id: 2, name: \\"Node 2\\", parentId: 1 }, { id: 3, name: \\"Node 3\\", parentId: 1 }, { id: 4, name: \\"Node 4\\", parentId: 2 }, { id: 5, name: \\"Node 5\\", parentId: 3 }, ];"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-25T12:29:02.000Z"}],["meta",{"property":"article:author","content":"TX"}],["meta",{"property":"article:modified_time","content":"2024-09-25T12:29:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数组转树相关问题\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-25T12:29:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"TX\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":2,"title":"实现思路","slug":"实现思路","link":"#实现思路","children":[]},{"level":2,"title":"实现","slug":"实现","link":"#实现","children":[]},{"level":2,"title":"示例数据","slug":"示例数据","link":"#示例数据","children":[]}],"git":{"createdTime":1727267342000,"updatedTime":1727267342000,"contributors":[{"name":"RezeLove","email":"1224745953@qq.com","commits":1}]},"readingTime":{"minutes":1.52,"words":456},"filePathRelative":"前端笔记/js/数组转树结构.md","localizedDate":"2024年9月25日","excerpt":"<ol>\\n<li>数组转树</li>\\n</ol>\\n<h2> 背景</h2>\\n<p>在实际开发中，数组转树结构（通常称为树状结构或嵌套结构）非常常见，尤其是在处理具有层级关系的数据时，比如目录结构、组织架构、分类等。</p>\\n<p>一般来说，数组中的每个对象包含如下信息：</p>\\n<ul>\\n<li>id：节点的唯一标识符。</li>\\n<li>parentId：该节点的父节点的 ID。如果 parentId 为 null 或 undefined，表示该节点是根节点。</li>\\n</ul>\\n<p>比如</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">const</span> items <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span>\\n  <span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">id</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">name</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"Node 1\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">parentId</span><span class=\\"token operator\\">:</span> <span class=\\"token keyword\\">null</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">id</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">name</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"Node 2\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">parentId</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">1</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">id</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">name</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"Node 3\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">parentId</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">1</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">id</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">4</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">name</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"Node 4\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">parentId</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">2</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">id</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">5</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">name</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"Node 5\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">parentId</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">3</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
