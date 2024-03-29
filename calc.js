let value2 = 0; // second number being calculated
let value = 0; // first number being calculated
let disValue = ""; // display value
let res = 0; // result
let equalDone = 1; // has equals been clicked? 1 = true, 0 = false
let op; // current operator
let prevOp; // previous operator pressed

const add = function () {
  let sum = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
};

const subtract = function () {
  let diff = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    diff -= arguments[i];
  }
  return diff;
};

const multiply = function () {
  let product = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    product *= arguments[i];
  }
  return product;
};

const divide = function () {
  let quo = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    quo /= arguments[i];
  }
  return quo;
};

const numPress = function (numID) {
  if (prevOp === "=") {
    res = 0;
  }
  const num1 = `${numID}`;
  document.getElementById("display").value = disValue + num1;
  disValue = parseFloat(document.getElementById("display").value);
  console.log(value2);
  value2 = disValue;
};

const opEqual = function () {
  equalDone = 0;
  isNeg = 0;
  if (equalDone === 0 && prevOp === "+") {
    res = Number(add(value, value2).toFixed(5));
    document.getElementById("display").value = res;
    equalDone = 1;
    value = res;
    disValue = "";
    prevOp = "=";
  } else if (equalDone === 0 && prevOp === "-") {
    res = Number(subtract(value, value2).toFixed(5));
    document.getElementById("display").value = res;
    equalDone = 1;
    value = res;
    disValue = "";
    prevOp = "=";
  } else if (equalDone === 0 && prevOp === "*") {
    res = Number(multiply(value, value2).toFixed(5));
    document.getElementById("display").value = res;
    equalDone = 1;
    value = res;
    disValue = "";
    prevOp = "=";
  } else if (equalDone === 0 && prevOp === "/") {
    res = Number(divide(value, value2).toFixed(5));
    document.getElementById("display").value = res;
    equalDone = 1;
    value = res;
    disValue = "";
    prevOp = "=";
  }
};

const reset = function () {
  disValue = "";
  res = 0;
  value2 = 0;
  document.getElementById("display").value = 0;
  equalDone = 0;
};

const opAdd = function () {
  equalDone = 0;
  op = "+";
  if (res === 0) {
    value = value2;
    value2 = 0;
    res = Number(add(value, value2).toFixed(5));
    document.getElementById("display").value = res;
    value = res;
    value2 = value;
    disValue = "";
    prevOp = "+";
  } else if (prevOp === "=") {
    prevOp = "+";
  } else if (prevOp !== "+" && prevOp !== "=") {
    opEqual();
    prevOp = "+";
  } else {
    res = Number(add(value, value2).toFixed(5));
    document.getElementById("display").value = res;
    value = res;
    value2 = value;
    disValue = "";
    prevOp = "+";
  }
  if (isNaN(document.getElementById("display").value)) {
    document.getElementById("display").value = 0;
    reset();
  }
};

const opSub = function () {
  equalDone = 0;
  op = "-";
  if (res === 0) {
    value = value2;
    value2 = 0;
    res = Number(subtract(value, value2).toFixed(5));
    document.getElementById("display").value = res;
    value = res;
    value2 = value;
    disValue = "";
    prevOp = "-";
  } else if (prevOp === "=") {
    prevOp = "-";
  } else if (prevOp !== "-" && prevOp !== "=") {
    opEqual();
    prevOp = "-";
  } else {
    res = Number(subtract(value, value2).toFixed(5));
    document.getElementById("display").value = res;
    value = res;
    value2 = value;
    disValue = "";
    prevOp = "-";
  }
  if (isNaN(document.getElementById("display").value)) {
    document.getElementById("display").value = 0;
    reset();
  }
};

const opMul = function () {
  equalDone = 0;
  op = "*";
  if (res === 0) {
    value = value2;
    value2 = 1;
    res = Number(multiply(value, value2).toFixed(5));
    document.getElementById("display").value = res;
    value = res;
    value2 = value;
    disValue = "";
    prevOp = "*";
  } else if (prevOp === "=") {
    prevOp = "*";
  } else if (prevOp !== "*" && prevOp !== "=") {
    opEqual();
    prevOp = "*";
  } else {
    res = Number(multiply(value, value2).toFixed(5));
    document.getElementById("display").value = res;
    value = res;
    value2 = value;
    disValue = "";
    prevOp = "*";
  }
  if (isNaN(document.getElementById("display").value)) {
    document.getElementById("display").value = 0;
    reset();
  }
};

const opDiv = function () {
  equalDone = 0;
  op = "/";
  if (res === 0) {
    value = value2;
    value2 = 1;
    res = Number(divide(value, value2).toFixed(5));
    document.getElementById("display").value = res;
    value = res;
    value2 = value;
    disValue = "";
    prevOp = "/";
  } else if (prevOp === "=") {
    prevOp = "/";
  } else if (prevOp !== "/" && prevOp !== "=") {
    opEqual();
    prevOp = "/";
  } else {
    res = Number(divide(value, value2).toFixed(5));
    document.getElementById("display").value = res;
    value = res;
    value2 = value;
    disValue = "";
    prevOp = "/";
  }
  if (isNaN(document.getElementById("display").value)) {
    document.getElementById("display").value = 0;
    reset();
  }
};

const numPer = function () {
  display = document.getElementById("display").value * 0.01;
  value2 = display;
  disValue = value2;
  document.getElementById("display").value = value2;
};

const posNeg = function () {
  const display = document.getElementById("display").value * -1;
  value2 = display;
  disValue = value2;
  document.getElementById("display").value = value2;
};

const decimal = function () {
  display = document.getElementById("display").value;
  if (display.includes(".")) {
  } else {
    disValue = `${value2}.`;
    value2 = disValue;
    document.getElementById("display").value = value2;
  }
};

const opPress = function (opID) {
  if (`${opID}` === "+") opAdd();
  if (`${opID}` === "-") opSub();
  if (`${opID}` === "*") opMul();
  if (`${opID}` === "/") opDiv();
  if (`${opID}` === "=") opEqual();
  if (`${opID}` === "clear") reset();
};
