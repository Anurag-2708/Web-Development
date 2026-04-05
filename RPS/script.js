const header = document.querySelector(".header");
const menu_container = document.querySelector(".menu-container");
const game_container = document.querySelector(".game-container");
const rules_container = document.querySelector(".rules-container");
const stats_container = document.querySelector(".stats-container");

const start_button = document.querySelectorAll(".start-button");
function open_game_menu() {
    header.classList.add("hidden");
    menu_container.classList.add("hidden");
    rules_container.classList.add("hidden");
    stats_container.classList.add("hidden");

    game_container.classList.remove("hidden");
}
start_button.forEach(btn => {
    btn.addEventListener("click", e => {
        open_game_menu();
    })
})

const main_menu_button = document.querySelectorAll(".menu-button");
function open_main_menu() {
    game_container.classList.add("hidden");
    rules_container.classList.add("hidden");
    stats_container.classList.add("hidden");

    header.classList.remove("hidden");
    menu_container.classList.remove("hidden");
}
main_menu_button.forEach(btn => {
    btn.addEventListener("click", e => {
        open_main_menu();
    })
})

const rules_button = document.querySelectorAll(".rules-button");
function open_rules_menu() {
    header.classList.add("hidden");
    menu_container.classList.add("hidden");
    game_container.classList.add("hidden");
    stats_container.classList.add("hidden");

    rules_container.classList.remove("hidden");
}
rules_button.forEach(btn => {
    btn.addEventListener("click", e => {
        open_rules_menu();
    })
})

const stats_button = document.querySelectorAll(".stats-button");
function open_stats_menu() {
    header.classList.add("hidden");
    menu_container.classList.add("hidden");
    game_container.classList.add("hidden");
    rules_container.classList.add("hidden");

    stats_container.classList.remove("hidden");
    renderStats();
}
stats_button.forEach(btn => {
    btn.addEventListener("click", e => {
        open_stats_menu();
    })
})

let interval;
const choices = ["rock", "paper", "scissors"];

const player_img = document.querySelector(".player-img");
const computer_img = document.querySelector(".computer-img");

const images = {
    rock: "./images/rock.png",
    paper: "./images/paper.png",
    scissors: "./images/scissors.png"
};

function startAnimation() {
    let i = 0;

    interval = setInterval(() => {
        const choice = choices[i % 3];

        player_img.src = images[choice];
        computer_img.src = images[choice];

        i++;
    }, 800);
}
startAnimation();

