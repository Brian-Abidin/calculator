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
    let num1 = `${numID}`
    document.getElementById("display").value = disValue + num1;
    disValue = document.getElementById("display").value;
    value2 = parseInt(disValue);
    // run operator that was clicked 
    
}

/* const opAdd = function(){
    equalDone = 0; // equals hasn't been clicked
    op = '+'; // currently in + operation
    if(res === 0){ //used for the first operation
        value = parseInt(disValue);
        value2 = 0;
    }
    res = add(value, value2);
    document.getElementById("display").value = res;
    value = res;
    value2 = value;
    console.log(res, value, value2);
    disValue = "";
    if(isNaN(document.getElementById("display").value)){
        document.getElementById("display").value = 0;
        reset();
    }
} 

const opSub = function(){
    equalDone = 0;
    op = '-';
    
    console.log(value);
    if(res === 0){
        value = parseInt(disValue);
        value2 = 0; 
    }
    res = subtract(value, value2);
    document.getElementById("display").value = res;
    value = res;
    value2 = value;
    console.log(res, value, value2);
    disValue = "";
    if(isNaN(document.getElementById("display").value)){
        document.getElementById("display").value = 0;
        reset();
    }
} */

const opMul = function(){
    equalDone = 0;
    op = '*';
    if(res === 0){
        value = parseInt(disValue);
        value2 = 1; 
    }
    res = multiply(value, value2);
    document.getElementById("display").value = res;
    value = res;
    value2 = 1;
    console.log(res, value, value2); 
    disValue = "";
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
    }
    res = divide(value, value2);
    document.getElementById("display").value = res;
    value = res;
    value2 = value;
    console.log(res, value, value2);
    disValue = "";
    if(isNaN(document.getElementById("display").value)){
        document.getElementById("display").value = 0;
        reset();
    }
}

const opEqual = function(){
    if(equalDone === 0 && op === '+'){
        res = add(value, parseInt(document.getElementById("display").value));
        document.getElementById("display").value = res;
        equalDone = 1;
        value = res; 
        disValue = "";
        prevOp = "=";
    } else if(equalDone === 0 && op === '-'){
        res = subtract(value, parseInt(document.getElementById("display").value));
        document.getElementById("display").value = res;
        equalDone = 1;
        value = res;
        disValue = "";
        prevOp = "=";
    } else if(equalDone === 0 && op === '*'){
        res = multiply(value, parseInt(document.getElementById("display").value));
        document.getElementById("display").value = res;
        equalDone = 1;
        value = res;
        disValue = "";
        prevOp = "=";
    } else if(equalDone === 0 && op === '/'){
        res = divide(value, parseInt(document.getElementById("display").value));
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

const opPress = function(opID){
    if(`${opID}` === '+') opAdd();
    if (`${opID}` === '-') opSub();
    if (`${opID}` === '*') opMul();
    if (`${opID}` === '/') opDiv();
    if (`${opID}` === '=') opEqual();
    if (`${opID}` === 'clear') reset();
}

const opAdd = function(){
    equalDone = 0; // equals hasn't been clicked
    op = '+'; // currently in + operation
    if(res === 0){ //used for the first operation
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
    } else {
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
    } else {
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
