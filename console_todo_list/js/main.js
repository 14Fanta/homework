'use strict'

let todos = []
const formElement = document.querySelector('.form')
const input = document.querySelector('.input')
const todosList = document.querySelector('.todos')
const todosContainer = document.querySelector('.todo')
const buttonEl = document.querySelector('.button')

const toDoKeys = {
	id: 'id',
	text: 'text',
	isCompleted: 'isCompleted',
}

function createTodoElement(text) {
	// if (text.length === 0) {
	// 	return
	// } else {
		return todosList.insertAdjacentHTML(
			'beforeend',
			`          
        <li class="todo">
          <div class="todo-text">${text}</div>
          <div class="todo-actions">
            <button class="button-complete button">&#10004;</button>
            <button class="button-delete button">&#10006;</button>
          </div>
        </li>
        `,
		)
	// }
}

function callback_error(toDoId) {
	console.error(`Todo with id ${toDoId} not found`)
}

function callback_error_nothing() {
	console.error(`Вы ничего не вписали в инпут`)
}

const getNewToDoId = arr => {
	return (
		todos.reduce((maxId, todo) => Math.max(maxId, todo[toDoKeys.id]), 0) + 1
	)
}

const createTodo = (arr, todo) => {
	arr.push({
		[toDoKeys['id']]: getNewToDoId(todos),
		[toDoKeys['text']]: todo,
		[toDoKeys['isCompleted']]: false,
	})
  return arr
}

// createTodo(todos, 'Покормить кота')
// createTodo(todos, 'Сходить в магазин')

function completeToDoById(arr, toDoId) {
	const todo = todos.find(todo => todo[toDoKeys.id] === toDoId)
	if (!todo || todo === null) {
		callback_error(toDoId)
		return null
	} else {
		todo[toDoKeys.isCompleted] = !todo[toDoKeys.isCompleted]
	}
	return todo
}

const deleteTodoById = (arr, toDoId) => {
	const todoIndex = arr.findIndex(arr => arr[todoKeys.id] === toDoId)
	if (todoIndex === -1) {
		return null
	}
	arr.splice(todoIndex, 1)
	return arr
}

const handleCreateToDo = (arr, text) => {
	return createTodoElement(createTodo(arr, text))
}

buttonEl.addEventListener('click', () => {
	handleCreateToDo(todos, input.value)
})
