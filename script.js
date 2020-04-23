//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');



//event listeners
todoButton.addEventListener('click', addTodo)

todoList.addEventListener('click', deleteChecked)

filterOption.addEventListener('click', filterTodo)

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

function deleteChecked(e){
    console.log(e.target);
    const item = e.target;
    //delete todo
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        
        //animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            todo.remove()
        })
    }

    //checked mark
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');

    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case 'all':
                todo.style.display = 'flex';
                break;
            case 'completed':
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case 'uncompleted':
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break; //не забываем break!!!!!!!!!!!!!
        }
    })
}

function saveLocalTodo(todo){
    
}