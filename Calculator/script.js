const input = document.querySelector(".input");
const output = document.querySelector(".output");
const calcButtons = document.querySelector(".calc-buttons");

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const operators = ["+", "-", "÷", "×"];
let expression = "";
let isFinished = false;

// EVENT LISTENERS

// Click Listener for UI buttons
calcButtons.addEventListener("click", e => {
    const target = e.target;
    if (!target.matches("button")) return;

    target.blur();

    let type;
    if (target.classList.contains("number")) {
        type = "number";
    } else if (target.classList.contains("operator")) {
        type = "operator";
    } else if (target.classList.contains("action")) {
        type = "action";
    } else if (target.classList.contains("decimal")) {
        type = "decimal";
    } else {
        type = "bracket";
    }

    handleInput(target.dataset.value, type);
});

// Keyboard Listener
window.addEventListener("keydown", e => {
    let key = e.key;

    if (key === "Enter") {
        e.preventDefault();
        handleInput("=", "action");
    } else if (key === "Backspace") {
        handleInput("DEL", "action");
    } else if (key === "Escape") {
        handleInput("AC", "action");
    } else if (key === "*") {
        handleInput("×", "operator");
    } else if (key === "/") {
        handleInput("÷", "operator");
    } else if (numbers.includes(key)) {
        handleInput(key, "number");
    } else if (key === "+" || key === "-") {
        handleInput(key, "operator");
    } else if (key === ".") {
        handleInput(".", "decimal");
    } else if (key === "(" || key === ")") {
        handleInput(key, "bracket");
    }
});

// INPUT PROCESSING

function handleInput(value, type) {
    if (isFinished) {
        if (type === "number" || value === "(" || type === "decimal") {
            expression = "";
            output.textContent = "";
            input.textContent = ""; // Clear the UI
        } else if (type === "operator") {
            // Use the previous result as the start of the next sum
            expression = output.textContent;
            output.textContent = "";
        }
        isFinished = false;
    }

    const lastChar = expression.slice(-1);

    // Action Buttons
    if (value === "AC") {
        expression = "";
        output.textContent = "";
        input.textContent = "";
        return;
    }

    if (value === "DEL") {
        expression = expression.slice(0, -1);
        input.textContent = expression;
        return;
    }

    if (value === "=") {
        execute();
        return;
    }

    // Max Length Check
    if (expression.length >= 20) {
        return;
    }

    // Number Logic
    if (type === "number") {
        if (lastChar === ")") {
            expression += "×";
        }
        expression += value;
    }

    // Operator Logic
    else if (type === "operator") {
        if (numbers.includes(lastChar) || lastChar === ")") {
            expression += value;
        } else if (operators.includes(lastChar)) {
            // Replace operator unless it's a negative sign for a number
            if (lastChar === "-" && (expression.length === 1 || expression.slice(-2, -1) === "(")) {
                return;
            }
            expression = expression.slice(0, -1) + value;
        } else if (value === "-" && (expression.length === 0 || lastChar === "(")) {
            expression += value;
        }
    }

    // Decimal Logic
    else if (type === "decimal") {
        if (decimalState()) {
            if (expression === "" || "+-×÷(".includes(lastChar)) {
                expression += "0";
            }
            expression += value;
        }
    }

    // Bracket Logic
    else if (type === "bracket") {
        if (value === "(") {
            if (expression !== "") {
                if (numbers.includes(lastChar) || lastChar === ")") {
                    expression += "×";
                }
            }
            expression += value;
        } else {
            if (closingBracketState()) {
                expression += value;
            }
        }
    }

    input.textContent = expression;
}

/* 
    Note: The main purpose of the project was to work on DOM manipulation and event state so the core 
    Shunting Yard algorithm logic was implemented with AI assistance to ensure mathematical accuracy 
    and handle operator precedence, allowing me to focus on the DOM manipulation and UI state management.
*/

// Shunting Yard
function execute() {
    let openBrackets = (expression.match(/\(/g) || []).length;
    let closedBrackets = (expression.match(/\)/g) || []).length;
    while (openBrackets > closedBrackets) {
        expression += ")";
        openBrackets--;
    }

    if (expression === "" || operators.includes(expression.slice(-1))) return;

    try {
        const tokens = tokenize(expression);
        const postfix = shuntingYard(tokens);
        const result = evaluatePostfix(postfix);

        output.textContent = formatResult(result);
        isFinished = true;
    } catch (err) {
        if (err.message === "DivByZero") {
            output.textContent = "Cannot div by 0";
        } else {
            output.textContent = "Error";
        }
        isFinished = true;
    }
}

function tokenize(str) {
    const sanitized = str.replace(/×/g, "*").replace(/÷/g, "/");
    const tokens = [];
    let numberBuffer = "";

    for (let i = 0; i < sanitized.length; i++) {
        const char = sanitized[i];

        if (char === "-" && (i === 0 || "+*/(".includes(sanitized[i - 1]))) {
            numberBuffer += char;
        } else if (/[0-9.]/.test(char)) {
            numberBuffer += char;
        } else {
            if (numberBuffer !== "") {
                tokens.push(parseFloat(numberBuffer));
                numberBuffer = "";
            }
            tokens.push(char);
        }
    }
    if (numberBuffer !== "") tokens.push(parseFloat(numberBuffer));
    return tokens;
}

function shuntingYard(tokens) {
    const outputQueue = [];
    const opStack = [];
    const precedence = { "+": 1, "-": 1, "*": 2, "/": 2 };

    tokens.forEach(token => {
        if (typeof token === "number") {
            outputQueue.push(token);
        } else if ("+-*/".includes(token)) {
            while (opStack.length && opStack[opStack.length - 1] !== "(" && precedence[opStack[opStack.length - 1]] >= precedence[token]) {
                outputQueue.push(opStack.pop());
            }
            opStack.push(token);
        } else if (token === "(") {
            opStack.push(token);
        } else if (token === ")") {
            while (opStack.length && opStack[opStack.length - 1] !== "(") {
                outputQueue.push(opStack.pop());
            }
            opStack.pop();
        }
    });
    while (opStack.length) {
        outputQueue.push(opStack.pop());
    }
    return outputQueue;
}

function evaluatePostfix(postfix) {
    const stack = [];
    postfix.forEach(token => {
        if (typeof token === "number") {
            stack.push(token);
        } else {
            const b = stack.pop();
            const a = stack.pop();
            if (token === "+") stack.push(a + b);
            else if (token === "-") stack.push(a - b);
            else if (token === "*") stack.push(a * b);
            else if (token === "/") {
                if (b === 0) throw new Error("DivByZero");
                stack.push(a / b);
            }
        }
    });
    return stack[0];
}

function formatResult(res) {
    if (res === undefined || isNaN(res)) return "Error";
    const absRes = Math.abs(res);

    // Use scientific notation for massive or tiny numbers
    if (absRes > 1e12 || (absRes < 1e-7 && absRes !== 0)) {
        return res.toExponential(5);
    }

    // Clean up floating point errors like 0.1 + 0.2
    return parseFloat(res.toFixed(10)).toString();
}

// HELPERS

function decimalState() {
    let i = expression.length - 1;
    while (i >= 0) {
        if ("+-×÷()".includes(expression[i])) break;
        if (expression[i] === ".") return false;
        i--;
    }
    return true;
}

function closingBracketState() {
    if ("(+-×÷".includes(expression.slice(-1))) return false;
    let open = 0, closed = 0;
    for (let ch of expression) {
        if (ch === "(") open++;
        if (ch === ")") closed++;
    }
    return open > closed;
}