#!/bin/python3
import base64
Tips=''
a=[73,111,100,108,62,81,110,98,40,111,99,121,127,121,46,105,127,100,96,51,
119,125,119,101,107,57,123,105,121,61,126,121,76,64,69,67]
for i in range(len(a)):
    Tips+=chr(a[i]^i)
print("Tips:"+Tips)

a='Vm0wd2VHUXhTWGhpUm1SWVYwZDRWVll3Wkc5WFJsbDNXa1pPVlUxV2NIcFhhMk0xVmpKS1NHVkdXbFpOYmtKVVZtcEtTMUl5VGtsaVJtUk9ZV3hhZVZadGVHdFRNVTVYVW01T2FGSnRVbGhhVjNoaFZWWmtWMXBFVWxSTmJFcElWbTAxVDJGV1NuTlhia0pXWWxob1dGUnJXbXRXTVZaeVdrWm9hVlpyV1hwV1IzaGhXVmRHVjFOdVVsWmlhMHBZV1ZSR1lWZEdVbFZTYlhSWFRWWndNRlZ0TVc5VWJGcFZWbXR3VjJKSFVYZFdha1pXWlZaT2NtRkhhRk5pVjJoWVYxZDBhMVV3TlhOalJscFlZbGhTY1ZsclduZGxiR1J5VmxSR1ZXSlZjRWhaTUZKaFZqSktWVkZZYUZkV1JWcFlWV3BHYTFkWFRrZFRiV3hvVFVoQ1dsWXhaRFJpTWtsM1RVaG9hbEpYYUhOVmJUVkRZekZhY1ZKcmRGTk5Wa3A2VjJ0U1ExWlhTbFpqUldoYVRVWndkbFpxUmtwbGJVWklZVVprYUdFeGNHOVhXSEJIWkRGS2RGSnJhR2hTYXpWdlZGVm9RMlJzV25STldHUlZUVlpXTlZadE5VOVdiVXBJVld4c1dtSllUWGhXTUZwell6RmFkRkpzVWxOaVNFSktWa1phVTFFeFduUlRhMlJxVWxad1YxWnRlRXRXTVZaSFVsUnNVVlZVTURrPQ=='
for i in range(10):
    a=base64.b64decode(a)
print(a)

a=[0x40,0x35,0x20,0x56,0x5D,0x18,0x22,0x45,0x17,0x2F,
0x24,0x6E,0x62,0x3C,0x27,0x54,0x48,0x6C,0x24,0x6E,0x72,0x3C,0x32,0x45,0x5B]
string ='flag'
key=''
flag=''
key+=''.join([chr(a[i]^ord(string[i])) for i in range(4)])
for i in range(25):
    flag+=chr(a[i]^ord(key[i%4]))
print(flag)