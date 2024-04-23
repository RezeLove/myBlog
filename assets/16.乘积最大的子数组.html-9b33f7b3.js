const e=JSON.parse('{"key":"v-09a90f71","path":"/%E7%AE%97%E6%B3%95%E9%A2%98/%E8%B4%AA%E5%BF%83%E7%AE%97%E6%B3%95/16.%E4%B9%98%E7%A7%AF%E6%9C%80%E5%A4%A7%E7%9A%84%E5%AD%90%E6%95%B0%E7%BB%84.html","title":"","lang":"zh-CN","frontmatter":{"order":16,"category":["算法题","贪心算法"],"description":"题目链接 乘积最大的数组 思路 这题关键在于对负数情况的处理：当遇到负数，最大的值会变为最小的值，而最小的值会变为最大的值 因此除了维护最大的值，还需要维护最小的值 考虑到题目要求是最大的非空连续子数组，可以维护变量 imax 与 imin，imax 与 imin 分别表示以 i 结尾的连续子数组的最大乘积","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E7%AE%97%E6%B3%95%E9%A2%98/%E8%B4%AA%E5%BF%83%E7%AE%97%E6%B3%95/16.%E4%B9%98%E7%A7%AF%E6%9C%80%E5%A4%A7%E7%9A%84%E5%AD%90%E6%95%B0%E7%BB%84.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:description","content":"题目链接 乘积最大的数组 思路 这题关键在于对负数情况的处理：当遇到负数，最大的值会变为最小的值，而最小的值会变为最大的值 因此除了维护最大的值，还需要维护最小的值 考虑到题目要求是最大的非空连续子数组，可以维护变量 imax 与 imin，imax 与 imin 分别表示以 i 结尾的连续子数组的最大乘积"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-23T12:17:53.000Z"}],["meta",{"property":"article:author","content":"TX"}],["meta",{"property":"article:modified_time","content":"2024-04-23T12:17:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-23T12:17:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"TX\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"题目链接","slug":"题目链接","link":"#题目链接","children":[]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"实现","slug":"实现","link":"#实现","children":[]}],"git":{"createdTime":1713874673000,"updatedTime":1713874673000,"contributors":[{"name":"RezeLove","email":"1224745953@qq.com","commits":1}]},"readingTime":{"minutes":0.86,"words":257},"filePathRelative":"算法题/贪心算法/16.乘积最大的子数组.md","localizedDate":"2024年4月23日","excerpt":"<h2> 题目链接</h2>\\n<p><a href=\\"https://leetcode.cn/problems/maximum-product-subarray/description/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">乘积最大的数组</a></p>\\n<h2> 思路</h2>\\n<p>这题关键在于对负数情况的处理：当遇到负数，最大的值会变为最小的值，而最小的值会变为最大的值</p>\\n<p>因此除了维护最大的值，还需要维护最小的值</p>\\n<p>考虑到题目要求是最大的非空连续子数组，可以维护变量 imax 与 imin，imax 与 imin 分别表示以 i 结尾的连续子数组的最大乘积</p>","autoDesc":true}');export{e as data};
