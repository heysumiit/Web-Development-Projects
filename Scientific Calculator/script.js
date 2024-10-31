function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    document.getElementById("display").value += number;
}

function appendOperator(operator) {
    let display = document.getElementById("display").value;
    if (display && !isNaN(display[display.length - 1])) {
        document.getElementById("display").value += operator;
    }
}

function calculateResult() {
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value.replace('%', '*0.01'));
    } catch {
        display.value = "Error";
    }
}

// Scientific functions
function calculateSquareRoot() {
    let display = document.getElementById("display");
    display.value = Math.sqrt(parseFloat(display.value));
}

function calculateSquare() {
    let display = document.getElementById("display");
    display.value = Math.pow(parseFloat(display.value), 2);
}

function calculateSin() {
    let display = document.getElementById("display");
    display.value = Math.sin(parseFloat(display.value) * Math.PI / 180);
}

function calculateCos() {
    let display = document.getElementById("display");
    display.value = Math.cos(parseFloat(display.value) * Math.PI / 180);
}

function calculateTan() {
    let display = document.getElementById("display");
    display.value = Math.tan(parseFloat(display.value) * Math.PI / 180);
}

function calculateLog() {
    let display = document.getElementById("display");
    display.value = Math.log10(parseFloat(display.value));
}

function calculateLn() {
    let display = document.getElementById("display");
    display.value = Math.log(parseFloat(display.value));
}

function calculateExp() {
    let display = document.getElementById("display");
    display.value = Math.exp(parseFloat(display.value));
}

function calculateFactorial() {
    let display = document.getElementById("display");
    let num = parseFloat(display.value);
    if (num < 0) display.value = "Error";
    else display.value = factorial(num);
}

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

function calculatePi() {
    document.getElementById("display").value = Math.PI;
}
