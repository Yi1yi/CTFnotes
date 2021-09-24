#!/bin/python3
import base64
string=[90,74,83, 69, 67, 97, 78, 72, 51, 110, 103]
string.sort()
flag=''
flag+=chr(string[0]+34)
flag+=chr(string[4])
a=base64.b64decode('V1Ax')
flag+=str(a)[2:-1]
a=base64.b64decode('ak1w'.encode('utf-8'))
flag+=str(a)[2:-1]
print(flag)

#flag = UJWP1jMp