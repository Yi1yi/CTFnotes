a='TOiZiZtOrYaToUwPnToBsOaOapsyS'
b='QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm'
flag=''
for i in range(0,29):
    if(i%2==1):
        k=a[i]
        n=b.find(k)
        if((n+38)>=65):
            flag+=chr(n+38)
        else:
            flag+=chr(n+96)
    else:
        flag+=a[i]
print(flag)
#ThisisthreadofwindowshahaIsESE