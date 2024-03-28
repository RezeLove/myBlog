const n=JSON.parse('{"key":"v-6f1e3b9e","path":"/%E5%89%8D%E7%AB%AF%E7%AC%94%E8%AE%B0/js/8.html","title":"手写apply","lang":"zh-CN","frontmatter":{"title":"手写apply","order":9,"category":["面试","ES6"],"description":"实现 apply 和 call 的原理相同，只是传参的方式有所不同，apply 传入的参数是数组形式 // 入参的方式不同 Function.prototype.apply1 = function (context, args) { context = context || window; // 给传入的对象添加属性，值为当前函数 const fn = Symbol(); context[fn] = this; // 判断第二个参数是否存在，不存在直接执行，否则拼接参数执行，并存储函数执行结果 let res = args.length === 0 ? context[fn]() : context[fn]([...arguments].slice(1)); // 删除新增属性 delete context.fn; // 返回函数执行结果 return res; };","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E5%89%8D%E7%AB%AF%E7%AC%94%E8%AE%B0/js/8.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"手写apply"}],["meta",{"property":"og:description","content":"实现 apply 和 call 的原理相同，只是传参的方式有所不同，apply 传入的参数是数组形式 // 入参的方式不同 Function.prototype.apply1 = function (context, args) { context = context || window; // 给传入的对象添加属性，值为当前函数 const fn = Symbol(); context[fn] = this; // 判断第二个参数是否存在，不存在直接执行，否则拼接参数执行，并存储函数执行结果 let res = args.length === 0 ? context[fn]() : context[fn]([...arguments].slice(1)); // 删除新增属性 delete context.fn; // 返回函数执行结果 return res; };"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-27T14:41:46.000Z"}],["meta",{"property":"article:author","content":"TX"}],["meta",{"property":"article:modified_time","content":"2024-03-27T14:41:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"手写apply\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-27T14:41:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"TX\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"实现","slug":"实现","link":"#实现","children":[]}],"git":{"createdTime":1705824349000,"updatedTime":1711550506000,"contributors":[{"name":"RezeLove","email":"1224745953@qq.com","commits":3},{"name":"‘TX7’","email":"‘1224745953@qq.com’","commits":1}]},"readingTime":{"minutes":0.49,"words":148},"filePathRelative":"前端笔记/js/8.md","localizedDate":"2024年1月21日","excerpt":"<h2> 实现</h2>\\n<p>apply 和 call 的原理相同，只是传参的方式有所不同，apply 传入的参数是数组形式</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token comment\\">// 入参的方式不同</span>\\n<span class=\\"token class-name\\">Function</span><span class=\\"token punctuation\\">.</span>prototype<span class=\\"token punctuation\\">.</span><span class=\\"token function-variable function\\">apply1</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">context<span class=\\"token punctuation\\">,</span> args</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  context <span class=\\"token operator\\">=</span> context <span class=\\"token operator\\">||</span> window<span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token comment\\">// 给传入的对象添加属性，值为当前函数</span>\\n  <span class=\\"token keyword\\">const</span> fn <span class=\\"token operator\\">=</span> <span class=\\"token function\\">Symbol</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  context<span class=\\"token punctuation\\">[</span>fn<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token comment\\">// 判断第二个参数是否存在，不存在直接执行，否则拼接参数执行，并存储函数执行结果</span>\\n  <span class=\\"token keyword\\">let</span> res <span class=\\"token operator\\">=</span>\\n    args<span class=\\"token punctuation\\">.</span>length <span class=\\"token operator\\">===</span> <span class=\\"token number\\">0</span> <span class=\\"token operator\\">?</span> context<span class=\\"token punctuation\\">[</span>fn<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">:</span> context<span class=\\"token punctuation\\">[</span>fn<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token operator\\">...</span>arguments<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">slice</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token comment\\">// 删除新增属性</span>\\n  <span class=\\"token keyword\\">delete</span> context<span class=\\"token punctuation\\">.</span>fn<span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token comment\\">// 返回函数执行结果</span>\\n  <span class=\\"token keyword\\">return</span> res<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
