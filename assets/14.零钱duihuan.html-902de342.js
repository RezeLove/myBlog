const n=JSON.parse('{"key":"v-5a00a0ba","path":"/%E7%AE%97%E6%B3%95%E9%A2%98/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/14.%E9%9B%B6%E9%92%B1duihuan.html","title":"零钱兑换","lang":"zh-CN","frontmatter":{"title":"零钱兑换","order":14,"category":["算法题","动态规划"],"description":"题目链接 [零钱兑换][https://leetcode.cn/problems/coin-change-ii/description/] 思路 完全背包 求方法数：dp[0]初始化为 1 实现 var change = function (amount, coins) { let dp = Array(amount + 1).fill(0); dp[0] = 1; for (let i = 0; i &lt; coins.length; i++) { for (let j = coins[i]; j &lt;= amount; j++) { dp[j] += dp[j - coins[i]]; } } return dp[amount]; };","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E7%AE%97%E6%B3%95%E9%A2%98/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/14.%E9%9B%B6%E9%92%B1duihuan.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"零钱兑换"}],["meta",{"property":"og:description","content":"题目链接 [零钱兑换][https://leetcode.cn/problems/coin-change-ii/description/] 思路 完全背包 求方法数：dp[0]初始化为 1 实现 var change = function (amount, coins) { let dp = Array(amount + 1).fill(0); dp[0] = 1; for (let i = 0; i &lt; coins.length; i++) { for (let j = coins[i]; j &lt;= amount; j++) { dp[j] += dp[j - coins[i]]; } } return dp[amount]; };"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-21T08:05:49.000Z"}],["meta",{"property":"article:author","content":"TX"}],["meta",{"property":"article:modified_time","content":"2024-01-21T08:05:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"零钱兑换\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-21T08:05:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"TX\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"题目链接","slug":"题目链接","link":"#题目链接","children":[]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"实现","slug":"实现","link":"#实现","children":[]}],"git":{"createdTime":1705824349000,"updatedTime":1705824349000,"contributors":[{"name":"RezeLove","email":"1224745953@qq.com","commits":1}]},"readingTime":{"minutes":0.29,"words":88},"filePathRelative":"算法题/动态规划/14.零钱duihuan.md","localizedDate":"2024年1月21日","excerpt":"<h2> 题目链接</h2>\\n<p>[零钱兑换][https://leetcode.cn/problems/coin-change-ii/description/]</p>\\n<h2> 思路</h2>\\n<ol>\\n<li>完全背包</li>\\n<li>求方法数：dp[0]初始化为 1</li>\\n</ol>\\n<h2> 实现</h2>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">var</span> <span class=\\"token function-variable function\\">change</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">amount<span class=\\"token punctuation\\">,</span> coins</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">let</span> dp <span class=\\"token operator\\">=</span> <span class=\\"token function\\">Array</span><span class=\\"token punctuation\\">(</span>amount <span class=\\"token operator\\">+</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">fill</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  dp<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">let</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;</span> coins<span class=\\"token punctuation\\">.</span>length<span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">let</span> j <span class=\\"token operator\\">=</span> coins<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span> j <span class=\\"token operator\\">&lt;=</span> amount<span class=\\"token punctuation\\">;</span> j<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      dp<span class=\\"token punctuation\\">[</span>j<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">+=</span> dp<span class=\\"token punctuation\\">[</span>j <span class=\\"token operator\\">-</span> coins<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token keyword\\">return</span> dp<span class=\\"token punctuation\\">[</span>amount<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
