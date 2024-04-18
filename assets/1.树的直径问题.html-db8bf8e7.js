import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,a as n,b as s,e as t,f as p}from"./app-e6c0a0b6.js";const i={},u=n("h2",{id:"二叉树的直径",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#二叉树的直径","aria-hidden":"true"},"#"),s(" 二叉树的直径")],-1),r={href:"https://leetcode.cn/problems/diameter-of-binary-tree/",target:"_blank",rel:"noopener noreferrer"},k=p(`<p>思路：转化为最大深度的问题，不同之处在于，最长的链可能不经过根节点，在遍历每个节点时，都要计算一次把这个节点当作拐点时的链长度去更新答案</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">diameterOfBinaryTree</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> ans <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token comment">// 本质上还是求最大深度,只是对于每个节点，都需要计算以它为转折点的链的长度</span>
  <span class="token keyword">const</span> <span class="token function-variable function">getDepth</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 这里返回-1，叶子节点的最大深度就是0了</span>
      <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 左最大长度</span>
    <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token function">getDepth</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token function">getDepth</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 用当前节点的链去更新ans</span>
    ans <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>ans<span class="token punctuation">,</span> left <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token punctuation">(</span>right <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 返回当前节点的最大深度</span>
    <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> right <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token function">getDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二叉树中的最大路径和" tabindex="-1"><a class="header-anchor" href="#二叉树中的最大路径和" aria-hidden="true">#</a> 二叉树中的最大路径和</h2>`,3),d={href:"https://leetcode.cn/problems/binary-tree-maximum-path-sum/description/",target:"_blank",rel:"noopener noreferrer"},v=p(`<p>思路：与二叉树的直径的思路类似，将最大深度转化为最大和，同时如果左右子树的路径和小于 0，就将其化为 0，不加进来</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">maxPathSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> ans <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">Infinity</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">getValue</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token function">getValue</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token function">getValue</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 如果左右子树的路径和小于0, 化为0</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> right <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">// 加上当前节点的val</span>
    ans <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>ans<span class="token punctuation">,</span> left <span class="token operator">+</span> right <span class="token operator">+</span> node<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 返回当前节点的最大和</span>
    <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>left <span class="token operator">+</span> node<span class="token punctuation">.</span>val<span class="token punctuation">,</span> right <span class="token operator">+</span> node<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token function">getValue</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function m(b,f){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,n("p",null,[n("a",r,[s("二叉树的直径"),t(a)])]),k,n("p",null,[n("a",d,[s("二叉树中的最大路径和"),t(a)])]),v])}const g=e(i,[["render",m],["__file","1.树的直径问题.html.vue"]]);export{g as default};
