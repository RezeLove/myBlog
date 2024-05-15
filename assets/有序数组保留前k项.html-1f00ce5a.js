const n=JSON.parse('{"key":"v-e0031240","path":"/%E7%AE%97%E6%B3%95%E9%A2%98/%E6%95%B0%E7%BB%84/%E5%8F%8C%E6%8C%87%E9%92%88/%E6%9C%89%E5%BA%8F%E6%95%B0%E7%BB%84%E4%BF%9D%E7%95%99%E5%89%8Dk%E9%A1%B9.html","title":"有序数组保留前k项","lang":"zh-CN","frontmatter":{"title":"有序数组保留前k项","order":3,"category":["算法题","双指针"],"description":"题目链接 题目链接 思路 利用双指针，快指针遍历数组，慢指针原地修改 实现 var removeDuplicates = function (nums) { let slow = (fast = 0); for (; fast &lt; nums.length; fast++) { // 注意:数组是有序的 if (slow &lt; 2 || nums[fast] != nums[slow - 2]) { nums[slow] = nums[fast]; slow++; } } return slow; };","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E7%AE%97%E6%B3%95%E9%A2%98/%E6%95%B0%E7%BB%84/%E5%8F%8C%E6%8C%87%E9%92%88/%E6%9C%89%E5%BA%8F%E6%95%B0%E7%BB%84%E4%BF%9D%E7%95%99%E5%89%8Dk%E9%A1%B9.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"有序数组保留前k项"}],["meta",{"property":"og:description","content":"题目链接 题目链接 思路 利用双指针，快指针遍历数组，慢指针原地修改 实现 var removeDuplicates = function (nums) { let slow = (fast = 0); for (; fast &lt; nums.length; fast++) { // 注意:数组是有序的 if (slow &lt; 2 || nums[fast] != nums[slow - 2]) { nums[slow] = nums[fast]; slow++; } } return slow; };"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-15T02:54:56.000Z"}],["meta",{"property":"article:author","content":"TX"}],["meta",{"property":"article:modified_time","content":"2024-05-15T02:54:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"有序数组保留前k项\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-15T02:54:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"TX\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"题目链接","slug":"题目链接","link":"#题目链接","children":[]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"实现","slug":"实现","link":"#实现","children":[]}],"git":{"createdTime":1715741696000,"updatedTime":1715741696000,"contributors":[{"name":"RezeLove","email":"1224745953@qq.com","commits":1}]},"readingTime":{"minutes":0.34,"words":102},"filePathRelative":"算法题/数组/双指针/有序数组保留前k项.md","localizedDate":"2024年5月15日","excerpt":"<h2> 题目链接</h2>\\n<p><a href=\\"https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii/?envType=study-plan-v2&amp;envId=top-interview-150\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">题目链接</a></p>\\n<h2> 思路</h2>\\n<p>利用双指针，快指针遍历数组，慢指针原地修改</p>\\n<h2> 实现</h2>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">var</span> <span class=\\"token function-variable function\\">removeDuplicates</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">nums</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">let</span> slow <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span>fast <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">;</span> fast <span class=\\"token operator\\">&lt;</span> nums<span class=\\"token punctuation\\">.</span>length<span class=\\"token punctuation\\">;</span> fast<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">// 注意:数组是有序的</span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>slow <span class=\\"token operator\\">&lt;</span> <span class=\\"token number\\">2</span> <span class=\\"token operator\\">||</span> nums<span class=\\"token punctuation\\">[</span>fast<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">!=</span> nums<span class=\\"token punctuation\\">[</span>slow <span class=\\"token operator\\">-</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      nums<span class=\\"token punctuation\\">[</span>slow<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> nums<span class=\\"token punctuation\\">[</span>fast<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n      slow<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token keyword\\">return</span> slow<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
