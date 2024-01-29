/*
Дописати Todo App, додати редагування таски, щоб можна було змінити текст та статус.
*/

const addToDoInput = document.getElementById(`add-to-do-input`);
const addToDoForm = document.getElementById(`add-to-do-form`);
const toDoList = document.getElementById(`to-do-list`);
const saveChangesBtn = document.getElementById(`save-changes-btn`);
const editToDoInput = document.getElementById(`edit-to-do-input`);
const closeEditToDoModal = document.getElementById(`close-edit-to-do-modal`);
let allTasks = [];

// Restore tasks from LocalStorage
if (localStorage.getItem("to-do")) {
    allTasks = JSON.parse(localStorage.getItem("to-do"));
    allTasks.forEach((task) => {addTaskToList(task);})
}


// Add new task to the list
function addTaskToList (newTask) {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center ${newTask.status === "completed" ? "bg-secondary" : ""}">
            <input class="form-check-input me-1" type="checkbox" id="${newTask.id}" ${newTask.status === "completed" ? "checked" : ""}>
            <label class="form-check-label" for="${newTask.id}">${newTask.name}</label>
            <button id="edit-btn" class="btn btn-sm btn-warning ms-auto me-2" data-taskId="${newTask.id}" data-toggle="modal" data-target="#editModal">Edit</button>
            <button id="delete-btn" class="btn btn-sm btn-danger" data-task-id="${newTask.id}">Delete</button>
        </li>
    `;
    toDoList.innerHTML += html;
    addToDoInput.value = "";
}

// Change task status
function changeTaskStatus (target, status) {
    target.parentElement.classList.toggle(`bg-secondary`)
    allTasks.forEach((task) => {
        if (task.id == target.id) {
            task.status = status;
        }
    })

    localStorage.setItem("to-do", JSON.stringify(allTasks));
}


// Remove task from to-do list
function removeTask (target) {
    allTasks.forEach((task) => {
        if (task.id == target.dataset.taskId) {
            allTasks.splice(allTasks.indexOf(task), 1)
        }
    })

    localStorage.setItem("to-do", JSON.stringify(allTasks));
    target.parentElement.remove();
}

// Edit task name
function editTask (target) {
    editToDoInput.value = target.previousElementSibling.textContent;
    target.parentElement.classList.add(`editing`);
}

// Remove classList
function removeClasslist (className) {
    document.getElementsByClassName(className)[0] ? document.getElementsByClassName(className)[0].classList.remove(className) : "";
}

addToDoForm.addEventListener(`submit`, (e) => {
    e.preventDefault();

    let excistingTasks = allTasks.filter((item) => item.name == addToDoInput.value)

    if (excistingTasks.length) {
        alert("Task is already in the list");
    } else {
        let newTask = {
            "id": new Date().getTime(),
            "name": addToDoInput.value,
            "status": "active"
        }
        addTaskToList(newTask);
        allTasks.push(newTask);
        localStorage.setItem("to-do", JSON.stringify(allTasks));
    }
})

toDoList.addEventListener(`click`, (e) => {
    if (e.target.tagName === "INPUT") {
        changeTaskStatus(e.target, e.target.checked ? "completed" : "active");
    } else if (e.target.tagName === "BUTTON") {
        e.target.id == "delete-btn" ? removeTask(e.target) : editTask(e.target);
    }
})

saveChangesBtn.addEventListener(`click`, (e) => {
    let taskToEdit = document.getElementsByClassName(`editing`)[0],
        newTaskName = editToDoInput.value;

    taskToEdit.getElementsByTagName(`label`)[0].textContent = newTaskName;

    allTasks.forEach((task) => {
        if (task.id == taskToEdit.getElementsByTagName(`input`)[0].id) {
            task.name = newTaskName;
        }
    })
    localStorage.setItem("to-do", JSON.stringify(allTasks));

    removeClasslist(`editing`);
})

closeEditToDoModal.addEventListener(`click`, (e) => {removeClasslist(`editing`);});