import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c,a as n,b as s,e as t,f as l}from"./app-10be0e5b.js";const i={},u=n("h2",{id:"题目链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目链接","aria-hidden":"true"},"#"),s(" 题目链接")],-1),r={href:"https://leetcode.cn/problems/sort-list/description/",target:"_blank",rel:"noopener noreferrer"},k=n("h2",{id:"思路",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#思路","aria-hidden":"true"},"#"),s(" 思路")],-1),d=n("p",null,"首先将链表不断二分，直到只剩一个二分，然后在递归出栈时合并。二分可以通过快慢指针实现，快指针一次走 2 步，慢指针一次走 1 步，当快指针达到终点或越界时，慢指针真好走到中间",-1),v=n("p",null,"在合并时，由于有 l 和 r 两个链表，可以通过一个虚拟链表，将 l 和 r 串联起来",-1),m={href:"https://leetcode.cn/problems/sort-list/solutions/493183/shou-hua-tu-jie-gui-bing-pai-xu-148-lian-biao-pai-/",target:"_blank",rel:"noopener noreferrer"},b=l(`<h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">sortList</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head <span class="token operator">||</span> <span class="token operator">!</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token keyword">return</span> head<span class="token punctuation">;</span>
  <span class="token comment">// 通过快慢指针进行二分</span>
  <span class="token keyword">let</span> slow <span class="token operator">=</span> head<span class="token punctuation">,</span>
    fast <span class="token operator">=</span> head<span class="token punctuation">;</span>
  <span class="token keyword">let</span> preSlow <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token comment">// fast.next是当fast正好达到最后一项(奇数个节点)</span>
  <span class="token comment">// fast是当fast超出长度（偶数个节点）</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    preSlow <span class="token operator">=</span> slow<span class="token punctuation">;</span>
    slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// preSlow的作用就是在slow处将节点断开</span>
  preSlow<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> l <span class="token operator">=</span> <span class="token function">sortList</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> r <span class="token operator">=</span> <span class="token function">sortList</span><span class="token punctuation">(</span>slow<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token function">merge</span><span class="token punctuation">(</span>l<span class="token punctuation">,</span> r<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">merge</span><span class="token punctuation">(</span><span class="token parameter">l1<span class="token punctuation">,</span> l2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 通过虚拟节点，将l1和l2按顺序穿起来</span>
  <span class="token keyword">const</span> dummy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> prev <span class="token operator">=</span> dummy<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>l1 <span class="token operator">&amp;&amp;</span> l2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>l1<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> l2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      prev<span class="token punctuation">.</span>next <span class="token operator">=</span> l1<span class="token punctuation">;</span>
      l1 <span class="token operator">=</span> l1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      prev<span class="token punctuation">.</span>next <span class="token operator">=</span> l2<span class="token punctuation">;</span>
      l2 <span class="token operator">=</span> l2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 现在prev在倒数第二个节点，移动到最后一个接待你</span>
    prev <span class="token operator">=</span> prev<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// l1或l2哪个剩余就放到最后</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>l1<span class="token punctuation">)</span> prev<span class="token punctuation">.</span>next <span class="token operator">=</span> l1<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>l2<span class="token punctuation">)</span> prev<span class="token punctuation">.</span>next <span class="token operator">=</span> l2<span class="token punctuation">;</span>
  <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function h(f,_){const a=p("ExternalLinkIcon");return o(),c("div",null,[u,n("p",null,[n("a",r,[s("链表排序"),t(a)])]),k,d,v,n("p",null,[n("a",m,[s("图解"),t(a)])]),b])}const y=e(i,[["render",h],["__file","1.链表排序 .html.vue"]]);export{y as default};
