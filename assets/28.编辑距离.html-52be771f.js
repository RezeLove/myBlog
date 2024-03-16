const e=JSON.parse('{"key":"v-fac0c946","path":"/%E7%AE%97%E6%B3%95%E9%A2%98/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/28.%E7%BC%96%E8%BE%91%E8%B7%9D%E7%A6%BB.html","title":"编辑距离","lang":"zh-CN","frontmatter":{"title":"编辑距离","order":28,"category":["算法题","动态规划"],"description":"题目链接 编辑距离 思路 递推公式： 当 word1[i - 1] == word2[j - 1]时, 不用进行任何操作，dp[i][j] = dp[i - 1][j - 1] 当 word1[i - 1] ！= word2[j - 1]时，可以进行三种操作：删除、新增、替换 删除：dp[i][j] = dp[i - 1][j]+1","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E7%AE%97%E6%B3%95%E9%A2%98/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/28.%E7%BC%96%E8%BE%91%E8%B7%9D%E7%A6%BB.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"编辑距离"}],["meta",{"property":"og:description","content":"题目链接 编辑距离 思路 递推公式： 当 word1[i - 1] == word2[j - 1]时, 不用进行任何操作，dp[i][j] = dp[i - 1][j - 1] 当 word1[i - 1] ！= word2[j - 1]时，可以进行三种操作：删除、新增、替换 删除：dp[i][j] = dp[i - 1][j]+1"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-24T06:41:05.000Z"}],["meta",{"property":"article:author","content":"TX"}],["meta",{"property":"article:modified_time","content":"2024-01-24T06:41:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"编辑距离\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-24T06:41:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"TX\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"题目链接","slug":"题目链接","link":"#题目链接","children":[]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"实现","slug":"实现","link":"#实现","children":[]}],"git":{"createdTime":1706078465000,"updatedTime":1706078465000,"contributors":[{"name":"RezeLove","email":"1224745953@qq.com","commits":1}]},"readingTime":{"minutes":1.05,"words":314},"filePathRelative":"算法题/动态规划/28.编辑距离.md","localizedDate":"2024年1月24日","excerpt":"<h2> 题目链接</h2>\\n<p><a href=\\"https://leetcode.cn/problems/edit-distance/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">编辑距离</a></p>\\n<h2> 思路</h2>\\n<p>递推公式：</p>\\n<p>当 word1[i - 1] == word2[j - 1]时, 不用进行任何操作，dp[i][j] = dp[i - 1][j - 1]</p>\\n<p>当 word1[i - 1] ！= word2[j - 1]时，可以进行三种操作：删除、新增、替换</p>\\n<p>删除：dp[i][j] = dp[i - 1][j]+1</p>","autoDesc":true}');export{e as data};
