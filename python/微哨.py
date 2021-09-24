import base64
crypt="JwsHEQAfCQAEAAwXFiknBwYEEwo1LxEcSUEFV3tFEgQIH0luFhAOW1NAKklUABMBCjxfVEASX0U6Fw1FFRxFKAQYCQMSBiVFAApBJVd9"
crypt=base64.b64decode(crypt)
decrypt=[0]*len(crypt)
crypt=list(crypt)
arr=[78, 101, 116, 101, 97, 115, 101]
flag=0
for i in range(len(crypt)):
    decrypt[i]=(crypt[i])^arr[i%7]
print("".join(map(chr,decrypt)))
# * input 0 len true
