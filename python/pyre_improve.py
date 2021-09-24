code = ['\x1f','\x12','\x1d','(','0','4','\x01','\x06',
'\x14','4',',','\x1b','U','?','o','6','*',':','\x01','D',';','%','\x13']
flag=''
length= len(code)
for i in range( length-2,-1,-1 ):
    code[i]=chr(ord(code[i])^ord(code[i+1]))
for i in range(length):
    flag+=chr((ord(code[i])-i)%128)
print(flag)