string="dd2940c04462b4dd7c450528835cca15"
a=list(string)
a[2]=(chr (ord(a[2])+ord(a[3])-50))
a[4]=chr (ord(a[2])+ord(a[5])-48)
a[30]=chr(ord(a[31])+ord(a[9])- 48)
a[14]=chr(ord(a[27])+ord(a[28]) -97)
string = ''.join(a)
string=string[::-1]
print("flag{"+string+"}")