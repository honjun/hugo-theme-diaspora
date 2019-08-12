# hugo-theme-diaspora
## 基于WordPress主题diaspora移植的Hugo主题 [英文文档](https://github.com/honjun/hugo-theme-diaspora/REAAME-zn.md)
感谢WordPress主题作者[@Loeify](https://github.com/LoeiFy/Diaspora)

预览：[demo](https://diaspora.hojun.cn/)
![](https://cdn.jsdelivr.net/gh/hojun2/hojun2.github.io/img/diaspora.jpg)

## 交流群
若你是使用者，加群QQ: 801511924

若你是创作者，加群QQ: 194472590

## 下载安装
```cmd
cd <YOUR Bolg Root Dir 到你博客根目录>
git clone git@github.com:honjun/hugo-theme-diaspora.git themes/Diaspora
```

## 使用

直接把主题下的exampleSite里面的内容剪贴到根目录覆盖替换即可。

### 修改配置 只需修改改部分
```yml
# 【改】 这里改你的博客网址
baseurl = "https://hojun2.github.io"
# 【不改】 语言设置中文 
languageCode = "zh-CN"
# 【不改】 如果使用了中文/日文/韩文语言。请设置为true，才能使.Summary和.WordCount正确执行
hasCJKLanguage = true
# 【改】 网站标题
title = "素锦"
# 【不改】 主题名称
theme = "Diaspora"
# 【不改】 主题目录
themesDir = "./themes/"
# 【不改】 设置list分页页面的条目数，默认10
paginate = 10
# 【不改】 禁用把目录改小写
disablePathToLower = true
# 【不改】 设置自动摘要（summary）的字符数为50 只有文章description为空才会使用summary自动获取文章前50字符为摘要。
summaryLength = 50

# 【自定义】 设置list页面的图标显示 其中字数默认显示 true/false 显示/不显示
[params.iconshow]
    # 显示分类
    category = true
    # 不显示系列（相关）
    series = false
    # 显示标签
    tag = true

# 【不改】 设置分类 category tag series
[taxonomies]
  category = "categories"
  tag = "tags"
  series = "series"
# 【不改】 生成链接配置
[permalinks]
    post = "/:year/:month/:day/:slug"
# 【改】 个人参数 怎么改 略，这应该要会了。
[params]
    # Tell me who you are
    author = "hojun"
    bio = "Blogger - Programmer - Gopher"
    location = "Earth"
    site_description = "hojun的hugo静态博客"
    copyright  = "Powered by [Hugo](//gohugo.io). Theme by [PPOffice](http://github.com/ppoffice)."
    avatar = "css/images/avatar.png"
    # Enter your email address to display your Gravatar icon in the profile. If not set the theme
    # will fallback to the avatar.
    gravatar = "you@example.com"
    logo = "css/images/logo.png"
    disable_mathjax = false # set to true to disable MathJax

    # define which types of pages should be shown. By default the type with the most regular pages
    mainSections = ["post"]

    # Format dates with Go's time formatting
    date_format = "January 2, 2006"

    # Add custom assets with their paths relative to the static folder
  custom_css = []
  custom_js  = []

# 【自定义】 导航栏菜单配置
[[params.menu]]
    name   = "About"
    link   = "/about/"
    target = "_blank"
[[params.menu]]
    name   = "Links"
    link   = "/links/"
    target = ""
[[params.menu]]
    name   = "Archives"
    link   = "/archives/"
    target = ""
[[params.menu]]
    name   = "Categories"
    link   = "/categories/"
    target = ""
[[params.menu]]
    name   = "Tags"
    link   = "/tags/"
    target = ""


[social]
# TODO
```

### 使用about、links页面 archives页面请不要碰她！

about直接在`content\about\_index.md`修改md内容就行。

links直接在`\content\links.md`下面追加
```yml
- url: https://www.banxia.me
  name: 半夏小栈
  desc: 半夏小栈
```
这种形式的友链信息即可。

### 关于文章头
默认格式在\archetypes\default.md，内容如下：

```yml
---
# 标题 不改
title: "{{ replace .Name "-" " " | title }}"
# 日期 不改
date: {{ .Date }}
# 分类 改
categories: 
 - 生活
# 系列（相关）文章 改
series: XXX小记
# 标签 改
tags: 
 - 标签一
 - 标签二
# 文章音乐 默认为下值 改
mp3: /mp3/街道的寂寞.mp3
# 文章封面图 默认为下值 改
cover: https://cdn.jsdelivr.net/gh/hojun2/hojun2.github.io/img/wallhaven-672007-2.jpg
# 文章关键字 加
keywords:
# 文章简介 加/不加 则默认文章前50字符
description: 
---
```

## 2019.6.站内搜索
感谢[lunr.js](https://github.com/olivernn/lunr.js)和[hugo-lunr](https://github.com/dgrigg/hugo-lunr)。
本插件基于hugo-lunr修改，仅适配hugo-theme-diaspora主题，其他主题需自行修改。
先安装插件（需要安装npm工具）
```cmd
npm i hugo-lunr-diaspora
```
然后在博客根目录下新建package.json，增加如下内容
```json
{
  "scripts": {
    "index": "hugo-lunr"
  }
}
```
最后cd到博客根目录下运行`npm run index`生成lunr.json文件即可以使用站内搜索。
注意更新文章后需要更新lunr.json文件

## 请主题作者喝杯咖啡
### paypal
[paypal](https://www.paypal.me/hojuncn)
### 左手领红包，右手打赏
![](https://cdn.jsdelivr.net/gh/honjun/cdn@1.8/img/custom/donate/AliPayQRsmall.jpg)
### 微信支付
![](https://cdn.jsdelivr.net/gh/honjun/cdn@1.8/img/custom/donate/WeChanSQsmall.jpg)