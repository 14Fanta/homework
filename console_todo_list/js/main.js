// Подключение строгого режима
'use strict'

// Переменнные
let todos = []
const formElement = document.querySelector('.form')
const input = document.querySelector('.input')
const todosList = document.querySelector('.todos')
const todosContainer = document.querySelector('.todo')
const buttonEl = document.querySelector('.button')
const toDoText = document.querySelector('.todo')

// Данные

const toDoKeys = {
  id: 'id',
	text: 'text',
	isCompleted: 'isCompleted',
}

// Функции

const createTodo = (arr, todo) => {
	const newTodo = {
		[toDoKeys['id']]: getNewToDoId(todos),
		[toDoKeys['text']]: todo.trim(),
		[toDoKeys['isCompleted']]: false,
	}
	arr.push(newTodo)
	return newTodo
}

function createTodoElement(todo) {
  const todoElement = document.createElement('li')
	todoElement.classList.add('todo')
	todoElement.dataset.id = todo[toDoKeys.id]
  todoElement.innerHTML = `       
          <div class="todo-text">${todo[toDoKeys.text]}</div>
          <div class="todo-actions">
            <button class="button-complete button">&#10004;</button>
            <button class="button-delete button">&#10006;</button>
          </div>`
	return todoElement
}

function callback_error(toDoId) {
	console.error(`Todo with id ${toDoId} not found`)
}

const getNewToDoId = arr => {
	return (
		todos.reduce((maxId, todo) => Math.max(maxId, todo[toDoKeys.id]), 0) + 1
	)
}

function completeToDoById(arr, toDoId) {
	const todo = arr.find(todo => todo[toDoKeys.id] === toDoId)
	if (!todo || todo === null) {
		callback_error(toDoId)
		return null
	} else {
		todo[toDoKeys.isCompleted] = !todo[toDoKeys.isCompleted]
	}
	return todo
}

const deleteTodoById = (arr, toDoId) => {
	const todoIndex = arr.findIndex(arr => arr[toDoKeys.id] === toDoId)
	if (todoIndex === -1) {
		return null
	}
	arr.splice(todoIndex, 1)
	return arr
}

const handleCreateToDo = (arr, text) => {
	const todo = createTodo(arr, text)
	const todoElement = createTodoElement(todo)
	todosList.prepend(todoElement)
}

// Код

formElement.addEventListener('submit', e => {
	e.preventDefault()
	if (!input.value.trim()) return
	handleCreateToDo(todos, input.value.trim())
	input.value = ''
})

buttonEl.addEventListener('click', () => {
	if (!input.value.trim()) return
	handleCreateToDo(todos, input.value.trim())
	input.value = ''
})

todosList.addEventListener('click', ( { target } ) => {
  const todo = target.closest('.todo')
  const todoDataId = Number(todo.dataset.id)
	if (target.matches('.button-complete')) {
    todo.classList.toggle('completed')  
    completeToDoById(todos, todoDataId)
  } else if (target.classList.contains('button-delete')) {
    deleteTodoById(todos,todoDataId)
    todo.remove()
  } else {
    return
  }
})

