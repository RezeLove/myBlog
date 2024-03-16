const t=JSON.parse('{"key":"v-574a5511","path":"/vue-learn/%E8%BF%90%E8%A1%8C%E6%97%B6/3.%E7%BB%84%E4%BB%B6/1.%E7%BB%84%E4%BB%B6%E5%AE%9E%E7%8E%B0%E5%9F%BA%E6%9C%AC%E5%8E%9F%E7%90%86/10.html","title":"插槽的工作原理与实现","lang":"zh-CN","frontmatter":{"title":"插槽的工作原理与实现","icon":"laptop-code","order":4,"category":["vue","组件"],"description":"插槽的原理 子组件模版 &lt;template&gt; &lt;header&gt; &lt;!-- 插槽 --&gt; &lt;slot name=\\"header\\" /&gt; &lt;/header&gt; &lt;div&gt; &lt;!-- 插槽 --&gt; &lt;slot name=\\"body\\" /&gt; &lt;/div&gt; &lt;footer&gt; &lt;!-- 插槽 --&gt; &lt;slot name=\\"footer\\" /&gt; &lt;/footer&gt; &lt;/template&gt;","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/vue-learn/%E8%BF%90%E8%A1%8C%E6%97%B6/3.%E7%BB%84%E4%BB%B6/1.%E7%BB%84%E4%BB%B6%E5%AE%9E%E7%8E%B0%E5%9F%BA%E6%9C%AC%E5%8E%9F%E7%90%86/10.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"插槽的工作原理与实现"}],["meta",{"property":"og:description","content":"插槽的原理 子组件模版 &lt;template&gt; &lt;header&gt; &lt;!-- 插槽 --&gt; &lt;slot name=\\"header\\" /&gt; &lt;/header&gt; &lt;div&gt; &lt;!-- 插槽 --&gt; &lt;slot name=\\"body\\" /&gt; &lt;/div&gt; &lt;footer&gt; &lt;!-- 插槽 --&gt; &lt;slot name=\\"footer\\" /&gt; &lt;/footer&gt; &lt;/template&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-21T08:05:49.000Z"}],["meta",{"property":"article:author","content":"TX"}],["meta",{"property":"article:modified_time","content":"2024-01-21T08:05:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"插槽的工作原理与实现\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-21T08:05:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"TX\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"插槽的原理","slug":"插槽的原理","link":"#插槽的原理","children":[]},{"level":2,"title":"插槽的实现","slug":"插槽的实现","link":"#插槽的实现","children":[]}],"git":{"createdTime":1705824349000,"updatedTime":1705824349000,"contributors":[{"name":"RezeLove","email":"1224745953@qq.com","commits":1}]},"readingTime":{"minutes":1.11,"words":333},"filePathRelative":"vue-learn/运行时/3.组件/1.组件实现基本原理/10.md","localizedDate":"2024年1月21日","excerpt":"<h2> 插槽的原理</h2>\\n<blockquote>\\n<p>子组件模版</p>\\n</blockquote>\\n<div class=\\"language-vue line-numbers-mode\\" data-ext=\\"vue\\"><pre class=\\"language-vue\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>header</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token comment\\">&lt;!-- 插槽 --&gt;</span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>slot</span> <span class=\\"token attr-name\\">name</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>header<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token punctuation\\">/&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>header</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token comment\\">&lt;!-- 插槽 --&gt;</span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>slot</span> <span class=\\"token attr-name\\">name</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>body<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token punctuation\\">/&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>footer</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token comment\\">&lt;!-- 插槽 --&gt;</span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>slot</span> <span class=\\"token attr-name\\">name</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>footer<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token punctuation\\">/&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>footer</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};
