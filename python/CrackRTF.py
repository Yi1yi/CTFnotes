import hashlib as hs
#partI
target="6E32D0943418C2C33385BC35A1470250DD8923A9"
for i in range(100000,1000000):
    string=str(i)+"@DBApp"
    string=string.encode('utf-8')
    encode=hs.sha1(string).hexdigest()
    if(encode.upper()==target):
        print(string)
#123321@DBApp
# partII
passwd=''
a=[0x7b, 0x5c ,0x72, 0x74, 0x66, 0x31]
b=[0x05 ,0x7D, 0x41, 0x15, 0x26, 0x01 ]
for i in range(len(b)):
    passwd+=chr(a[i]^b[i])
print(passwd)
#~!3a@0