// --- ЗАВДАННЯ 1 ---
function showTask1Description() {
    const box = document.getElementById("task1-condition");
    if (box) {
        box.innerText = "Варіант 12 (Задача 1): Написати функцію, яка отримує 4 цифри, а повертає ціле десяткове число. Наприклад, введено числа 3, 7, 5, 9, а отримане число – 3759. Використати цю функцію для формування числа з цифр, введених користувачем.";
    }
}

function combineDigitsToNumber(d1, d2, d3, d4) {
    return parseInt("" + d1 + d2 + d3 + d4);
}

function runLab1() {
    const log = document.getElementById("results-log");
    while (true) {
        let menu = prompt("МЕНЮ (Завдання 1):\n1. Ввести цифри\n2. Вихід", "1"); 
        if (menu === null || menu === "2") break;

        if (menu === "1") {
            let digits = [];
            let isError = false;
            for (let i = 1; i <= 4; i++) {
                let input = prompt(`Введіть цифру №${i}:`, "");
                if (input === null) { isError = true; break; }
                let val = parseInt(input);
                if (isNaN(val) || input.trim().length !== 1) {
                    alert("Помилка! Введіть одну цифру."); i--; continue;
                }
                digits.push(val);
            }
            if (!isError) {
                let result = combineDigitsToNumber(digits[0], digits[1], digits[2], digits[3]);
                let record = document.createElement("p");
                record.className = "result-item"; 
                record.innerHTML = `<strong>Завдання 1:</strong> [${digits.join(", ")}] → <span class="result-value">${result}</span>`;
                log.appendChild(record);
            }
        }
    }
}

// --- ЗАВДАННЯ 2 ---
function showTask2Description() {
    const box = document.getElementById("task2-condition");
    if (box) {
        box.innerText = "Варіант 12 (Задача 2): Реалізувати програму, яка перемножує відповідні елементи двох заданих матриць і заносить результат у третю матрицю. ";
    }
}

function runLab2() {
    const log = document.getElementById("results-log");
    while (true) {
        let menu = prompt("МЕНЮ (Завдання 2):\n1. Розрахувати матриці\n2. Вихід", "1"); 
        if (menu === null || menu === "2") break;
        if (menu === "1") {
            let rows = parseInt(prompt("Рядки:", "3"));
            let cols = parseInt(prompt("Стовпці:", "3"));
            let a = parseInt(prompt("Від:", "1"), b = parseInt(prompt("До:", "10")));
            if (isNaN(rows) || isNaN(cols)) { alert("Помилка!"); break; }

            let m1 = generateMatrix(rows, cols, a, b), m2 = generateMatrix(rows, cols, a, b), mRes = [];
            for (let i = 0; i < rows; i++) {
                mRes[i] = [];
                for (let j = 0; j < cols; j++) mRes[i][j] = m1[i][j] * m2[i][j];
            }

            let wrapper = document.createElement("div");
            wrapper.className = "matrix-row-container"; 
            wrapper.innerHTML = matrixToHTML(m1, "A") + matrixToHTML(m2, "B") + matrixToHTML(mRes, "Результат", true);
            log.appendChild(wrapper);
        }
    }
}

function generateMatrix(r, c, min, max) {
    let matrix = [];
    for (let i = 0; i < r; i++) {
        matrix[i] = [];
        for (let j = 0; j < c; j++) matrix[i][j] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return matrix;
}

function matrixToHTML(matrix, title, isResult = false) {
    let table = `<table class="matrix-table"><caption>${title}</caption>`;
    for (let row of matrix) {
        table += "<tr>" + row.map(cell => `<td ${isResult ? 'class="result-value"' : ''}>${cell}</td>`).join("") + "</tr>";
    }
    return table + "</table>";
}

document.addEventListener('DOMContentLoaded', function() {
    showTask1Description();
    showTask2Description();
});