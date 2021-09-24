code = ['\x1f','\x12','\x1d','(','0','4','\x01','\x06',
'\x14','4',',','\x1b','U','?','o','6','*',':','\x01','D',';','%','\x13']
string=code[::-1]
flag=''
flag+=chr(ord(string[0]))
for i in range(1,len(string)):
    flag+=( chr( ord(string[i])^ ord(flag[i-1]) )  )
code=flag[::-1]
flag=''
code=list(code)
for o in range(len(code)):
    flag+=chr((ord(code[o])-o)%128)
print(flag)