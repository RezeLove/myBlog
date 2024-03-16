const e=JSON.parse('{"key":"v-4d5da57f","path":"/%E7%AE%97%E6%B3%95%E9%A2%98/%E8%B4%AA%E5%BF%83%E7%AE%97%E6%B3%95/13.%E5%88%92%E5%88%86%E5%AD%97%E6%AF%8D%E5%8C%BA%E9%97%B4.html","title":"划分字母区间","lang":"zh-CN","frontmatter":{"title":"划分字母区间","order":13,"category":["算法题","贪心算法"],"description":"题目链接 题目链接 思路 该题的难点在于判断什么时候该分割，即分割后的字符串是还还会包含前面的字母？ 为了解决这个问题，可以利用每个字母最后出现的索引来实现，在遍历字符串时，记录遍历过字母最后出现索引的最大值，如果该值等于当前索引，那么就切割 图解","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E7%AE%97%E6%B3%95%E9%A2%98/%E8%B4%AA%E5%BF%83%E7%AE%97%E6%B3%95/13.%E5%88%92%E5%88%86%E5%AD%97%E6%AF%8D%E5%8C%BA%E9%97%B4.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"划分字母区间"}],["meta",{"property":"og:description","content":"题目链接 题目链接 思路 该题的难点在于判断什么时候该分割，即分割后的字符串是还还会包含前面的字母？ 为了解决这个问题，可以利用每个字母最后出现的索引来实现，在遍历字符串时，记录遍历过字母最后出现索引的最大值，如果该值等于当前索引，那么就切割 图解"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-21T08:05:49.000Z"}],["meta",{"property":"article:author","content":"TX"}],["meta",{"property":"article:modified_time","content":"2024-01-21T08:05:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"划分字母区间\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-21T08:05:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"TX\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"题目链接","slug":"题目链接","link":"#题目链接","children":[]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"实现","slug":"实现","link":"#实现","children":[]}],"git":{"createdTime":1705824349000,"updatedTime":1705824349000,"contributors":[{"name":"RezeLove","email":"1224745953@qq.com","commits":1}]},"readingTime":{"minutes":0.85,"words":255},"filePathRelative":"算法题/贪心算法/13.划分字母区间.md","localizedDate":"2024年1月21日","excerpt":"<h2> 题目链接</h2>\\n<p><a href=\\"https://leetcode.cn/problems/partition-labels/description/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">题目链接</a></p>\\n<h2> 思路</h2>\\n<p>该题的难点在于判断什么时候该分割，即分割后的字符串是还还会包含前面的字母？</p>\\n<p>为了解决这个问题，可以利用每个字母最后出现的索引来实现，在遍历字符串时，记录遍历过字母最后出现索引的最大值，如果该值等于当前索引，那么就切割</p>\\n<p><a href=\\"https://www.programmercarl.com/0435.%E6%97%A0%E9%87%8D%E5%8F%A0%E5%8C%BA%E9%97%B4.html#%E7%AE%97%E6%B3%95%E5%85%AC%E5%BC%80%E8%AF%BE\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">图解</a></p>","autoDesc":true}');export{e as data};
