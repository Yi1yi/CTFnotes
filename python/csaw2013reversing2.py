data=[0x0BB,0x0CC,0x0A0,0x0BC,0x0DC,0x0D1,0x0BE,0x0B8,0x0CD,0x0CF,0x0BE,0x0AE,0x0D2,0x0C4,0x0AB,0x82,0x0D2,0x0D9,0x93,0x0B3,0x0D4,0x0DE,0x93,0x0A9,0x0D3,0x0CB,0x0B8,0x82,0x0D3,0x0CB,0x0BE,0x0B9,0x9A,0x0D7,0x0CC,0x0DD]
data2=[0xBB,
0xAA,
0xCC,
0xDD]
for i in range(len(data)):
    print(chr(data[i]^data2[i%4]),end="")



