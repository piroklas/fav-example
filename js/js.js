`use strict`

let hidden = document.querySelector(".main-section__number");
    input = document.querySelector(".data-section__input");
    checkButton = document.querySelector(".check__button");
    tip = document.querySelector(".data-section__tip");
    numberBox = document.querySelector(".main-section__number-box");
    hits = document.querySelector(".data__hits-value");
    hitsValue = 20;
    score = document.querySelector(".data__score-value");
    scoreOriginalValue = 20;
    scoreNewValue = 0;
let number;
    newGameButton = document.querySelector(".new-game__button");

//Генератор рандомного числа
function numberGenerator() {
    number = Math.floor(Math.random()*20 + 1);
}
numberGenerator()

//Сброс для новой игры
newGameButton.addEventListener("click", function() {
    numberGenerator()
    numberBox.classList.remove("main-section__number-box_right")
    hidden.innerText = "?"
    tip.innerHTML = ""
    hitsValue = 20
    hits.innerText = 20
    scoreOriginalValue = 20
    checkButton.style.display = "block"
}
)

//Счётчик попыток
function hitsDecreaser() {
    hitsValue--
    hits.innerText = hitsValue
}

//Счётчик рекорда
function scoreDecreaser() {
    scoreOriginalValue--
}

//Сохранение лучшего рекорда
function scoreSaver() {
    if (scoreOriginalValue > scoreNewValue) {
        scoreNewValue = scoreOriginalValue
        score.innerHTML = scoreNewValue
    }
}

//Для поля ввода
checkButton.addEventListener("click", function() {
    if (input.value == null || input.value == "" || input.value == 0) {
        tip.innerHTML = "Введи число от 1 до 20!"
    }
    else if (input.value < number && hitsValue !== 1) {
        tip.innerHTML = "Попробуй число побольше!"
        hitsDecreaser()
        scoreDecreaser()
        }
    else if (input.value > number && hitsValue !== 1) {
        tip.innerHTML = "Попробуй число поменьше!"
        hitsDecreaser()
        scoreDecreaser()
        }
    else if (input.value == number && hitsValue !== 1) {
        tip.innerHTML = "Угадал!"
        hidden.innerText = number
        numberBox.classList.add("main-section__number-box_right")
        checkButton.style.display = "none"
        hitsDecreaser()
        scoreDecreaser()
        scoreSaver()

        }
    else (
        tip.innerHTML = "Проиграл!",
        checkButton.style.display = "none",
        hitsDecreaser()
        )
    }
    )

    //что делать с вводом букв