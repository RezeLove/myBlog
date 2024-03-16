const n=JSON.parse('{"key":"v-ec0d50ce","path":"/%E7%AE%97%E6%B3%95%E9%A2%98/%E6%95%B0%E7%BB%84/3.html","title":"滑动窗口","lang":"zh-CN","frontmatter":{"title":"滑动窗口","order":3,"category":["算法题"],"description":"题目链接 题目链接 滑动窗口 本质上也是一个双指针，适用于寻找连续的数组 实现 Infinity 的用法， Math.min 比较最小值 var minSubArrayLen = function (target, nums) { let start, end; start = end = 0; let sum = 0; let len = nums.length; //Infinity表达无穷大，这里用于标识是否找到了满足条件的数组 let ans = Infinity; while (end &lt; len) { sum += nums[end]; while (sum &gt;= target) { // 比较当前找到的数组长度是否是最小的 ans = Math.min(ans, end - start + 1); sum -= nums[start]; start++; } end++; } return ans === Infinity ? 0 : ans; };","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E7%AE%97%E6%B3%95%E9%A2%98/%E6%95%B0%E7%BB%84/3.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"滑动窗口"}],["meta",{"property":"og:description","content":"题目链接 题目链接 滑动窗口 本质上也是一个双指针，适用于寻找连续的数组 实现 Infinity 的用法， Math.min 比较最小值 var minSubArrayLen = function (target, nums) { let start, end; start = end = 0; let sum = 0; let len = nums.length; //Infinity表达无穷大，这里用于标识是否找到了满足条件的数组 let ans = Infinity; while (end &lt; len) { sum += nums[end]; while (sum &gt;= target) { // 比较当前找到的数组长度是否是最小的 ans = Math.min(ans, end - start + 1); sum -= nums[start]; start++; } end++; } return ans === Infinity ? 0 : ans; };"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-21T08:05:49.000Z"}],["meta",{"property":"article:author","content":"TX"}],["meta",{"property":"article:modified_time","content":"2024-01-21T08:05:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"滑动窗口\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-21T08:05:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"TX\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"题目链接","slug":"题目链接","link":"#题目链接","children":[]},{"level":2,"title":"滑动窗口","slug":"滑动窗口","link":"#滑动窗口","children":[]},{"level":2,"title":"实现","slug":"实现","link":"#实现","children":[]},{"level":2,"title":"相关题目","slug":"相关题目","link":"#相关题目","children":[]}],"git":{"createdTime":1705824349000,"updatedTime":1705824349000,"contributors":[{"name":"RezeLove","email":"1224745953@qq.com","commits":1}]},"readingTime":{"minutes":0.87,"words":262},"filePathRelative":"算法题/数组/3.md","localizedDate":"2024年1月21日","excerpt":"<h2> 题目链接</h2>\\n<p><a href=\\"https://leetcode.cn/problems/minimum-size-subarray-sum/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">题目链接</a></p>\\n<h2> 滑动窗口</h2>\\n<p>本质上也是一个双指针，适用于寻找连续的数组</p>\\n<h2> 实现</h2>\\n<ul>\\n<li>Infinity 的用法，</li>\\n<li>Math.min 比较最小值</li>\\n</ul>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">var</span> <span class=\\"token function-variable function\\">minSubArrayLen</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">target<span class=\\"token punctuation\\">,</span> nums</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">let</span> start<span class=\\"token punctuation\\">,</span> end<span class=\\"token punctuation\\">;</span>\\n  start <span class=\\"token operator\\">=</span> end <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">let</span> sum <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">let</span> len <span class=\\"token operator\\">=</span> nums<span class=\\"token punctuation\\">.</span>length<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token comment\\">//Infinity表达无穷大，这里用于标识是否找到了满足条件的数组</span>\\n  <span class=\\"token keyword\\">let</span> ans <span class=\\"token operator\\">=</span> <span class=\\"token number\\">Infinity</span><span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span>end <span class=\\"token operator\\">&lt;</span> len<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    sum <span class=\\"token operator\\">+=</span> nums<span class=\\"token punctuation\\">[</span>end<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span>sum <span class=\\"token operator\\">&gt;=</span> target<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token comment\\">// 比较当前找到的数组长度是否是最小的</span>\\n      ans <span class=\\"token operator\\">=</span> Math<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">min</span><span class=\\"token punctuation\\">(</span>ans<span class=\\"token punctuation\\">,</span> end <span class=\\"token operator\\">-</span> start <span class=\\"token operator\\">+</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n      sum <span class=\\"token operator\\">-=</span> nums<span class=\\"token punctuation\\">[</span>start<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n      start<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    end<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token keyword\\">return</span> ans <span class=\\"token operator\\">===</span> <span class=\\"token number\\">Infinity</span> <span class=\\"token operator\\">?</span> <span class=\\"token number\\">0</span> <span class=\\"token operator\\">:</span> ans<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};