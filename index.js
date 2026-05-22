const buttons = document.querySelectorAll(".button");
const output = document.querySelector(".output");
let a = "";
let b = "";
let op = "";
let rslt = "";
let temp = "";

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operator(op, a, b) {
  if (op == "+") {
    return add(a, b);
  }
  if (op == "-") {
    return subtract(a, b);
  }
  if (op == "x") {
    return multiply(a, b);
  }
  if (op == "/") {
    return divide(a, b);
  }
}

buttons.forEach(function (button) {
  button.addEventListener("click", (e) => {
    if (e.target.parentElement.classList.contains("operators")) {
      if (a != "" && b != "") {
        temp = operator(op, Number(a), Number(b));
        output.textContent = temp.toFixed(2);
        a = temp;
        b = "";
      }
      op = e.target.textContent;
    }
    if (e.target.parentElement.classList.contains("digits") && e.target.textContent != "=") {
      if (op == "") {
        a += e.target.textContent;
        output.textContent = a;
      }
      else {
        if (e.target.textContent != "=") {
          b += e.target.textContent;
          output.textContent = b;
        }
      }
    }
    if (e.target.textContent == "=") {
      if (b == "") {
        console.log(a);
        rslt = a;
        output.textContent = rslt;
        return;
      }
      if (Number(b) == 0 && op == "/") {
        output.textContent = "Error - Attempted Division by Zero"
        return;
      }
      console.log(op);
      console.log(a);
      console.log(b);
      rslt = operator(op, Number(a), Number(b));
      output.textContent = rslt.toFixed(2);
      a = rslt;
      b = "";
      op = "";
      rslt = "";
    }
    if (e.target.textContent == "C") {
      output.textContent = "";
      a = "";
      b = "";
      op = "";
    }
  })
});