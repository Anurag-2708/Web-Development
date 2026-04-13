const input = document.querySelector(".input");
const output = document.querySelector(".output");

const calcButtons = document.querySelector(".calc-buttons");

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const operators = ["+", "-", "÷", "×"];
let expression = "";

//Event Listener for calculator buttons on calc-buttons
calcButtons.addEventListener("click", e => {
    const target = e.target;

    //Checks if a button is clicked in calc-buttons
    if (target.matches("button")) {

        //Action button clicked
        if (target.classList.contains("action")) {

            //Clear entire expression
            if (target.dataset.value === "AC") {
                expression = "";
                output.textContent = "";
                input.textContent = "";
            }

            //Delete last character
            else if (target.dataset.value === "DEL") {
                expression = expression.slice(0, -1);
                input.textContent = expression;
            }

            //Execute expression
            else {
                execute();
            }
        }

        else {
            //Limits max expression length to 20
            if (expression.length >= 20) {
                return;
            }

            //Number button clicked
            if (target.classList.contains("number")) {
                expression += target.dataset.value;
            }

            //Operator button clicked
            else if (target.classList.contains("operator")) {
                const lastChar = expression.slice(-1);

                //Can enter operator if last character is a number
                if (numbers.includes(lastChar)) {
                    expression += target.dataset.value;
                }

                //Replaces operator if last character was an operator
                else if (operators.includes(lastChar)) {
                    //Checks if minus sign is acting as identifier for -ve number
                    if (lastChar === "-" && (expression.length === 1 || expression.slice(-2, -1) === "(")) return;

                    expression = expression.slice(0, -1) + target.dataset.value;
                }

                //For entering negative number
                else if (target.dataset.value === "-" && (expression.length === 0 || lastChar === "(")) {
                    expression += target.dataset.value;
                }

                //return if operator cannot be inserted
                else return;
            }

            //Decimal button clicked
            else if (target.classList.contains("decimal")) {
                if (decimalState()) expression += target.dataset.value;
                else return;
            }

            //Bracket button clicked
            else if (target.classList.contains(".bracket")) {

                //No restriction on opening bracket
                if (target.dataset.value === "(") expression += target.dataset.value;

                else if (closingBracketState()) expression += target.dataset.value;
                else return;
            }

            input.textContent = expression;
            console.log(input);
        }
    }
});

//Checks decimal state for current number
function decimalState() {
    let i = expression.length - 1;

    while (i >= 0) {
        const ch = expression[i];

        if ("+-×÷()".includes(ch)) break;

        if (ch === ".") return false;

        i--;
    }

    return true;
}

//Checks if closing bracket is allowed or not
function closingBracketState() {
    if (expression.slice(-1) === "(" || operators.includes(expression.slice(-1))) return false;

    let temp = 0;
    for (const ch of expression) {
        if (ch === "(") temp++;
        else if (ch === ")") temp--;
    }

    if (temp > 0) return true;
    else return false;
}