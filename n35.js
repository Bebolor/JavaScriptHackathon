//35. Is it IPv4 ?
const checkIP = ip => {
    let rx=/^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/;
    return rx.test(ip);
}


console.log(checkIP("127.0.0.1")) // true

console.log(checkIP("255.255.255.255")) // true

console.log(checkIP("123.023.400.011")) // false

console.log(checkIP("123.090.020.011")) // false