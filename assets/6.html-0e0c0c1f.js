import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as p}from"./app-34ffc9bd.js";const e={},t=p(`<h2 id="相同的前置元素与后置元素" tabindex="-1"><a class="header-anchor" href="#相同的前置元素与后置元素" aria-hidden="true">#</a> 相同的前置元素与后置元素</h2><p>纯文本的 diff 算法，会对文本进行预处理，首先找到两段文本中的公共前后缀并去除，只对发生变化的区进行 diff 操作,如下面的段文字，真正需要 diff 的是 vue 和 react</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>I use vue for app development
I use react for app development
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>快速 Diff 算法借鉴了纯文本 Diff 算法中预处理，会首先找到<mark>相同的前置节点和后置节点</mark></p><h2 id="理想情况-预处理" tabindex="-1"><a class="header-anchor" href="#理想情况-预处理" aria-hidden="true">#</a> 理想情况-预处理</h2><p>首先考虑理想的情况，即新旧子节点的公共部分的顺序完全相同（无需考虑换位）<br> 找相同的前置和后置节点，并更新</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">patchKeyedChildren</span><span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 拿到两组Children节点组</span>
  <span class="token keyword">const</span> newChildren <span class="token operator">=</span> n2<span class="token punctuation">.</span>children<span class="token punctuation">;</span>
  <span class="token keyword">const</span> oldChildren <span class="token operator">=</span> n1<span class="token punctuation">.</span>children<span class="token punctuation">;</span>
  <span class="token comment">//开始找相同的前置节点</span>
  <span class="token comment">// 用j定义头索引，新旧子节点同步遍历</span>
  <span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> oldVNode <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> newVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token comment">// while 循环向后遍历，直到遇到拥有不同 key 值的节点为止</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>oldVNode<span class="token punctuation">.</span>key <span class="token operator">===</span> newVNode<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">patch</span><span class="token punctuation">(</span>oldVNode<span class="token punctuation">,</span> newVNode<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span>
    j<span class="token operator">++</span><span class="token punctuation">;</span>
    oldVNode <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
    newVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// ========================================</span>
  <span class="token comment">// 开始找相同的后置节点</span>
  <span class="token comment">// 由于尾部跟头部不同，它们可能不一样。因此需要定义各自的索引</span>
  <span class="token keyword">let</span> oldEnd <span class="token operator">=</span> oldChildren<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> newEnd <span class="token operator">=</span> newChildren<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

  oldVNode <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span>oldEnd<span class="token punctuation">]</span><span class="token punctuation">;</span>
  newVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>newEnd<span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token comment">// 开始扫描尾部</span>
  <span class="token comment">// while 循环向前遍历，直到遇到拥有不同 key 值的节点为止</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>oldVNode<span class="token punctuation">.</span>key <span class="token operator">===</span> newVNode<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">patch</span><span class="token punctuation">(</span>oldVNode<span class="token punctuation">,</span> newVNode<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span>
    oldEnd<span class="token operator">--</span><span class="token punctuation">;</span>
    newEnd<span class="token operator">--</span><span class="token punctuation">;</span>
    oldVNode <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span>oldEnd<span class="token punctuation">]</span><span class="token punctuation">;</span>
    newVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>newEnd<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在找到相同前置和后置节点后，会产生两种情况：</p><ol><li>旧子节点遍历完，新子节点还剩余，需要挂载。此时<code>j &gt; oldEnd &amp;&amp; j &lt;= newEnd</code></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">patchKeyedChildren</span><span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 拿到两组Children节点组</span>
  <span class="token keyword">const</span> newChildren <span class="token operator">=</span> n2<span class="token punctuation">.</span>children<span class="token punctuation">;</span>
  <span class="token keyword">const</span> oldChildren <span class="token operator">=</span> n1<span class="token punctuation">.</span>children<span class="token punctuation">;</span>

  <span class="token comment">// 更新相同的前置节点与后置节点</span>
  <span class="token comment">// ========================================</span>
  <span class="token comment">//挂载新元素</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">&gt;</span> oldEnd <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;=</span> newEnd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 锚点的索引（newEnd现在指向新元素，后退一位）</span>
    <span class="token keyword">const</span> anchorIndex <span class="token operator">=</span> newEnd <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token comment">// 如果该元素已经是最后一位，那么不需要锚点</span>
    <span class="token keyword">const</span> anchor <span class="token operator">=</span>
      anchorIndex <span class="token operator">&lt;</span> newChildren<span class="token punctuation">.</span>length <span class="token operator">?</span> newChildren<span class="token punctuation">[</span>anchorIndex<span class="token punctuation">]</span><span class="token punctuation">.</span>el <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token comment">// 采用 while 循环，调用 patch 函数逐个挂载新增的节点</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;=</span> newEnd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">patch</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> newChildren<span class="token punctuation">[</span>j<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>新子节点遍历完，旧子节点还剩余，需要卸载。此时<code>j &gt; newEnd &amp;&amp; j &lt;= oldEnd</code></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">patchKeyedChildren</span><span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 拿到两组Children节点组</span>
  <span class="token keyword">const</span> newChildren <span class="token operator">=</span> n2<span class="token punctuation">.</span>children<span class="token punctuation">;</span>
  <span class="token keyword">const</span> oldChildren <span class="token operator">=</span> n1<span class="token punctuation">.</span>children<span class="token punctuation">;</span>

  <span class="token comment">// 更新相同的前置节点与后置节点</span>
  <span class="token comment">// ========================================</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">&gt;</span> oldEnd <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;=</span> newEnd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 省略新增节点的代码</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">&gt;</span> newEnd <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;=</span> oldEnd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// j -&gt; oldEnd 之间的节点应该被卸载</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;=</span> oldEnd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">unmount</span><span class="token punctuation">(</span>oldChildren<span class="token punctuation">[</span>j<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="soucrce-数组" tabindex="-1"><a class="header-anchor" href="#soucrce-数组" aria-hidden="true">#</a> soucrce 数组</h2><p>上面考虑的是最理想的情况，在预处理结束后，剩下的节点需要换位——通过 source 数组<br> source 数组是按照新子节点的顺序，存储其在旧子节点中的索引，如果没有就是-1</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">patchKeyedChildren</span><span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>oldVNode<span class="token punctuation">.</span>key <span class="token operator">===</span> newVNode<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">&gt;</span> oldEnd <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;=</span> newEnd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">&gt;</span> newEnd <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;=</span> oldEnd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 计算source数组</span>
  <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 剩余新子节点数量</span>
    <span class="token keyword">const</span> count <span class="token operator">=</span> newEnd <span class="token operator">-</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> source <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
    source<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> oldStart <span class="token operator">=</span> j<span class="token punctuation">;</span>
    <span class="token keyword">const</span> newStart <span class="token operator">=</span> j<span class="token punctuation">;</span>
    <span class="token keyword">let</span> moved <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> pos <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">// keyindex是为了后续查询方便</span>
    <span class="token keyword">const</span> keyIndex <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> newStart<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> newEnd<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      keyIndex<span class="token punctuation">[</span>newChildren<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> patched <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> oldStart<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> oldEnd<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      oldVNode <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token comment">// k表示的是旧子节点对应的节点在新子节点的顺序，是为了便于标记source数组的index</span>
      <span class="token keyword">const</span> k <span class="token operator">=</span> keyIndex<span class="token punctuation">[</span>oldVNode<span class="token punctuation">.</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> k <span class="token operator">!==</span> <span class="token string">&quot;undefined&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        newVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token function">patch</span><span class="token punctuation">(</span>oldVNode<span class="token punctuation">,</span> newVNode<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span>
        patched<span class="token operator">++</span><span class="token punctuation">;</span>
        source<span class="token punctuation">[</span>k <span class="token operator">-</span> newStart<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="有了-source-数组之后-就可以判断哪些节点需要移动" tabindex="-1"><a class="header-anchor" href="#有了-source-数组之后-就可以判断哪些节点需要移动" aria-hidden="true">#</a> 有了 source 数组之后，就可以判断哪些节点需要移动</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">patchKeyedChildren</span><span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>oldVNode<span class="token punctuation">.</span>key <span class="token operator">===</span> newVNode<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">&gt;</span> oldEnd <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;=</span> newEnd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">&gt;</span> newEnd <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;=</span> oldEnd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 计算source数组</span>
  <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> count <span class="token operator">=</span> newEnd <span class="token operator">-</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> source <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
    source<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 索引从预处理后的j开始</span>
    <span class="token keyword">const</span> oldStart <span class="token operator">=</span> j<span class="token punctuation">;</span>
    <span class="token keyword">const</span> newStart <span class="token operator">=</span> j<span class="token punctuation">;</span>
    <span class="token comment">// moved用作标识是否需要重新排序</span>
    <span class="token keyword">let</span> moved <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token comment">// pos记录上一个找到的节点的位置，用于辅助设置moved</span>
    <span class="token keyword">let</span> pos <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">// keyIndx是一个缓存表，记录新节点的key和索引的关系</span>
    <span class="token keyword">const</span> keyIndex <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// 先把新节点全部放keyIndx</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> newStart<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> newEnd<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      keyIndex<span class="token punctuation">[</span>newChildren<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 记录从旧节点中找到匹对的次数</span>
    <span class="token keyword">let</span> patched <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> oldStart<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> oldEnd<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      oldVNode <span class="token operator">=</span> oldChildren<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token comment">// 如果patched=count则说明新子节点已经全部更新，卸载掉多余的旧节点</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>patched <span class="token operator">&lt;</span> count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// k是从keyIndex中找到的节点在新节点组中的索引</span>
        <span class="token keyword">const</span> k <span class="token operator">=</span> keyIndex<span class="token punctuation">[</span>oldVNode<span class="token punctuation">.</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> k <span class="token operator">!==</span> <span class="token string">&quot;undefined&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          newVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span>
          <span class="token function">patch</span><span class="token punctuation">(</span>oldVNode<span class="token punctuation">,</span> newVNode<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span>
          patched<span class="token operator">++</span><span class="token punctuation">;</span>
          <span class="token comment">// 修改对应source中的项</span>
          source<span class="token punctuation">[</span>k <span class="token operator">-</span> newStart<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
          <span class="token comment">// 判断是否需要移动</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">&lt;</span> pos<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            moved <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            pos <span class="token operator">=</span> k<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token comment">// 新节点中没找到</span>
          <span class="token function">unmount</span><span class="token punctuation">(</span>oldVNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果节点中的内容已经全都匹对过了，说明剩下的全是应该删除的</span>
        <span class="token function">unmount</span><span class="token punctuation">(</span>oldVNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="移动节点" tabindex="-1"><a class="header-anchor" href="#移动节点" aria-hidden="true">#</a> 移动节点</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>moved<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// lis是source的最长递增子序列对应的索引</span>
  <span class="token keyword">const</span> seq <span class="token operator">=</span> <span class="token function">lis</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// s 指向最长递增子序列的最后一个值</span>
  <span class="token keyword">let</span> s <span class="token operator">=</span> seq<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token comment">//   i指向剩余新子节点最后一个</span>
  <span class="token keyword">let</span> i <span class="token operator">=</span> count <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>i<span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>source<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 说明索引为 i 的节点是全新的节点，应该将其挂载</span>
      <span class="token comment">// 该节点在新 children 中的真实位置索引</span>
      <span class="token keyword">const</span> pos <span class="token operator">=</span> i <span class="token operator">+</span> newStart<span class="token punctuation">;</span>
      <span class="token keyword">const</span> newVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>pos<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token comment">// 该节点下一个节点的位置索引</span>
      <span class="token keyword">const</span> nextPos <span class="token operator">=</span> pos <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token comment">// 锚点</span>
      <span class="token keyword">const</span> anchor <span class="token operator">=</span>
        nextPos <span class="token operator">&lt;</span> newChildren<span class="token punctuation">.</span>length <span class="token operator">?</span> newChildren<span class="token punctuation">[</span>nextPos<span class="token punctuation">]</span><span class="token punctuation">.</span>el <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token comment">// 挂载</span>
      <span class="token function">patch</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> newVNode<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">!==</span> seq<span class="token punctuation">[</span>s<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 说明该节点需要移动</span>
      <span class="token comment">// 该节点在新的一组子节点中的真实位置索引</span>
      <span class="token keyword">const</span> pos <span class="token operator">=</span> i <span class="token operator">+</span> newStart<span class="token punctuation">;</span>
      <span class="token keyword">const</span> newVNode <span class="token operator">=</span> newChildren<span class="token punctuation">[</span>pos<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token comment">// 该节点下一个节点的位置索引</span>
      <span class="token keyword">const</span> nextPos <span class="token operator">=</span> pos <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token comment">// 锚点</span>
      <span class="token keyword">const</span> anchor <span class="token operator">=</span>
        nextPos <span class="token operator">&lt;</span> newChildren<span class="token punctuation">.</span>length <span class="token operator">?</span> newChildren<span class="token punctuation">[</span>nextPos<span class="token punctuation">]</span><span class="token punctuation">.</span>el <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token comment">// 移动</span>
      <span class="token function">insert</span><span class="token punctuation">(</span>newVNode<span class="token punctuation">.</span>el<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 当 i === seq[j] 时，说明该位置的节点不需要移动</span>
      <span class="token comment">// 并让 s 指向下一个位置</span>
      s<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),o=[t];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","6.html.vue"]]);export{r as default};
