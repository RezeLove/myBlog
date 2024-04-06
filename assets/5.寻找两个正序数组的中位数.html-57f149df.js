const e=JSON.parse('{"key":"v-7ed1c45a","path":"/%E7%AE%97%E6%B3%95%E9%A2%98/%E6%95%B0%E7%BB%84/%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE/5.%E5%AF%BB%E6%89%BE%E4%B8%A4%E4%B8%AA%E6%AD%A3%E5%BA%8F%E6%95%B0%E7%BB%84%E7%9A%84%E4%B8%AD%E4%BD%8D%E6%95%B0.html","title":"寻找两个正序数组的中位数","lang":"zh-CN","frontmatter":{"title":"寻找两个正序数组的中位数","order":5,"category":["算法题","二分查找"],"description":"题目链接 寻找两个正序数组的中位数 思路 暴力法：将两个数组合并，时间复杂度为 O(m+n) 二分查找：通过二分查找，直接找出中位数 思路：将按顺序合并后的顺序分为左右两部分，左侧为&lt;=中位数的数组，右侧为&gt;中位数的数组 那么左侧数组的大小为(len1+len2+1) &gt;&gt; 1 假设左边部分来源于 nums1 左分段的长度为 partLen1，剩下的就是来源于 nums2 的左分段，长度是 ((len + 1) &gt;&gt; 1) - partLen1","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E7%AE%97%E6%B3%95%E9%A2%98/%E6%95%B0%E7%BB%84/%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE/5.%E5%AF%BB%E6%89%BE%E4%B8%A4%E4%B8%AA%E6%AD%A3%E5%BA%8F%E6%95%B0%E7%BB%84%E7%9A%84%E4%B8%AD%E4%BD%8D%E6%95%B0.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"寻找两个正序数组的中位数"}],["meta",{"property":"og:description","content":"题目链接 寻找两个正序数组的中位数 思路 暴力法：将两个数组合并，时间复杂度为 O(m+n) 二分查找：通过二分查找，直接找出中位数 思路：将按顺序合并后的顺序分为左右两部分，左侧为&lt;=中位数的数组，右侧为&gt;中位数的数组 那么左侧数组的大小为(len1+len2+1) &gt;&gt; 1 假设左边部分来源于 nums1 左分段的长度为 partLen1，剩下的就是来源于 nums2 的左分段，长度是 ((len + 1) &gt;&gt; 1) - partLen1"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-06T07:58:58.000Z"}],["meta",{"property":"article:author","content":"TX"}],["meta",{"property":"article:modified_time","content":"2024-04-06T07:58:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"寻找两个正序数组的中位数\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-06T07:58:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"TX\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"题目链接","slug":"题目链接","link":"#题目链接","children":[]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"实现","slug":"实现","link":"#实现","children":[]}],"git":{"createdTime":1712390338000,"updatedTime":1712390338000,"contributors":[{"name":"RezeLove","email":"1224745953@qq.com","commits":1}]},"readingTime":{"minutes":1.67,"words":500},"filePathRelative":"算法题/数组/二分查找/5.寻找两个正序数组的中位数.md","localizedDate":"2024年4月6日","excerpt":"<h2> 题目链接</h2>\\n<p><a href=\\"https://leetcode.cn/problems/median-of-two-sorted-arrays/description/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">寻找两个正序数组的中位数</a></p>\\n<h2> 思路</h2>\\n<ol>\\n<li>\\n<p>暴力法：将两个数组合并，时间复杂度为 O(m+n)</p>\\n</li>\\n<li>\\n<p>二分查找：通过二分查找，直接找出中位数</p>\\n</li>\\n</ol>\\n<p>思路：将按顺序合并后的顺序分为左右两部分，左侧为&lt;=中位数的数组，右侧为&gt;中位数的数组\\n那么左侧数组的大小为(len1+len2+1) &gt;&gt; 1\\n假设左边部分来源于 nums1 左分段的长度为 partLen1，剩下的就是来源于 nums2 的左分段，长度是 ((len + 1) &gt;&gt; 1) - partLen1</p>","autoDesc":true}');export{e as data};
