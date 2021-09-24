String = r'flag{FAKE_FLAG!}'
String= list(String)
num='0000000000000000'
for i in range(len(String)):
    String[i]=ord(String[i])^i
print(''.join(map(chr,String)))