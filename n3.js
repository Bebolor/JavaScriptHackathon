// 3. Create a calculator
function calculator(num1, num2, operator) {
    if(operator === "+") {
        console.log(num1 + num2);
    } else if (operator === "-") {
        console.log(num1 - num2);
    } else if (operator === "*") {
        console.log(num1 * num2);
    } else {
        if (num2 === 0) {
            console.log("Cannot divide by 0");
        } else {
            console.log(num1 / num2);
        }
    }
};
calculator(2, 10, "+"); // 12
calculator(20, 3, "*"); // 60
calculator(10, 0, "/") // Cannot divide by 0
