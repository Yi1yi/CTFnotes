string=r'GONDPHyGjPEKruv{{pj]X@rF'
data=[13, 19, 23, 17, 2, 1, 32, 29, 12, 2, 25, 47, 23, 43, 36, 31, 30, 22, 9, 15, 21, 39, 19, 38, 10, 47, 30, 26, 45, 12, 34, 4]
for i in range(len(string)):
    word=ord(string[i])
    word^=data[i]
    word-=72
    word^=0x55
    word=chr(word)
    # print(word,end="")
    if  word.isupper():
        word=word.lower()
    elif word.islower():
        word=word.upper()
    print(word,end='')