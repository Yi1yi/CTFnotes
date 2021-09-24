String = [198,232,816,200,1536,300,6144,984,51200,570,92160,1200,565248,756,1474560,800,6291456,1782,65536000]
flag=''
for i in range(len(String)):
    if(i+1 & 1 !=0):
        flag+=chr(String[i]>>(i+1))
    else:
        flag+=chr(int(String[i]/(i+1)))

print(flag)