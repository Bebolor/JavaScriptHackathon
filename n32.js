//32. Basketball 

const basket = (arg) => {
    if ((arg[1][0][2] === '0') || (arg[1][0][3] === '0') || (arg[1][0][4] === '0')) return true;
    else return false;
}


console.log(basket([
    [' ##### '],
    [' # 0 # '],
    [' ##### ']
])); // true

console.log(basket([
    [' ##### '],
    [' #0  # '],
    [' ##### ']
])); // true

console.log(basket([
    [' ##### '],
    ['0#   # '],
    [' ##### ']
])); // false