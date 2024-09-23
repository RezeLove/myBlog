import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-5162b9bc.js";const e="/assets/images/computed.jpg",p={},o=t(`<h2 id="构造-computedrefimpl-类" tabindex="-1"><a class="header-anchor" href="#构造-computedrefimpl-类" aria-hidden="true">#</a> 构造 ComputedRefImpl 类</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">computed</span><span class="token punctuation">(</span>getterOrOptions<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> getter<span class="token punctuation">;</span>
  <span class="token keyword">const</span> only_getter <span class="token operator">=</span> <span class="token function">isFunction</span><span class="token punctuation">(</span>getterOrOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>only_getter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    getter <span class="token operator">=</span> getterOrOptions<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//getter保存的是computed接受的函数</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ComputedRefImpl</span><span class="token punctuation">(</span>getter<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// ComputedRefImpl与Ref有些类似，都是通过.value来触发get value</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">ComputedRefImpl<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token comment">// dep收集的是与ComputedRefImpl.value相关的effect函数</span>
  <span class="token keyword">public</span> dep<span class="token operator">?</span><span class="token operator">:</span> Dep <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token comment">// _value是ComputedRefImpl的值</span>
  <span class="token keyword">private</span> _value<span class="token operator">!</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token keyword">readonly</span> effect<span class="token operator">:</span> ReactiveEffect<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token keyword">readonly</span> __v_isRef <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token comment">//_dirty用于缓存</span>
  <span class="token keyword">public</span> _dirty <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>getter<span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建一个具有scheduler的ReactiveEffect类，这个scheduler用于触发依赖</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>effect <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReactiveEffect</span><span class="token punctuation">(</span>getter<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>_dirty<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_dirty <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token function">triggerRefValue</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>effect<span class="token punctuation">.</span>computed <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">get</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 收集依赖</span>
    <span class="token function">trackRefValue</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_dirty<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 运行getter，重新计算._value的值并返回</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>_value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>effect<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>_dirty <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="从一个例子查看执行流程" tabindex="-1"><a class="header-anchor" href="#从一个例子查看执行流程" aria-hidden="true">#</a> 从一个例子查看执行流程</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">const</span> <span class="token punctuation">{</span> computed<span class="token punctuation">,</span> effect<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token operator">=</span> Vue<span class="token punctuation">;</span>
  <span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&quot;txss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//  1. 创建了ComputedRefImpl实例</span>
  <span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;名字是&quot;</span> <span class="token operator">+</span> name<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 2. 在执行effect函数的过程中，context.value出发了computed的get value()
   *    1. 首先收集以来，将此effect函数加入了dep中
   *    2. 执行getter函数，name.value又触发了name的get value, computed的effect（带scheduler）被收录进了name的dep中
   *  */</span>
  <span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;p1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerText <span class="token operator">=</span> context<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 3. name.value修改，触发set，调用computed.effect,因为其有scheduler，就执行scheduler
   *    1. triggerRefValue触发，依次执行依赖，执行document.getElementById(&quot;p1&quot;).innerText = context.value
   *    2. context.value触发get value，执行getter函数，重新计算了computed._value的值
   */</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    name<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&quot;李四&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+e+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="computed-的缓存" tabindex="-1"><a class="header-anchor" href="#computed-的缓存" aria-hidden="true">#</a> computed 的缓存</h2><p>computed 利用<code>_dirty</code>属性来进行缓存，当响应性数据改变，触发<code>scheduler</code>后，<code>_dirty</code>的值为 true，表示需要重新计算 _value；如果<code>scheduler</code>没有触发，则<code>_dirty</code>一直是 false，不会出发 get value()进而计算 getter 更新 _value 值</p><h2 id="死循环问题" tabindex="-1"><a class="header-anchor" href="#死循环问题" aria-hidden="true">#</a> 死循环问题</h2><p>如果把上例中的 effect 函数改为如下，则会进入死循环，不断执行这个函数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// scheduler的triggerValue触发，此时dep中只有下面这个effect函数</span>
<span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 执行完这段后，context.value触发了get value，执行了this.effect.run(),那么此时的activeEffec就是computed.effect，并且此时dirty为false</span>
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;p1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerText <span class="token operator">=</span> context<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
  <span class="token comment">//context.value再一次触发，导致computed.effect被收集进了依赖dep中</span>
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;p1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerText <span class="token operator">=</span> context<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 由于dep有了新的内容，循环继续，执行computed.effect，因为其scheduler，且此时dirty为false，导致trigerValue再一次触发，就进入了循环</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>改进方法：造成上面死循环的本质原因是限制性了 effect 函数，会将<code>dirty</code>赋为 false，然后执行<code>this.effect</code>时就会进入判断，执行 trigger；因此如果改变执行顺序，先执行<code>this.effect</code>再执行 effect 函数即可</p><blockquote><p>effect.ts</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">triggerEffects</span><span class="token punctuation">(</span>dep<span class="token operator">:</span> Dep<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> effects <span class="token operator">=</span> <span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>dep<span class="token punctuation">)</span> <span class="token operator">?</span> dep <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>dep<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> effect <span class="token keyword">of</span> effects<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>effect<span class="token punctuation">.</span>computed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">triggerEffect</span><span class="token punctuation">(</span>effect<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> effect <span class="token keyword">of</span> effects<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>effect<span class="token punctuation">.</span>computed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">triggerEffect</span><span class="token punctuation">(</span>effect<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>computed 是一个派生的计算属性 ref，因此需要追踪计算其所用的响应性数据，还需要追踪调用 computed 的 effect，将二者连接起来</p><p>在响应性数据修改时，同时 scheduler 来触发依赖，进而触发调用了 computed 的 effect 函数</p>`,16),c=[o];function l(i,u){return s(),a("div",null,c)}const k=n(p,[["render",l],["__file","8.html.vue"]]);export{k as default};