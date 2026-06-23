# weibo-archive-viewer 微博存档阅读器

GitHub repository: [https://github.com/mzt999/weibo-archive-viewer](https://github.com/mzt999/weibo-archive-viewer)

本应用可在tampermonkey等浏览器插件中运行，启用时可在 `weibo.com` 加载用户自主收集的单个用户的微博内容。示例用户: 摩登兄弟刘宇宁。

<img height="200" alt="摩登兄弟刘宇宁" src="https://github.com/user-attachments/assets/b3008dfd-3f71-438f-8bd2-8fa32eb82a45" />

加载后页面布局参考了微博本身，但没有采用瀑布流加载，而是需要手动翻页，用户可以跳页或者跳到指定月份。

用户可自行收集微博内容做成以下格式的csv文件，`postId` 可自行编写，但是不能重复。`picIds` 是图片链接在最后一个斜线右边的部分，需包含扩展名。如果一条微博有多个图片，需把图片ID用英文分号隔开。

| postId | postTime | postContent | picIds |
|--------|----------|-------------|--------|
| WB20260506190302 | 2026/5/6 19:03 | #刘宇宁直播#  #见面吧星朋友#   康乃馨6.0 （纯免费温馨版）.送给5.1工作忙碌的 每一位~  http://t.cn/AXJQKUuQ ​​​ | |
| WB20260506190301 | 2026/5/6 19:03 | 新歌上线。一起听歌。一起JUMP。<br>#此刻举杯为我们的FIFA世界杯##刘宇宁献唱FIFA世界杯可口可乐主题曲##看FIFA世界杯就喝可口可乐#<br>@酷狗音乐 http://t.cn/AXJTxyPr<br>@QQ音乐 http://t.cn/AXJTxyPg<br>@酷我音乐 http://t.cn/AXJy5QqH ​​​ | 005XirXMly1icvkqijhtfj31hc1hc4qr.jpg |
| WB202605061111 | 2026/5/6 11:11 | #刘宇宁直播#  #见面吧星朋友#    好久不见~~  http://t.cn/AXJvMIFh ​​​ | |
| WB202604282010 | 2026/4/28 20:10 | 没完了。别造谣。 ​​​ | |
| WB202604231530 | 2026/4/23 15:30 | #刘宇宁献唱佳偶天成OST##电视剧佳偶天成# 破穹曲《生当何为》今日上线。苍穹之下。叩问于心。生当为何。我即回声。4月25日来剧中寻找答案吧。http://t.cn/AXxxYzkg<br>@酷狗音乐 http://t.cn/AXxIlwPI<br>@QQ音乐 http://t.cn/AXxxiYsn<br>@酷我音乐 http://t.cn/AXxxiYsm ​​​ http://mapi/005XirXMly1icfde9hc69j315o15ox6p | |
| WB202604221050 | 2026/4/22 10:50 | #刘宇宁的2025巡演# 收官。<br><br>这一年多。我一直在寻找快乐。寻找热爱。<br>关于唱歌。关于表演。关于我自己。<br>所以。我把二专和巡演都叫「刘宇宁的」。<br><br>9个月。9座城。16场演出。<br>76首歌。58套衣服。近80个小时的物料拍摄。<br>我不知道。这些数字算多算少。但数字。会最诚实地记录「刘宇宁的」每个细节。<br><br>我想唱更多的歌给大家听。<br>不管来的是歌迷还是剧粉。都能听到想听的。<br>我想换更多造型给大家看。<br>不管你们追了多少个城市。每次都还能有新鲜感。<br>我想做的。我能做的。我都会尽力。<br>而我也看到了你们每一个人的努力。<br>六年前的票根。留到了现在。如约而至。<br>手机屏幕上天南地北的地点。不远万里。<br>全场一万人同时变出来的加油和祝福。震撼。<br>有80多岁的老人。也有刚刚1米2的小孩。<br>有帮媳妇儿拿高压锅抢票的人中之龙。<br>也有在场外默默等待孩子看演出的父母。<br>有太多太多动人的表情和画面。我都会好好收藏在记忆里。<br>这一路有你们。真好。<br><br>谢谢和我合作的主办方。老朋友们。默契不必多说。<br>谢谢导演组。导摄。视效。灯效。舞美。电影机。视频组的伙伴们。把「刘宇宁的」宇宙。从概念变成现实。<br>谢谢音乐。调音。混音。音响。舞团的伙伴们。每个音符。每个舞步。都尽兴了。<br>谢谢妆发。造型。宣传组的伙伴们。全力以赴。让每个我。都不同。<br>谢谢大飞阿卓。这么多年。从不缺席。永远全勤。<br><br>最后。特别谢谢喜欢「刘宇宁的」每个你。<br>因为。「刘宇宁的」巡演。不止是刘宇宁的。<br>舞台上。灯光下。有我们一起共创的灵感瞬间。<br>沿途。有快乐。有热爱。还有始终如一的陪伴。<br>我看到大家说有严重戒断反应。我也会有。<br>习惯了每个月排练。拍摄。演出。和大家见面。<br>最终。还是要回到平凡的日子里。<br>生活中的光。微亮。但一直都在。<br>你我。也一直都在。 | 005XirXMly1icemkpycr1j32ws1xw4qs.jpg;005XirXMly1icemkt96uyj36bk47sqvi.jpg;005XirXMly1icemkuyntkj335s23w1l0.jpg;005XirXMly1icemkw1v2mj32801hdb29.jpg;005XirXMly1icemkyz0qdj34mo3347wo.jpg;005XirXMly1iceml2qcsbj34mo3341l6.jpg;005XirXMly1iceml5ovycj34tc37k1l1.jpg;005XirXMly1iceml753ogj32lo1qgkjm.jpg;005XirXMly1iceml8v7zbj32pc1swqv7.jpg;005XirXMly1icemko7wn9j32nf1rmb2c.jpg;005XirXMly1icemlef8xvj378x4tyx76.jpg;005XirXMly1icemlhj2mxj362x41y1l8.jpg;005XirXMly1icemlk61isj33uw2knqv9.jpg;005XirXMly1icemlmlvmcj33iq2chu12.jpg;005XirXMly1icemlos4dgj36ag471kjr.jpg;005XirXMly1icemlpx556j335s23w1kz.jpg;005XirXMly1icenzh7r7xj31hc0u0gnx.jpg;005XirXMly1icenzp7ohij31hc0u0mz0 |
| WB202604211920 | 2026/4/21 19:20 | 地宫已开。摸金归来。#刘宇宁新歌天星术##电影寻龙诀觅踪# 主题曲上线。五年前录的歌。终于可以听啦。<br>@酷狗音乐 http://t.cn/AXxfU7xl<br>@QQ音乐 http://t.cn/AXxfU7xW<br>@酷我音乐 http://t.cn/AXxfU7xj ​​​ | 005XirXMly1icecorj64nj32bc2bckjo.jpg |

# 开发者模式

如果需要在开发者模式下预览，可以在 `vite.config.js` 的 `plugins` 里面注释掉 `monkey`，然后 `npm run dev` 并在浏览器打开 `http://localhost:5173/` 这样就可以预览，此时加载csv后不会显示图片，因为微博禁止图片外链。

如果需要显示想看的微博用户的个人资料，可以在 `vite.config.js` 的 `define` 里面修改。

# monkey模式

在 `vite.config.js` 的 `plugins` 里面取消 `monkey` 的注释后，`npm run build` ，然后把 `dist` 文件夹里输出的monkey代码复制到浏览器插件tampermonkey里面使用，此时才能正确加载图片。

# 为什么不能下载图片后直接显示

为了防止被微博屏蔽ip，如果短时间内大量下载微博图片会被禁止访问。

# 为什么要在 `weibo.com` 加载而不能单独使用

本应用只需要csv文件里有图片id即可加载，但是微博不允许图片外链，就是说不可以在 `weibo.com` 以外的地方使用微博图片链接，所以需要用tampermonkey在 `weibo.com` 加载。

# ！注意！

本应用只是显示已收集的微博内容，并不包含任何的爬虫代码，也没有任何爬虫教学，用户需要手动收集想看的内容，敬请注意。

如果不会使用或者发现bug，可以在这个repo里面开issue。

禁止修改我的代码，禁止上传我的代码到其他地方，禁止任何形式的滥用。
