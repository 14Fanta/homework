import { getTodosFromLocalStorage } from './localStorage.js'
import { renderTodos, initTodo } from './todos/dom.js'

const todos = getTodosFromLocalStorage() || []

renderTodos(todos)
initTodo(todos)
