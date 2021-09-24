a=[81,115,119,51,115,106,95,108,122,
52,95,85,106,119,64,108,0]
string = ''
for i in range(len(a)):
    flag=1
    for o in range(127):
        if( o>64 and o <=90  ):
            if(a[i]==(o-51)%26+65):
                string+=chr(o)
                flag=0
        if(o >96 and o <=122):
            if(a[i]==(o-79)%26+97 ):
                string+=chr(o)
                flag=0
    if(flag==1):
        string+=chr(a[i])
print("flag{"+string+"}")
