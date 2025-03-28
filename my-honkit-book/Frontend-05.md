# Frontend-05-前后端通信

![](https://p.sda1.dev/22/3e67a9bb8199c4f48c0eae3162b2313a/Net305.png)

> `难度系数`：有点难了
>
> 在前面的学习中，我们制作的页面都仅仅只使用了本地资源。接下来，我们就要迈入网络的世界了。在本节中，你将会了解互联网通信，学习AJAX，并将学到的知识应用在你第一节制作的blog profile页面中；你还将浅尝服务器端的相关知识，初试Node.js，熟悉Node.js环境，在本地搭建一个简易服务器，并在这个服务器上搭建自己的API。这道题将带领你从前端初级阶段，迈入高级阶段的大门。做好准备，咱们开始吧！

## **Part0 - 前置知识**

作为前端工程师，在一个大项目中不可避免的需要与后端开发者沟通。本题的目的在于带领你了解前端和后端是如何交互。Part1是站在前端开发者的视角，调用第三方的API；Part2是站在后端开发者的视角，自制一个API。除此之外，本题还将带领大家尝试使用Node.js —— 前端高阶开发的基础。Node.js是运行在服务器端的JavaScript，很多高阶的前端框架，如Vitepress（工作室的做题页面就是VitePress开发的）、Electron（VSCode就是用Electron开发的）都会使用Node.js的环境。同时Node.js也可以作为后端开发语言（虽然不是很常用），因此本题旨在带大家熟悉Node.js的环境，并为大家提供一个后端的视角，也为第四题做准备。

在动手开始改进你的blog profile页面之前，你可能需要了解以下知识：

- 计算机在互联网上如何交互与通信？什么是HTTP与HTTPS？什么是IP协议？
- HTTP请求分为哪些类型？GET和POST的区别？什么是请求行、请求头、请求体？
- HTTP响应是由哪些部分组成的？API往往响应什么类型的数据？了解一下JSON格式

## **Part1 - 利用第三方API**

#### **题目描述**

如果想在自己的页面调用第三方服务器上的内容，又不愿重新加载页面，就需要我们使用Ajax技术了。一般来说，网络上会提供一些免费的接口，供开发者使用，开发者可通过调用接口来获取相关信息。我们希望你利用网络上的一些API，来对你的blog profile页面进行美化。比如添加类似于下面这样的元素：

![image-20230910215533565](https://pic.imgdb.cn/item/64feefeb661c6c8e54840445.png)

#### **题目要求**

学习使用AJAX，通过调用API的方式将元素渲染到你的blog profile页面中。以下是一些推荐使用的API：

- [和风天气](https://dev.qweather.com/)
- [一言](https://developer.hitokoto.cn/sentence/)

在第一题的基础上加入一些元素，将美化后的页面上传到一个新的GitHub仓库当中，将GitHub链接分享给我们

#### **可能遇到的问题**

- 什么是HTTP请求？如何使用JavaScript发送HTTP请求？

- 如何测试一个API，请在本地上下载一个 Postman 或者 APIPost ，学习一下如何使用

- HTTP请求分为GET和POST等类型，在Internet上加载网页使用的是哪种请求？获取API一般又是哪种请求？

- AJAX是什么？什么是异步？异步有什么作用？以下是一些可以参考的资料链接。

  - [菜鸟教程 Ajax](https://www.runoob.com/ajax/ajax-tutorial.html)

  - [MDN Ajax](https://developer.mozilla.org/zh-CN/docs/Web/Guide/AJAX)

  - [异步是什么？](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Introducing)

  - 较难的问题可以参考B站上的视频教程

    

## **Part2 - 搭建一个自己的API**

#### **题目描述**

在上面的题目中，你已经学会使用第三方的API来美化你的博客。那么，API是如何工作的？我可以写一个自己的API吗？学习使用Node.js，尝试自己编写一个API。

#### **题目要求**

##### **step1**

1. 下载Node.js
2. **截图记录**你用Node.js搭建服务器并利用服务器在**命令框**和**浏览器**上分别显示“hello，net305”的整个过程
3. 在markdown上写下你的过程，提交一个PDF文件

##### **step2**

1. 学习使用npm，并利用npm下载express框架（关于npm下载的过程需要**截图**）
2. 学习使用express框架，并利用express框架，制作一个自己的API
3. API的功能可以仿造之前的[一言](https://developer.hitokoto.cn/sentence/)API，在句子库里随机取一个句子作为返回结果

##### **step3**

1. 使用Postman 或者 ApiPost 测试这个API，将测试界面截图
2. 整理你所有的截图，新建一个markdown文件，**在md中附上你的Node.js代码和截图**，导出为pdf，交给我们欣赏一下吧🥰

##### **可能遇到的问题**

我该怎么规范定义我的 API ？ 这里可以看看 [Restful API](https://www.ruanyifeng.com/blog/2014/05/restful_api.html) 规范。

**Node.js入门教程** 

- [学习教程 | Node中文网](https://dev.nodejs.cn/learn/) 
- [Node.js 教程 | 菜鸟教程](https://www.runoob.com/nodejs/) 

**很多同学可能发现Node.js和之前学习的JavaScript不太一样，大家可以参考下面两个链接**

- [需要了解多少 JavaScript 才能使用 Node.js？](https://dev.nodejs.cn/learn/how-much-javascript-do-you-need-to-know-to-use-nodejs/)
- [Node.js 和浏览器之间的区别?](https://dev.nodejs.cn/learn/differences-between-nodejs-and-the-browser/)

**express框架可以参考哪些教程？**

- [Express 教程 |Node.js中文网 ](https://express.nodejs.cn/en/starter/installing.html)
- [Node.js Express 框架 | 菜鸟教程](https://www.runoob.com/nodejs/nodejs-express-framework.html)
- 较难的问题可以参考B站上的视频教程

## **更进一步？**

感兴趣的同学还可以试试了解**注册和登录的原理**（cookie和session），进一步加深你对前后端通信的理解，**这个部分可以不提交，提交可以作为加分项**。

正如我之前提到的，你可以继续使用Node.js作为后端语言（较为困难）；或者如果你曾经学过Python的话，你可以很快上手flask框架（亲测简单而且好用）来编写以下的功能：

- 用户可以登录和注册，并且可以保存登录状态。在未登录时，无法查看博客。（也就是关闭页面后，一段时间内再次打开页面，还能保持登陆状态，并且**没有登录状态的时候，不能访问日历界面**）
- 支持多个用户登录，用户不能查看别人的博客，用户登录的用户名和密码需要保存在数据库中（若没有学过数据库，也可以保存在JSON文件中）。

### 提交方式

将题目中要求的提交的总结内容利用 Markdown 格式进行编辑，并存为 PDF 文件。将其与你的源代码一起提交至邮箱：3062803169@qq.com

文件名要求：姓名-学号-前端05.pdf ，有代码的话一起打包为：姓名-学号-前端05.zip 

# 出题者联系⽅式
> <font style="background-color:#FFFFFF;">QQ：3062803169</font>
>
> 邮箱：3062803169@qq.com

---