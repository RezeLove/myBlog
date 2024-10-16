import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-9e2c8d6a.js";const e={},p=t(`<h2 id="注册生命周期" tabindex="-1"><a class="header-anchor" href="#注册生命周期" aria-hidden="true">#</a> 注册生命周期</h2><p>A 组件的 setup 函数中调用 onMounted 函数会将该钩子函数注册到 A 组件上；而在 B 组件的 setup 函数中调用 onMounted 函数会将钩子函数注册到 B 组件上；要想实现这一点，则需要维护一个变量 <code>currentInstance</code>，用它来存储当前组件实例:</p><ol><li>每当初始化组件并执行组件的 setup 函数之前，先将 currentInstance 设置为当前组件实例</li><li>然后执行组件的 setup 函数，这样就可以通过 currentInstance 来获取当前正在被初始化的组件实例，从而将那些通过 onMounted 函数注册的钩子函数与组件实例进行关联</li></ol><blockquote><p>onMounted 函数的作用</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>currentInstance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将生命周期函数添加到 instance.mounted 数组中</span>
    currentInstance<span class="token punctuation">.</span>mounted<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;onMounted 函数只能在 setup 中调用&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>通过 setCurrentInstance 函数修改 currentInstance</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 全局变量currentInstance</span>
<span class="token keyword">let</span> currentInstance <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">setCurrentInstance</span><span class="token punctuation">(</span><span class="token parameter">instance</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  currentInstance <span class="token operator">=</span> instance<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在 mounteComponent 中调用 setCurrentInstance</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">mountComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">,</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token function">shallowReactive</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">isMounted</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">subTree</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token comment">// 在组件实例中添加 mounted 数组，用来存储通过 onMounted 函数注册的生命周期钩子函数</span>
    <span class="token literal-property property">mounted</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
  <span class="token keyword">const</span> setupContext <span class="token operator">=</span> <span class="token punctuation">{</span> attrs<span class="token punctuation">,</span> emit<span class="token punctuation">,</span> slots <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 在调用 setup 函数之前，设置当前组件实例</span>
  <span class="token function">setCurrentInstance</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 执行 setup 函数,这时候会触发setup中的onMounted函数，将注册的生命周期函数存入instance.mounted中</span>
  <span class="token keyword">const</span> setupResult <span class="token operator">=</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token function">shallowReadonly</span><span class="token punctuation">(</span>instance<span class="token punctuation">.</span>props<span class="token punctuation">)</span><span class="token punctuation">,</span> setupContext<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 在 setup 函数执行完毕之后，重置当前组件实例，因为currentInstance是全局变量</span>
  <span class="token function">setCurrentInstance</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//...</span>
  <span class="token comment">// 在effect函数中合适的时机调用instance.mounted中保存的函数</span>
  <span class="token function">effect</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      subTree <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>renderContext<span class="token punctuation">,</span> renderContext<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>instance<span class="token punctuation">.</span>isMounted<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 挂载</span>
        <span class="token comment">// 遍历 instance.mounted 数组并逐个执行即可</span>
        instance<span class="token punctuation">.</span>mounted <span class="token operator">&amp;&amp;</span>
          instance<span class="token punctuation">.</span>mounted<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">hook</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">hook</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>renderContext<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token punctuation">}</span>
      instance<span class="token punctuation">.</span>subTree <span class="token operator">=</span> subTree<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">scheduler</span><span class="token operator">:</span> queueJob<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[p];function c(u,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","11.html.vue"]]);export{d as default};
