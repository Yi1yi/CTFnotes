import gmpy2
import rsa
n=86934482296048119190666062003494800588905656017203025617216654058378322103517
p=285960468890451637935629440372639283459
q=304008741604601924494328155975272418463
e=65537
d=gmpy2.invert(e,(p-1)*(q-1))
print(d)
privatekey=rsa.PrivateKey(n, e, int(d), p, q)
with open("/flag.enc","rb+") as f:
    f=f.read()
    print(rsa.decrypt(f, privatekey))