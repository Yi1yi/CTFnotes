#!/bin/python3
flag=''
string=''
a=[42,70,39,34,78,44, 34, 40, 73, 63, 43, 64]
b=r'~}|{zyxwvutsrqponmlkjihgfedcba`_^]\[ZYXWVUTSRQPONMLKJIHGFEDCBA@?>=<;:9876543210/.-,+*)('
+chr(39)+r'&%$# !"'
for i in range  (len(a)):
    string+=chr(b.find(chr(a[i]))+1)
print("flag{"+string+"}")
#flag{U9X_1S_W6@T?}