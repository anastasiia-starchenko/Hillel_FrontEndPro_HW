/*
Використовуючи API https://jsonplaceholder.typicode.com/ зробити пошук поста за ід.
Ід має бути введений в інпут (валідація: ід від 1 до 100) 
Якщо знайдено пост, то вивести на сторінку блок з постом і зробити кнопку для отримання комкоментарів до посту.
Зробити завдання використовуючи проміси, перехопити помилки.
*/

const searchBtn = document.getElementById(`submit-post-id`);
const IDInput = document.getElementById(`post-id`);
const error = document.getElementById(`error-text`);
const card = document.getElementById(`card`);
const getCommentsBtn = document.getElementById(`get-comments-btn`);
const commentsContainer = document.getElementById(`comments`);
const MIN = 1;
const MAX = 100;
let enteredID;

searchBtn.addEventListener("click", () => {
    enteredID = IDInput.value;
    validateIDInput(enteredID).then((id) => {
        fetch("https://jsonplaceholder.typicode.com/posts/" + id)
        .then(response => response.ok ? response.json() : Promise.reject(response.statusText))
        .then((resolvedData) => {
            fillCard(resolvedData);
        })
        .catch((e) => {
            error.textContent = e;
        })
    }).catch((e) => {
        error.textContent = e;
    })
})

getCommentsBtn.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + enteredID + "/comments")
    .then(response => response.ok ? response.json() : Promise.reject(response.statusText))
    .then((resolvedData) => {
        commentsContainer.innerHTML = "";
        renderCommentsCards(resolvedData);
    })
    .catch((e) => {
        error.textContent = e;
    })
})

const validateIDInput = (inputValue) => {
    return new Promise ((resolve, reject) => {
        if (inputValue>MIN && inputValue<MAX) {
            resolve(inputValue);
        } else {
            reject("Number should be in a range 1-100");
        }
    })
}

const fillCard = (resolvedData) => {
    card.getElementsByClassName(`card-title`)[0].textContent = resolvedData["title"];
    card.getElementsByClassName(`card-text`)[0].textContent = resolvedData["body"];
    card.getElementsByClassName(`user-id`)[0].textContent = "User ID: " + resolvedData["userId"];
    card.getElementsByClassName(`id`)[0].textContent = "ID: " + resolvedData["id"];
    card.classList.remove(`d-none`);
}

const renderCommentsCards = (resolvedData) => {
    resolvedData.forEach((comment) => {
        let commentCard = createDOMElement(`div`);
        commentCard.append(createDOMElement(`h5`, "Name: " + comment["name"]));
        commentCard.append(createDOMElement(`p`, comment["body"]));
        commentCard.append(createDOMElement(`span`, "Email: " + comment["email"]));
        commentCard.append(createDOMElement(`span`, "Post ID: " + comment["postId"]));
        commentCard.append(createDOMElement(`span`, "Id: " + comment["id"]));
        commentsContainer.append(commentCard);
        commentCard.classList.add(`card`);
    })
}

const createDOMElement = (elementTag, text = null) => {
    let newElement = document.createElement(elementTag);
    text ? newElement.textContent = text : null;
    return newElement;
}
