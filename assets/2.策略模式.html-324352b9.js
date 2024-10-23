import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-34ffc9bd.js";const e={},p=t(`<h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h2><p>策略模式指的是定义一系列可互换的算法，并将它们封装在一个共同的接口下，允许在运行时选择算法</p><h2 id="实现思路" tabindex="-1"><a class="header-anchor" href="#实现思路" aria-hidden="true">#</a> 实现思路</h2><p>距离：假设我们有一个简单的电子商务平台，需要根据不同的付款方式应用不同的付款策略。每种付款方式都有自己的付款逻辑</p><p>要实现策略算法，需要至少两部分内容：</p><ol><li>策略类：具体的算法</li><li>环境类：切换不同的算法</li></ol><h2 id="举例" tabindex="-1"><a class="header-anchor" href="#举例" aria-hidden="true">#</a> 举例</h2><ol><li>策略类:</li></ol><ul><li>首先构建策略基类，具体的策略由此集成，确保了所有的策略都有一致的接口，<mark>使得它们可以互换使用</mark></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">PaymentStrategy</span> <span class="token punctuation">{</span>
  <span class="token comment">// 付款方法，所有策略必须实现这个方法</span>
  <span class="token function">pay</span><span class="token punctuation">(</span><span class="token parameter">amount</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;This method should be overridden&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>具体的策略类：</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">CreditCardPayment</span> <span class="token keyword">extends</span> <span class="token class-name">PaymentStrategy</span> <span class="token punctuation">{</span>
  <span class="token function">pay</span><span class="token punctuation">(</span><span class="token parameter">amount</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 信用卡付款逻辑</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">PayPalPayment</span> <span class="token keyword">extends</span> <span class="token class-name">PaymentStrategy</span> <span class="token punctuation">{</span>
  <span class="token function">pay</span><span class="token punctuation">(</span><span class="token parameter">amount</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// PayPal付款逻辑</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">BankTransferPayment</span> <span class="token keyword">extends</span> <span class="token class-name">PaymentStrategy</span> <span class="token punctuation">{</span>
  <span class="token function">pay</span><span class="token punctuation">(</span><span class="token parameter">amount</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 银行转账付款逻辑</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>环境类：</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">PaymentContext</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">strategy</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>strategy <span class="token operator">=</span> strategy<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 设置新的付款策略</span>
  <span class="token function">setPaymentStrategy</span><span class="token punctuation">(</span><span class="token parameter">strategy</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>strategy <span class="token operator">=</span> strategy<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 执行付款操作</span>
  <span class="token function">executePayment</span><span class="token punctuation">(</span><span class="token parameter">amount</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>strategy<span class="token punctuation">.</span><span class="token function">pay</span><span class="token punctuation">(</span>amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>具体使用</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> CreditCardPayment <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./CreditCardPayment&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> PayPalPayment <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./PayPalPayment&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> CryptoPayment <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./CryptoPayment&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> PaymentContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./PaymentContext&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 示例用户选择了支付方式</span>
<span class="token keyword">const</span> paymentMethod <span class="token operator">=</span> <span class="token string">&quot;PayPal&quot;</span><span class="token punctuation">;</span> 

<span class="token comment">// 根据用户选择的支付方式选择策略</span>
<span class="token keyword">let</span> paymentStrategy<span class="token punctuation">;</span>
<span class="token keyword">switch</span> <span class="token punctuation">(</span>paymentMethod<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token string">&quot;CreditCard&quot;</span><span class="token operator">:</span>
    paymentStrategy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CreditCardPayment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token string">&quot;PayPal&quot;</span><span class="token operator">:</span>
    paymentStrategy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PayPalPayment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token string">&quot;Crypto&quot;</span><span class="token operator">:</span>
    paymentStrategy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CryptoPayment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">default</span><span class="token operator">:</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;Invalid payment method&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 创建支付上下文并执行支付</span>
<span class="token keyword">const</span> paymentContext <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PaymentContext</span><span class="token punctuation">(</span>paymentStrategy<span class="token punctuation">)</span><span class="token punctuation">;</span>
paymentContext<span class="token punctuation">.</span><span class="token function">executeStrategy</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 假设支付金额为 $100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),o=[p];function c(l,i){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","2.策略模式.html.vue"]]);export{d as default};
