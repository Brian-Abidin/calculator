let value2 = 0;
let value = 0;
let disValue = "";
let res = 0;
let equalDone = 1;
let op;
let prevOp;

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

const numPress = function(numID){
   if(prevOp === '='){
        disValue = "";
        res = 0;
    } 
    let num1 = `${numID}`
    document.getElementById("display").value = disValue + num1;
    disValue = document.getElementById("display").value;
    value2 = parseInt(disValue); 
}

const opEqual = function(){
    equalDone = 0;
    if(equalDone === 0 && prevOp === '+'){
        value2 = parseInt(document.getElementById("display").value);
        res = add(value, value2);
        document.getElementById("display").value = res;
        equalDone = 1;
        value = res; 
        console.log(res, value, value2);
        disValue = "";
        prevOp = "=";
    } else if(equalDone === 0 && prevOp === '-'){
        value2 = parseInt(document.getElementById("display").value);
        res = subtract(value, value2);
        document.getElementById("display").value = res;
        equalDone = 1;
        value = res;
        console.log(res, value, value2);
        disValue = "";
        prevOp = "=";
    } else if(equalDone === 0 && prevOp === '*'){
        value2 = parseInt(document.getElementById("display").value);
        res = multiply(value, parseInt(document.getElementById("display").value));
        document.getElementById("display").value = res;
        equalDone = 1;
        value = res;
        disValue = "";
        prevOp = "=";
    } else if(equalDone === 0 && prevOp === '/'){
        value2 = parseInt(document.getElementById("display").value);
        res = divide(value, value2);
        document.getElementById("display").value = res;
        equalDone = 1;
        value = res; 
        disValue = "";
        prevOp = "=";
    }
}

const reset = function(){
    disValue = "";
    res = 0;
    value2 = 0;
    document.getElementById("display").value = 0;
    equalDone = 0;
}

const opAdd = function(){
    equalDone = 0; 
    op = '+'; 
    if(res === 0){
        value = parseInt(disValue);
        value2 = 0;
        res = add(value, value2);
        document.getElementById("display").value = res;
        value = res;
        value2 = value;
        console.log(res, value, value2);
        disValue = "";
        prevOp = '+';
    } else if(prevOp === '='){
        prevOp = '+';
    } else if(prevOp !== '+' && prevOp !== '='){
        opEqual();
        prevOp = '+';
    }
    else {
        res = add(value, value2);
        document.getElementById("display").value = res;
        value = res;
        value2 = value;
        console.log(res, value, value2);
        disValue = "";
        prevOp = '+';
    }
    if(isNaN(document.getElementById("display").value)){
        document.getElementById("display").value = 0;
        reset();
    }
}

const opSub = function(){
    equalDone = 0;
    op = '-';
    if(res === 0){
        value = parseInt(disValue);
        value2 = 0;
        res = subtract(value, value2);
        document.getElementById("display").value = res;
        value = res;
        value2 = value;
        console.log(res, value, value2);
        disValue = "";
        prevOp = "-";
    } else if(prevOp === '='){
        prevOp = '-';   
    } else if(prevOp !== '-' && prevOp !== '='){
        opEqual();
        prevOp = '-';
        console.log(res, value, value2);
    }
     else {
        res = subtract(value, value2);
        document.getElementById("display").value = res;
        value = res;
        value2 = value;
        console.log(res, value, value2);
        disValue = "";
        prevOp = "-";
    }
    if(isNaN(document.getElementById("display").value)){
        document.getElementById("display").value = 0;
        reset();
    }
}

const opMul = function(){
    equalDone = 0;
    op = '*'; 
    if(res === 0){ 
        value = parseInt(disValue);
        value2 = 1;
        res = multiply(value, value2);
        document.getElementById("display").value = res;
        value = res;
        value2 = value;
        console.log(res, value, value2);
        disValue = "";
        prevOp = '*';
    } else if(prevOp === '='){
        prevOp = '*';
    } else if(prevOp !== '*' && prevOp !== '='){
        opEqual();
        prevOp = '*';
    }
    else {
        res = multiply(value, value2);
        document.getElementById("display").value = res;
        value = res;
        value2 = value;
        console.log(res, value, value2);
        disValue = "";
        prevOp = '*';
    }
    if(isNaN(document.getElementById("display").value)){
        document.getElementById("display").value = 0;
        reset();
    }
}

const opDiv = function(){
    equalDone = 0; 
    op = '/'; 
    if(res === 0){ 
        value = parseInt(disValue);
        value2 = 1;
        res = divide(value, value2);
        document.getElementById("display").value = res;
        value = res;
        value2 = value;
        console.log(res, value, value2);
        disValue = "";
        prevOp = '/';
    } else if(prevOp === '='){
        prevOp = '/';
    } else if(prevOp !== '/' && prevOp !== '='){
        opEqual();
        prevOp = '/';
    }
    else {
        res = divide(value, value2);
        document.getElementById("display").value = res;
        value = res;
        value2 = value;
        console.log(res, value, value2);
        disValue = "";
        prevOp = '/';
    }
    if(isNaN(document.getElementById("display").value)){
        document.getElementById("display").value = 0;
        reset();
    }
}

const numPer = function(){
    display = parseInt(document.getElementById("display").value);
    display = display * 0.01;
    document.getElementById("display").value = display;
}

const opPress = function(opID){
    if(`${opID}` === '+') opAdd();
    if (`${opID}` === '-') opSub();
    if (`${opID}` === '*') opMul();
    if (`${opID}` === '/') opDiv();
    if (`${opID}` === '=') opEqual();
    if (`${opID}` === 'clear') reset();
}