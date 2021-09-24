target = 'zMXHz3TIgnxLxJhFAdtZn2fFk3lYCrtPC2l9'
str1="ABCDEFGHIJKLMNOP"
str2="KLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
str1=list(str1)
str2=list(str2)
flag=''
for i in range(6,16):
    str1[i],str2[i]=str2[i],str1[i]
str1=''.join(str1+str2[6:])
print(str1)

# for i in range(0,len(str1),4):
for i in target:
    if i.isupper():
        flag+= i.lower()
    elif i.islower():
        flag+= i.upper()
    else:
        flag+=i
print(flag)