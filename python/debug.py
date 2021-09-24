import hashlib
data=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113]
str='CreateByTenshine'
formd5=''
for o in str:
    o=ord(o)
    for i in range(1,15):
        o^=data[i]
    formd5+=chr(o)
print(formd5)
flag=hashlib.md5(formd5.encode("utf-8")).hexdigest()
print("flag{"+flag.upper()+"}")
# * flag{967DDDFBCD32C1F53527C221D9E40A0B}
