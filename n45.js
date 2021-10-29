// 45.Colors dictionary
const colors = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    gray: 8,
    white: 9,
};

const decodeColors = (colorCodes) => {
    const arrayColors = colorCodes.split(' ');
    const value = parseInt(colors[arrayColors[0]].toString() + colors[arrayColors[1]].toString()) * Math.pow(10, colors[arrayColors[2]]);
    let result = '';

    if (value >= 1000 && value < 1000000) { result += `${value/1000}k ohms,`; }
    else if (value >= 1000000) { result += `${value/1000000}M ohms,`; }
    else { result += `${value} ohms,`; }
    
    if (arrayColors.length <= 3) { result += ' 20%';
    } else {
        if (arrayColors[3] == 'silver') { result += ' 10%'; }
        else if (arrayColors[3] == 'gold') { result += ' 5%'; }
    }
    return result;
};
console.log(decodeColors('brown black black')); ; // '330k ohms, 5%'
console.log(decodeColors('orange orange yellow gold')); // '330k ohms, 5%'