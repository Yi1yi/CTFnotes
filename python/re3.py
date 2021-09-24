#!/bin/python3
str="e3nifIH9b_C@n@dH"
flag=''
for i in range(len(str)):
    flag+=chr(ord(str[i])-i)
print(flag)