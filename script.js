const add = (num1, num2) => {return num1 + num2};

const subtract = (num1, num2) => {return num1 - num2};

const product = (num1, num2) => {return num1 * num2};

const division = (num1, num2) => {return num1 / num2};

const operate = (operation, num1, num2) => {return operation(num1, num2)};

let number1 = "";
let number2 = "";
let currentOperation = null;
let isSecondNumber = false;
let result = null;

const display = document.getElementById("display");
function updateDisplay(value) {
    display.textContent = value;
}

const numbers = document.getElementById("numbers");
numbers.addEventListener("click", (event) => {
    if (!event.target.classList.contains("number")) return;

    const digit = event.target.textContent;

    if (!isSecondNumber) {
        number1 += digit;
        updateDisplay(number1);
    } else {
        number2 += digit;
        updateDisplay(number2);
    }
});

const handleOperation = (newOperation, symbol) => {
    if (number2 !== "") {
        result = operate(currentOperation, Number(number1), Number(number2));
        number1 = result;
        number2 = "";
        updateDisplay(result)
    };
    currentOperation = newOperation;
    isSecondNumber = true;
    updateDisplay(symbol);
}

const operations = document.getElementById("operations");
operations.addEventListener("click", (event) => {
    const id = event.target.id;
    if (id === "plus") {
        handleOperation(add, "+");
    } else if (id === "minus") {
        handleOperation(subtract, "-");
    } else if (id === "multiply") {
        handleOperation(product, "×")
    } else {
        handleOperation(division, "÷");
    }
});

const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
    updateDisplay("");

    number1 = "";
    number2 = "";
    currentOperation = null;
});

const equal = document.getElementById("equal");
equal.addEventListener("click", () => {
    if (number2 === "" || currentOperation === null) return;

    result = operate(currentOperation, Number(number1), Number(number2));
    updateDisplay(result)

    number1 = result;
    number2 = "";
    isSecondNumber = false;
    currentOperation = null;
});

const backspace = document.getElementById("backspace");
backspace.addEventListener("click", () => {
    if (!isSecondNumber) {
        number1 = number1.slice(0, -1);
        updateDisplay(number1);
    } else {
        number2 = number2.slice(0, -1);
        updateDisplay(number2);
    }
});

document.addEventListener("keydown", (e) => {
    // console.log(e.key);
    const key = e.key;
    if (Number(key)) {
        console.log("you pressed a num")
    } else if (key === "+") {
        handleOperation(add, "+");
    } else if (key === "-") {
        handleOperation(subtract, "-");
    } else if (key === "*") {
        handleOperation(product, "×")
    } else if (key === "/") {
        handleOperation(division, "÷");
    } else if (key === "Enter") {
        console.log("you pressed Enter");
        if (number2 === "" || currentOperation === null) return;

        result = operate(currentOperation, Number(number1), Number(number2));
        updateDisplay(result)

        number1 = result;
        number2 = "";
        isSecondNumber = false;
        currentOperation = null;
    } else if (key === "Backspace") {
        console.log("you pressed backspace");
        if (!isSecondNumber) {
        number1 = number1.slice(0, -1);
        updateDisplay(number1);
        } else {
            number2 = number2.slice(0, -1);
            updateDisplay(number2);
        }
    } else if (key === "Escape") {
        console.log("you pressed Escape");
        updateDisplay("");

        number1 = "";
        number2 = "";
        currentOperation = null;
    }

})
