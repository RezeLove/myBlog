const n=JSON.parse('{"key":"v-06185a61","path":"/%E5%89%8D%E7%AB%AF%E7%AC%94%E8%AE%B0/js/%E6%89%8B%E5%86%99%E5%8F%91%E5%B8%83%E8%AE%A2%E9%98%85(event%20bus).html","title":"手写发布订阅/event bus","lang":"zh-CN","frontmatter":{"title":"手写发布订阅/event bus","order":19,"category":["面试","JS"],"description":"实现 on（订阅事件）和 emit（发布事件） class Eventbus { constructor() { /** * key:name value:set存放name对应的callback */ this.subscribers = {}; } $on(name, callback) { if (!this.subscribers[name]) { this.subscribers[name] = new Set(); } this.subscribers[name].add(callback); } $emit(name) { let set = this.subscribers[name]; for (let callback of set) { callback(); } } } const eventbus = new Eventbus(); eventbus.$on(\\"a\\", () =&gt; { console.log(\\"a is triggered\\"); }); eventbus.$emit(\\"a\\");","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E5%89%8D%E7%AB%AF%E7%AC%94%E8%AE%B0/js/%E6%89%8B%E5%86%99%E5%8F%91%E5%B8%83%E8%AE%A2%E9%98%85(event%20bus).html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"手写发布订阅/event bus"}],["meta",{"property":"og:description","content":"实现 on（订阅事件）和 emit（发布事件） class Eventbus { constructor() { /** * key:name value:set存放name对应的callback */ this.subscribers = {}; } $on(name, callback) { if (!this.subscribers[name]) { this.subscribers[name] = new Set(); } this.subscribers[name].add(callback); } $emit(name) { let set = this.subscribers[name]; for (let callback of set) { callback(); } } } const eventbus = new Eventbus(); eventbus.$on(\\"a\\", () =&gt; { console.log(\\"a is triggered\\"); }); eventbus.$emit(\\"a\\");"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-18T05:54:46.000Z"}],["meta",{"property":"article:author","content":"TX"}],["meta",{"property":"article:modified_time","content":"2024-04-18T05:54:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"手写发布订阅/event bus\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-18T05:54:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"TX\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"实现 on（订阅事件）和 emit（发布事件）","slug":"实现-on-订阅事件-和-emit-发布事件","link":"#实现-on-订阅事件-和-emit-发布事件","children":[]},{"level":2,"title":"实现 emit 时传参","slug":"实现-emit-时传参","link":"#实现-emit-时传参","children":[]},{"level":2,"title":"取消订阅 $off","slug":"取消订阅-off","link":"#取消订阅-off","children":[]},{"level":2,"title":"执行一次 once","slug":"执行一次-once","link":"#执行一次-once","children":[]},{"level":2,"title":"另一种实现 once 的思路：","slug":"另一种实现-once-的思路","link":"#另一种实现-once-的思路","children":[]},{"level":2,"title":"完整版","slug":"完整版","link":"#完整版","children":[]}],"git":{"createdTime":1712640373000,"updatedTime":1713419686000,"contributors":[{"name":"RezeLove","email":"1224745953@qq.com","commits":2}]},"readingTime":{"minutes":2.42,"words":726},"filePathRelative":"前端笔记/js/手写发布订阅(event bus).md","localizedDate":"2024年4月9日","excerpt":"<h2> 实现 on（订阅事件）和 emit（发布事件）</h2>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Eventbus</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token function\\">constructor</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token doc-comment comment\\">/**\\n     * key:name value:set存放name对应的callback\\n     */</span>\\n    <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>subscribers <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token function\\">$on</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">name<span class=\\"token punctuation\\">,</span> callback</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">!</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>subscribers<span class=\\"token punctuation\\">[</span>name<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>subscribers<span class=\\"token punctuation\\">[</span>name<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Set</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>subscribers<span class=\\"token punctuation\\">[</span>name<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">add</span><span class=\\"token punctuation\\">(</span>callback<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token function\\">$emit</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">name</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">let</span> set <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>subscribers<span class=\\"token punctuation\\">[</span>name<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">let</span> callback <span class=\\"token keyword\\">of</span> set<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token function\\">callback</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">const</span> eventbus <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Eventbus</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\neventbus<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">$on</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"a\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n  console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"a is triggered\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\neventbus<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">$emit</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"a\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
