import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as p,c as o,a as n,b as s,e as c,f as l}from"./app-5162b9bc.js";const i={},u=n("h2",{id:"题目链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目链接","aria-hidden":"true"},"#"),s(" 题目链接")],-1),r={href:"https://leetcode.cn/problems/maximum-binary-tree/description/",target:"_blank",rel:"noopener noreferrer"},k=l(`<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><ol><li>找到数组中最大的元素及对应索引</li><li>将数组一分为二，左右左树和右树的数组</li><li>递归</li></ol><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">constructMaximumBinaryTree</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 递归结束条件</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 找到最大元素及索引</span>
  <span class="token keyword">let</span> max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> index <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>max<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>max<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> left <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 递归构建左树和右树</span>
  root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">constructMaximumBinaryTree</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
  root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">constructMaximumBinaryTree</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function d(m,v){const a=e("ExternalLinkIcon");return p(),o("div",null,[u,n("p",null,[n("a",r,[s("题目链接"),c(a)])]),k])}const f=t(i,[["render",d],["__file","9.html.vue"]]);export{f as default};