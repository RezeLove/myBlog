const e=JSON.parse('{"key":"v-3875e646","path":"/%E5%89%8D%E7%AB%AF%E7%AC%94%E8%AE%B0/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/2.%E7%AD%96%E7%95%A5%E6%A8%A1%E5%BC%8F.html","title":"策略模式","lang":"zh-CN","frontmatter":{"title":"策略模式","order":2,"category":["设计模式"],"description":"基本概念 策略模式指的是定义一系列可互换的算法，并将它们封装在一个共同的接口下，允许在运行时选择算法 实现思路 距离：假设我们有一个简单的电子商务平台，需要根据不同的付款方式应用不同的付款策略。每种付款方式都有自己的付款逻辑 要实现策略算法，需要至少两部分内容： 策略类：具体的算法 环境类：切换不同的算法 举例 策略类: 首先构建策略基类，具体的策略由此集成，确保了所有的策略都有一致的接口，使得它们可以互换使用","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E5%89%8D%E7%AB%AF%E7%AC%94%E8%AE%B0/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/2.%E7%AD%96%E7%95%A5%E6%A8%A1%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"策略模式"}],["meta",{"property":"og:description","content":"基本概念 策略模式指的是定义一系列可互换的算法，并将它们封装在一个共同的接口下，允许在运行时选择算法 实现思路 距离：假设我们有一个简单的电子商务平台，需要根据不同的付款方式应用不同的付款策略。每种付款方式都有自己的付款逻辑 要实现策略算法，需要至少两部分内容： 策略类：具体的算法 环境类：切换不同的算法 举例 策略类: 首先构建策略基类，具体的策略由此集成，确保了所有的策略都有一致的接口，使得它们可以互换使用"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-06T12:22:48.000Z"}],["meta",{"property":"article:author","content":"TX"}],["meta",{"property":"article:modified_time","content":"2024-06-06T12:22:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"策略模式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-06T12:22:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"TX\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"基本概念","slug":"基本概念","link":"#基本概念","children":[]},{"level":2,"title":"实现思路","slug":"实现思路","link":"#实现思路","children":[]},{"level":2,"title":"举例","slug":"举例","link":"#举例","children":[]}],"git":{"createdTime":1717676568000,"updatedTime":1717676568000,"contributors":[{"name":"RezeLove","email":"1224745953@qq.com","commits":1}]},"readingTime":{"minutes":1.41,"words":424},"filePathRelative":"前端笔记/设计模式/2.策略模式.md","localizedDate":"2024年6月6日","excerpt":"<h2> 基本概念</h2>\\n<p>策略模式指的是定义一系列可互换的算法，并将它们封装在一个共同的接口下，允许在运行时选择算法</p>\\n<h2> 实现思路</h2>\\n<p>距离：假设我们有一个简单的电子商务平台，需要根据不同的付款方式应用不同的付款策略。每种付款方式都有自己的付款逻辑</p>\\n<p>要实现策略算法，需要至少两部分内容：</p>\\n<ol>\\n<li>策略类：具体的算法</li>\\n<li>环境类：切换不同的算法</li>\\n</ol>\\n<h2> 举例</h2>\\n<ol>\\n<li>策略类:</li>\\n</ol>\\n<ul>\\n<li>首先构建策略基类，具体的策略由此集成，确保了所有的策略都有一致的接口，<mark>使得它们可以互换使用</mark></li>\\n</ul>","autoDesc":true}');export{e as data};
