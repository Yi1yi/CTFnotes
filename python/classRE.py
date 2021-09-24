#!/bin/python3
a=180
print(chr((a^0x20)-64))
flag=""
KEY = [180, 136, 137, 147, 191, 137, 147,
191, 148, 136, 133, 191, 134, 140, 129, 135, 191, 65 ]
for i in range(len(KEY)):
    KEY[i]=KEY[i]^0x20
    KEY[i]-=64
    flag+=chr(KEY[i])
print("flag{"+flag+"}")
#flag{This_is_the_flag_!}