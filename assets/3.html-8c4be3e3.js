const n=JSON.parse('{"key":"v-79de959a","path":"/%E7%AE%97%E6%B3%95%E9%A2%98/%E5%9B%9E%E6%BA%AF/1.%E7%BB%84%E5%90%88/3.html","title":"电话号码组合","lang":"zh-CN","frontmatter":{"title":"电话号码组合","order":3,"category":["算法题","组合","回溯"],"description":"题目链接 电话号码组合 思路 模拟多重 for 循环 实现 const map = [\\"\\", \\"\\", \\"abc\\", \\"def\\", \\"ghi\\", \\"jkl\\", \\"mno\\", \\"pqrs\\", \\"tuv\\", \\"wxyz\\"]; var letterCombinations = function (digits) { let res = []; let path = []; let k = digits.length; if (!k) { return []; } const BackTrack = (path, i) =&gt; { if (path.length === k) { res.push(path.join(\\"\\")); return; } // 注意这里循环的方式：通过i控制digtis的第几个元素 for (let char of map[digits[i]]) { path.push(char); BackTrack(path, digits, i + 1); path.pop(); } };‘ BackTrack(path, 0); return res; };","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E7%AE%97%E6%B3%95%E9%A2%98/%E5%9B%9E%E6%BA%AF/1.%E7%BB%84%E5%90%88/3.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"电话号码组合"}],["meta",{"property":"og:description","content":"题目链接 电话号码组合 思路 模拟多重 for 循环 实现 const map = [\\"\\", \\"\\", \\"abc\\", \\"def\\", \\"ghi\\", \\"jkl\\", \\"mno\\", \\"pqrs\\", \\"tuv\\", \\"wxyz\\"]; var letterCombinations = function (digits) { let res = []; let path = []; let k = digits.length; if (!k) { return []; } const BackTrack = (path, i) =&gt; { if (path.length === k) { res.push(path.join(\\"\\")); return; } // 注意这里循环的方式：通过i控制digtis的第几个元素 for (let char of map[digits[i]]) { path.push(char); BackTrack(path, digits, i + 1); path.pop(); } };‘ BackTrack(path, 0); return res; };"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-23T13:43:49.000Z"}],["meta",{"property":"article:author","content":"TX"}],["meta",{"property":"article:modified_time","content":"2024-10-23T13:43:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"电话号码组合\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-23T13:43:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"TX\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"题目链接","slug":"题目链接","link":"#题目链接","children":[]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"实现","slug":"实现","link":"#实现","children":[]}],"git":{"createdTime":1705824349000,"updatedTime":1729691029000,"contributors":[{"name":"RezeLove","email":"1224745953@qq.com","commits":1},{"name":"‘TX7’","email":"‘1224745953@qq.com’","commits":1}]},"readingTime":{"minutes":0.41,"words":122},"filePathRelative":"算法题/回溯/1.组合/3.md","localizedDate":"2024年1月21日","excerpt":"<h2> 题目链接</h2>\\n<p><a href=\\"https://leetcode.cn/problems/letter-combinations-of-a-phone-number/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">电话号码组合</a></p>\\n<h2> 思路</h2>\\n<p>模拟多重 for 循环</p>\\n<h2> 实现</h2>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">const</span> map <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"abc\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"def\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"ghi\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"jkl\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"mno\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"pqrs\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"tuv\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"wxyz\\"</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">var</span> <span class=\\"token function-variable function\\">letterCombinations</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">digits</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">let</span> res <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">let</span> path <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">let</span> k <span class=\\"token operator\\">=</span> digits<span class=\\"token punctuation\\">.</span>length<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">!</span>k<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">return</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token keyword\\">const</span> <span class=\\"token function-variable function\\">BackTrack</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">path<span class=\\"token punctuation\\">,</span> i</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>path<span class=\\"token punctuation\\">.</span>length <span class=\\"token operator\\">===</span> k<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      res<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span>path<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">join</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token keyword\\">return</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token comment\\">// 注意这里循环的方式：通过i控制digtis的第几个元素</span>\\n    <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">let</span> char <span class=\\"token keyword\\">of</span> map<span class=\\"token punctuation\\">[</span>digits<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      path<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span>char<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token function\\">BackTrack</span><span class=\\"token punctuation\\">(</span>path<span class=\\"token punctuation\\">,</span> digits<span class=\\"token punctuation\\">,</span> i <span class=\\"token operator\\">+</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n      path<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">pop</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>‘\\n  <span class=\\"token function\\">BackTrack</span><span class=\\"token punctuation\\">(</span>path<span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">return</span> res<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};