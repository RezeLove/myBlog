import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "前端笔记",
    children: [
      {
        text: "vue源码学习",
        link: "/vue源码学习/1.md",
      },
      {
        text: "javascript笔记",
        link: "/javascript/",
      },
    ],
  },
  {
    text: "post",
    link: "/posts/",
  },
  {
    text: "算法题",
    link: "/算法题/数组/1.md",
  },
]);
