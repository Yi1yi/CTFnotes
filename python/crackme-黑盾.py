data='2B392E2E3E24202E321802143202091609030C321D1F180F01021E32081B10'
for i in range(255):
    flag=''
    for k in range(0,len(data),2):
        flag+=chr(int((data[k]+data[k+1]),16)^i)
    print(flag)
