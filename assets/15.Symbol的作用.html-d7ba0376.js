import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-10be0e5b.js";const p={},o=t(`<h2 id="symbol-的特点" tabindex="-1"><a class="header-anchor" href="#symbol-的特点" aria-hidden="true">#</a> symbol 的特点</h2><ol><li><p>可以作为对象属性名,只有字符串和 symbol 类型才能用作对象属性名</p></li><li><p>没有两个 symbol 的值是相等的</p></li></ol><p>注意：symbol 是 JavaScript 原始数据类型，不能使用 new 来构造</p><h2 id="描述信息" tabindex="-1"><a class="header-anchor" href="#描述信息" aria-hidden="true">#</a> 描述信息</h2><p>Symbol()函数只有一个参数，字符串 description，用于辅助调试。需要注意的是两个具有相同 description 的 symbol 也是不相等的</p><p>如果想要一个全局的 Symbol, 则需要通过<code>Symbol.for()</code>来创建 symbol，这样会在全局注册表中进行注册，<code>Symbol.keyFor()</code>可以通过 description 查询应的 Symbol 是否在全局注册表中</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> Symbol<span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> Symbol<span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
a <span class="token operator">===</span> b<span class="token punctuation">;</span> <span class="token comment">// true</span>

<span class="token comment">// 使用Symbol(&quot;a&quot;)直接创建，所以该Symbol(&quot;a&quot;)不在全局注册表中</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> Symbol<span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
a <span class="token operator">===</span> b<span class="token punctuation">;</span> <span class="token comment">// false</span>

<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> Symbol<span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Symbol<span class="token punctuation">.</span><span class="token function">keyFor</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
Symbol<span class="token punctuation">.</span><span class="token function">keyFor</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;a&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h2><ol><li>避免命名冲突</li></ol><p>JavaScript 内置了一个 symbol, 即 ES6 中的 Symbol.iterator,拥有 Symbol.iterator 函数的对象被称为可迭代对象，就是说你可以在对象上使用 for/of 循环，详见<code>5.symbol.iterator</code></p><p>这里之所以要用 Symobl 作为属性名，是为了避免命名冲突，假设其使用字符串<code>iterator</code>作为属性名，如果用户设一个带有 <code>iterator</code> 属性的对象，则会将原来的函数覆盖</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> keys <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> keys<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">yield</span> keys<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">iterator</span><span class="token operator">:</span> <span class="token string">&quot;not a function&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>私有属性</li></ol><p>symbol 属性不会出现在<code>Object.keys()</code>,此外<code>JSON.stringify()</code>会忽略 symbol 属性名和属性值,因此可以作为一个私有属性使用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getObj</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 函数内部创建symbol 外部无法获取其对应的引用</span>
  <span class="token keyword">const</span> symbol <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  obj<span class="token punctuation">[</span>symbol<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> obj<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token function">getObj</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// []</span>
<span class="token comment">// 除非有这个 symbol 的引用，否则无法访问该属性</span>
obj<span class="token punctuation">[</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>

<span class="token comment">// 注意：symbol作为值也会被忽略</span>
<span class="token keyword">const</span> symbol <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>symbol<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">test</span><span class="token operator">:</span> symbol<span class="token punctuation">,</span> <span class="token literal-property property">test2</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//{&quot;test2&quot;:&quot;test&quot;}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),e=[o];function c(l,i){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","15.Symbol的作用.html.vue"]]);export{r as default};
