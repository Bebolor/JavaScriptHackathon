//35. Is it IPv4 ?

checkIP("127.0.0.1") // true

checkIP("255.255.255.255") // true

checkIP("123.023.400.011") // false, cannot go further than 255

checkIP("123.090.020.011") // false, cannot start with a 0