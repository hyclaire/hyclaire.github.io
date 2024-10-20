const toDoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");
// We already found the toDoForm, so we can access input from toDoForm not document
// document.querySelector("todo-form input") = toDoForm.querySelector("input")

const TODOS_KEY = "todos";
let toDos = [];



function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    //We want to save the data in array form, but the localStorage only allows text form
    //So we use JSON.stringify to save the data in shape of array, but the type is string
    //We can use JSON.parse from  string to  array
    //We can put duplicates with this
}

function deleteToDo(event) {
    // need to know which button was clicked
    // console.dir(event.target.parentElement);
    // the target is the HTML element clicked
    // parentElement is the parent of the clicked element, which we need to delete
    const li = event.target.parentElement;

    /* array.filter() function 
    : if it gets true as parameter, then the element stays in the array
    but if it gets false, then the element of the list will be excluded from the array 
    */
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
    // This means we want to exclude the one that has li.id

}

// parameter : newTodo -> newTodoObj
function paintToDo(newTodoObj) {
    // the parameter will be added to the list of todo-list
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText = newTodoObj.text + "                   ";

    const button = document.createElement("button");
    button.innerText = "DELETE";
    button.addEventListener("click", deleteToDo);
    // The button to delete the todo
    // When we click the button, the todo will be removed

    li.appendChild(span);
    li.appendChild(button);

    //console.log(li);
    todoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    //The default action of submit, which is 'Refersh' won't happen

    const newTodo = toDoInput.value; // saved what got entered and 
    toDoInput.value = ""; // When we press enter, the box will be empty
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    // to delete the desired element from the local storage, there's a limitation to use the array type
    // So we declared a class that has the format of key-value (text-id)
    //toDos.push(newTodo); // push the new one to the list, it will be saved to the local storage
    toDos.push(newTodoObj);
    //paintToDo(newTodo);
    paintToDo(newTodoObj);
    saveToDos();

}

toDoForm.addEventListener("submit", handleToDoSubmit);
const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    // if there are some data in the localStorage, save them and append new items
    parsedToDos.forEach(paintToDo); // run a function for each item
    // loading the data from the localStorage

}