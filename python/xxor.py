from z3 import *
s=Solver()
x=Int('x')
y=Int('y')
z=Int('z')
s.add(x - y == 0x84A236FF)
s.add(y + z == 0xFA6CB703)
s.add(x - z == 0x42D731A8)
s.check()
result = s.model()
flag=[]
flag.append(0xDF48EF7E)
flag.append(0x20CAACF4)
flag.append(str(result[x]))
flag.append(str(result[y]))
flag.append(str(result[z]))
flag.append(0x84F30420)
a2=[2,2,3,4]
for i in range(0,len(flag),2):
    a = int(flag[i])
    a1= int(flag[i+1])
    sum =0x458bcd42*64
    for o in range(64):
        a1-=(a+sum+20)^((a<<6)+a2[2])^((a>>9)+a2[3])^0x10
        a-=(a1+sum+11)^((a1<<6)+a2[0])^((a1>>9)+a2[1])^0x20
        sum-=0x458bcd42
    print(hex(a),hex(a1),i)
#  ! 这里wp都用c语言好像是python会造成溢出
#  ! 使得数据异常，但逻辑一样

