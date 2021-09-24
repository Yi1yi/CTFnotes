str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
print(len(str))
finalStr=""
for i in range(0,len(str),8):
    for o in range(i+7,i-1,-1):
        finalStr+=str[o]
print(finalStr)
