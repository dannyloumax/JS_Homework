'use strict';

const todoDelete = document.getElementById('btnDelete');
const todoInput = document.getElementById('input');
const todoAdd = document.getElementById('btnAdd');
const todoList = document.getElementById('items');

todoAdd.addEventListener('click', () => {
    const data = todoInput.value;
    const item = document.createElement('li');
    item.classList.add('todolist__item');
    todoList.appendChild(item);

    const checkbox = document.createElement('input');
    checkbox.classList.add('item__checkbox');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.addEventListener('change', () => {
        item.classList.toggle('checked');
        itemContent.classList.toggle('completed');
    })
    item.appendChild(checkbox);

    const itemContent = document.createElement('p');
    itemContent.classList.add('item__content');
    item.appendChild(itemContent);

    const text = document.createTextNode(data);
    itemContent.appendChild(text);

    const date = new Date();
    const dateString = date.toLocaleDateString('ru-RU');
    const timeString = date.toLocaleTimeString('ru-RU');
    const dateTimeSpan = document.createElement('span');
    dateTimeSpan.textContent = `${dateString} ${timeString}`;
    dateTimeSpan.className = 'date-time';
    itemContent.appendChild(dateTimeSpan);

    const itemDelete = document.createElement('button');
    itemDelete.classList.add('item__delete');
    itemDelete.innerText = 'x';
    itemDelete.addEventListener('click', () => {
        item.remove();
    });
    item.appendChild(itemDelete);

    todoList.appendChild(item);
    todoInput.value = '';
});

todoDelete.addEventListener('click', () => {
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }
});