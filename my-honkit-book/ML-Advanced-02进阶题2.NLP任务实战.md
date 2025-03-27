## 2.NLP 任务实战
![](https://p.sda1.dev/22/3e67a9bb8199c4f48c0eae3162b2313a/Net305.png)

> `难度`：高
>

恭喜你来到了本次招新题的终点，这里我们需要进行一次完整自然语言处理（NLP）的项目实践。

### 2.1 任务简述

自然语言推理（Natural Language Inference，NLI），也称为文本蕴含识别（Recognizing Textual Entailment，RTE）是自然语言处理中的核心任务之一。

NIL任务主要是判断两个句子之间的逻辑关系。这两个句子通常被称为前提（Premise）和假设（Hypothesis）。而对于前提与假设，语言模型需要判断这两个句子分别属于以下的三种关系中的哪一种：矛盾（Contradiction）、蕴含（Entailment）和中立（Netual）。

目前，NLI任务在信息检索、问答系统、文本摘要等领域都有着广泛的应用。

在本题中，将会给出一个数据集，数据集示例如下所示（具体以实际数据集为准，获取方式见2.2）：

```
A person on a horse jumps over a broken down airplane.        A person is training his horse for a competition.        neutral
A person on a horse jumps over a broken down airplane.        A person is at a diner, ordering an omelette.        contradiction
A person on a horse jumps over a broken down airplane.        A person is outdoors, on a horse.        entailment
Children smiling and waving at camera        They are smiling at their parents        neutral
Children smiling and waving at camera        There are children present        entailment
Children smiling and waving at camera        The kids are frowning        contradiction
A boy is jumping on skateboard in the middle of a red bridge.        The boy skates down the sidewalk.        contradiction
A boy is jumping on skateboard in the middle of a red bridge.        The boy does a skateboarding trick.        entailment
A boy is jumping on skateboard in the middle of a red bridge.        The boy is wearing safety equipment.        neutral
```

在这里，大家需要训练一个模型，其能够根据给定的句子对集合分辨出这两者之间的关系：contradiction， entailment, neutral。而任务的目标（即我们的评价指标），就是模型在测试集上的准确率（Accuracy）。我们并不限制大家选用模型的种类与参数量，搭建最适合本任务的模型是很重要的。

tips：不要忽略数据预处理、训练时的小trick、超参数的调整等问题，这些也同样重要！

### 2.2 提交要求

这里数据集已经被上载到 GitHub 仓库中的 dataset 文件中，仓库链接：https://github.com/Heinz217/Net305ML，文件名为classification.txt。需要大家自行按照合适的比例划分训练集和测试集。上交笔记文档：与前面的题目相同，本题也要求大家上交自己的笔记文档。文档中应该尽量包含：项目的实现逻辑、实现中遇到的困难与解决方案、在项目实战中的收获等。（内部公式最好利用 LaTeX 格式提交）

### 提交方式

将题目中要求的提交的总结内容利用 Markdown 格式进行编辑，并存为 PDF 文件。将其与你的源代码一起提交至邮箱：

文件名要求：姓名-学号-进阶题02.pdf 或 姓名-学号-进阶题02.py （若有）


# 出题者联系⽅式
> <font style="background-color:#FFFFFF;">QQ：2725411278</font>
>
> 邮箱：net305ml@163.com
>

---