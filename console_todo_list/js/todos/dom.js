import { createTodo, completeToDoById, deleteTodoById } from './service.js'
import { toDoKeys } from '../constants.js'
import { setTodosToLocaleStorage } from '../localStorage.js'

const formElement = document.querySelector('.form')
const input = document.querySelector('.input')
const todosList = document.querySelector('.todos')
const todosContainer = document.querySelector('.todo')
const buttonEl = document.querySelector('.button')

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

export const renderTodos = todos => {
	todosList.innerHTML = ''
	todos.forEach(element => {
		const todoElement = createTodoElement(element)
		if (todos[toDoKeys.isCompleted]) {
			todoElement.classList.add('completed')
		}
		todosList.prepend(todoElement)
	})
}

const handleCreateToDo = (arr, text) => {
	const todo = createTodo(arr, text)
	const todoElement = createTodoElement(todo)
	setTodosToLocaleStorage(arr)
	todosList.prepend(todoElement)
}

export const initTodo = todos => {
	formElement.addEventListener('submit', e => {
		e.preventDefault()
		if (!input.value.trim()) return
		handleCreateToDo(todos, input.value.trim())
		input.value = ''
	})

	todosList.addEventListener('click', ({ target }) => {
		const todo = target.closest('.todo')
		const todoDataId = Number(todo.dataset.id)
		if (!todo) return
		if (target.matches('.button-complete')) {
			todo.classList.toggle('completed')
			setTodosToLocaleStorage(todos)
			completeToDoById(todos, todoDataId)
		} else if (target.classList.contains('button-delete')) {
			deleteTodoById(todos, todoDataId)
			setTodosToLocaleStorage(todos)
			todo.remove()
		}
	})
}
