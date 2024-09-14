const n=JSON.parse('{"key":"v-689bda0a","path":"/%E7%AE%97%E6%B3%95%E9%A2%98/%E4%BA%8C%E5%8F%89%E6%A0%91/17.html","title":"修剪二叉搜索树","lang":"zh-CN","frontmatter":{"title":"修剪二叉搜索树","order":17,"category":["算法题","二叉树"],"description":"题目链接 修剪二叉搜索树 思路 利用 BST 的特点，在重构过程中，如果某个节点的val&lt;low,那么跳过这个节点及其左节点，递归右节点；val&gt;high同理 实现 var trimBST = function (root, low, high) { if (root === null) return null; if (root.val &lt; low) { // 跳过当前节点，只考虑右节点 return trimBST(root.right, low, high); } if (root.val &gt; high) { // 跳过当前节点，只考虑左节点 return trimBST(root.left, low, high); } root.left = trimBST(root.left, low, high); root.right = trimBST(root.right, low, high); // 如果不有出现上面的情况，就返回当前节点 return root; };","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E7%AE%97%E6%B3%95%E9%A2%98/%E4%BA%8C%E5%8F%89%E6%A0%91/17.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"修剪二叉搜索树"}],["meta",{"property":"og:description","content":"题目链接 修剪二叉搜索树 思路 利用 BST 的特点，在重构过程中，如果某个节点的val&lt;low,那么跳过这个节点及其左节点，递归右节点；val&gt;high同理 实现 var trimBST = function (root, low, high) { if (root === null) return null; if (root.val &lt; low) { // 跳过当前节点，只考虑右节点 return trimBST(root.right, low, high); } if (root.val &gt; high) { // 跳过当前节点，只考虑左节点 return trimBST(root.left, low, high); } root.left = trimBST(root.left, low, high); root.right = trimBST(root.right, low, high); // 如果不有出现上面的情况，就返回当前节点 return root; };"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-21T08:05:49.000Z"}],["meta",{"property":"article:author","content":"TX"}],["meta",{"property":"article:modified_time","content":"2024-01-21T08:05:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"修剪二叉搜索树\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-21T08:05:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"TX\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"题目链接","slug":"题目链接","link":"#题目链接","children":[]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"实现","slug":"实现","link":"#实现","children":[]}],"git":{"createdTime":1705824349000,"updatedTime":1705824349000,"contributors":[{"name":"RezeLove","email":"1224745953@qq.com","commits":1}]},"readingTime":{"minutes":0.55,"words":166},"filePathRelative":"算法题/二叉树/17.md","localizedDate":"2024年1月21日","excerpt":"<h2> 题目链接</h2>\\n<p><a href=\\"https://leetcode.cn/problems/trim-a-binary-search-tree/description/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">修剪二叉搜索树</a></p>\\n<h2> 思路</h2>\\n<p>利用 BST 的特点，在重构过程中，如果某个节点的<code>val&lt;low</code>,那么跳过这个节点及其左节点，递归右节点；<code>val&gt;high</code>同理</p>\\n<h2> 实现</h2>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">var</span> <span class=\\"token function-variable function\\">trimBST</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">root<span class=\\"token punctuation\\">,</span> low<span class=\\"token punctuation\\">,</span> high</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>root <span class=\\"token operator\\">===</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">return</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>root<span class=\\"token punctuation\\">.</span>val <span class=\\"token operator\\">&lt;</span> low<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">// 跳过当前节点，只考虑右节点</span>\\n    <span class=\\"token keyword\\">return</span> <span class=\\"token function\\">trimBST</span><span class=\\"token punctuation\\">(</span>root<span class=\\"token punctuation\\">.</span>right<span class=\\"token punctuation\\">,</span> low<span class=\\"token punctuation\\">,</span> high<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>root<span class=\\"token punctuation\\">.</span>val <span class=\\"token operator\\">&gt;</span> high<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">// 跳过当前节点，只考虑左节点</span>\\n    <span class=\\"token keyword\\">return</span> <span class=\\"token function\\">trimBST</span><span class=\\"token punctuation\\">(</span>root<span class=\\"token punctuation\\">.</span>left<span class=\\"token punctuation\\">,</span> low<span class=\\"token punctuation\\">,</span> high<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n  root<span class=\\"token punctuation\\">.</span>left <span class=\\"token operator\\">=</span> <span class=\\"token function\\">trimBST</span><span class=\\"token punctuation\\">(</span>root<span class=\\"token punctuation\\">.</span>left<span class=\\"token punctuation\\">,</span> low<span class=\\"token punctuation\\">,</span> high<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  root<span class=\\"token punctuation\\">.</span>right <span class=\\"token operator\\">=</span> <span class=\\"token function\\">trimBST</span><span class=\\"token punctuation\\">(</span>root<span class=\\"token punctuation\\">.</span>right<span class=\\"token punctuation\\">,</span> low<span class=\\"token punctuation\\">,</span> high<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token comment\\">// 如果不有出现上面的情况，就返回当前节点</span>\\n  <span class=\\"token keyword\\">return</span> root<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};