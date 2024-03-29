var listElement = document.querySelector('#dia ul');
var inputElement = document.querySelector('#dia input');
var bttnElement = document.querySelector('#dia button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];
/*var todos = [
    'Fazer café da manhã',
    'Estudar JavaScript', 
    'Acessar comunidade Dev'
];*/

function renderTodos(){
    listElement.innerHTML = ' ';
    for (todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href','#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick','deleteTodo('+ pos + ')')
;
        var linkText = document.createElement('i');
        linkElement.setAttribute('class','fas fa-check-square');
        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    
    }
}

renderTodos();

function addTodo(){
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value= ' ';
    renderTodos();
    saveToStorage();
}
bttnElement.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos,1);
    renderTodos();
    saveToStorage();
}

// só grava chave de valor e não array
function saveToStorage(){
    localStorage.setItem('list_todos',JSON.stringify(todos));
}