const n=JSON.parse('{"key":"v-716a55b2","path":"/%E7%AE%97%E6%B3%95%E9%A2%98/%E8%B4%AA%E5%BF%83%E7%AE%97%E6%B3%95/4.%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BA2.html","title":"买卖股票的最佳时机","lang":"zh-CN","frontmatter":{"title":"买卖股票的最佳时机","order":4,"category":["算法题","贪心算法"],"description":"题目链接 买卖股票的最佳时机 思路 贪心：利润时可以分解的,比如[1,5,13] 13-1=(13-5)+(5-1)；因此可以把利润拆成天维度的，如果今天的股价比昨天高，就出售 注意：这题是在每一天都可以购入购出，如果只能一天购入、另一天购出，那么此方法不受用 实现 var maxProfit = function (prices) { let profit = 0; for (let i = 0; i &lt; prices.length - 1; i++) { curdiff = prices[i + 1] - prices[i]; if (curdiff &gt; 0) { profit += curdiff; } } return profit; };","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E7%AE%97%E6%B3%95%E9%A2%98/%E8%B4%AA%E5%BF%83%E7%AE%97%E6%B3%95/4.%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BA2.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"买卖股票的最佳时机"}],["meta",{"property":"og:description","content":"题目链接 买卖股票的最佳时机 思路 贪心：利润时可以分解的,比如[1,5,13] 13-1=(13-5)+(5-1)；因此可以把利润拆成天维度的，如果今天的股价比昨天高，就出售 注意：这题是在每一天都可以购入购出，如果只能一天购入、另一天购出，那么此方法不受用 实现 var maxProfit = function (prices) { let profit = 0; for (let i = 0; i &lt; prices.length - 1; i++) { curdiff = prices[i + 1] - prices[i]; if (curdiff &gt; 0) { profit += curdiff; } } return profit; };"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-21T08:05:49.000Z"}],["meta",{"property":"article:author","content":"TX"}],["meta",{"property":"article:modified_time","content":"2024-01-21T08:05:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"买卖股票的最佳时机\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-21T08:05:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"TX\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"题目链接","slug":"题目链接","link":"#题目链接","children":[]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"实现","slug":"实现","link":"#实现","children":[]}],"git":{"createdTime":1705824349000,"updatedTime":1705824349000,"contributors":[{"name":"RezeLove","email":"1224745953@qq.com","commits":1}]},"readingTime":{"minutes":0.53,"words":160},"filePathRelative":"算法题/贪心算法/4.买卖股票的最佳时机2.md","localizedDate":"2024年1月21日","excerpt":"<h2> 题目链接</h2>\\n<p><a href=\\"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">买卖股票的最佳时机</a></p>\\n<h2> 思路</h2>\\n<p>贪心：利润时可以分解的,比如[1,5,13] 13-1=(13-5)+(5-1)；因此可以把利润拆成天维度的，如果今天的股价比昨天高，就出售\\n注意：这题是在每一天都可以购入购出，如果只能一天购入、另一天购出，那么此方法不受用</p>\\n<h2> 实现</h2>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">var</span> <span class=\\"token function-variable function\\">maxProfit</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">prices</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">let</span> profit <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">let</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;</span> prices<span class=\\"token punctuation\\">.</span>length <span class=\\"token operator\\">-</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    curdiff <span class=\\"token operator\\">=</span> prices<span class=\\"token punctuation\\">[</span>i <span class=\\"token operator\\">+</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">-</span> prices<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>curdiff <span class=\\"token operator\\">&gt;</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      profit <span class=\\"token operator\\">+=</span> curdiff<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token keyword\\">return</span> profit<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
