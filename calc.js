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
        if(res === 0){
            value = parseInt(disValue);
            value2 = 0; 
        }
        res = add(value, value2);
        document.getElementById("display").value = res;
        value = res;
        console.log(res, value, value2);
        value2 = res;
        console.log(value2);
        disValue = "";
        if(isNaN(document.getElementById("display").value)){
            document.getElementById("display").value = 0;
            reset();
        }
        
    } else if (`${opID}` === '-'){
        if(res === 0){
            value = parseInt(disValue);
            value2 = 0; 
        }
        res = subtract(value, value2);
        value = res;
        console.log(res, value, value2);
        value2 = res;
        console.log(value2);
        disValue = "";
        document.getElementById("display").value = res;
        if(isNaN(document.getElementById("display").value)){
            document.getElementById("display").value = 0;
            reset();
        }
    } else if (`${opID}` === '*'){
        if(res === 0){
            value = parseInt(disValue);
            value2 = 0; 
        }
        res = multiply(value, value2);
        value = res;
        console.log(res, value, value2);
        value2 = res;
        console.log(value2);
        disValue = "";
        document.getElementById("display").value = res;
        if(isNaN(document.getElementById("display").value)){
            document.getElementById("display").value = 0;
            reset();
        }
    } else if (`${opID}` === '/'){
        if(res === 0){
            value = parseInt(disValue);
            value2 = 0; 
        }
        res = divide(value, value2);
        value = res;
        console.log(res, value, value2);
        value2 = res;
        console.log(value2);
        disValue = "";
        document.getElementById("display").value = res;
        if(isNaN(document.getElementById("display").value)){
            document.getElementById("display").value = 0;
            reset();
        }
    } else if (`${opID}` === '='){

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
    value = 0;
    value2 = 0;
    document.getElementById("display").value = 0;
}