//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');



//event listeners
todoButton.addEventListener('click', addTodo)



//functions

function addTodo(event){
    event.preventDefault()
    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //crate li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //check mark button 
    const completedButton = document.createElement('button')
    completedButton.innerHTML = `<i class='fas fa-check'></i>`; //обязательно в обратные кавычки заключать!!!
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    //check trash button 
    const trashButton = document.createElement('button')
    trashButton.innerHTML = `<i class='fas fa-trash'></i>`;
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton);

    //append to LIST
    todoList.appendChild(todoDiv);

    //clear todo-input value

    todoInput.value='';

}

