import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-09ff0184.js";const p={},t=e(`<h2 id="初始化框架" tabindex="-1"><a class="header-anchor" href="#初始化框架" aria-hidden="true">#</a> 初始化框架</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> init <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="导入-ts" tabindex="-1"><a class="header-anchor" href="#导入-ts" aria-hidden="true">#</a> 导入 ts</h2><ol><li>安装 typescript</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> typescript@4.7.4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li><p>生成默认配置 <code>tsc -init</code></p></li><li><p>修改<code>tsconfig.json</code>的配置</p></li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//...</span>
    <span class="token property">&quot;sourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 路径映射 *进行匹配；默认匹配的是src/下的index文件</span>
    <span class="token property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;@vue/*&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;packages/*/src&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 要编译的文件</span>
  <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;packages/*/src&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置-rollup" tabindex="-1"><a class="header-anchor" href="#设置-rollup" aria-hidden="true">#</a> 设置 rollup</h2><p>对于一个库而言，用 rollup 打包体积更小</p><ol><li>安装 rollup</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> rollup <span class="token parameter variable">--global</span>
<span class="token comment"># or \`npm i rollup -g\` for short</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>安装 rollup 插件</li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;@rollup/plugin-commonjs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;22.0.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@rollup/plugin-node-resolve&quot;</span><span class="token operator">:</span> <span class="token string">&quot;13.3.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@rollup/plugin-typescript&quot;</span><span class="token operator">:</span> <span class="token string">&quot;8.3.4&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>添加 rollup 配置 <blockquote><p>根目录添加 rollup.config.mjs</p></blockquote></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> resolve <span class="token keyword">from</span> <span class="token string">&quot;@rollup/plugin-node-resolve&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> commonjs <span class="token keyword">from</span> <span class="token string">&quot;@rollup/plugin-typescript&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> typescript <span class="token keyword">from</span> <span class="token string">&quot;@rollup/plugin-typescript&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token comment">// 入口文件</span>
    <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token string">&quot;packages/vue/src/index.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 打包出口</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// 到处iife模式的包</span>
        <span class="token literal-property property">sourcemap</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">// 到处文件地址</span>
        <span class="token literal-property property">file</span><span class="token operator">:</span> <span class="token string">&quot;./packages/vue/dist/vue.js&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&quot;iife&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// 在引用时可用name替代，如 const ｛reactive} = Vue</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Vue&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token function">typescript</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">sourceMap</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">// 模块导入路径补全</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">// 转commonjs为ESM</span>
      <span class="token function">commonjs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>添加 build scripts <blockquote><p>rollup --config 表示使用配置文件</p></blockquote></li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rollup --config&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),o=[t];function l(i,c){return s(),a("div",null,o)}const d=n(p,[["render",l],["__file","2.html.vue"]]);export{d as default};
