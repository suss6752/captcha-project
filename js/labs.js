/* --- LAB 5 --- */
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
        
        if (menu === null) break;

        switch (menu) {
            case "1":
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
                break; 

            case "2":
                return; 

            default:
                alert("Невідомий пункт. Оберіть 1 або 2.");
                break;
        }
    }
}

// --- ЗАВДАННЯ 2 ---
function showTask2Description() {
    const box = document.getElementById("task2-condition");
    if (box) {
        box.innerText = "Варіант 12 (Задача 2): Реалізувати програму, яка перемножує відповідні елементи двох заданих матриць і заносить результат у третю матрицю.";
    }
}

function runLab2() {
    const log = document.getElementById("results-log");
    while (true) {
        let menu = prompt("МЕНЮ (Завдання 2):\n1. Розрахувати матриці\n2. Вихід", "1"); 
        
        if (menu === null) break;

        switch (menu) {
            case "1":
                let rows = parseInt(prompt("Рядки:", "3"));
                let cols = parseInt(prompt("Стовпці:", "3"));
                let a = parseInt(prompt("Від (a):", "1"));
                let b = parseInt(prompt("До (b):", "10"));
                
                if (isNaN(rows) || isNaN(cols) || isNaN(a) || isNaN(b)) { 
                    alert("Помилка введення! Дані мають бути числами."); 
                    break; 
                }

                let m1 = generateMatrix(rows, cols, a, b), 
                    m2 = generateMatrix(rows, cols, a, b), 
                    mRes = [];

                for (let i = 0; i < rows; i++) {
                    mRes[i] = [];
                    for (let j = 0; j < cols; j++) mRes[i][j] = m1[i][j] * m2[i][j];
                }

                let record = document.createElement("div");
                record.className = "result-item"; 

                record.innerHTML = `<strong>Завдання 2:</strong>`;

                let wrapper = document.createElement("div");
                wrapper.className = "matrix-row-container"; 
                wrapper.innerHTML = matrixToHTML(m1, "A") + matrixToHTML(m2, "B") + matrixToHTML(mRes, "РЕЗУЛЬТАТ", true);

                record.appendChild(wrapper);
                log.appendChild(record);
                break;

            case "2":
                return;

            default:
                alert("Оберіть правильний пункт!");
                break;
        }
    }
}

// Допоміжні функції 
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














/* --- LAB 6 --- */
function processVariant12() {
    const fname = document.getElementById('v12_fname').value || "---";
    const lname = document.getElementById('v12_lname').value || "---";
    const school = document.getElementById('v12_school').value;
    const comments = document.getElementById('v12_comments').value || "немає коментарів";

    let drink = "не обрано";
    const drinks = document.getElementsByName('drink');
    for (let d of drinks) {
        if (d.checked) drink = d.value;
    }

    let iceList = [];
    const iceboxes = document.getElementsByName('ice');
    iceboxes.forEach(box => {
        if (box.checked) iceList.push(box.value);
    });

    const output = document.getElementById('v12_result_output');
    output.innerHTML = `
        <div style="border: 2px solid #4a141a; padding: 15px; background: #fff;">
            <p><b>Користувач:</b> ${fname} ${lname}</p>
            <p><b>Напій:</b> ${drink}</p>
            <p><b>Морозиво:</b> ${iceList.join(", ") || 'нічого не обрано'}</p>
            <p><b>Школа:</b> ${school}</p>
            <p><b>Коментарі:</b> ${comments}</p>
        </div>
    `;
}

// --- ПЕРЕРОБЛЕНА 5 ЛАБА ---
function calcLab1() {
    const d1 = document.getElementById('num1').value;
    const d2 = document.getElementById('num2').value;
    const d3 = document.getElementById('num3').value;
    const d4 = document.getElementById('num4').value;

    if (!d1 || !d2 || !d3 || !d4) {
        alert("Введіть всі 4 цифри!");
        return;
    }

    const combined = d1 + d2 + d3 + d4;
    addToLog(`<b>Задача 1:</b> Введено (${d1}, ${d2}, ${d3}, ${d4}) → Отримане число: <span style="color:red; font-weight:bold;">${combined}</span>`);
}

function calcLab2() {
    const log = document.getElementById("results-log");
    const rows = parseInt(document.getElementById('mRows').value);
    const cols = parseInt(document.getElementById('mCols').value);
    const min = parseInt(document.getElementById('mMin').value);
    const max = parseInt(document.getElementById('mMax').value);

    if (isNaN(rows) || isNaN(cols)) {
        alert("Будь ласка, введіть коректні розміри матриці");
        return;
    }

    let mat1 = generateMat(rows, cols, min, max);
    let mat2 = generateMat(rows, cols, min, max);
    let res = [];

    for (let i = 0; i < rows; i++) {
        res[i] = [];
        for (let j = 0; j < cols; j++) {
            res[i][j] = mat1[i][j] * mat2[i][j];
        }
    }

    let htmlHtml = `<div style="display:flex; flex-wrap:wrap; gap:15px; padding-bottom:10px;">` + 
                   matToHTML(mat1, "A") + " <span style='align-self:center'>×</span> " +
                   matToHTML(mat2, "B") + " <span style='align-self:center'>=</span> " +
                   matToHTML(res, "Результат", true) + `</div>`;
    
    addToLog(`<b>Задача 2:</b> Матриці ${rows}x${cols}:<br>` + htmlHtml);
}

// Допоміжні функції
function addToLog(msg) {
    const log = document.getElementById('results-log');
    const entry = document.createElement('div');
    entry.style.borderBottom = "1px solid #eee";
    entry.style.padding = "10px 0";
    entry.innerHTML = msg;
    log.appendChild(entry);
}

function generateMat(r, c, min, max) {
    let m = [];
    for (let i = 0; i < r; i++) {
        m[i] = [];
        for (let j = 0; j < c; j++) {
            m[i][j] = Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
    return m;
}

function matToHTML(m, title, isRes = false) {
    let t = `<table border="1" style="border-collapse:collapse; text-align:center; background:white;"><caption>${title}</caption>`;
    for (let row of m) {
        t += "<tr>" + row.map(cell => `<td style="padding:6px; min-width:30px; ${isRes?'color:red;font-weight:bold;':''}">${cell}</td>`).join("") + "</tr>";
    }
    return t + "</table>";
}