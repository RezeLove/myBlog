const n=JSON.parse('{"key":"v-7b68941e","path":"/vue-learn/%E8%BF%90%E8%A1%8C%E6%97%B6/1.%E6%B8%B2%E6%9F%93%E5%99%A8/1.html","title":"一、vue.js设计与实现阅读-渲染器","lang":"zh-CN","frontmatter":{"title":"一、vue.js设计与实现阅读-渲染器","icon":"laptop-code","order":1,"category":["使用指南"],"description":"渲染器与响应性系统结合 &lt;body&gt; &lt;div id=\\"app\\"&gt;&lt;/div&gt; &lt;/body&gt; &lt;script&gt; const { ref, effect } = Vue; const num = ref(\\"1\\"); const render = () =&gt; { document.getElementById(\\"app\\").innerText = num.value; }; effect(() =&gt; { render(); }); num.value++; &lt;/script&gt;","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/vue-learn/%E8%BF%90%E8%A1%8C%E6%97%B6/1.%E6%B8%B2%E6%9F%93%E5%99%A8/1.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"一、vue.js设计与实现阅读-渲染器"}],["meta",{"property":"og:description","content":"渲染器与响应性系统结合 &lt;body&gt; &lt;div id=\\"app\\"&gt;&lt;/div&gt; &lt;/body&gt; &lt;script&gt; const { ref, effect } = Vue; const num = ref(\\"1\\"); const render = () =&gt; { document.getElementById(\\"app\\").innerText = num.value; }; effect(() =&gt; { render(); }); num.value++; &lt;/script&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-16T10:11:12.000Z"}],["meta",{"property":"article:author","content":"TX"}],["meta",{"property":"article:modified_time","content":"2024-03-16T10:11:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"一、vue.js设计与实现阅读-渲染器\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-16T10:11:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"TX\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"渲染器与响应性系统结合","slug":"渲染器与响应性系统结合","link":"#渲染器与响应性系统结合","children":[]},{"level":2,"title":"渲染器的基本概念","slug":"渲染器的基本概念","link":"#渲染器的基本概念","children":[]},{"level":2,"title":"自定义渲染器","slug":"自定义渲染器","link":"#自定义渲染器","children":[]},{"level":2,"title":"完善自定义渲染器-挂载与更新","slug":"完善自定义渲染器-挂载与更新","link":"#完善自定义渲染器-挂载与更新","children":[{"level":3,"title":"1.挂载子节点","slug":"_1-挂载子节点","link":"#_1-挂载子节点","children":[]},{"level":3,"title":"2.处理元素属性","slug":"_2-处理元素属性","link":"#_2-处理元素属性","children":[]},{"level":3,"title":"3. 卸载操作","slug":"_3-卸载操作","link":"#_3-卸载操作","children":[]},{"level":3,"title":"4. 区分 vnode 类型","slug":"_4-区分-vnode-类型","link":"#_4-区分-vnode-类型","children":[]},{"level":3,"title":"5. 事件处理","slug":"_5-事件处理","link":"#_5-事件处理","children":[]},{"level":3,"title":"6.事件冒泡与更新时机","slug":"_6-事件冒泡与更新时机","link":"#_6-事件冒泡与更新时机","children":[]},{"level":3,"title":"7.更新子结点","slug":"_7-更新子结点","link":"#_7-更新子结点","children":[]},{"level":3,"title":"8.更多 DOM 类型","slug":"_8-更多-dom-类型","link":"#_8-更多-dom-类型","children":[]}]}],"git":{"createdTime":1705824349000,"updatedTime":1710583872000,"contributors":[{"name":"RezeLove","email":"1224745953@qq.com","commits":2}]},"readingTime":{"minutes":12.86,"words":3857},"filePathRelative":"vue-learn/运行时/1.渲染器/1.md","localizedDate":"2024年1月21日","excerpt":"<h2> 渲染器与响应性系统结合</h2>\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>body</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">id</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>app<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>body</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\n  <span class=\\"token keyword\\">const</span> <span class=\\"token punctuation\\">{</span> ref<span class=\\"token punctuation\\">,</span> effect <span class=\\"token punctuation\\">}</span> <span class=\\"token operator\\">=</span> Vue<span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token keyword\\">const</span> num <span class=\\"token operator\\">=</span> <span class=\\"token function\\">ref</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"1\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token keyword\\">const</span> <span class=\\"token function-variable function\\">render</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n    document<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getElementById</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"app\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>innerText <span class=\\"token operator\\">=</span> num<span class=\\"token punctuation\\">.</span>value<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token function\\">effect</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token function\\">render</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n  num<span class=\\"token punctuation\\">.</span>value<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">;</span>\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};