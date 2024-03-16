const e=JSON.parse('{"key":"v-61c8778e","path":"/%E7%AE%97%E6%B3%95%E9%A2%98/%E4%BA%8C%E5%8F%89%E6%A0%91/13.html","title":"二叉搜索树的最近公共祖先","lang":"zh-CN","frontmatter":{"title":"二叉搜索树的最近公共祖先","order":13,"category":["算法题","二叉树"],"description":"题目链接 题目链接 思路 利用搜索二叉树的特点：当 p 和 q 被找到并且不断传递上来时，如果是当前节点是 p 和 q 的公共祖先，那么它的值肯定介于 p 和 q 之间，因此找到介于 p 与 q 之间的节点即可 实现 后序遍历，将值向上传递","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E7%AE%97%E6%B3%95%E9%A2%98/%E4%BA%8C%E5%8F%89%E6%A0%91/13.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"二叉搜索树的最近公共祖先"}],["meta",{"property":"og:description","content":"题目链接 题目链接 思路 利用搜索二叉树的特点：当 p 和 q 被找到并且不断传递上来时，如果是当前节点是 p 和 q 的公共祖先，那么它的值肯定介于 p 和 q 之间，因此找到介于 p 与 q 之间的节点即可 实现 后序遍历，将值向上传递"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-21T08:05:49.000Z"}],["meta",{"property":"article:author","content":"TX"}],["meta",{"property":"article:modified_time","content":"2024-01-21T08:05:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"二叉搜索树的最近公共祖先\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-21T08:05:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"TX\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"题目链接","slug":"题目链接","link":"#题目链接","children":[]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"实现","slug":"实现","link":"#实现","children":[]}],"git":{"createdTime":1705824349000,"updatedTime":1705824349000,"contributors":[{"name":"RezeLove","email":"1224745953@qq.com","commits":1}]},"readingTime":{"minutes":0.85,"words":254},"filePathRelative":"算法题/二叉树/13.md","localizedDate":"2024年1月21日","excerpt":"<h2> 题目链接</h2>\\n<p><a href=\\"https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-search-tree/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">题目链接</a></p>\\n<h2> 思路</h2>\\n<p>利用搜索二叉树的特点：当 p 和 q 被找到并且不断传递上来时，如果是当前节点是 p 和 q 的公共祖先，那么它的值肯定介于 p 和 q 之间，因此找到介于 p 与 q 之间的节点即可</p>\\n<h2> 实现</h2>\\n<ol>\\n<li>后序遍历，将值向上传递</li>\\n</ol>","autoDesc":true}');export{e as data};