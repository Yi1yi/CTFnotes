data=[112,121,54,36,38,119,55,37,38,41,42,34,43]
for i in data:
	i-=64
	print(chr(i%128),end="")
# *flag{09vdf7wefijbkg}