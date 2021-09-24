data =  [1, 30, 14, 12, 69, 14, 1, 85, 75, 50, 40, 37, 48, 24, 10, 56, 55, 46, 56, 60]
string = 'groke'
flag=''
for i in range(len(data)):
    flag+=chr(data[i]^ord(string[i%5]))
print(flag)
# * flag is: WOW_so_EASY
