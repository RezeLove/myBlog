const n=JSON.parse('{"key":"v-6633a575","path":"/%E7%AE%97%E6%B3%95%E9%A2%98/%E6%95%B0%E7%BB%84/%E5%8F%8C%E6%8C%87%E9%92%88/%E9%A2%9C%E8%89%B2%E5%88%86%E7%B1%BB.html","title":"颜色分类","lang":"zh-CN","frontmatter":{"title":"颜色分类","order":5,"category":["算法题","双指针"],"description":"题目链接 颜色分类 思路 两个指针分别指向 0 和 1 要防止的位置，更新两个指针 实现 var sortColors = function (nums) { let left = 0, right = nums.length - 1; while (left &lt;= right &amp;&amp; nums[left] === 0) { left++; } while (right &gt;= 0 &amp;&amp; nums[right] === 2) { right--; } let i = left; while (left &lt; right &amp;&amp; i &lt;= right) { if (nums[i] === 1) { i++; } else if (nums[i] === 0) { if (i &gt; left) { [nums[i], nums[left]] = [nums[left], nums[i]]; left++; } else { // 如果指向同一个0 直接跳过 i++; left++; } } else if (nums[i] === 2) { [nums[i], nums[right]] = [nums[right], nums[i]]; right--; // 如果前一项还是2 可以继续移动 while (nums[right] === 2) right--; } } };","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E7%AE%97%E6%B3%95%E9%A2%98/%E6%95%B0%E7%BB%84/%E5%8F%8C%E6%8C%87%E9%92%88/%E9%A2%9C%E8%89%B2%E5%88%86%E7%B1%BB.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"颜色分类"}],["meta",{"property":"og:description","content":"题目链接 颜色分类 思路 两个指针分别指向 0 和 1 要防止的位置，更新两个指针 实现 var sortColors = function (nums) { let left = 0, right = nums.length - 1; while (left &lt;= right &amp;&amp; nums[left] === 0) { left++; } while (right &gt;= 0 &amp;&amp; nums[right] === 2) { right--; } let i = left; while (left &lt; right &amp;&amp; i &lt;= right) { if (nums[i] === 1) { i++; } else if (nums[i] === 0) { if (i &gt; left) { [nums[i], nums[left]] = [nums[left], nums[i]]; left++; } else { // 如果指向同一个0 直接跳过 i++; left++; } } else if (nums[i] === 2) { [nums[i], nums[right]] = [nums[right], nums[i]]; right--; // 如果前一项还是2 可以继续移动 while (nums[right] === 2) right--; } } };"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-07T13:37:50.000Z"}],["meta",{"property":"article:author","content":"TX"}],["meta",{"property":"article:modified_time","content":"2024-10-07T13:37:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"颜色分类\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-07T13:37:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"TX\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"题目链接","slug":"题目链接","link":"#题目链接","children":[]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"实现","slug":"实现","link":"#实现","children":[]}],"git":{"createdTime":1728308270000,"updatedTime":1728308270000,"contributors":[{"name":"RezeLove","email":"1224745953@qq.com","commits":1}]},"readingTime":{"minutes":0.55,"words":165},"filePathRelative":"算法题/数组/双指针/颜色分类.md","localizedDate":"2024年10月7日","excerpt":"<h2> 题目链接</h2>\\n<p><a href=\\"https://leetcode.cn/problems/sort-colors/?envType=study-plan-v2&amp;envId=top-100-liked\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">颜色分类</a></p>\\n<h2> 思路</h2>\\n<p>两个指针分别指向 0 和 1 要防止的位置，更新两个指针</p>\\n<h2> 实现</h2>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">var</span> <span class=\\"token function-variable function\\">sortColors</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">nums</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">let</span> left <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span>\\n    right <span class=\\"token operator\\">=</span> nums<span class=\\"token punctuation\\">.</span>length <span class=\\"token operator\\">-</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span>left <span class=\\"token operator\\">&lt;=</span> right <span class=\\"token operator\\">&amp;&amp;</span> nums<span class=\\"token punctuation\\">[</span>left<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">===</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    left<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span>right <span class=\\"token operator\\">&gt;=</span> <span class=\\"token number\\">0</span> <span class=\\"token operator\\">&amp;&amp;</span> nums<span class=\\"token punctuation\\">[</span>right<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">===</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    right<span class=\\"token operator\\">--</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token keyword\\">let</span> i <span class=\\"token operator\\">=</span> left<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span>left <span class=\\"token operator\\">&lt;</span> right <span class=\\"token operator\\">&amp;&amp;</span> i <span class=\\"token operator\\">&lt;=</span> right<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>nums<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">===</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>nums<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">===</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>i <span class=\\"token operator\\">&gt;</span> left<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token punctuation\\">[</span>nums<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> nums<span class=\\"token punctuation\\">[</span>left<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span>nums<span class=\\"token punctuation\\">[</span>left<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> nums<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n        left<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token comment\\">// 如果指向同一个0 直接跳过</span>\\n        i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">;</span>\\n        left<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>nums<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">===</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token punctuation\\">[</span>nums<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> nums<span class=\\"token punctuation\\">[</span>right<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span>nums<span class=\\"token punctuation\\">[</span>right<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> nums<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n      right<span class=\\"token operator\\">--</span><span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token comment\\">// 如果前一项还是2 可以继续移动</span>\\n      <span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span>nums<span class=\\"token punctuation\\">[</span>right<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">===</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">)</span> right<span class=\\"token operator\\">--</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
