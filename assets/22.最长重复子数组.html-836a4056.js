const e=JSON.parse('{"key":"v-08f6c07e","path":"/%E7%AE%97%E6%B3%95%E9%A2%98/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/22.%E6%9C%80%E9%95%BF%E9%87%8D%E5%A4%8D%E5%AD%90%E6%95%B0%E7%BB%84.html","title":"最长重复子数组","lang":"zh-CN","frontmatter":{"title":"最长重复子数组","order":22,"category":["算法题","动态规划"],"description":"题目链接 最长重复子数组 思路 dp[i][j] 表示 当 nums1 中索引为 0-i 个元素，当 nums2 中索引为 0-j 个元素的时候的最长重复子序列长度 递推公式：当新的元素 nums1[i]==nums2[j]时，dp[i][j] = dp[i-1][j-1]+1","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E7%AE%97%E6%B3%95%E9%A2%98/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/22.%E6%9C%80%E9%95%BF%E9%87%8D%E5%A4%8D%E5%AD%90%E6%95%B0%E7%BB%84.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"最长重复子数组"}],["meta",{"property":"og:description","content":"题目链接 最长重复子数组 思路 dp[i][j] 表示 当 nums1 中索引为 0-i 个元素，当 nums2 中索引为 0-j 个元素的时候的最长重复子序列长度 递推公式：当新的元素 nums1[i]==nums2[j]时，dp[i][j] = dp[i-1][j-1]+1"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-21T08:05:49.000Z"}],["meta",{"property":"article:author","content":"TX"}],["meta",{"property":"article:modified_time","content":"2024-01-21T08:05:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"最长重复子数组\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-21T08:05:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"TX\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"题目链接","slug":"题目链接","link":"#题目链接","children":[]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"实现","slug":"实现","link":"#实现","children":[]}],"git":{"createdTime":1705824349000,"updatedTime":1705824349000,"contributors":[{"name":"RezeLove","email":"1224745953@qq.com","commits":1}]},"readingTime":{"minutes":1.54,"words":462},"filePathRelative":"算法题/动态规划/22.最长重复子数组.md","localizedDate":"2024年1月21日","excerpt":"<h2> 题目链接</h2>\\n<p><a href=\\"https://leetcode.cn/problems/maximum-length-of-repeated-subarray/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">最长重复子数组</a></p>\\n<h2> 思路</h2>\\n<p>dp[i][j] 表示 当 nums1 中索引为 0-i 个元素，当 nums2 中索引为 0-j 个元素的时候的最长重复子序列长度</p>\\n<p>递推公式：当新的元素 nums1[i]==nums2[j]时，dp[i][j] = dp[i-1][j-1]+1</p>","autoDesc":true}');export{e as data};
