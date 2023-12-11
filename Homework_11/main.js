/*Вивести таблицю 10 × 10, заповнену числами від 1 до 100 
(таблиця створюється динамічно)*/
let rows = 10, columns = 10, counter = 1;
 tbody = document.getElementById(`tbody`);

for (let row = 0; row < rows; row++) {
    let tr = document.createElement(`tr`);
    tbody.append(tr);
    for (let column = 0; column < columns; column++) {
        let td = document.createElement(`td`);
        td.textContent = counter;
        counter++;
        tr.append(td);
    }
}