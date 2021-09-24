str1=[0x41,0x69,0x6E,0x45,0x6F,0x61]
str3=[0x2EF,0x2C4,0x2DC,0x2C7,0x2DE,0x2FC]
master=[0x1d7,0xc,0x244,0x25e,0x93,0x6c]
flag=[0]*18
v7=666
f=[0]*18
for i in range(len(flag)):
    flag[i]=str1[int(i/3)]
    f[i]=v7
    v7+=v7%5
v11=0
v9=0
for i in range(len(flag)):
    if(v11 == 2):
        flag[i]=str3[v9]^f[i]
        for o in range(128):
            if (flag[i-2]^f[i-2])*(o^f[i-1])%(flag[i]^f[i])==master[v9]:
                flag[i-1]=o
                break
        v9+=1
        v11=0
    else:
        v11+=1
print('tuctf{'+''.join(map(chr,flag))+'}')
# *tuctf{AfricanOrEuropean?}
