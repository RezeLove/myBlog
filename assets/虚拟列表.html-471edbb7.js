import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c as d,a as e,b as a,e as t,f as s}from"./app-10be0e5b.js";const l={},c=e("h2",{id:"参考链接",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考链接","aria-hidden":"true"},"#"),a(" 参考链接")],-1),h={href:"https://juejin.cn/post/7215114042494844988#heading-7",target:"_blank",rel:"noopener noreferrer"},_=s('<h2 id="目的" tabindex="-1"><a class="header-anchor" href="#目的" aria-hidden="true">#</a> 目的</h2><p>长列表渲染一直以来都是前端比较头疼的一个问题，如果想要在网页中放大量的列表项，纯渲染的话，对于浏览器性能将会是个极大的挑战，会造成滚动卡顿，整体体验非常不好，主要有以下问题：</p><ul><li>页面等待时间极长，白屏时间久，用户体验差</li><li>CPU 计算能力不够，滑动会卡顿</li><li>GPU 渲染能力不够，页面会跳屏</li><li>RAM 内存容量不够，浏览器崩溃</li></ul><h2 id="传统方法" tabindex="-1"><a class="header-anchor" href="#传统方法" aria-hidden="true">#</a> 传统方法</h2><p>对于长列表渲染，传统的方法是使用懒加载的方式，下拉到底部获取新的内容加载进来，其实就相当于是在垂直方向上的分页叠加功能，但随着加载数据越来越多，<mark>浏览器的回流和重绘的开销将会越来越大</mark></p><h2 id="虚拟列表" tabindex="-1"><a class="header-anchor" href="#虚拟列表" aria-hidden="true">#</a> 虚拟列表</h2>',6),p={href:"https://www.yuque.com/megumilove/viikdx/tpd4dluzwm6ts0mi",target:"_blank",rel:"noopener noreferrer"};function u(f,m){const r=o("ExternalLinkIcon");return i(),d("div",null,[c,e("p",null,[e("a",h,[a("参考链接"),t(r)])]),_,e("p",null,[a("其核心思想就是在处理用户滚动时，只改变列表在可视区域的渲染部分，然后使用 padding 或者 translate 来让渲染的列表偏移到可视区域中，给用户平滑滚动的感觉。 "),e("a",p,[a("详情"),t(r)])])])}const b=n(l,[["render",u],["__file","虚拟列表.html.vue"]]);export{b as default};
