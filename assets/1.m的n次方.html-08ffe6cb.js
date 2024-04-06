const n=JSON.parse('{"key":"v-21abeb46","path":"/%E7%AE%97%E6%B3%95%E9%A2%98/%E9%80%92%E5%BD%92/1.m%E7%9A%84n%E6%AC%A1%E6%96%B9.html","title":"m的n次方","lang":"zh-CN","frontmatter":{"title":"m的n次方","order":1,"category":["算法题","递归"],"description":"题目要求 计算 m 的 n 次方，要求时间复杂度为 O(logn) 实现 const getExponentiation = (m, n) =&gt; { if (n === 1) { return m; } if (n % 2 == 0) { return getExponentiation(m, n / 2) ** 2; } else { return getExponentiation(m, Math.floor(n / 2)) ** 2 * m; } };","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E7%AE%97%E6%B3%95%E9%A2%98/%E9%80%92%E5%BD%92/1.m%E7%9A%84n%E6%AC%A1%E6%96%B9.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"m的n次方"}],["meta",{"property":"og:description","content":"题目要求 计算 m 的 n 次方，要求时间复杂度为 O(logn) 实现 const getExponentiation = (m, n) =&gt; { if (n === 1) { return m; } if (n % 2 == 0) { return getExponentiation(m, n / 2) ** 2; } else { return getExponentiation(m, Math.floor(n / 2)) ** 2 * m; } };"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-06T07:58:58.000Z"}],["meta",{"property":"article:author","content":"TX"}],["meta",{"property":"article:modified_time","content":"2024-04-06T07:58:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"m的n次方\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-06T07:58:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"TX\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"题目要求","slug":"题目要求","link":"#题目要求","children":[]},{"level":2,"title":"实现","slug":"实现","link":"#实现","children":[]}],"git":{"createdTime":1712390338000,"updatedTime":1712390338000,"contributors":[{"name":"RezeLove","email":"1224745953@qq.com","commits":1}]},"readingTime":{"minutes":0.23,"words":68},"filePathRelative":"算法题/递归/1.m的n次方.md","localizedDate":"2024年4月6日","excerpt":"<h2> 题目要求</h2>\\n<p>计算 m 的 n 次方，要求时间复杂度为 O(logn)</p>\\n<h2> 实现</h2>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">const</span> <span class=\\"token function-variable function\\">getExponentiation</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">m<span class=\\"token punctuation\\">,</span> n</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>n <span class=\\"token operator\\">===</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">return</span> m<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>n <span class=\\"token operator\\">%</span> <span class=\\"token number\\">2</span> <span class=\\"token operator\\">==</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">return</span> <span class=\\"token function\\">getExponentiation</span><span class=\\"token punctuation\\">(</span>m<span class=\\"token punctuation\\">,</span> n <span class=\\"token operator\\">/</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">**</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">return</span> <span class=\\"token function\\">getExponentiation</span><span class=\\"token punctuation\\">(</span>m<span class=\\"token punctuation\\">,</span> Math<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">floor</span><span class=\\"token punctuation\\">(</span>n <span class=\\"token operator\\">/</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">**</span> <span class=\\"token number\\">2</span> <span class=\\"token operator\\">*</span> m<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
