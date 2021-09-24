#  re注意点

##### 上课知识点

ebp+普遍是参数，ebp-普遍是局部变量,retn返回eax值

main控制台有三个参数，winmain有四个参数

fastcall 前两个参数用ecx和edx传参

this指针：有类的情况下指向当前类	

![image-20210704173345344](../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210704173345344.png)

虚函数表：

​			![image-20210916102536682](../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210916102536682.png) 

![image-20210916111032756](../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210916111032756.png)

###### LL

当一个赋值为一长串数字+`LL`的时候表示long long型

```
先转成16进制再转成字符串（小端序）
```

```python
''.join([chr(int(b,16)) for b in [a[i:i+2] for i in range(0,len(a),2)]])
```



###### <<

​     左移运算符（用来将一个数的各二进制位全部左移若干位，移动的位数由右操作数指定，右操作数必须是非负值，其右边空出的位用0填补，高位左移溢出则舍弃该高位。）

| **a的值** | **a的二进制形式** | **a<<1**     |
| --------- | ----------------- | ------------ |
| 64        | **01000000**      | **10000000** |
| 127 | **01111111** |**11111110**|



###### 正负数表示

所以最大负值为**-1，**对应于**0xFFFFFFFF**，最小负值为**0x80000000**。如果不考虑符号，那么所有值都是0到**0xFFFFFFFF**之间的正数。

如果考虑符号位，**0x0**到**0x7FFFFFFF**的范围内是正数，在**0xFFFFFFFF**到**0x80000000**的范围内是负数。

**正数**

000000000等于0

000000001等于1

7FFFFFFF等于十进制2147483647（最大的正数）

**负数**

FFFFFFFF等于-1

FFFFFFFE为-2

80000000等于-2147483648（最小的负数）



###### atoi()函数

​	C 库函数 int atoi(const char *str) 把参数 str 所指向的字符串转换为一个整数（类型为 int 型）。

```c
  strcpy(str, "98993489");
   val = atoi(str);
```

```c
 strcpy(str, "runoob.com");
   val = atoi(str);
```

字符串值 = 98993489, 整型值 = 98993489
字符串值 = runoob.com, 整型值 = 0



###### CryptCreateHash()函数

所述CryptCreateHash功能启动哈希数据流的。它创建一个加密服务提供程序（CSP）哈希对象的句柄并将其返回给调用应用程序。此句柄用于后续对CryptHashData和 CryptHashSessionKey的调用中，以 对会话密钥和其他数据流进行哈希处理。
==句法==
C ++

```c++
BOOL CryptCreateHash(
  HCRYPTPROV hProv,
  ALG_ID     Algid,
  HCRYPTKEY  hKey,
  DWORD      dwFlags,
  HCRYPTHASH *phHash
);
```

==参数==
`hProv`

通过调用CryptAcquireContext创建的CSP的句柄 。

`Algid`

一个ALG_ID值，用于标识要使用的哈希算法。

此参数的有效值会有所不同，具体取决于所使用的CSP。有关默认算法的列表，请参见“备注”。

`hKey`

如果哈希算法的类型是键控哈希，例如基于哈希的消息认证码（HMAC）或消息认证码（MAC）算法，则在此参数中传递哈希的密钥。对于非键控算法，此参数必须设置为零。

对于密钥算法，密钥必须是具有密码块链接（CBC）密码模式的块密码密钥，例如RC2 。

`dwFlags`

定义了以下标志值。

| 价值                              | 意义           |
| --------------------------------- | -------------- |
| CRYPT_SECRETDIGEST<br/>0x00000001 | 不使用该标志。 |

phHash

函数将句柄复制到新哈希对象的地址。使用完哈希对象后，通过调用CryptDestroyHash函数来释放该句柄。

###### ALG_ID

所述**ALG_ID**数据类型指定的算法标识符。此数据类型的参数传递给CryptoAPI中的大多数函数。

C ++

```C++
typedef unsigned int ALG_ID;
```

