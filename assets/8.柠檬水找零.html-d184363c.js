const n=JSON.parse('{"key":"v-48d24a5e","path":"/%E7%AE%97%E6%B3%95%E9%A2%98/%E8%B4%AA%E5%BF%83%E7%AE%97%E6%B3%95/8.%E6%9F%A0%E6%AA%AC%E6%B0%B4%E6%89%BE%E9%9B%B6.html","title":"柠檬水找零","lang":"zh-CN","frontmatter":{"title":"柠檬水找零","order":8,"category":["算法题","贪心算法"],"description":"题目链接 柠檬水找零 思路 局部最优：如果收到 20 块优先用 10 块找零，减少 5 块的消耗 实现 var lemonadeChange = function (bills) { let five = (ten = 0); for (let i = 0; i &lt; bills.length; i++) { switch (bills[i]) { case 5: five++; break; case 10: ten++; five--; break; case 20: if (ten &gt; 0) { ten--; five--; } else { five -= 3; } break; } if (five &lt; 0 || ten &lt; 0) { return false; } } return true; };","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E7%AE%97%E6%B3%95%E9%A2%98/%E8%B4%AA%E5%BF%83%E7%AE%97%E6%B3%95/8.%E6%9F%A0%E6%AA%AC%E6%B0%B4%E6%89%BE%E9%9B%B6.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"柠檬水找零"}],["meta",{"property":"og:description","content":"题目链接 柠檬水找零 思路 局部最优：如果收到 20 块优先用 10 块找零，减少 5 块的消耗 实现 var lemonadeChange = function (bills) { let five = (ten = 0); for (let i = 0; i &lt; bills.length; i++) { switch (bills[i]) { case 5: five++; break; case 10: ten++; five--; break; case 20: if (ten &gt; 0) { ten--; five--; } else { five -= 3; } break; } if (five &lt; 0 || ten &lt; 0) { return false; } } return true; };"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-21T08:05:49.000Z"}],["meta",{"property":"article:author","content":"TX"}],["meta",{"property":"article:modified_time","content":"2024-01-21T08:05:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"柠檬水找零\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-21T08:05:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"TX\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"题目链接","slug":"题目链接","link":"#题目链接","children":[]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"实现","slug":"实现","link":"#实现","children":[]}],"git":{"createdTime":1705824349000,"updatedTime":1705824349000,"contributors":[{"name":"RezeLove","email":"1224745953@qq.com","commits":1}]},"readingTime":{"minutes":0.35,"words":104},"filePathRelative":"算法题/贪心算法/8.柠檬水找零.md","localizedDate":"2024年1月21日","excerpt":"<h2> 题目链接</h2>\\n<p><a href=\\"https://leetcode.cn/problems/lemonade-change/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">柠檬水找零</a></p>\\n<h2> 思路</h2>\\n<p>局部最优：如果收到 20 块优先用 10 块找零，减少 5 块的消耗</p>\\n<h2> 实现</h2>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">var</span> <span class=\\"token function-variable function\\">lemonadeChange</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">bills</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">let</span> five <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span>ten <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">let</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;</span> bills<span class=\\"token punctuation\\">.</span>length<span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">switch</span> <span class=\\"token punctuation\\">(</span>bills<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token keyword\\">case</span> <span class=\\"token number\\">5</span><span class=\\"token operator\\">:</span>\\n        five<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">break</span><span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token keyword\\">case</span> <span class=\\"token number\\">10</span><span class=\\"token operator\\">:</span>\\n        ten<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">;</span>\\n        five<span class=\\"token operator\\">--</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">break</span><span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token keyword\\">case</span> <span class=\\"token number\\">20</span><span class=\\"token operator\\">:</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>ten <span class=\\"token operator\\">&gt;</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n          ten<span class=\\"token operator\\">--</span><span class=\\"token punctuation\\">;</span>\\n          five<span class=\\"token operator\\">--</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token punctuation\\">{</span>\\n          five <span class=\\"token operator\\">-=</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token keyword\\">break</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>five <span class=\\"token operator\\">&lt;</span> <span class=\\"token number\\">0</span> <span class=\\"token operator\\">||</span> ten <span class=\\"token operator\\">&lt;</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token keyword\\">return</span> <span class=\\"token boolean\\">false</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token keyword\\">return</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
