const e=JSON.parse('{"key":"v-4d898dff","path":"/%E7%AE%97%E6%B3%95%E9%A2%98/%E8%B4%AA%E5%BF%83%E7%AE%97%E6%B3%95/2.%E6%91%86%E5%8A%A8%E5%BA%8F%E5%88%97.html","title":"摆动序列","lang":"zh-CN","frontmatter":{"title":"摆动序列","order":2,"category":["算法题","贪心算法"],"description":"题目链接 摆动序列 思路 考虑最理想的情况：如果整个序列都是摆动序列，如果用图形来表示，那么这个序列就是由连续的波峰和波谷构成的 因此局部最优的情况就是某个元素能不能构成一个波峰和波谷，要判断这一点就需要前后的插值 prediff 和 curdiff 如果(prediff &lt; 0 &amp;&amp; curdiff &gt; 0) || (prediff &gt; 0 &amp;&amp; curdiff &lt; 0)，那么说明该元素是一个波峰或者波谷","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E7%AE%97%E6%B3%95%E9%A2%98/%E8%B4%AA%E5%BF%83%E7%AE%97%E6%B3%95/2.%E6%91%86%E5%8A%A8%E5%BA%8F%E5%88%97.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"摆动序列"}],["meta",{"property":"og:description","content":"题目链接 摆动序列 思路 考虑最理想的情况：如果整个序列都是摆动序列，如果用图形来表示，那么这个序列就是由连续的波峰和波谷构成的 因此局部最优的情况就是某个元素能不能构成一个波峰和波谷，要判断这一点就需要前后的插值 prediff 和 curdiff 如果(prediff &lt; 0 &amp;&amp; curdiff &gt; 0) || (prediff &gt; 0 &amp;&amp; curdiff &lt; 0)，那么说明该元素是一个波峰或者波谷"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-23T12:17:53.000Z"}],["meta",{"property":"article:author","content":"TX"}],["meta",{"property":"article:modified_time","content":"2024-04-23T12:17:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"摆动序列\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-23T12:17:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"TX\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"题目链接","slug":"题目链接","link":"#题目链接","children":[]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"实现","slug":"实现","link":"#实现","children":[]}],"git":{"createdTime":1705824349000,"updatedTime":1713874673000,"contributors":[{"name":"RezeLove","email":"1224745953@qq.com","commits":2}]},"readingTime":{"minutes":1.31,"words":392},"filePathRelative":"算法题/贪心算法/2.摆动序列.md","localizedDate":"2024年1月21日","excerpt":"<h2> 题目链接</h2>\\n<p><a href=\\"https://leetcode.cn/problems/wiggle-subsequence/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">摆动序列</a></p>\\n<h2> 思路</h2>\\n<p>考虑最理想的情况：如果整个序列都是摆动序列，如果用图形来表示，那么这个序列就是由连续的波峰和波谷构成的</p>\\n<p>因此局部最优的情况就是某个元素能不能构成一个波峰和波谷，要判断这一点就需要前后的插值 prediff 和 curdiff</p>\\n<p>如果(prediff &lt; 0 &amp;&amp; curdiff &gt; 0) || (prediff &gt; 0 &amp;&amp; curdiff &lt; 0)，那么说明该元素是一个波峰或者波谷</p>","autoDesc":true}');export{e as data};
