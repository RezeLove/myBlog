import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as p,c as o,a as n,b as s,e as c,f as l}from"./app-64aa0815.js";const i="/assets/images/链表/虚拟头结点.png",u={},r=n("h2",{id:"题目链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目链接","aria-hidden":"true"},"#"),s(" 题目链接")],-1),d={href:"https://leetcode.cn/problems/remove-linked-list-elements/",target:"_blank",rel:"noopener noreferrer"},k=l('<h2 id="虚拟头结点法" tabindex="-1"><a class="header-anchor" href="#虚拟头结点法" aria-hidden="true">#</a> 虚拟头结点法</h2><p>如果直接在原来的链表中进行删除，则需要考虑当前的元素是否为头结点</p><ul><li>如果是头结点，只需将头结点向后移一位</li><li>如果不是头结点，将该结点的前一个结点的 next 设为该结点下一个结点（即跳过该结点）</li></ul><p>虚拟头结点法是将一个虚拟头结点加入圆脸表作为头结点，这样就无需分情况进行讨论</p><figure><img src="'+i+`" alt="虚拟头结点" tabindex="0" loading="lazy"><figcaption>虚拟头结点</figcaption></figure><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2><p>虚拟头结点法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">removeElements</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> faker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> temp <span class="token operator">=</span> faker<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>temp<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val <span class="token operator">===</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      temp<span class="token punctuation">.</span>next <span class="token operator">=</span> temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token keyword">continue</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    temp <span class="token operator">=</span> temp<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> faker<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原链表直接删除</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 1 删除头部结点</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>head <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> head<span class="token punctuation">.</span>val <span class="token operator">===</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 判断是否全部删完</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> head<span class="token punctuation">;</span>

<span class="token comment">// 2 删除其余结点</span>
<span class="token keyword">let</span> pre<span class="token operator">:</span> ListNode <span class="token operator">=</span> head<span class="token punctuation">,</span>
  cur<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val <span class="token operator">===</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pre<span class="token punctuation">.</span>next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">//此处不加类型断言时：编译器会认为pre类型为ListNode, pre.next类型为ListNode | null</span>
    pre <span class="token operator">=</span> pre<span class="token punctuation">.</span>next <span class="token keyword">as</span> ListNode<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">return</span> head<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h2><p>在 while 循环时，如果判断的是下一个<code>temp.next</code>,则不需要<code>pre</code>；如果判断的是当前，则需要加上<code>pre</code></p>`,12);function v(m,h){const a=t("ExternalLinkIcon");return p(),o("div",null,[r,n("p",null,[n("a",d,[s("题目链接"),c(a)])]),k])}const f=e(u,[["render",v],["__file","2.html.vue"]]);export{f as default};