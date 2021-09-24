# buuctf RE WP

##### easyre。

​			无壳，直接给flag![image-20210419085455451](/home/carrym/.config/Typora/typora-user-images/image-20210419085455451.png)

##### reverse1。

​			无壳，查看所有字符串，

![image-20210419085815211](/home/carrym/.config/Typora/typora-user-images/image-20210419085815211.png)

查看调用的函数，两字符cmp，找到flag

strncmp(参数1，参数2，参数3)参数1、2相比参数3长度，相同返回0

##### reverse2。

​			无壳，

![image-20210419090810141](/home/carrym/.config/Typora/typora-user-images/image-20210419090810141.png)

子线程对程序没有影响，暂不考虑。

获得字符串后将i和r替换成1得到flag

##### 内涵的软件。

​			无壳，查看字符串得到flag

##### 新年快乐。

​			upx，查看对比字符串得到flag

##### helloword。

​			dex，在Windows环境下要用powershell打开d2j到转到jar文件格式，然后gui得到flag

##### xor。

​			![image-20210419092756521](/home/carrym/.config/Typora/typora-user-images/image-20210419092756521.png)

​	解题代码↓

![image-20210419092913873](/home/carrym/.config/Typora/typora-user-images/image-20210419092913873.png)

##### reverse3。

​			![image-20210419093215378](/home/carrym/.config/Typora/typora-user-images/image-20210419093215378.png)	![image-20210419093248146](/home/carrym/.config/Typora/typora-user-images/image-20210419093248146.png)

解题代码↓

![image-20210419093716578](/home/carrym/.config/Typora/typora-user-images/image-20210419093716578.png)

然后发现错了，错了就对了。漏看了一个函数就是这里的v1

![image-20210419095352091](/home/carrym/.config/Typora/typora-user-images/image-20210419095352091.png)

![image-20210419095413107](/home/carrym/.config/Typora/typora-user-images/image-20210419095413107.png)

这里一看就盲猜base64了

把上一步的flag  base64解码得到真正flag

![image-20210419095601228](/home/carrym/.config/Typora/typora-user-images/image-20210419095601228.png)

##### 不一样的flag。

无壳，这是一题走迷宫的题，网上wp大多都不是按程序代码方面来解题。也是花费了很长的时间

![image-20210419151457793](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210419151457793.png)

这里v6 的if可以不看，大致上就是往下v4+=1等等

![image-20210419151617055](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210419151617055.png)

最关键的判断在这里。这里v8地址上是没有值的，网上的wp也多没解释。

for循环判断v4和v5是否在0和4之间

我们看到这里取v8地址后又-41如果等于1或者#做出响应

我们点开v3的地址发现与v8正好相差十六进制的41由此很明显就是要通过5*v4+v5要不等于0

![image-20210419163619644](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210419163619644.png)

艰难的尝试。这是原理上的，还是网上wp做法简单。

![image-20210419163426634](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210419163426634.png)

##### SimpleRev。

​			无壳，这题当初花费了很多时间。先在这讲一下long long的类型

​					当一个赋值为一长串数字+`LL`的时候表示long long型	

```
先转成16进制再转成字符串（小端序）
```

![image-20210419120659827](buuctf%20RE%20WP.assets/image-20210419120659827.png)

先将key的大写转小写

![image-20210419120736425](buuctf%20RE%20WP.assets/image-20210419120736425.png)

这里其实运算是一样的

解题代码↓

![image-20210419121126433](buuctf%20RE%20WP.assets/image-20210419121126433.png)

讲解一下这里的

```python
target+=''.join([chr(int(b,16)) for b in [a[i:i+2] for i in range(0,len(a),2)]])[::-1]
```

是将十六进制转成字符串，因为LL是小端序，最后取一个逆

##### java逆向解密。

​			class，拖gui

![image-20210419121645957](buuctf%20RE%20WP.assets/image-20210419121645957.png)

比较简单，当时耗费比较久。就当练习写python脚本

![image-20210419122119547](buuctf%20RE%20WP.assets/image-20210419122119547.png)

##### 刮开有奖。

​				无壳，主要流程

![image-20210419164227561](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210419164227561.png)

![image-20210419164319294](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210419164319294.png)

这里的4010F0

![image-20210419172639723](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210419172639723.png)

![image-20210419172707834](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210419172707834.png)

40100是base64编码，编写时实力不够对该段还不够了解。

