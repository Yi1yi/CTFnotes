要确保 replacement 构成一个合法的 PHP 代码字符串，否则 PHP 会在报告在包含 preg_replace() 的行中出现语法解析错误

**preg_replace函数原型：**

mixed preg_replace ( mixed pattern, mixed replacement, mixed subject [, int limit])

**特别说明：** **==/e 修正符使 preg_replace() 将 replacement 参数当作 PHP 代码（在适当的逆向引用替换完之后）==**。提示：要确保 replacement 构成一个合法的 PHP 代码字符串，否则 PHP 会在报告在包含 preg_replace() 的行中出现语法解析错误。 举例：

```
<?php
preg_replace ("/(</?)(w+)([^>]*>)/e",
"\1.strtoupper(\2).\3",
$html_body);
?>
```

这将使输入字符串中的所有 HTML 标记变成大写。

安全威胁分析： 通常subject参数是由客户端产生的，客户端可能会构造恶意的代码，例如：

复制代码 代码如下:

```
<?
echo preg_replace("/test/e",$_GET["h"],"jutst test");
?>
```

如果我们提交?h=phpinfo()，phpinfo()将会被执行（使用/e修饰符，preg_replace会将 replacement 参数当作 PHP 代码执行）。