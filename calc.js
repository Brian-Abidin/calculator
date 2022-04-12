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


let one = document.getElementById("1");
one.onclick = function(event){
    document.getElementById("display").value = 1;
}

let two = document.getElementById("2");
two.onclick = function(event){
    document.getElementById("display").value = 2;
}

let three = document.getElementById("3");
three.onclick = function(event){
    document.getElementById("display").value = 3;
}

const numPress = function(btnID){
    let num = document.getElementById(`${btnID}`);
    num.onclick = function(event){
        document.getElementById("display").value = (`${btnID}`);
    }
}
