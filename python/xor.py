string=['f', 0x0A, 'k', 0x0C, 'w', '&', 'O', '.', '@', 0x11, 'x'
,0x0D, 'Z', ';', 'U', 0x11, 'p', 0x19, 'F', 0x1F, 'v','"', 'M', '#',
'D', 0x0E, 'g', 6, 'h', 0x0F, 'G', '2', 'O']
flag=""
print(len(string))
for i in range(1,len(string)):
    if(isinstance(string[i],str) and isinstance(string[i-1],str)):
        flag+=( chr( ord(string[i])^ ord(string[i-1]) )  )
    elif(isinstance(string[i],int) and isinstance(string[i-1],str)):
        flag+=( chr( string[i] ^ ord(string[i-1]) )     )
    elif(isinstance(string[i],str) and isinstance(string[i-1],int)):
        flag+=( chr( ord(string[i])^ string[i-1] )  )
print(flag)