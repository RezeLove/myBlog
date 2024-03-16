const t=JSON.parse('{"key":"v-489511d9","path":"/%E7%AE%97%E6%B3%95%E9%A2%98/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/12.%E4%B8%80%E5%92%8C%E9%9B%B6.html","title":"一和零","lang":"zh-CN","frontmatter":{"title":"一和零","order":11,"category":["算法题","动态规划"],"description":"题目链接 一和零 思路 这题本质山也是一个 01 背包问题，这不过该题的背包容积是二维的，因此遍历背包时是一个双重循环 dp[i][j]表示 最多有 i 个 0 和 j 个 1 的 strs 的最大子集的大小 递推公式：count0 和 count1 分别表示当前的 str（物品）的 0 和 1 的数量 放入 str:dp[i-count0][j-count1]+1 不放入：dp[i][j] 初始化：0 即可","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E7%AE%97%E6%B3%95%E9%A2%98/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/12.%E4%B8%80%E5%92%8C%E9%9B%B6.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"一和零"}],["meta",{"property":"og:description","content":"题目链接 一和零 思路 这题本质山也是一个 01 背包问题，这不过该题的背包容积是二维的，因此遍历背包时是一个双重循环 dp[i][j]表示 最多有 i 个 0 和 j 个 1 的 strs 的最大子集的大小 递推公式：count0 和 count1 分别表示当前的 str（物品）的 0 和 1 的数量 放入 str:dp[i-count0][j-count1]+1 不放入：dp[i][j] 初始化：0 即可"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-21T08:05:49.000Z"}],["meta",{"property":"article:author","content":"TX"}],["meta",{"property":"article:modified_time","content":"2024-01-21T08:05:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"一和零\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-21T08:05:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"TX\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"题目链接","slug":"题目链接","link":"#题目链接","children":[]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"实现","slug":"实现","link":"#实现","children":[]}],"git":{"createdTime":1705824349000,"updatedTime":1705824349000,"contributors":[{"name":"RezeLove","email":"1224745953@qq.com","commits":1}]},"readingTime":{"minutes":0.77,"words":232},"filePathRelative":"算法题/动态规划/12.一和零.md","localizedDate":"2024年1月21日","excerpt":"<h2> 题目链接</h2>\\n<p><a href=\\"https://leetcode.cn/problems/ones-and-zeroes/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">一和零</a></p>\\n<h2> 思路</h2>\\n<p>这题本质山也是一个 01 背包问题，这不过该题的背包容积是二维的，因此遍历背包时是一个双重循环</p>\\n<ul>\\n<li>\\n<p>dp[i][j]表示 最多有 i 个 0 和 j 个 1 的 strs 的最大子集的大小</p>\\n</li>\\n<li>\\n<p>递推公式：count0 和 count1 分别表示当前的 str（物品）的 0 和 1 的数量\\n放入 str:dp[i-count0][j-count1]+1\\n不放入：dp[i][j]</p>\\n</li>\\n<li>\\n<p>初始化：0 即可</p>\\n</li>\\n</ul>","autoDesc":true}');export{t as data};