下表列出了当前定义的算法标识符。定制[*密码服务提供商*](https://docs.microsoft.com/en-us/windows/win32/secgloss/c-gly)（CSP）的作者可以定义新值。此外，自定义CSP用于密钥规范**AT_KEYEXCHANGE**和**AT_SIGNATURE**的**ALG_ID**取决于提供程序。下表列出了当前的映射。

| 识别码                    | 价值       | 描述                                                         |
| :------------------------ | :--------- | :----------------------------------------------------------- |
| CALG_3DES                 | 0x00006603 | [*三重DES*](https://docs.microsoft.com/en-us/windows/desktop/SecGloss/t-gly)加密算法。 |
| CALG_3DES_112             | 0x00006609 | 两密钥[*三重DES*](https://docs.microsoft.com/en-us/windows/desktop/SecGloss/t-gly)加密，有效密钥长度等于112位。 |
| CALG_AES                  | 0x00006611 | 高级加密标准（AES）。[Microsoft AES加密提供程序](https://docs.microsoft.com/en-us/windows/win32/seccrypto/microsoft-aes-cryptographic-provider)支持此算法。 |
| CALG_AES_128              | 0x0000660e | 128位AES。[Microsoft AES加密提供程序](https://docs.microsoft.com/en-us/windows/win32/seccrypto/microsoft-aes-cryptographic-provider)支持此算法。 |
| CALG_AES_192              | 0x0000660f | 192位AES。[Microsoft AES加密提供程序](https://docs.microsoft.com/en-us/windows/win32/seccrypto/microsoft-aes-cryptographic-provider)支持此算法。 |
| CALG_AES_256              | 0x00006610 | 256位AES。[Microsoft AES加密提供程序](https://docs.microsoft.com/en-us/windows/win32/seccrypto/microsoft-aes-cryptographic-provider)支持此算法。 |
| CALG_AGREEDKEY_ANY        | 0x0000aa03 | Diffie-Hellman协议密钥的句柄的临时算法标识符。               |
| CALG_CYLINK_MEK           | 0x0000660c | 一种创建40位DES密钥的算法，该密钥具有奇偶校验位和置零的密钥位，以使其密钥长度为64位。该算法受以下方面的支持：[Microsoft基本密码提供程序](https://docs.microsoft.com/en-us/windows/win32/seccrypto/microsoft-base-cryptographic-provider)。 |
| CALG_DES                  | 0x00006601 | DES加密算法。                                                |
| CALG_DESX                 | 0x00006604 | DESX加密算法。                                               |
| CALG_DH_EPHEM             | 0x0000aa02 | Diffie-Hellman临时密钥交换算法。                             |
| CALG_DH_SF                | 0x0000aa01 | Diffie-Hellman存储和转发密钥交换算法。                       |
| CALG_DSS_SIGN             | 0x00002200 | DSA[*公钥*](https://docs.microsoft.com/en-us/windows/desktop/SecGloss/p-gly)签名算法。 |
| CALG_ECDH                 | 0x0000aa05 | 椭圆曲线Diffie-Hellman密钥交换算法。[！注意] 仅[加密技术API：Next Generation](https://docs.microsoft.com/en-us/windows/desktop/SecCNG/cng-portal)支持此算法。 **Windows Server 2003和Windows XP：**不支持此算法。 |
| CALG_ECDH_EPHEM           | 0x0000ae06 | 暂时椭圆曲线Diffie-Hellman密钥交换算法。[！注意] 仅[加密技术API：Next Generation](https://docs.microsoft.com/en-us/windows/desktop/SecCNG/cng-portal)支持此算法。 **Windows Server 2003和Windows XP：**不支持此算法。 |
| CALG_ECDSA                | 0x00002203 | 椭圆曲线数字签名算法。[！注意] 仅[加密技术API：Next Generation](https://docs.microsoft.com/en-us/windows/desktop/SecCNG/cng-portal)支持此算法。 **Windows Server 2003和Windows XP：**不支持此算法。 |
| CALG_ECMQV                | 0x0000a001 | 椭圆曲线Menezes，Qu和Vanstone（MQV）密钥交换算法。不支持该算法。 |
| CALG_HASH_REPLACE_OWF     | 0x0000800b | 一种函数散列算法。                                           |
| CALG_HUGHES_MD5           | 0x0000a003 | 休斯MD5哈希算法。                                            |
| CALG_HMAC                 | 0x00008009 | HMAC键控哈希算法。[Microsoft基本加密提供程序](https://docs.microsoft.com/en-us/windows/win32/seccrypto/microsoft-base-cryptographic-provider)支持此算法。 |
| CALG_KEA_KEYX             | 0x0000aa04 | KEA密钥交换算法（FORTEZZA）。不支持该算法。                  |
| CALG_MAC                  | 0x00008005 | [*MAC*](https://docs.microsoft.com/en-us/windows/desktop/SecGloss/m-gly)键控哈希算法。[Microsoft基本加密提供程序](https://docs.microsoft.com/en-us/windows/win32/seccrypto/microsoft-base-cryptographic-provider)支持此算法。 |
| CALG_MD2                  | 0x00008001 | MD2哈希算法。[Microsoft基本加密提供程序](https://docs.microsoft.com/en-us/windows/win32/seccrypto/microsoft-base-cryptographic-provider)支持此算法。 |
| CALG_MD4                  | 0x00008002 | MD4哈希算法。                                                |
| CALG_MD5                  | 0x00008003 | MD5哈希算法。[Microsoft基本加密提供程序](https://docs.microsoft.com/en-us/windows/win32/seccrypto/microsoft-base-cryptographic-provider)支持此算法。 |
| CALG_NO_SIGN              | 0x00002000 | 没有签名算法。                                               |
| CALG_OID_INFO_CNG_ONLY    | 0xffffffff | 该算法仅在CNG中实现。宏IS_SPECIAL_OID_INFO_ALGID可用于确定是否仅通过使用CNG函数支持加密算法。 |
| CALG_OID_INFO_PARAMETERS  | 0xfffffffe | 该算法在编码参数中定义。仅使用CNG支持该算法。宏IS_SPECIAL_OID_INFO_ALGID可用于确定是否仅通过使用CNG函数支持加密算法。 |
| CALG_PCT1_MASTER          | 0x00004c04 | 由Schannel.dll操作系统使用。应用程序不应使用此**ALG_ID**。   |
| CALG_RC2                  | 0x00006602 | RC2块加密算法。[Microsoft基本加密提供程序](https://docs.microsoft.com/en-us/windows/win32/seccrypto/microsoft-base-cryptographic-provider)支持此算法。 |
| CALG_RC4                  | 0x00006801 | RC4流加密算法。[Microsoft基本加密提供程序](https://docs.microsoft.com/en-us/windows/win32/seccrypto/microsoft-base-cryptographic-provider)支持此算法。 |
| CALG_RC5                  | 0x0000660d | RC5块加密算法。                                              |
| CALG_RSA_KEYX             | 0x0000a400 | RSA公钥交换算法。[Microsoft基本加密提供程序](https://docs.microsoft.com/en-us/windows/win32/seccrypto/microsoft-base-cryptographic-provider)支持此算法。 |
| CALG_RSA_SIGN             | 0x00002400 | RSA公钥签名算法。[Microsoft基本加密提供程序](https://docs.microsoft.com/en-us/windows/win32/seccrypto/microsoft-base-cryptographic-provider)支持此算法。 |
| CALG_SCHANNEL_ENC_KEY     | 0x00004c07 | 由Schannel.dll操作系统使用。应用程序不应使用此**ALG_ID**。   |
| CALG_SCHANNEL_MAC_KEY     | 0x00004c03 | 由Schannel.dll操作系统使用。应用程序不应使用此**ALG_ID**。   |
| CALG_SCHANNEL_MASTER_HASH | 0x00004c02 | 由Schannel.dll操作系统使用。应用程序不应使用此**ALG_ID**。   |
| CALG_SEAL                 | 0x00006802 | SEAL加密算法。不支持该算法。                                 |
| CALG_SHA                  | 0x00008004 | SHA哈希算法。[Microsoft基本加密提供程序](https://docs.microsoft.com/en-us/windows/win32/seccrypto/microsoft-base-cryptographic-provider)支持此算法。 |
| CALG_SHA1                 | 0x00008004 | 与**CALG_SHA**相同。[Microsoft基本加密提供程序](https://docs.microsoft.com/en-us/windows/win32/seccrypto/microsoft-base-cryptographic-provider)支持此算法。 |
| CALG_SHA_256              | 0x0000800c | 256位SHA哈希算法。Microsoft增强的RSA和AES加密提供程序支持此算法**。Windows XP SP3：** Microsoft增强的RSA和AES加密提供程序（原型）支持此算法。 **Windows XP SP2，Windows XP SP1和Windows XP：**不支持此算法。 |
| CALG_SHA_384              | 0x0000800d | 384位SHA哈希算法。Microsoft增强的RSA和AES加密提供程序支持此算法。**Windows XP SP3：** Microsoft增强的RSA和AES加密提供程序（原型）支持此算法。 **Windows XP SP2，Windows XP SP1和Windows XP：**不支持此算法。 |
| CALG_SHA_512              | 0x0000800e | 512位SHA哈希算法。Microsoft增强的RSA和AES加密提供程序支持此算法。**Windows XP SP3：** Microsoft增强的RSA和AES加密提供程序（原型）支持此算法。 **Windows XP SP2，Windows XP SP1和Windows XP：**不支持此算法。 |
| CALG_SKIPJACK             | 0x0000660a | Skipjack块加密算法（FORTEZZA）。不支持该算法。               |
| CALG_SSL2_MASTER          | 0x00004c05 | 由Schannel.dll操作系统使用。应用程序不应使用此**ALG_ID**。   |
| CALG_SSL3_MASTER          | 0x00004c01 | 由Schannel.dll操作系统使用。应用程序不应使用此**ALG_ID**。   |
| CALG_SSL3_SHAMD5          | 0x00008008 | 由Schannel.dll操作系统使用。应用程序不应使用此**ALG_ID**。   |
| CALG_TEK                  | 0x0000660b | TEK（FORTEZZA）。不支持该算法。                              |
| CALG_TLS1_MASTER          | 0x00004c06 | 由Schannel.dll操作系统使用。应用程序不应使用此**ALG_ID**。   |
| CALG_TLS1PRF              | 0x0000800a | 由Schannel.dll操作系统使用。应用程序不应使用此**ALG_ID**。   |



###### resource的有关函数

​		FindResourceA函数（winbase.h）
​		确定具有指定类型和名称的资源在指定模块中的位置。

要指定语言，请使用FindResourceEx函数。

==句法==
C ++

```c++
HRSRC FindResourceA(
  HMODULE hModule,
  LPCSTR  lpName,
  LPCSTR  lpType
);
```

==参数==
hModule

类型：HMODULE

模块的句柄，其可移植可执行文件或随附的MUI文件包含资源。如果此参数为NULL，则函数搜索用于创建当前进程的模块。

lpName

类型：LPCTSTR

资源的名称。或者，此参数可以是MAKEINTRESOURCE（ID），而不是指针，其中ID是资源的整数标识符。有关更多信息，请参见下面的“备注”部分。

lpType

类型：LPCTSTR

资源类型。或者，此参数可以是MAKEINTRESOURCE（ID）（而不是指针），其中ID是给定的整数标识符

资源类型。有关标准资源类型，请参见资源类型。有关更多信息，请参见下面的“备注”部分。

==返回值==
类型：HRSRC

如果函数成功，则返回值是指定资源的信息块的句柄。若要获取资源的句柄，请将此句柄传递给LoadResource函数。

如果函数失败，则返回值为NULL。要获取扩展的错误信息，请调用GetLastError。



SizeofResource函数（libloaderapi.h）
检索指定资源的大小（以字节为单位）。

==句法==
C ++

```c++
DWORD SizeofResource(
  HMODULE hModule,
  HRSRC   hResInfo
);
```

==参数==
hModule

类型：HMODULE

其可执行文件包含资源的模块的句柄。

hResInfo

类型：HRSRC

资源的句柄。必须使用FindResource或FindResourceEx函数创建此句柄。

==返回值==
类型：DWORD

如果函数成功，则返回值是资源中的字节数。

如果函数失败，则返回值为零。要获取扩展的错误信息，请调用GetLastError。



LoadResource函数（libloaderapi.h）
	检索可用于获取指向内存中指定资源的第一个字节的指针的句柄。



LockResource函数（libloaderapi.h）
检索指向内存中指定资源的指针。

==句法==
C ++

```c++
LPVOID LockResource(
  HGLOBAL hResData
);
```



参数
hResData

类型：HGLOBAL

要访问的资源的句柄。该==LoadResource==函数返回该句柄。请注意，此参数仅作为向后兼容性列出为HGLOBAL变量。除了从LoadResource函数成功返回值以外，不要将任何值作为参数传递。



###### .data和.rodata

==data段==：

数据段（datasegment）通常是指用来存放程序中已初始化的全局变量和已初始化的静态变量的一块内存区域。数据段属于静态内存分配。

==text段==：

代码段（codesegment/textsegment）通常是指用来存放程序执行代码的一块内存区域。这部分区域的大小在程序运行前就已经确定，并且内存区域通常属于只读,某些架构也允许代码段为可写，即允许修改程序。在代码段中，也有可能包含一些只读的常数变量，例如字符串常量等。

==rodata段==：

存放的是只读数据，比如字符串常量，全局const变量 和 #define定义的常量。例如： char*p="123456", "123456"就存放在rodata段中。



![image-20210427104227823](../../../../../../home/carrym/.config/Typora/typora-user-images/image-20210427104227823.png)

找数据的时候可以到data和rodata里分别找找