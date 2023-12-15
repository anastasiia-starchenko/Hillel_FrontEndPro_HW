/*Пишемо свій слайдер зображень.

Відображаємо зображення та кнопки Next, Prev з боків від зображення.
При кліку на Next - показуємо наступне зображення.
При кліку на Prev - попереднє .
При досягненні останнього зображення - ховати кнопку Next.
Аналогічно з першим зображенням і кнопкою Prev.*/

const prevBtn = document.getElementById(`prev-btn`);
const nextBtn = document.getElementById(`next-btn`);

function switchPicture () {
    let shownImg = document.getElementsByClassName(`shown-img`)[0];
    let elementToShow = this.id == "prev-btn" ? shownImg.previousElementSibling : shownImg.nextElementSibling;
    if (elementToShow) {
        if (this.id == "prev-btn") {
            nextBtn.classList.remove(`d-none`);
            elementToShow.previousElementSibling ? null : prevBtn.classList.add(`d-none`);
        } else {
            prevBtn.classList.remove(`d-none`);
            elementToShow.nextElementSibling ? null : nextBtn.classList.add(`d-none`);
        }
        toggleShowHideClasses(shownImg, elementToShow);
    } 
}

function toggleShowHideClasses (shownImg, elementToShow) {
    shownImg.classList.remove(`shown-img`);
    shownImg.classList.add(`d-none`);
    elementToShow.classList.add(`shown-img`);
    elementToShow.classList.remove(`d-none`);
}

prevBtn.addEventListener("click", switchPicture);
nextBtn.addEventListener("click", switchPicture);