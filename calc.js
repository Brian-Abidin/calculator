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
    let num1 = `${btnID}`
    document.getElementById("display").value = disValue + num1;
    disValue = document.getElementById("display").value;
}

const numPress2 = function(btnID){
    document.getElementById("display").value = (`${btnID}`);
    return btnID;
}

const opPress = function(opID){
    if(`${opID}` === '+'){
        let value = parseInt(document.getElementById("display").value);
        const btns = document.getElementById('btncontain');
        btns.addEventListener('click', (event) => {
            const isButton = event.target.nodeName === 'BUTTON';
            let value2 = parseInt(event.target.id);
            if(!isButton){
                return;
            }
        })
        let res = operate(add, value, value2);

        document.getElementById("display").value = res;
    } else if (`${opID}` === '-'){

    } else if (`${opID}` === '*'){
        
    } else if (`${opID}` === '/'){
        
    } else if (`${opID}` === '='){

    } else if (`${opID}` === 'clear'){
        reset();
    }
    
}

const reset = function(){
    document.getElementById("display").value = "";
    disValue = "";
}


