#!/bin/python3 
#key="ADSFK 357761762382"
key="adsfk"
a=357761762382
a=hex(a)[2:]
key+=''.join([chr(int(b, 16)) for b in [a[i:i+2] for i in range(0, len(a), 2)]])[::-1].lower()
target="kills512969957736"
a=target[5:]
target=target[:5]
a=int(a)
a=hex(a)[2:]
target+=''.join([chr(int(b,16)) for b in [a[i:i+2] for i in range(0,len(a),2)]])[::-1]
flag=""
v3=0
v5=len(target)
lt='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
for i in range(v5):
    str2=target[i]
    for o in lt:
        if str2==chr((ord(o)-39 - ord(key[i%len(key)])+97)%26+97):
            flag+=o
print('flag{'+flag+'}')
