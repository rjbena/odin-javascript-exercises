let num1 = "";
let num2 ="";
let operand ="";

const add = (a,b) => {
    return a + b;
}
const substract =(a,b) => {
    return a - b;
}
const multiply = (a,b) => {
    return a * b;
}
const divide = (a,b) => {
    if (b === 0) {
        alert("division by 0 not possible");
        return "Error!";
    }
    return a / b;
}
const operate = () => {
    let result;
    if (num1 && num2) {
        switch (operand) {
            case "/":
                result = divide(+num1,+num2);
                break;
            case "*":
                result = multiply(+num1,+num2);
                break;
            case "-":
                result = substract(+num1,+num2);
                break;
            case "+":
                result = add(+num1,+num2);
            default:
                break;
        }
        const dis = document.querySelector("input");
        num2 ="";
        operand = "";
        console.log(result);
        if(result < 0) {
            num1 = Math.abs(result);
            num1 = num1+"-";   
        } else {
            num1 = result;
        }
        console.log(num1);
        dis.value = num1;
        num1 = result;
    }

}
const setOperand = (op) => {
    if (num2) {
        operate();
    }
    operand = op;
}
const display = (num) => {
    const dis = document.querySelector("input");
    if (!num1 || !operand){
        if (typeof num1 === "number"){
            num1="";
        }
        num1 += num
        dis.value= num1;
    }else  if (operand ) {
        num2 += num;
        dis.value =num2;
    } 
}

const toggleSign = () => {
    const dis = document.querySelector("input");
    let sign;
    if (!operand) {
         sign = +num1;
         sign = sign * -1;
         num1 = sign;
    } else {
        sign= +num2;
        sign = sign * -1;
        num2 = sign;
    }
    if (sign < 0) {
        dis.value= Math.abs(sign)+ "-";
    } else {
        dis.value= sign;
    }
}

const clearDisplay = () => {
    num1="";
    num2="";
    operand="";
    
    const dis = document.querySelector("input");
    dis.value= "0";
 }