function stopAnimation() {
    clearInterval(interval);
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function getresult(playerChoice, computerChoice) {
    if (playerChoice === "rock") {
        if (computerChoice === "rock") return ["🤝 Draw", "🤖"];
        else if (computerChoice === "paper") return ["💀 You Lose!", "😈"];
        else return ["🏆 You Win!", "😭"];
    }
    else if (playerChoice === "paper") {
        if (computerChoice === "rock") return ["🏆 You Win!", "😭"];
        else if (computerChoice === "paper") return ["🤝 Draw", "🤖"];
        else return ["💀 You Lose!", "😈"];
    }
    else {
        if (computerChoice === "rock") return ["💀 You Lose!", "😈"];
        else if (computerChoice === "paper") return ["🏆 You Win!", "😭"];
        else return ["🤝 Draw", "🤖"];
    }
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const choice_buttons = [rock, paper, scissors];

choice_buttons.forEach(choice => {
    choice.addEventListener("click", e => {
        stopAnimation();
        choice_buttons.forEach(btn => btn.disabled = true);

        const computer_choice = getComputerChoice();
        const player_choice = choice.classList[0];

        player_img.src = images[player_choice];
        computer_img.src = images[computer_choice];
        const result = getresult(player_choice, computer_choice);

        const player = document.querySelector(".player-choice");
        const computer = document.querySelector(".computer-choice");
        playerText = player.lastElementChild;
        computerText = computer.lastElementChild;

        playerText.textContent = result[0];
        computerText.textContent = result[1];

        updateStats(player_choice, result[0]);

        setTimeout(() => {
            startAnimation();
            playerText.textContent = "Please select one of the below";
            computerText.textContent = "";
            choice_buttons.forEach(btn => btn.disabled = false);
        }, 2000);
    })
})

const stats = {
    total: 0,
    win: 0,
    loss: 0,
    draw: 0,

    choices: {
        rock: { used: 0, win: 0, loss: 0, draw: 0 },
        paper: { used: 0, win: 0, loss: 0, draw: 0 },
        scissors: { used: 0, win: 0, loss: 0, draw: 0 }
    }
};

const savedStats = localStorage.getItem("rps-stats");

if (savedStats) {
    Object.assign(stats, JSON.parse(savedStats));
}

function updateStats(playerChoice, resultText) {
    stats.total++;

    const choiceStats = stats.choices[playerChoice];
    choiceStats.used++;

    if (resultText.includes("Win")) {
        choiceStats.win++;
        stats.win++;
    }
    else if (resultText.includes("Lose")) {
        choiceStats.loss++;
        stats.loss++;
    }
    else {
        choiceStats.draw++;
        stats.draw++;
    }

    localStorage.setItem("rps-stats", JSON.stringify(stats));
}

function getPercent(part, total) {
    if (total === 0) return "0.0%";
    return ((part / total) * 100).toFixed(1) + "%";
}

function getStatsSummary() {
    return {
        total: stats.total,
        win: stats.win,
        loss: stats.loss,
        draw: stats.draw,

        winPercent: getPercent(stats.win, stats.total),
        lossPercent: getPercent(stats.loss, stats.total),
        drawPercent: getPercent(stats.draw, stats.total),

        choices: {
            rock: {
                ...stats.choices.rock,
                winPercent: getPercent(stats.choices.rock.win, stats.choices.rock.used),
                lossPercent: getPercent(stats.choices.rock.loss, stats.choices.rock.used),
                drawPercent: getPercent(stats.choices.rock.draw, stats.choices.rock.used)
            },
            paper: {
                ...stats.choices.paper,
                winPercent: getPercent(stats.choices.paper.win, stats.choices.paper.used),
                lossPercent: getPercent(stats.choices.paper.loss, stats.choices.paper.used),
                drawPercent: getPercent(stats.choices.paper.draw, stats.choices.paper.used)
            },
            scissors: {
                ...stats.choices.scissors,
                winPercent: getPercent(stats.choices.scissors.win, stats.choices.scissors.used),
                lossPercent: getPercent(stats.choices.scissors.loss, stats.choices.scissors.used),
                drawPercent: getPercent(stats.choices.scissors.draw, stats.choices.scissors.used)
            }
        }
    };
}

function renderStats() {
    const s = getStatsSummary();

    document.querySelector(".total").textContent = s.total;
    document.querySelector(".win").textContent = s.win;
    document.querySelector(".loss").textContent = s.loss;
    document.querySelector(".draw").textContent = s.draw;

    document.querySelector(".win-percent").textContent = s.winPercent;
    document.querySelector(".loss-percent").textContent = s.lossPercent;
    document.querySelector(".draw-percent").textContent = s.drawPercent;

    document.querySelector(".rock-used").textContent = s.choices.rock.used;
    document.querySelector(".rock-win").textContent = s.choices.rock.win;
    document.querySelector(".rock-loss").textContent = s.choices.rock.loss;
    document.querySelector(".rock-draw").textContent = s.choices.rock.draw;

    document.querySelector(".rock-win-p").textContent = s.choices.rock.winPercent;
    document.querySelector(".rock-loss-p").textContent = s.choices.rock.lossPercent;
    document.querySelector(".rock-draw-p").textContent = s.choices.rock.drawPercent;

    document.querySelector(".paper-used").textContent = s.choices.paper.used;
    document.querySelector(".paper-win").textContent = s.choices.paper.win;
    document.querySelector(".paper-loss").textContent = s.choices.paper.loss;
    document.querySelector(".paper-draw").textContent = s.choices.paper.draw;

    document.querySelector(".paper-win-p").textContent = s.choices.paper.winPercent;
    document.querySelector(".paper-loss-p").textContent = s.choices.paper.lossPercent;
    document.querySelector(".paper-draw-p").textContent = s.choices.paper.drawPercent;

    document.querySelector(".scissors-used").textContent = s.choices.scissors.used;
    document.querySelector(".scissors-win").textContent = s.choices.scissors.win;
    document.querySelector(".scissors-loss").textContent = s.choices.scissors.loss;
    document.querySelector(".scissors-draw").textContent = s.choices.scissors.draw;

    document.querySelector(".scissors-win-p").textContent = s.choices.scissors.winPercent;
    document.querySelector(".scissors-loss-p").textContent = s.choices.scissors.lossPercent;
    document.querySelector(".scissors-draw-p").textContent = s.choices.scissors.drawPercent;
}

const reset_button = document.querySelector(".reset-button");
const popup = document.querySelector(".popup");
const confirm_reset = document.querySelector(".confirm-reset");
const cancel_reset = document.querySelector(".cancel-reset");

reset_button.addEventListener("click", () => {
    popup.classList.remove("hidden");
});

confirm_reset.addEventListener("click", () => {
    // reset stats object
    stats.total = 0;
    stats.win = 0;
    stats.loss = 0;
    stats.draw = 0;

    for (let key in stats.choices) {
        stats.choices[key] = { used: 0, win: 0, loss: 0, draw: 0 };
    }

    // clear storage
    localStorage.removeItem("rps-stats");

    popup.classList.add("hidden");

    open_main_menu(); // go back to menu
});

cancel_reset.addEventListener("click", () => {
    popup.classList.add("hidden");
    open_main_menu();
});