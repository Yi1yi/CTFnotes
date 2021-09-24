a='PyvragFvqrYbtvafNerRnfl@syner-ba.pbz'
flag=''
for i in a:
    if i>='A' and i <='Z' :
        if i<='M':
            char=chr(ord(i)+13)
        else:
            char=chr(ord(i)-13)
    elif i>='a' and i<='z':
        if i <='m':
            char=chr(ord(i)+13)
        else:
            char=chr(ord(i)-13)
    else:
        char=i
    flag+=char
print(flag)