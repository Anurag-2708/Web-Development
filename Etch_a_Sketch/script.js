import * as func from './functions.js'

const grid = document.querySelector(".grid");

let currentSize = 20;
func.initBoard(grid, currentSize);

// Clear Board
const clearButton = document.querySelector(".clear-button");

clearButton.addEventListener("click", e => {
    func.initBoard(grid, currentSize);
})

// Resize Board
const resizeButton = document.querySelector(".resize-button");
const popup = document.querySelector(".popup");
const input = document.querySelector(".input");
const enterButton = document.querySelector(".enter-button");
const h4 = document.querySelector(".popup h4");

resizeButton.addEventListener("click", () => {
    popup.classList.remove("hidden");
});

function resize() {
    const n = Number(input.value);

    if (n > 60) {
        h4.textContent = "Too large! Enter a number <= 60.";
    } else if (n <= 0) {
        h4.textContent = "Please enter a valid positive number.";
    } else {
        func.initBoard(grid, n);
        currentSize = n;
        popup.classList.add("hidden");
    }
}

enterButton.addEventListener("click", resize);
input.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        resize();
    }
});

// Toggle lines
const toggleButton = document.querySelector(".toggle-button");
toggleButton.addEventListener("click", e => {
    grid.classList.toggle("no-grid");
})

// Drawing Logic
let isDrawing = false;
let type = "classic";

const body = document.querySelector("body");
body.addEventListener("pointerdown", e => {
    isDrawing = true;

    if(e.target.classList.contains("cell")) {
        lastCell = e.target;
        func.draw(e.target, type);
    }
});
body.addEventListener("pointerup", e => { isDrawing = false; });

let lastCell = null;

grid.addEventListener("pointermove", e => {
    if (isDrawing) {
        const cell = e.target;

        if (!e.target.classList.contains("cell")) return;
        if (lastCell === cell) return;

        lastCell = cell;
        func.draw(cell, type);
    }
})

// Selected Type Logic
const classicButton = document.querySelector(".classic-button");
const randomButton = document.querySelector(".random-button");
const eraserButton = document.querySelector(".eraser-button");
const shadingButton = document.querySelector(".shading-button");

// Eraser Logic
eraserButton.addEventListener("click", e => {
    type = 'eraser';
    eraserButton.classList.add("selected");

    classicButton.classList.remove("selected");
    randomButton.classList.remove("selected");
});

// Random Colour Logic
randomButton.addEventListener("click", e => {
    type = 'random';
    randomButton.classList.add("selected");

    eraserButton.classList.remove("selected");
    classicButton.classList.remove("selected");
    shadingButton.classList.remove("selected");
});

// Classic Colour Logic
classicButton.addEventListener("click", e => {
    type = 'classic';
    classicButton.classList.add("selected");

    eraserButton.classList.remove("selected");
    randomButton.classList.remove("selected");
    shadingButton.classList.remove("selected");
});

// Shading Logic
shadingButton.addEventListener("click", e => {
    type = 'shading';
    shadingButton.classList.add("selected");

    eraserButton.classList.remove("selected");
    classicButton.classList.remove("selected");
    randomButton.classList.remove("selected");
})