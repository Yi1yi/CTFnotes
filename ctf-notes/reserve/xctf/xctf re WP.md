# xctf re WP

##### debug。

​			exe ，.net , dotfuscator加壳

先用de4dot脱壳后用dnspy反编译

这里用dnspy的动调直接出flag，看看代码

![image-20210809202031733](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210809202031733.png)

关键代码↓

![image-20210809202159626](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210809202159626.png)

![image-20210809202342104](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210809202342104.png)

最后md5加密

![image-20210809201540423](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210809201540423.png)



##### hackme。

​				elf，无壳

关键代码↓

![image-20210809220705706](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210809220705706.png)

![image-20210809220804584](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210809220804584.png)

解题代码↓

![image-20210809220957241](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210809220957241.png)

==！！重点在最后输出的时候，&上0xff才能打印出来==



##### BABYRE。

​				elf，无壳

这题学习了点点ida python来处理数据，算是个开头吧

还有 函数分析p和E设置函数结尾，重新建立个函数

![image-20210810133250931](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210810133250931.png)

![image-20210810133550059](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210810133550059.png)

在600b01处按p

至此，最难的部分就结束了

![image-20210810133740285](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210810133740285.png)

解题代码↓

![image-20210810133813772](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210810133813772.png)



##### EASYHOOK。

​					exe，无壳

关键代码↓

![image-20210810221307544](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210810221307544.png)

解题代码↓

![image-20210810221420719](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210810221420719.png)



##### babymips。

​					exe，无壳

mips指令集，

![image-20210812092242247](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210812092242247.png)

关键代码↓

![image-20210812091853311](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210812091853311.png)

解题代码↓

![image-20210812092335675](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210812092335675.png)



##### reverse-for-the-holy-grail-350。

​														elf，无壳。

![image-20210812005411730](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210812005411730.png)

![image-20210812005617720](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210812005617720.png)

没什么用

看第二个

![image-20210812010307683](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210812010307683.png)

![image-20210812010443395](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210812010443395.png)

![image-20210812010935211](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210812010935211.png)

解题代码↓

![image-20210812011039561](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210812011039561.png)

##### serial-150。

​				elf，无壳,花指令

ida无法正常查看，用ghidra

![image-20210906154813165](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210906154813165.png)

![image-20210906154923704](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210906154923704.png)

ida 被混淆了，

![image-20210906162617201](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210906162617201.png)

可以看见在函数`0x04009E1`指向的`.text:00000000004009E1 jz short near ptr loc_4009DB+2`以及`0x04009F9`指向的`.text:00000000004009F9 jz short near ptr loc_4009F3+2`两处的引用出错
由于`loc_4009DB+2=loc_4009DD`，被代码`.text:00000000004009DB mov ax, 5EBh`占用，即此处代码混淆过使IDA的反汇编功能出错，按下`D`键使此处代码变为数据，后寻找到`loc_4009DD`处，按下`C`键使此处数据变为代码,即可完成正常的代码识别。

![image-20210906162911125](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210906162911125.png)

依次对程序中出错部分代码进行操作，即可还原回原正常汇编语句

##### secret-string-400。

​					html+js 

![image-20210906171218275](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210906171218275.png)

或者一步步调试，查看command的值

![image-20210906170759451](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210906170759451.png)

![image-20210906171402619](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210906171402619.png)



##### testre。

​	elf，无壳

![image-20210909105106897](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210909105106897.png)

看到这猜测base64

![a](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210909105137713.png)

这里对比的是s所以看byte_400eb0

![image-20210909105229088](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210909105229088.png)

58位，用base58

![image-20210909105832136](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210909105832136.png)



##### crackme。

​			exe，nspack

![image-20210909110221615](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210909110221615.png)

这题主要是脱壳，且难度不高应该是要求手动脱

![image-20210909110303204](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210909110303204.png)



##### 梅津美治郎。

​				exe，无壳

![image-20210909110904864](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210909110904864.png)

直接看stage2

![image-20210909111003846](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210909111003846.png)

这里有个==debugbreak==函数，这函数的话，也就是相当于一个int 3指令，引发一个中断，把执行权移交给调试器，如果没有调试器，那就移交给其他异常处理回调函数，如果都没有，那么程序就自己断下来，这里就是为了触发回调函数，如果没有调试器附加，那么debugbreak产生的异常会被AddVectoredExceptionHandler添加的回调函数捕获来处理，这里添加的回调函数也就是

![image-20210909111318364](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210909111318364.png)



![image-20210909111248333](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210909111248333.png)

动调取得值

![image-20210909112633555](../../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210909112633555.png)
