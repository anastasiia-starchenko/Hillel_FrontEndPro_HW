/*Реалізовуємо форму для реєстрації.

Поля:

Ім'я, Прізвище (Текстові поля)
Дата народження (Текстове поле)
Стать (radio)
Місто (select)
Адреса (textarea)
Мови, якими володіє (checkbox)
….
Кнопка “Зберегти”
За натисканням на кнопку замість форми повинна виводитися “таблиця” з даними, які ввів користувач.*/

const saveBtn = document.getElementById(`save-btn`);

function getFormInputValues () {
    let name = document.getElementById(`name`).value,
        surname = document.getElementById(`surname`).value, 
        dateOfBirth = document.getElementById(`date-of-birth`).value, 
        city = document.getElementById(`city`).value, 
        adress = document.getElementById(`adress`).value, 
        gender, languages = [];

    Array.from(document.getElementsByClassName(`gender`)).forEach((input) => {
        input.checked ? gender = input.value : null;
    })
    Array.from(document.getElementById(`languages-wrapper`).getElementsByClassName(`language-input`)).forEach((input) => {
        input.checked ? languages.push(input.parentElement.textContent) : null;
    })
    return [name, surname, dateOfBirth, gender, city, adress, languages]
}

function saveFormInputs () {
    let arrayOfInputValues = getFormInputValues(),
        tr = document.createElement(`tr`);

    arrayOfInputValues.forEach((el) => {
        let td = document.createElement(`td`);
        td.textContent = el;
        document.getElementById(`table-tbody`).append(tr);
        tr.append(td);
    })
    document.getElementById(`table`).classList.remove(`d-none`);
    document.getElementById(`form-wrapper`).classList.add(`d-none`);
}

saveBtn.addEventListener(`click`, saveFormInputs)