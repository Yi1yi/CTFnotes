str='8'
print(''.join([chr(int(b,16)) for b in [str[i:i+2] for i in range(0,len(str),2)]]))