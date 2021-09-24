#!/bin/python3
ll=9180147350284624745
#对比
    #未取位  
print(hex(ll))
    #取位
print("取位："+hex(ll)[:1:-1])
print("取位2："+hex(ll)[:1:-1])
ll=hex(ll)#[:1:-1]
final=''
flag=''.join([chr(int(b,16)) for b in [ll[i:i+2] for i in range(2,len(ll),2)]][::-1])
# flag=''.join([chr(int(b,16)) for b in [ ll[i:i+2] for i in range(0,len(ll),2) ]])
for o in range(len(flag)):
    if(o%2 ==1 ):
        final+=chr(ord(flag[o])-2)
    else:
        final+=chr(ord(flag[o])-1)
print("GXY{do_not_"+final)
# *GXY{do_not_hate_me}