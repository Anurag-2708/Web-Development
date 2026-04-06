export function initBoard(grid, n) {
    grid.innerHTML = "";
    for (let i = 0; i < n * n; i++) {
        const size = 500 / n;

        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.boxSizing = "border-box";
        cell.style.height = `${size}px`;
        cell.style.width = `${size}px`;
        cell.style.backgroundColor = "rgba(0, 0, 0, 0)"
        cell.dataset.opacity = 0;
        cell.dataset.rValue = 0;
        cell.dataset.gValue = 0;
        cell.dataset.bValue = 0;
        cell.dataset.coloured = 0; // 0 => No colour, 1 => Random Colour, 2 => Classic colour

        grid.appendChild(cell);
    }
}


export function draw(cell, type) {
    if (type === "eraser") {
        cell.style.backgroundColor = "rgba(0, 0, 0, 0)"
        cell.dataset.opacity = 0;
        cell.dataset.rValue = 0;
        cell.dataset.gValue = 0;
        cell.dataset.bValue = 0;
        cell.dataset.coloured = 0;
    }
    else if (type === "random") {
        if (Number(cell.dataset.coloured) === 0) {
            cell.dataset.rValue = Math.floor(Math.random() * 256);
            cell.dataset.gValue = Math.floor(Math.random() * 256);
            cell.dataset.bValue = Math.floor(Math.random() * 256);

            const red = Number(cell.dataset.rValue);
            const green = Number(cell.dataset.gValue);
            const blue = Number(cell.dataset.bValue);

            cell.dataset.coloured = 1;
        }

        if (Number(cell.dataset.coloured) === 1) changeOpacity(cell);
    }
    else if (Number(cell.dataset.coloured) !== 1) {
        cell.dataset.coloured = 2;
        changeOpacity(cell);
    }
}

function changeOpacity(cell) {
    const red = Number(cell.dataset.rValue);
    const green = Number(cell.dataset.gValue);
    const blue = Number(cell.dataset.bValue);

    let opacity = Number(cell.dataset.opacity);
    opacity = Math.min(opacity + 0.2, 1);
    cell.dataset.opacity = opacity;

    const alpha = opacity;
    cell.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}