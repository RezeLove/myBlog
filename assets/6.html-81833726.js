import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as e,c as o,a as n,b as a,e as c,f as l}from"./app-10be0e5b.js";const i={},u=n("h2",{id:"题目链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目链接","aria-hidden":"true"},"#"),a(" 题目链接")],-1),r={href:"https://leetcode.cn/problems/binary-tree-paths/description/",target:"_blank",rel:"noopener noreferrer"},k=l(`<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>递归思路：采用前序遍历的顺序，遇到中间节点先拼接中间节点的路径，然后再处理左右节点；当遇到叶子节点，终止递归，将最终路径存入结果中</p><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2><ol><li>递归遍历</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">binaryTreePaths</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token comment">// 1.确定递归函数参数</span>
  <span class="token keyword">const</span> <span class="token function-variable function">getPath</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> curpath</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 2.终止条件：遇到叶子节点，将path放进res中</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>left <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>right <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      curpath <span class="token operator">+=</span> root<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
      res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>curpath<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 3.单层递归:先处理中间节点的path 然后处理左右节点</span>
    curpath <span class="token operator">+=</span> root<span class="token punctuation">.</span>val <span class="token operator">+</span> <span class="token string">&quot;-&gt;&quot;</span><span class="token punctuation">;</span>
    root<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> <span class="token function">getPath</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> curpath<span class="token punctuation">)</span><span class="token punctuation">;</span>
    root<span class="token punctuation">.</span>right <span class="token operator">&amp;&amp;</span> <span class="token function">getPath</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> curpath<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token function">getPath</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function d(v,m){const s=p("ExternalLinkIcon");return e(),o("div",null,[u,n("p",null,[n("a",r,[a("题目链接"),c(s)])]),k])}const f=t(i,[["render",d],["__file","6.html.vue"]]);export{f as default};
