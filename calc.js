const add = function (){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

const subtract = function (){
    let diff = 0;
    for (let i = 0; i < arguments.length; i++) { // use arguments object to iterate through all arguments passed through function
        diff -= arguments[i];
    }
    return diff;
}

console.log(subtract(100, 5, 25, 3, 2, 3, 2,3,4,5,32,2,3,100))