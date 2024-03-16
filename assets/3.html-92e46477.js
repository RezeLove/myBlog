const n=JSON.parse('{"key":"v-72cf50a8","path":"/vue-learn/%E5%93%8D%E5%BA%94%E5%BC%8F/3.html","title":"三、vue2的响应性核心Object.defineProperty","lang":"zh-CN","frontmatter":{"title":"三、vue2的响应性核心Object.defineProperty","icon":"laptop-code","order":3,"category":["使用指南"],"description":"https://juejin.cn/post/7084200479005081608 数据劫持 核心：Object.defineProperty https://juejin.cn/post/6995071499098914824 定义 Observer 对 data 进行递归，确保每个嵌套属性都会被劫持 function Observer(data) { // 用于深度监听时的判断，如果不是对象和空值，就不继续向下执行 if (typeof data !== \\"object\\" || data === null) { return data; } Object.keys(data).forEach((key) =&gt; { // 如果是数组，重写数组原型的方法 if (Array.isArray(data[key])) { Object.setPrototypeOf(data[key], newArrayProtype); } //当data里的数据是对象时，再次调用Observer对其进行遍历，确保每个属性都被劫持 (数组也是对象类型) if (typeof data[key] === \\"object\\") { Observer(data[key]); } else { defineReactive(data, key, data[key]); } }); }","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/vue-learn/%E5%93%8D%E5%BA%94%E5%BC%8F/3.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"三、vue2的响应性核心Object.defineProperty"}],["meta",{"property":"og:description","content":"https://juejin.cn/post/7084200479005081608 数据劫持 核心：Object.defineProperty https://juejin.cn/post/6995071499098914824 定义 Observer 对 data 进行递归，确保每个嵌套属性都会被劫持 function Observer(data) { // 用于深度监听时的判断，如果不是对象和空值，就不继续向下执行 if (typeof data !== \\"object\\" || data === null) { return data; } Object.keys(data).forEach((key) =&gt; { // 如果是数组，重写数组原型的方法 if (Array.isArray(data[key])) { Object.setPrototypeOf(data[key], newArrayProtype); } //当data里的数据是对象时，再次调用Observer对其进行遍历，确保每个属性都被劫持 (数组也是对象类型) if (typeof data[key] === \\"object\\") { Observer(data[key]); } else { defineReactive(data, key, data[key]); } }); }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-21T08:05:49.000Z"}],["meta",{"property":"article:author","content":"TX"}],["meta",{"property":"article:modified_time","content":"2024-01-21T08:05:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"三、vue2的响应性核心Object.defineProperty\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-21T08:05:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"TX\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"数据劫持","slug":"数据劫持","link":"#数据劫持","children":[]},{"level":2,"title":"缺点","slug":"缺点","link":"#缺点","children":[]}],"git":{"createdTime":1705824349000,"updatedTime":1705824349000,"contributors":[{"name":"RezeLove","email":"1224745953@qq.com","commits":1}]},"readingTime":{"minutes":1.75,"words":524},"filePathRelative":"vue-learn/响应式/3.md","localizedDate":"2024年1月21日","excerpt":"<p>https://juejin.cn/post/7084200479005081608</p>\\n<h2> 数据劫持</h2>\\n<p>核心：<code>Object.defineProperty</code>\\nhttps://juejin.cn/post/6995071499098914824</p>\\n<ol>\\n<li>定义 Observer 对 data 进行递归，确保每个嵌套属性都会被劫持</li>\\n</ol>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">function</span> <span class=\\"token function\\">Observer</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">data</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token comment\\">// 用于深度监听时的判断，如果不是对象和空值，就不继续向下执行</span>\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">typeof</span> data <span class=\\"token operator\\">!==</span> <span class=\\"token string\\">\\"object\\"</span> <span class=\\"token operator\\">||</span> data <span class=\\"token operator\\">===</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">return</span> data<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n\\n  Object<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">keys</span><span class=\\"token punctuation\\">(</span>data<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">forEach</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">key</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">// 如果是数组，重写数组原型的方法</span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>Array<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">isArray</span><span class=\\"token punctuation\\">(</span>data<span class=\\"token punctuation\\">[</span>key<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      Object<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">setPrototypeOf</span><span class=\\"token punctuation\\">(</span>data<span class=\\"token punctuation\\">[</span>key<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> newArrayProtype<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token comment\\">//当data里的数据是对象时，再次调用Observer对其进行遍历，确保每个属性都被劫持 (数组也是对象类型)</span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">typeof</span> data<span class=\\"token punctuation\\">[</span>key<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">===</span> <span class=\\"token string\\">\\"object\\"</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token function\\">Observer</span><span class=\\"token punctuation\\">(</span>data<span class=\\"token punctuation\\">[</span>key<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token function\\">defineReactive</span><span class=\\"token punctuation\\">(</span>data<span class=\\"token punctuation\\">,</span> key<span class=\\"token punctuation\\">,</span> data<span class=\\"token punctuation\\">[</span>key<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
