import numpy
data=[97, 106, 121, 103, 107, 70, 109, 46, 127, 95, 126, 45, 83, 86, 123, 56, 109, 76, 110]
flag=numpy.zeros(19)
for i in range(len(data)):
    if(i==18):
        data[i]^=0x13
    else:
        data[i]^=i
        if(i%2):
            flag[i]=i + data[i]
        else:
            flag[i+2]=data[i]
for o in flag:
    print(chr(int(o)),end="")
    # * f+ lag{Ho0k_w1th_Fun}
