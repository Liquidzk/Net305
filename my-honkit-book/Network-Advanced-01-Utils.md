# Network-Advanced-01 Utils

![](https://p.sda1.dev/22/3e67a9bb8199c4f48c0eae3162b2313a/Net305.png)

> `难度`：一般
> 
> 好了，在完成了计网基础知识的学习后，想必同学们已经对接下来更多的实践内容跃跃欲试了。
> 

> 但也不必畏难，本题会从比较简单的分析工具入手，循序渐进引导大家学会使用这些工具。
> 



### Part 1 pcap

在基础部分的学习中，我们似乎一直以图文和逻辑的方式来描述各式各样的网络行为，但是为了便于进一步分析，网络行为的描述方式显然是需要格式化的，而 pcap 正是一种描述网络行为的一个标准。

请自行查阅资料了解，按照自己的理解回答：

+ pcap 文件具体由什么组成？它能描述什么？
+ 常见的分析 pcap 文件的工具有哪些？

### Part 2 libcap

现在你知道pcap是什么了，接下来请先自行在 Linux 环境下安装 libcap 库，并下载群里的文件`advanced01p2.pcap`。

+ 请编写一个程序，使用libcap打开并读取`advanced01p2.pcap`，打印出文件中的每一条报文的基本信息（如时间戳、源IP、目标IP等）。
+ 在第一小问的基础上，读取报文的过程中，提取每个报文的源IP和目标IP地址以及源端口和目标端口，计算每个不同的流（flow）。
+ 统计并筛出文件中有多少独立的 flow，并且思考如何根据文件分析出每个 flow 的持续时间、分布等，给出实现就更好了。

#### Tips
- libcap支持获取时间戳

### Part 3 Wireshark

> 学计网怎么能不玩玩大名鼎鼎的抓包软件 Wireshark 呢？

同样的，先自行下载一只wireshark，然后根据操作做：

1. 准备一个txt文件，到http://gaia.cs.umass.edu/wiresharklabs/alice.txt 将里面的文本复制到你的txt文件中。
2. 进入 http://gaia.cs.umass.edu/wireshark-labs/TCP-wireshark-file1.html ，点击选择档案按钮选择你之前准备好的txt文件。
3. 打开Wireshark应用，选择WLAN接口。（注：进行这一步操作时不点击下面的Upload alice.txt file按钮）
4. 回到http://gaia.cs.umass.edu/wireshark-labs/TCP-wireshark-file1.html 页面，点击Upload alice.txt file按钮。如果一切正常你会看到

```
Congratulations!
You've now transfered a copy of alice.txt from your computer to gaia.cs.umass.edu. You should now stop Wireshark packet capture.lt's time to start anayzing the captured Wreshak packets
```
接下来，转到Wireshark，开始想办法分析你的报文，并回答：
+ 你的客户机（source）使用哪个IP地址和TCP端口号向gaia.cs.umass.edu传输文件？
+ gaia.cs.umass.edu的IP地址是多少？其收发TCP报文的端口号是多少？
+ 客户机（source）发送给gaia.cs.umass.edu建立TCP连接的SYN报文的序列号是多少？报文中的哪
个部分标识了报文是一个SYN报文？
+ gaia.cs.umass.edu响应客户机的第一个SYNACK报文的序列号是多少？这个报文中Acknowledgement字段的值是多少？为什么gaia.cs.umass.edu决定使用这个值作为响应报文中Acknowledgement字段的值？
+ 找出第一个包含“HTTP POST”的TCP报文的序列号？（提示：寻找data域中包含"POST"的报文）
+ 从上个问题找出的TCP报文开始（包含上个问题找出的报文），求接下来6个报文的大小？
+ 这些TCP报文中有重新传输的报文吗？你是如何判断的？


### 提交方式

将题目中要求的提交的总结内容利用 Markdown 格式进行编辑，并存为 PDF 文件。将其与你的源代码一起提交至邮箱：liquidzk@outlook.com

文件名要求：姓名-学号-Advanced01.pdf ，有代码的话一起打包为：姓名-学号-Advanced01.zip 

# 出题者联系⽅式
> <font style="background-color:#FFFFFF;">QQ：492928615</font>
>
> 邮箱：liquidzk@outlook.com
>

---