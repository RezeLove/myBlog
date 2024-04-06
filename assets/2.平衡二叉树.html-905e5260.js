const n=JSON.parse('{"key":"v-dfe87174","path":"/%E7%AE%97%E6%B3%95%E9%A2%98/%E4%BA%8C%E5%8F%89%E6%A0%91/%E6%A0%91%E7%9A%84%E6%B7%B1%E5%BA%A6/2.%E5%B9%B3%E8%A1%A1%E4%BA%8C%E5%8F%89%E6%A0%91.html","title":"对称二叉树","lang":"zh-CN","frontmatter":{"title":"对称二叉树","order":1,"category":["算法题","二叉树"],"description":"题目链接 https://leetcode.cn/problems/balanced-binary-tree/ 思路 与上一数的最大深度类似，可以在每个子树的判断过程中，判断是否已经不平衡，如果是就传上去-1 实现 var isBalanced = function (root) { const getdepth = (root) =&gt; { if (!root) { return 0; } let left = getdepth(root.left); // 如果左子树和右子树已经不平衡了 返回-1 if (left == -1) { return -1; } let right = getdepth(root.right); // 如果右子树的高度比左子树高度大1 返回-1 if (right == -1 || Math.abs(right - left) &gt; 1) { return -1; } return Math.max(left, right) + 1; }; return getdepth(root) != -1; };","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E7%AE%97%E6%B3%95%E9%A2%98/%E4%BA%8C%E5%8F%89%E6%A0%91/%E6%A0%91%E7%9A%84%E6%B7%B1%E5%BA%A6/2.%E5%B9%B3%E8%A1%A1%E4%BA%8C%E5%8F%89%E6%A0%91.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"对称二叉树"}],["meta",{"property":"og:description","content":"题目链接 https://leetcode.cn/problems/balanced-binary-tree/ 思路 与上一数的最大深度类似，可以在每个子树的判断过程中，判断是否已经不平衡，如果是就传上去-1 实现 var isBalanced = function (root) { const getdepth = (root) =&gt; { if (!root) { return 0; } let left = getdepth(root.left); // 如果左子树和右子树已经不平衡了 返回-1 if (left == -1) { return -1; } let right = getdepth(root.right); // 如果右子树的高度比左子树高度大1 返回-1 if (right == -1 || Math.abs(right - left) &gt; 1) { return -1; } return Math.max(left, right) + 1; }; return getdepth(root) != -1; };"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-06T07:58:58.000Z"}],["meta",{"property":"article:author","content":"TX"}],["meta",{"property":"article:modified_time","content":"2024-04-06T07:58:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"对称二叉树\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-06T07:58:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"TX\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"题目链接","slug":"题目链接","link":"#题目链接","children":[]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"实现","slug":"实现","link":"#实现","children":[]}],"git":{"createdTime":1712390338000,"updatedTime":1712390338000,"contributors":[{"name":"RezeLove","email":"1224745953@qq.com","commits":1}]},"readingTime":{"minutes":0.52,"words":155},"filePathRelative":"算法题/二叉树/树的深度/2.平衡二叉树.md","localizedDate":"2024年4月6日","excerpt":"<h2> 题目链接</h2>\\n<p><a href=\\"%E5%B9%B3%E8%A1%A1%E4%BA%8C%E5%8F%89%E6%A0%91\\">https://leetcode.cn/problems/balanced-binary-tree/</a></p>\\n<h2> 思路</h2>\\n<p>与上一数的最大深度类似，可以在每个子树的判断过程中，判断是否已经不平衡，如果是就传上去-1</p>\\n<h2> 实现</h2>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">var</span> <span class=\\"token function-variable function\\">isBalanced</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">root</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">const</span> <span class=\\"token function-variable function\\">getdepth</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">root</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">!</span>root<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token keyword\\">return</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token keyword\\">let</span> left <span class=\\"token operator\\">=</span> <span class=\\"token function\\">getdepth</span><span class=\\"token punctuation\\">(</span>root<span class=\\"token punctuation\\">.</span>left<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token comment\\">// 如果左子树和右子树已经不平衡了 返回-1</span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>left <span class=\\"token operator\\">==</span> <span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token keyword\\">return</span> <span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token keyword\\">let</span> right <span class=\\"token operator\\">=</span> <span class=\\"token function\\">getdepth</span><span class=\\"token punctuation\\">(</span>root<span class=\\"token punctuation\\">.</span>right<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token comment\\">// 如果右子树的高度比左子树高度大1 返回-1</span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>right <span class=\\"token operator\\">==</span> <span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span> <span class=\\"token operator\\">||</span> Math<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">abs</span><span class=\\"token punctuation\\">(</span>right <span class=\\"token operator\\">-</span> left<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">&gt;</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token keyword\\">return</span> <span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token keyword\\">return</span> Math<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">max</span><span class=\\"token punctuation\\">(</span>left<span class=\\"token punctuation\\">,</span> right<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">+</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">return</span> <span class=\\"token function\\">getdepth</span><span class=\\"token punctuation\\">(</span>root<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">!=</span> <span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
