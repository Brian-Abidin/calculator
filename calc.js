const add = function (){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(add(5, 3, 66, 23, 23, 2, 2, 3))