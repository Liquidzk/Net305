## 4.多层感知机(MLP)实践
![](https://p.sda1.dev/22/3e67a9bb8199c4f48c0eae3162b2313a/Net305.png)

> `难度`：中等
>

在完成本节的任务2后，相信你对于线性回归与梯度下降法有了一定的认识。在本题中，我们将会针对多层感知机进行一次实现。多层感知器（英語：Multilayer Perceptron，缩写：MLP）是一种很基本的历史悠久神经网络，其在深度学习领域中的应用是极为普遍的，被极多的模型采用而作为其基本架构的一部分。这里你需要针对多层感知机做一些具体的实现：

### 知识准备

* MLP 是一个结构简单的模型，查阅相关文献，对 MLP 的计算过程与原理做出自己的理解

可以参考李沐和吴恩达的网课视频进行学习。同时，也建议阅读《深度学习(deeplearning)》（花书）的第六章节的部分内容，以获得一个较为完整的认识。

阅读文献后你需要掌握的概念

* 什么是微积分的链式法则？
* 反向传播是什么？是怎样实现的？
* 什么是激活函数，有哪些基本种类，作用如何？

### 进行实践

在本题中，我们将逐步实现一个分类任务，其具体实现主要有以下的流程（这也是绝大多数深度学习任务的基本流程）

1. 数据集加载
2. 数据预处理与数据集的划分
3. 搭建网络架构
4. 设计 train 函数，对模型进行训练，完成参数更新
5. 设计 test 函数，在不同的参数指标下对模型训练效果进行评估

我们此次的任务是一个有趣的分类任务：研究者搜集了大量大学生生活情况相关的数据（其中包括学生的课堂出勤率、父母的职业、所处地区的GDP、失业率等）。我们需要做的就是对于不同学生的条件进行分析，从而对于学生是否能够顺利毕业做出预测（分类）

这里是有关该数据集的具体介绍，有兴趣的同学们可以简要阅读一下

[https://archive.ics.uci.edu/dataset/697/predict+students+dropout+and+academic+success](https://archive.ics.uci.edu/dataset/697/predict+students+dropout+and+academic+success)

这里数据集已经被上载到 GitHub 仓库中的 dataset 文件中，仓库链接：https://github.com/Heinz217/Net305ML ，文件名为dataset.csv。需要大家自行按照合适的比例划分训练集和测试集。

#### **本任务主要需要的库：**

```
import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import Dataset, DataLoader
import pandas as pd
import numpy as np
import matplotlib as plt
```

#### 数据加载与预处理：

在这里，建议首先利用pandas对文件进行阅读，随后针对数据做归一化等操作，使得神经网络可以正常接收数据，并能够使得数据发挥其最大的作用

#### MLP模型定义：

这里我们需要完成\_\_init\_\_()与forward()，从而实现模型的搭建：

```
class MLP(nn.Module):
    def __init__(self, ...... ):
        super(MLP, self).__init__()
​
​
    def forward(self, x):
​
```

#### train函数与test函数的构建：

这里需要大家进行手动搭建。值得注意的一点是，相比于train函数，test函数并不需要进行梯度的更新。

#### 其他：

在训练过程中，十分推荐大家利用 matplotlib 库将训练的 loss 图像画出来

### 思考：

1. 本任务中，数据预处理的方式有什么？预处理又有什么具体作用？
2. 本任务中，你使用了什么损失函数，又使用了怎样的优化器？它们的具体算法是怎样的？
3. 关于MLP模型，是否可以尝试一下进行正向传播与反向传播的手动推导？
4. 过拟合是什么？欠拟合又是什么？在你的任务中有没有出现类似的问题呢？这又该怎样解决？

### 需要提交部分：

1. 上述完整的可运行代码，做好相关注释
2. 关于此题实现的简要笔记与感想（包括：遇到了什么问题？又是怎样解决的？）
3. （拓展）在该任务中，相信大多数同学的模型评价指标都是准确率(accuracy)。那么，是否可以用其他评价指标进行模型评估呢？这些评估指标的侧重点又在哪里？

### 拓展

在第三题，我们实现了可自动微分的计算图，现在，让我们在此计算图的基础上实现其他算子与组件，以此来搭建一个简单的多层感知机。

在完成拓展之前，请确保您已经掌握了激活函数、损失函数、优化器的概念，并对上面这些的几种常见实例有了解。

下面我们分别来实现这些不同的组件：

* 线性层Linear的实现 \$\$\\mathrm{Linear}\$\$即多层感知机每一线性层的实现，它主要完成\$\$\\mathrm{W \* X+b}\$\$的计算

```
class Linear:
    def __init__(self, ...):
        self.weight = ...
        self.bias = ...
        ...

    def forward(self, ...):
        ...    
```

对于线性层的实现，您需要考虑如下内容：

* 线性层的权重(weight)和偏置(bias)如何初始化
* 线性层在初始化时需要定义哪些参数
* 激活函数 activation 的实现

以sigmoid为例：

```
class Sigmoid:
    def __init__(self, ...):
        ...

    def forward(self, ...):
        ...
```

* 损失函数loss的实现

以MSELoss为例：

```
class MSELoss:
    def __init__(self, ...):
        ...

    def forward(self, ...):
        ...
```

* 优化算法 optimizer 的实现

以SGD为例：

```
class SGD:
    def __init__(self, params, ...):
        ...
    def step(self):
        ...
    def zero_grad(self):
        ...
```

对于该模块的实现，您需要考虑以下内容：

* SGD初始化所需参数params是什么params从我们实现的这些组件中的哪个组件中的什么成员变量来作为输入？
* 方法step和zero\\\_grad的作用是什么？

实现完成上述组件后，让我们用这些组件来实现本题的MLP任务，您的代码类似下面这样：

```
net = Linear(...)
loss = MSELoss()
optimizer = Adam(...)
​
for epoch in range(num_epochs):
    for X, y in ...:
        optimizer.zero_grad()
        l = loss(net(X), y)
        l.backward()
        optimizer.step()
        ...
    ...
...
```

注意：使用您自己写的组件来完成本题的MLP任务时，即完成本拓展题时，您所搭建的多层感知机只需有**一个线性层**即可。也就是说，本拓展题不注重您使用您自己的组件完成该任务的准确率，只需证明使用您的组件完成该任务能够正常执行梯度下降、减小损失值即可。（搭建多个线性层还需编写类似于Pytorch中的nn.module的Module类，过于复杂，故不作进一步要求）

### 提交方式

将题目中要求的提交的总结内容利用 Markdown 格式进行编辑，并存为 PDF 文件。将其与你的源代码一起提交至邮箱：net305ml@163.com

文件名要求：姓名-学号-中档题04.pdf 或 姓名-学号-中档题04.py （若有）

# 出题者联系⽅式
> <font style="background-color:#FFFFFF;">QQ：2725411278</font>
>
> 邮箱：net305ml@163.com
>

---