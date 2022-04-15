const add = function (){
    let sum = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

const subtract = function (){
    let diff = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        diff -= arguments[i];
    }
    return diff;
}

const multiply = function (){
    let product = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        product *= arguments[i];
    }
    return product;
}

const divide = function (){
    let quo = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        quo /= arguments[i];
    }
    return quo;
}

const operate = function (operator, ...arg){
    let result = operator(...arg);
    return result;
}

console.log(operate(subtract, 5, 4,3,4,5))

let value2 = 0;
let value = 0;
let disValue = "";
let res = 0;
let equalDone = 1;
let op;


const numPress = function(btnID){
    let num1 = `${btnID}`
    document.getElementById("display").value = disValue + num1;
    disValue = document.getElementById("display").value;
    value2 = parseInt(document.getElementById("display").value);
    
}

const numPress2 = function(btnID){
    document.getElementById("display").value = (`${btnID}`);
    return btnID;
}

const opPress = function(opID){
    if(`${opID}` === '+'){
        equalDone = 0;
        op = '+';
        if(res === 0){
            value = parseInt(disValue);
            value2 = 0; 
        }
        res = add(value, value2);
        document.getElementById("display").value = res;
        value = res;
        console.log(res, value, value2);
        value2 = res;
        disValue = "";
        if(isNaN(document.getElementById("display").value)){
            document.getElementById("display").value = 0;
            reset();
        }
        
    } else if (`${opID}` === '-'){
        equalDone = 0;
        op = '-';
        console.log(value);
        if(res === 0){
            value = parseInt(disValue);
            value2 = 0; 
        }
        res = subtract(value, value2);
        value = res;
        console.log(res, value, value2);
        value2 = res;
        disValue = "";
        document.getElementById("display").value = res;
        if(isNaN(document.getElementById("display").value)){
            document.getElementById("display").value = 0;
            reset();
        }
    } else if (`${opID}` === '*'){
        equalDone = 0;
        op = '*';
        if(res === 0){
            value = parseInt(disValue);
            value2 = 1; 
        }
        res = multiply(value, value2);
        value = res;
        console.log(res, value, value2);
        value2 = res;
        disValue = "";
        document.getElementById("display").value = res;
        if(isNaN(document.getElementById("display").value)){
            document.getElementById("display").value = 0;
            reset();
        }
    } else if (`${opID}` === '/'){
        equalDone = 0;
        op = '/';
        if(res === 0){
            value = parseInt(disValue);
            value2 = 1; 
        }
        res = divide(value, value2);
        value = res;
        console.log(res, value, value2);
        value2 = res;
        disValue = "";
        document.getElementById("display").value = res;
        if(isNaN(document.getElementById("display").value)){
            document.getElementById("display").value = 0;
            reset();
        }
    } else if (`${opID}` === '='){
        if(equalDone === 0 && op === '+'){
            res = add(value, parseInt(document.getElementById("display").value));
            document.getElementById("display").value = res;
            console.log(equalDone);
            equalDone = 1;
        } else if(equalDone === 0 && op === '-'){
            res = subtract(value, parseInt(document.getElementById("display").value));
            document.getElementById("display").value = res;
            console.log(equalDone);
            equalDone = 1;
        } else if(equalDone === 0 && op === '*'){
            res = multiply(value, parseInt(document.getElementById("display").value));
            document.getElementById("display").value = res;
            console.log(equalDone);
            equalDone = 1;
        } else if(equalDone === 0 && op === '/'){
            res = divide(value, parseInt(document.getElementById("display").value));
            document.getElementById("display").value = res;
            console.log(equalDone);
            equalDone = 1;
        }
    } else if (`${opID}` === 'clear'){
        reset();
    }
}
/* const numId = function (btnID){
    value2 = parseInt(`${btnID}`);
} */
const reset = function(){
    document.getElementById("display").value = "";
    disValue = "";
    res = 0;
    value2 = 0;
    document.getElementById("display").value = 0;
    equalDone = 0;
}