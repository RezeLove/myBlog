import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,a as n,b as s,e as t,f as p}from"./app-10be0e5b.js";const i={},u=n("h2",{id:"题目链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目链接","aria-hidden":"true"},"#"),s(" 题目链接")],-1),r={href:"https://leetcode.cn/problems/word-break/",target:"_blank",rel:"noopener noreferrer"},k=p(`<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><ol><li>背包法</li></ol><p>将字符串的长度当作背包的容积与物体的重量</p><ul><li>dp[i]长度为 i 的字符串能否拆分</li><li>递推公式：如果确定 dp[j] 是 true，且 [j, i] 这个区间的子串出现在字典里，那么 dp[i]一定是 true</li></ul><ol start="2"><li>回溯法</li></ol><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2><blockquote><p>背包法</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">wordBreak</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> wordDict</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token comment">// 排列问题+多重背包 先遍历背包</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> wordDict<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> word <span class="token operator">=</span> wordDict<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">&gt;=</span> word<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 1. 判断选这个单词之前是否为true  2. [j, i] 这个区间的子串是否出现在字典里</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>dp<span class="token punctuation">[</span>j <span class="token operator">-</span> word<span class="token punctuation">.</span>length<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>j <span class="token operator">-</span> word<span class="token punctuation">.</span>length<span class="token punctuation">,</span> j<span class="token punctuation">)</span> <span class="token operator">==</span> word<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> dp<span class="token punctuation">[</span>s<span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>回溯法</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">wordBreak</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> wordDict</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> wordset <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>wordDict<span class="token punctuation">)</span><span class="token punctuation">,</span>
    len <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">backTrack</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">startIndex</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 说明已经将s遍历完了</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>startIndex <span class="token operator">&gt;=</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> startIndex<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> word <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>startIndex<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 只有当前字符串在set中，且剩余字符串回溯结果为true时，才可以返回true</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>wordset<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">backTrack</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token function">backTrack</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>回溯+记忆优化</p></blockquote>`,11),d={href:"https://leetcode.cn/problems/word-break/solutions/302779/shou-hui-tu-jie-san-chong-fang-fa-dfs-bfs-dong-tai/",target:"_blank",rel:"noopener noreferrer"},v=p(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">wordBreak</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> wordDict</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> wordset <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>wordDict<span class="token punctuation">)</span><span class="token punctuation">,</span>
    len <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
    <span class="token comment">// 记忆化 长度和原数组一样 保存的是从第i个元素开始的字符串能否</span>
    memo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>len<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">backTrack</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">startIndex</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>startIndex <span class="token operator">&gt;=</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>memo<span class="token punctuation">[</span>startIndex<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token keyword">return</span> memo<span class="token punctuation">[</span>startIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> startIndex<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> word <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>startIndex<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>wordset<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">backTrack</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// memo[start] = true</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    memo<span class="token punctuation">[</span>startIndex<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token function">backTrack</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function m(b,w){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,n("p",null,[n("a",r,[s("单词拆分"),t(a)])]),k,n("p",null,[s("由于回溯过程中会产生大量的重复计算，因此可加入记忆化 "),n("a",d,[s("图解"),t(a)])]),v])}const y=e(i,[["render",m],["__file","17.单词拆分.html.vue"]]);export{y as default};
