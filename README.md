# Hugo-theme-diaspora
## Port of WordPress theme diaspora to Hugo. [中文文档](https://github.com/honjun/hugo-theme-diaspora/REAAME-zn.md)
Thanks to WordPress theme author @Loeify

Preview: [demo](https://diaspora.hojun.cn/)
![](https://cdn.jsdelivr.net/gh/hojun2/hojun2.github.io/img/diaspora.jpg)

## QQ group
If you are a user, plus group QQ: 801511924

If you are a creator, plus group QQ: 194472590

##  Download and install
Cd  < YOUR Bolg Root Dir to your blog root directory > 
git clone git @ github.com:honjun/hugo-theme-diaspora.git themes/Diaspora
## use
Simply cut the contents of the exampleSite under the theme to the root directory to replace the replacement.

### Modify the configuration, just modify the changes.
```yml
# [Change] Change your blog URL 
baseurl = "https://hojun2.github.io" 
# [Do not change] Language setting Chinese 
languageCode = "zh-CN" 
# [Do not change] If Chinese/Japanese/ Korean language. Please set to true in order for .Summary and .WordCount to execute correctly. 
hasCJKLanguage = true 
# [Change] Site title 
title = "素锦" 
# [Do not change] Theme name 
theme = "Diaspora" 
# [Do not change] Theme directory 
themesDir = "./themes/" 
# [Do not change] Set the number of entries in the list page, the default 10 
paginate = 10 
# [Do not change] Disable the directory to lowercase 
disablePathToLower = true 
# [Do not change] Set the automatic summary (summary) characters The number is 50. If the article description is empty, the summary will automatically use the first 50 characters of the article as the summary. 
summaryLength = 50 

# [Custom] Set the icon of the list page to display the number of words in the default display true/false display / not display
[params.iconshow] 
    # display classification 
    category to true = 
    # is not displayed series (related) 
    Series to false = 
    # display tag 
    Tag to true = 

# [] does not change the Classification Tag Series category 
[Taxonomies] 
  category = "the Categories" 
  Tag = "Tags" 
  Series = "series" 
# [Do not change] Generate link configuration 
[permalinks] 
    post = "/:year/:month/:day/:slug" 
# [Change] How to change the personal parameters, this should be. 
[params] 
    # Tell me who you are 
    author = "hojun" 
    bio = "Blogger - Programmer - Gopher" 
    location = "Earth" 
    site_description = "hojun's hugo static blog"
    Copyright = "Powered by [Hugo](//gohugo.io). Theme by [PPOffice](http://github.com/ppoffice)." 
    avatar = "css/images/avatar.png" 
    # Enter your email address To display your Gravatar icon in the profile. If not set the theme 
    # will fallback to the avatar. 
    gravatar = "you@example.com" 
    logo = "css/images/logo.png" 
    disable_mathjax = false # set to true to disable MathJax 

    # define which types of pages should be shown. By default the type with the most regular pages 
    mainSections = ["post"] 

    # Format dates Go's time formatting 
    date_format = "January 2, 2006" 

    #Add custom assets with their paths relative to the static folder 
  custom_css = [] 
  custom_js = [] 

# [custom] navigation bar menu configuration 
[[params.menu]] 
    name = "About" 
    link = "/about/" 
    target = " _blank" 
[[params.menu]] 
    name = "Links" 
    link = "/links/" 
    target = "" 
[[params.menu]] 
    name = "Archives" 
    link = "/archives/" 
    target = "" 
[[ Params.menu]] 
    name = "Categories" 
    link = "/categories/" 
    target = "" 
[[params.menu]] 
    name = "Tags" 
    link = "/tags/" 
    target = "" 


[social] 
# TODO
```
### about, links page 
About directly content\about\_index.mdmodify the md content.

Links directly \content\links.mdadded below
```yml
- url : https://www.banxia.me 
  name : Pinellia small stack 
  desc : Pinellia small stack
```
This form of friendship information can be.

### About the article header
The default format is \archetypes\default.md and the content is as follows:

```yml
---
 # title does not change the 
title : " {{.Name the replace " - "" "| title}}" 
# date does not change 
DATE : {{}} .date 
# classification change 
the Categories : 
 - Life 
# series (related) Articles Change 
series : XXX 小记
# tag change 
tags : 
 - tag one 
 - tag two 
# article music default to the next value change 
mp3 : http://isujin.com/wp-content/uploads/2016/01/ street loneliness.mp3 ? _ = 1 
# articles cover art for the next value to change the default 
cover :Https://cdn.jsdelivr.net/gh/hojun2/hojun2.github.io/img/wallhaven-672007-2.jpg 
#文章Keyword plus 
keywords :
 #文章介绍加/不加是default article first 50 characters 
description : 
---
```
##  2019.6 Update.  Site search
Thanks to lurr.js and hugo-lunr . This plugin is modified based on hugo-lunr and only adapts to the hugo-theme-diaspora theme. Other topics need to be modified. Install the plugin first (requires the npm tool to be installed)
```cmd
npm i hugo-lunr-diaspora
```
Then create a new package.json in the root of the blog, add the following content
```json
{
   " scripts " : {
     " index " : " hugo-lunr " 
  } 
}
```
Finally, cd to the blog root directory to run the npm run indexgenerated lurr.json file can use the site search. Note that you need to update the lurr.json file after updating the article.

## Ask the subject author for a cup of coffee
### Paypal
[paypal](https://www.paypal.me/hojuncn)
### Left hand collar red envelope, right hand reward
![](https://cdn.jsdelivr.net/gh/honjun/cdn@1.8/img/custom/donate/AliPayQRsmall.jpg)
### WeChat payment
![](https://cdn.jsdelivr.net/gh/honjun/cdn@1.8/img/custom/donate/WeChanSQsmall.jpg)