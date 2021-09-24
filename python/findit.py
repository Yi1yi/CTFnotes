#!/bin/python3
flag=''
b=('p', 'v', 'k', 'q', '{', 'm', '1', '6', '4', '6',
'7', '5', '2', '6', '2', '0', '3', '3', 'l', '4', 'm',
'4', '9', 'l', 'n', 'p', '7', 'p', '9', 'm', 'n', 'k',
'2', '8', 'k', '7', '5', '}')
for i in range(0,38):
    if ((b[i]<'A' or b[i] >'Z') and (b[i]<'a'or b[i]>'z')):
        flag+=b[i]
    else:
        if((chr(ord(b[i])+16)>'Z' and chr(ord(b[i])+16)<'a') or chr(ord(b[i])+16)>='z'):
            flag+=chr(ord(b[i])-10)
        else:
            flag+=chr(ord(b[i])+16)
print(flag)
