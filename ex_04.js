let a = 2; 
let b = 4;
let action = "sub";


function addition() {
  return a + b;
}

function subtraction() {
  return a - b;
}

function calculator() {
  if (action === "add") {
    return addition(a, b);
  } else if (action === "sub") {
    return subtraction(a, b);
  } 
}
