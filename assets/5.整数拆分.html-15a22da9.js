const e=JSON.parse('{"key":"v-22254b81","path":"/%E7%AE%97%E6%B3%95%E9%A2%98/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/5.%E6%95%B4%E6%95%B0%E6%8B%86%E5%88%86.html","title":"整数拆分","lang":"zh-CN","frontmatter":{"title":"整数拆分","order":5,"category":["算法题","动态规划"],"description":"题目链接 整数拆分 思路 dp[i]表示整数 i 拆分后的最大乘积 递推公式：将 i 拆分成 j 和 i-j，遍历 j，则 dp[i]=dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]); 解释：dp[i]表示上一轮的结果； j * (i - j)表示 i-j 不再拆分，直接相乘； j * dp[i - j]表示 i-j 也要拆分","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E7%AE%97%E6%B3%95%E9%A2%98/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/5.%E6%95%B4%E6%95%B0%E6%8B%86%E5%88%86.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"整数拆分"}],["meta",{"property":"og:description","content":"题目链接 整数拆分 思路 dp[i]表示整数 i 拆分后的最大乘积 递推公式：将 i 拆分成 j 和 i-j，遍历 j，则 dp[i]=dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]); 解释：dp[i]表示上一轮的结果； j * (i - j)表示 i-j 不再拆分，直接相乘； j * dp[i - j]表示 i-j 也要拆分"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-21T08:05:49.000Z"}],["meta",{"property":"article:author","content":"TX"}],["meta",{"property":"article:modified_time","content":"2024-01-21T08:05:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"整数拆分\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-21T08:05:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"TX\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"题目链接","slug":"题目链接","link":"#题目链接","children":[]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"实现","slug":"实现","link":"#实现","children":[]}],"git":{"createdTime":1705824349000,"updatedTime":1705824349000,"contributors":[{"name":"RezeLove","email":"1224745953@qq.com","commits":1}]},"readingTime":{"minutes":0.76,"words":228},"filePathRelative":"算法题/动态规划/5.整数拆分.md","localizedDate":"2024年1月21日","excerpt":"<h2> 题目链接</h2>\\n<p><a href=\\"https://leetcode.cn/problems/integer-break/description/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">整数拆分</a></p>\\n<h2> 思路</h2>\\n<p>dp[i]表示整数 i 拆分后的最大乘积</p>\\n<p>递推公式：将 i 拆分成 j 和 i-j，遍历 j，则 dp[i]=dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);</p>\\n<p>解释：dp[i]表示上一轮的结果； j * (i - j)表示 i-j 不再拆分，直接相乘； j * dp[i - j]表示 i-j 也要拆分</p>","autoDesc":true}');export{e as data};
