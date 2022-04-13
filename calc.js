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

let disValue = "";

const numPress = function(btnID){
    document.getElementById("display").value = disValue + (`${btnID}`);
    disValue = document.getElementById("display").value;
}

const opPress = function(opID){
    let value = parseInt(document.getElementById("display").value);
    let y = 5;
    if(`${opID}` === '+'){
        
        let res = operate(add, value, y);
        console.log(res);
    } else if (`${opID}` === '-'){

    } else if (`${opID}` === '*'){
        
    } else if (`${opID}` === '/'){
        
    }
    
}


