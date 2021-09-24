#python函数



#### 各进制转换

| ↓    | 2进制 | 8进制 | 10进制 | 16进制 |
| ---- | ----- | ----- | ------ | ------ |
|2进制	|-	|bin(int(n,8))|	bin(int(n,10))|	bin(int(n,16))|
|8进制|	oct(int(n,2))|	-	|oct(int(n,10))|	oct(int(n,16))|
|10进制|	int(n,2)|	int(n,8)	|-|	int(n,16)|
|16进制|	hex(int(n,2))|	hex(int(n,8))|	hex(int(n,10))|	-|



#### 十六进制转ascii

```python
a ="456e633064316e675f31735f66336e"
''.join([chr(int(b, 16)) for b in[a[i:i+2] for i in range(0, len(a), 2)]])
```



#### 类型转换

| 函 数                  | 作 用                                              |
| ---------------------- | -------------------------------------------------- |
| int(x)                 | 将 x 转换成整数类型                                |
| float(x)               | 将 x 转换成浮点数类型                              |
| complex(real，[,imag]) | 创建一个复数                                       |
| str(x)                 | 将 x 转换为字符串                                  |
| repr(x)                | 将 x 转换为表达式字符串                            |
| eval(str)              | 计算在字符串中的有效 Python 表达式，并返回一个对象 |
| chr(x)                 | 将整数 x 转换为一个字符                            |
| ord(x)                 | 将一个字符 x 转换为它对应的整数值                  |
| hex(x)                 | 将一个整数 x 转换为一个十六进制字符串              |
| oct(x)                 | 将一个整数 x 转换为一个八进制的字符串              |



####字符串转换列表替换并转换：

```
def replace_char(string,char,index):
    string = list(string)
    string[index] = char
    return ''.join(string)
```





![image-20210421221057056](../../../../../home/carrym/.config/Typora/typora-user-images/image-20210421221057056.png)



#### 大小写转换

| 方法    | 概述                                                         |
| ------------------- | :--------------------------------------------------- |
| title() | title() 方法用于将字符串中每个单词的首字母转为大写，其他字母全部转为小写，转换完成后，此方法会返回转换得到的字符串。如果字符串中没有需要被转换的字符，此方法会将字符串原封不动地返回。 |
| lower()     | lower() 方法用于将字符串中的所有大写字母转换为小写字母，转换完成后，该方法会返回新得到的字符串。如果字符串中原本就都是小写字母，则该方法会返回原字符串。 |
| upper() | upper() 的功能和 lower() 方法恰好相反，它用于将字符串中的所有小写字母转换为大写字母，和以上两种方法的返回方式相同，即如果转换成功，则返回新字符串；反之，则返回原字符串 |



## 库

#### hashlib

	hashlib模块支持md5(),sha1(), sha224(), sha256(), sha384(), sha512(), blake2b()，blake2s()，sha3_224(), sha3_256(), sha3_384(), sha3_512(), shake_128(), shake_256()等多种hash构造方法。例如sha1()能创建一个SHA-1对象，sha256()能创建一个SHA-256对象。然后就可以使用通用的update()方法将bytes类型的数据添加到对象里，最后通过digest()或者hexdigest()方法获得当前的摘要。

#### binascii

```
binascii.b2a_hex(data)、binascii.hexlify(data)

返回二进制数据的十六进制表示。数据的每个字节都被转换成相应的2位十六进制表示。结果字符串因此是数据长度的两倍。

binascii.a2b_hex(hexstr)、binascii.unhexlify(hexstr)

返回由十六进制字符串hexstr表示的二进制数据。这个函数是与之相反的b2a_hex()。hexstr必须包含偶数个十六进制数字（可以是大写或小写），否则TypeError会引发a。

binascii.a2b_uu(string)
将一行uuencoded数据转换回二进制并返回二进制数据。行通常包含45（二进制）字节，除了最后一行。行数据后面可能会出现空格。

binascii.b2a_uu(data)
将二进制数据转换为一行ASCII字符，返回值是转换后的行，包括换行符char。数据的长度最多应为45。

binascii.a2b_base64(string)
将一段base64数据转换回二进制并返回二进制数据。一次可以传递多个行。

binascii.b2a_base64(data)
将二进制数据转换为base64编码中的一行ASCII字符。返回值是转换后的行，包括换行符char。新行被添加，因为这个函数的原始用例是为它提供一系列57字节的输入行以获得符合MIME-base64标准的输出行。否则，输出符合RFC 3548。

binascii.a2b_qp(string[, header])
将一段引用可打印的数据转换回二进制并返回二进制数据。一次可以传递多个行。如果可选参数头存在且为true，则下划线将被解码为空格。

binascii.b2a_qp(data[, quotetabs, istext, header])
将二进制数据转换为带引号的可打印编码中的ASCII字符行。返回值是转换后的行。如果可选参数quotetabs存在且为true，则所有制表符和空格都将被编码。如果可选参数istext存在并且为true，则不对新行进行编码，但将对后面的空白进行编码。如果可选参数头存在且为true，则根据RFC1522将空格编码为下划线。如果可选参数头存在且为假，则换行符也将被编码; 否则换行转换可能会破坏二进制数据流。

binascii.a2b_hqx(string)
将binhex4格式的ASCII数据转换为二进制，而不进行RLE解压缩。该字符串应该包含完整数量的二进制字节，或者（在binhex4数据的最后一部分的情况下）剩余的位为零。

binascii.rledecode_hqx(data)
根据binhex4标准对数据执行RLE解压缩。该算法0x90在一个字节之后用作重复指示符，然后是一个计数。计数值0指定一个字节值0x90。该例程返回解压缩的数据，除非数据输入数据以孤立重复指示符结束，在这种情况下Incomplete引发异常。

binascii.rlecode_hqx(data)
对数据执行binhex4样式的RLE压缩并返回结果。

binascii.b2a_hqx(data)
执行hexbin4二进制转ASCII转换并返回结果字符串。参数应该已经是RLE编码的，并且长度可以被3除尽（可能除了最后一个片段）。

binascii.crc_hqx(data, crc)
计算的一个16位的CRC值的数据，开始以初始CRC并返回结果。这使用CRC-CCITT多项式_x_16 + _x_12 + _x_5 + 1，通常表示为0x1021。该CRC以binhex4格式使用。

binascii.crc32(data[, crc])
计算数据的32位校验和CRC-32，从最初的crc开始。这与ZIP文件校验和一致。由于该算法被设计用作校验和算法，因此不适合用作通用哈希算法
```

