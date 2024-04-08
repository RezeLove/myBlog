const n=JSON.parse('{"key":"v-73677efc","path":"/%E7%AE%97%E6%B3%95%E9%A2%98/%E4%BA%8C%E5%8F%89%E6%A0%91/%E5%B1%82%E5%BA%8F%E9%81%8D%E5%8E%86/1.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E5%B1%82%E5%BA%8F%E9%81%8D%E5%8E%86.html","title":"二叉树的层序遍历","lang":"zh-CN","frontmatter":{"title":"二叉树的层序遍历","order":1,"category":["算法题","二叉树"],"description":"题目链接 层序遍历 思路 用一个队列，保存每一层的节点，然后再节点出队列时，检查其是否有左右节点，若有，则加入队列 实现 const res = []; const queue = []; if (root === null) { return res; } queue.push(root); // 只要队列中有元素就一直遍历下去 while (queue.length) { // 由于出队列时会加入新的元素，因此先记录下当前层共有多少节点 let length = queue.length; let curlevel = []; //遍历当前层 for (let i = 0; i &lt; length; i++) { let cur = queue.shift(); curlevel.push(cur.val); cur.left &amp;&amp; queue.push(cur.left); cur.right &amp;&amp; queue.push(cur.right); } res.push(curlevel); } return res;","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E7%AE%97%E6%B3%95%E9%A2%98/%E4%BA%8C%E5%8F%89%E6%A0%91/%E5%B1%82%E5%BA%8F%E9%81%8D%E5%8E%86/1.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E5%B1%82%E5%BA%8F%E9%81%8D%E5%8E%86.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"二叉树的层序遍历"}],["meta",{"property":"og:description","content":"题目链接 层序遍历 思路 用一个队列，保存每一层的节点，然后再节点出队列时，检查其是否有左右节点，若有，则加入队列 实现 const res = []; const queue = []; if (root === null) { return res; } queue.push(root); // 只要队列中有元素就一直遍历下去 while (queue.length) { // 由于出队列时会加入新的元素，因此先记录下当前层共有多少节点 let length = queue.length; let curlevel = []; //遍历当前层 for (let i = 0; i &lt; length; i++) { let cur = queue.shift(); curlevel.push(cur.val); cur.left &amp;&amp; queue.push(cur.left); cur.right &amp;&amp; queue.push(cur.right); } res.push(curlevel); } return res;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-08T11:11:14.000Z"}],["meta",{"property":"article:author","content":"TX"}],["meta",{"property":"article:modified_time","content":"2024-04-08T11:11:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"二叉树的层序遍历\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-08T11:11:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"TX\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"题目链接","slug":"题目链接","link":"#题目链接","children":[]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"实现","slug":"实现","link":"#实现","children":[]},{"level":2,"title":"题目链接","slug":"题目链接-1","link":"#题目链接-1","children":[]},{"level":2,"title":"思路","slug":"思路-1","link":"#思路-1","children":[]},{"level":2,"title":"题目链接","slug":"题目链接-2","link":"#题目链接-2","children":[]},{"level":2,"title":"思路","slug":"思路-2","link":"#思路-2","children":[]},{"level":2,"title":"实现","slug":"实现-1","link":"#实现-1","children":[]}],"git":{"createdTime":1712574674000,"updatedTime":1712574674000,"contributors":[{"name":"RezeLove","email":"1224745953@qq.com","commits":1}]},"readingTime":{"minutes":0.96,"words":287},"filePathRelative":"算法题/二叉树/层序遍历/1.二叉树的层序遍历.md","localizedDate":"2024年4月8日","excerpt":"<h2> 题目链接</h2>\\n<p><a href=\\"https://leetcode.cn/problems/binary-tree-level-order-traversal/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">层序遍历</a></p>\\n<h2> 思路</h2>\\n<p>用一个队列，保存每一层的节点，然后再节点出队列时，检查其是否有左右节点，若有，则加入队列</p>\\n<h2> 实现</h2>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">const</span> res <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">const</span> queue <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>root <span class=\\"token operator\\">===</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">return</span> res<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\nqueue<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span>root<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">// 只要队列中有元素就一直遍历下去</span>\\n<span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span>queue<span class=\\"token punctuation\\">.</span>length<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token comment\\">// 由于出队列时会加入新的元素，因此先记录下当前层共有多少节点</span>\\n  <span class=\\"token keyword\\">let</span> length <span class=\\"token operator\\">=</span> queue<span class=\\"token punctuation\\">.</span>length<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">let</span> curlevel <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token comment\\">//遍历当前层</span>\\n  <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">let</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;</span> length<span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">let</span> cur <span class=\\"token operator\\">=</span> queue<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">shift</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    curlevel<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span>cur<span class=\\"token punctuation\\">.</span>val<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    cur<span class=\\"token punctuation\\">.</span>left <span class=\\"token operator\\">&amp;&amp;</span> queue<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span>cur<span class=\\"token punctuation\\">.</span>left<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    cur<span class=\\"token punctuation\\">.</span>right <span class=\\"token operator\\">&amp;&amp;</span> queue<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span>cur<span class=\\"token punctuation\\">.</span>right<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n  res<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span>curlevel<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token keyword\\">return</span> res<span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
