import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as e,c as o,a as n,b as s,e as c,f as u}from"./app-10be0e5b.js";const i={},l=n("h2",{id:"题目连接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目连接","aria-hidden":"true"},"#"),s(" 题目连接")],-1),r={href:"https://leetcode.cn/problems/path-sum-ii/",target:"_blank",rel:"noopener noreferrer"},k=u(`<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>注意：在传递路径时要通过深拷贝进行，否则所有的 path 指向同一个</p><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">pathSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> targetSum</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> <span class="token function-variable function">getsum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> sum<span class="token punctuation">,</span> path</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      path<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
      sum <span class="token operator">+=</span> node<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">==</span> targetSum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 深拷贝：重新赋值一个array</span>
        res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>path<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    path<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    sum <span class="token operator">+=</span> node<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
    <span class="token comment">// 这里一定要采取深拷贝，否则path会同时变化</span>
    node<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> <span class="token function">getsum</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> sum<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">...</span>path<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    node<span class="token punctuation">.</span>right <span class="token operator">&amp;&amp;</span> <span class="token function">getsum</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> sum<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">...</span>path<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token function">getsum</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function d(m,v){const a=p("ExternalLinkIcon");return e(),o("div",null,[l,n("p",null,[n("a",r,[s("路径总和"),c(a)])]),k])}const f=t(i,[["render",d],["__file","7.html.vue"]]);export{f as default};