![image-20210419180609487](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210419180609487.png)

![image-20210419180634896](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210419180634896.png)

![image-20210419180707734](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210419180707734.png)



#####luck_guy。

​				无壳，主要的patch流程

![image-20210419122343069](buuctf%20RE%20WP.assets/image-20210419122343069.png)

解题代码↓

![image-20210419122804758](buuctf%20RE%20WP.assets/image-20210419122804758.png)

##### findit。

​				apk，这题主要是要合适的工具。之前没有安卓逆向，比较生疏。

用的解压apk然后dex转jar放到jd-gui里。无解，没有字符串。尝试用了jadx和jeb。关于这题jadx逻辑比较清晰

![image-20210420150605992](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210420150605992.png)

没什么好讲的，跟着打脚本就行。

解题代码↓

![image-20210420150733936](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210420150733936.png)

##### 简单注册器。

​				apk，这题意外的简单

![image-20210420151223070](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210420151223070.png)

解题代码↓

![image-20210420151329369](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210420151329369.png)

`字符串不能用下标进行替换，得转成列表`

##### pyre。

​				pyc，花费了很长时间。写的时候想起“靡不有初，鲜克有终”，或许re的道路、安全的道路就是在坚持中痛苦下去。很菜，很菜，但要做到没人能说我。

![image-20210421221558190](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210421221558190.png)

反编译后。相比网上的wp我用的比较蠢的方法。先将数组倒过来，在进行==与==运算。当时考虑的是最后一个不会进行运算。直接倒过来然后套用脚本就行。脚本会比较杂乱，也是因为python比较不熟

![image-20210421221808328](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210421221808328.png)

==简化后==

![image-20210421225120768](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210421225120768.png)

##### justRE。

​				无壳，搜索字符串

![image-20210422191210066](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210422191210066.png)

先打开调用再说

![image-20210422191255285](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210422191255285.png)

代码逻辑看都不看，这里flag很明晰是个格式化字符串，带入后面两个参数就是flag

##### rsa。

​			key和enc，题目就是rsa。明显的rsa题目

 			[RSA算法原理.pdf](../../) 

![image-20210430161407026](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210430161407026.png)

将key后缀的公钥解析成十六进制再转10进制找质数

![image-20210430161607092](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210430161607092.png)

(随机选择一个整数e，条件是1< e < φ(n)，且e与φ(n) 互质。

实际应用中，常常选择65537

e=65537)

解题代码↓

![image-20210430162226460](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210430162226460.png)



#####CrackRTF。

​				无壳，part1↓

![image-20210425213620388](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210425213620388.png)

![image-20210425213719612](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210425213719612.png)

这里数字有一个范围，6位数的（100000   ->    999999）可以爆破对比hash值

![image-20210425213956847](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210425213956847.png)

part2

​		![image-20210425214243311](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210425214243311.png)

![image-20210425215310611](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210425215310611.png)

![image-20210425214954982](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210425214954982.png)

WriteFile的第二个参数就是lpBuffer。也就是说，要将lpBuffer指向的数据写入RTF文件。那么RTF文件的开头肯定是RTF文件头，而这个文件头就是由lpBuffer起初指向的数据，即”AAA”的数据，与我们第二次输入的字符串（String的前6位）进行异或得到。又因为异或的逆运算就是异或，所以我们只需要将RTF文件头前6位与”AAA”的数据前六位异或，就能得到我们第二次输入的6位字符串。



用resource Hacker 工具取到exe里的aaa文件信息

![image-20210425215512387](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210425215512387.png)

![image-20210425215558054](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210425215558054.png)

运行程序，按顺序输入会在程序所在文件夹创建一个flag的rtf。

##### easyre1。

​				tar、upx，

![image-20210425091738421](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210425091738421.png)

v4是给的字符串，v16开始是flag，长度12。

![image-20210425085422914](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210425085422914.png)

v4与data_start数组中的字符串比较，data_start数组中的下表进行减法得到flag的ascii值

解题代码↓

![image-20210425092012891](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210425092012891.png)

##### easyRE1。

​					elf,f5的时候出现这个可以在选项-通用-打开栈指针

![image-20210427083648012](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210427083648012.png)

![image-20210427083911368](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210427083911368.png)

将红色上方的蓝色改成其他非负的就行

回到程序本身，有很多函数很容易混淆（有很多函数没有读，看着wp做的题。这题还可以深入学习一下）。查找字符串

