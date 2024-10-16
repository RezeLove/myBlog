import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c,a as n,b as s,e,f as l}from"./app-f3788576.js";const i={},r=n("h2",{id:"题目链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目链接","aria-hidden":"true"},"#"),s(" 题目链接")],-1),u={href:"https://leetcode.cn/problems/longest-palindromic-substring/solutions/63641/zhong-xin-kuo-san-fa-he-dong-tai-gui-hua-by-reedfa/",target:"_blank",rel:"noopener noreferrer"},k=n("h2",{id:"思路",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#思路","aria-hidden":"true"},"#"),s(" 思路")],-1),d={href:"https://leetcode.cn/problems/longest-palindromic-substring/solutions/63641/zhong-xin-kuo-san-fa-he-dong-tai-gui-hua-by-reedfa/",target:"_blank",rel:"noopener noreferrer"},m=l(`<p>从中心开始向两侧扩展，首先进行单侧的扩展（偶数的回文子串）, 然后再向双侧扩展</p><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">longestPalindrome</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> s<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> maxlen <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    maxleft <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    maxright <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 中心扩散法
   * 1. 首先向单侧扩展（偶数回文串）
   * 2. 然后向双侧扩展
   * 这种方式不用考虑奇偶
   */</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> mid <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> mid <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> mid<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> left <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span>
      right <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
      len <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token comment">// 向左扩散，找与中心字符相等的</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">===</span> s<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      left<span class="token operator">--</span><span class="token punctuation">;</span>
      len<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 向右扩散，找与中心字符相等的</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">===</span> s<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      right<span class="token operator">++</span><span class="token punctuation">;</span>
      len<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 向两侧扩散</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> right <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">===</span> s<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      left<span class="token operator">--</span><span class="token punctuation">;</span>
      right<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token comment">// 这里长度+2</span>
      len <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">&gt;</span> maxlen<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      maxlen <span class="token operator">=</span> len<span class="token punctuation">;</span>
      maxleft <span class="token operator">=</span> left<span class="token punctuation">;</span>
      maxright <span class="token operator">=</span> right<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// left是闭区间且多减去一次1, 所以是maxleft+1</span>
  <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>maxleft <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> maxright<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function v(b,h){const a=p("ExternalLinkIcon");return o(),c("div",null,[r,n("p",null,[n("a",u,[s("最大回文子串"),e(a)])]),k,n("p",null,[n("a",d,[s("题解"),e(a)])]),m])}const _=t(i,[["render",v],["__file","1.最大回文子串.html.vue"]]);export{_ as default};
