data=[0x0D,0x26,0x49,0x45,0x2A,0x17,0x78,0x44,0x2B,0x6C,
0x5D,0x5E,0x45,0x12,0x2F,0x17,0x2B,0x44,0x6F,0x6E,0x56,0x9,
0x5F,0x45,0x47,0x73,0x26,0x0A,0x0D,0x13,0x17,0x48,0x42,0x1,
0x40,0x4D,0x0C,0x2,0x69]
v4=4
input=""
for i in range(len(data)-1,-1,-1):
    tmp=data[i]^v4 
    input+=chr(tmp)
    v4=tmp
print(input[::-1])
# * flag = R_y0u_H0t_3n0ugH_t0_1gn1t3@flare-on.com
