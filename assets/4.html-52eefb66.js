import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c,a as n,b as a,e,f as l}from"./app-10be0e5b.js";const i={},r=n("h2",{id:"题目链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目链接","aria-hidden":"true"},"#"),a(" 题目链接")],-1),u={href:"https://leetcode.cn/problems/reverse-linked-list/",target:"_blank",rel:"noopener noreferrer"},d=n("h2",{id:"思路",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#思路","aria-hidden":"true"},"#"),a(" 思路")],-1),k={href:"https://leetcode.cn/problems/reverse-linked-list/solutions/2361282/206-fan-zhuan-lian-biao-shuang-zhi-zhen-r1jel/",target:"_blank",rel:"noopener noreferrer"},v=l(`<p>将 原链表中的 node 一个个剥离出去，改变 next 指向，过程中需要注意不能破坏原有的链表关系</p><ul><li><p>双指针法：因为不能破坏原链表的 next 关系，因此需要用到两个变量 newhead 和 temp；newhead 建立反转链表的关系，temp 保存剩下链表的 head 位置 newhead-&gt;反转后链表的 head temp-&gt;暂时保存剩下链表部分的 head pre-&gt;用于保存上一个被剥离的 node</p></li><li><p>递归：和双指针法的思想一样，每次剥离一个 head node，并将剩下链表的 head 再次传入</p></li></ul><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2><blockquote><p>双指针法</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">reverseList</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> newhead <span class="token operator">=</span> head<span class="token punctuation">,</span>
    temp<span class="token punctuation">,</span>
    pre <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>newhead<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    temp <span class="token operator">=</span> newhead<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    newhead<span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">;</span>
    pre <span class="token operator">=</span> newhead<span class="token punctuation">;</span>
    newhead <span class="token operator">=</span> temp<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> pre<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>递归</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">reverse</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">pre<span class="token punctuation">,</span> head</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> pre<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> temp <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  head<span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">;</span>
  pre <span class="token operator">=</span> head<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token function">reverse</span><span class="token punctuation">(</span>pre<span class="token punctuation">,</span> temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token function-variable function">reverseList</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function h(m,b){const s=p("ExternalLinkIcon");return o(),c("div",null,[r,n("p",null,[n("a",u,[a("反转链表"),e(s)])]),d,n("p",null,[n("a",k,[a("图解"),e(s)])]),v])}const w=t(i,[["render",h],["__file","4.html.vue"]]);export{w as default};