![image-20210427084153380](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210427084153380.png)

查看交叉引用的函数，前面赋值一堆字符

![image-20210427084536055](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210427084536055.png)

字符==与==运算当前的下标，得到

![image-20210427084736267](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210427084736267.png)

这里提示后面会用到

接下来

![image-20210427084915719](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210427084915719.png)

![image-20210427085335863](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210427085335863.png)

给了个网站，没什么用

流程下没有其他有用函数了

![image-20210427112710680](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210427112710680.png)

![image-20210427112857819](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210427112857819.png)

![image-20210427113030328](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210427113030328.png)

提示是前四位flag，那么byte_6cc0a0[0]是f，byte_6cc0a3[0]是g中间两位应该就是ag了

for循环的就是真正的flag，每次==与==上v2里面的数

解题代码↓

![image-20210427113505745](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210427113505745.png)

##### rome。

​				tar->exe，无壳

![image-20210428090723838](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210428090723838.png)

用爆破得到flag

解题代码↓

![image-20210428090142652](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210428090142652.png)

##### ？Youngter-drive。

​			upx，

![image-20210524163340938](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210524163340938.png)

数据处理↓

![image-20210524163833959](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210524163833959.png)

flag判断↓

![image-20210524163957361](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210524163957361.png)

流程：数据处理完->跟字符串(off_418003)对比

![image-20210524164110509](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210524164110509.png)

解题代码↓

![image-20210524164217062](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210524164217062.png)

数据处理是30（1D->0）次，对比只比较了1d次所以flag末尾少一个。

网上通过爆破得到最后一个字母E，该题有进一步研究的空间

##### login。

​				html,

![image-20210524164809469](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210524164809469.png)

rot13，解题代码↓

![image-20210524164859516](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210524164859516.png)

##### ？re1。

​				upx，elf

字符串搜索，跳到关键函数

![image-20210524165507280](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210524165507280.png)

流程：输入flag->进if判断

​	sub_4009AE函数↓

![image-20210524165617353](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210524165617353.png)

可以用z3约束器做

这里对比没有a1[6],爆破得到。有进一步研究空间

![image-20210524170624361](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210524170624361.png)

由于题目里的比较换了位置。得手动自己调

##### SingIn。

​				无壳、elf，

![image-20210524191649847](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210524191649847.png)

这里的__gmpz_init_set_str是一个GMP(The GNU Multiple Precision Arithmetic Library)又叫GNU多精度算术库，提供了很多操作高精度的大整数。

![image-20210524191806341](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210524191806341.png)

解题代码↓

![image-20210524192047264](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210524192047264.png)

##### 相册。

​		apk，

apk里面没什么有用信息，题目信息提示flag是邮箱

查找邮箱

![image-20210524192802353](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210524192802353.png)

![image-20210524192907970](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210524192907970.png)

右键->跳到说明(查看调用的函数)

![image-20210524193041374](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210524193041374.png)

到这里应该就是native层的数据进行base64的解码

​	分别是：

![image-20210524193434525](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210524193434525.png)

##### easy。

​		无壳，main函数里面没有有用信息。

![image-20210525082245826](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210525082245826.png)

找自定义的函数，这个函数没有被调用

![image-20210525082219822](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210525082219822.png)

并且是输出了一些字符的

![image-20210525082442140](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210525082442140.png)

![image-20210525082502653](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210525082502653.png)

直接动调或patch跳到这个函数，运行输出flag

![image-20210525084337420](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210525084337420.png)



##### xxor。

​		exe，无壳

![image-20210804221803332](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210804221803332.png)

![image-20210804221914686](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210804221914686.png)

关键代码↓

![image-20210804221939907](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210804221939907.png)

解题代码↓

![image-20210804222530373](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210804222530373.png)



##### IgniteMe。

​					exe，无壳

![image-20210805142814146](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210805142814146.png)

逻辑简单，求v4就行

![image-20210805144150349](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210805144150349.png)

​																															

​																																	==shr==

![image-20210805144350845](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210805144350845.png)

解题代码↓

![image-20210805144837287](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210805144837287.png)



##### Xor。

​		exe , 无壳

![image-20210806192016647](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210806192016647.png)

解题代码↓

![image-20210806192035526](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210806192035526.png)

##### hello_world_go。

​						exe，无壳

![image-20210806192730583](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210806192730583.png)

