'use strict'

let todos = []

const toDoKeys = {
	id: 'id',
	text: 'text',
	isCompleted: 'isCompleted',
}

function callback_error(toDoId) {
	console.error(`Todo with id ${toDoId} not found`)
}

const getNewToDoId = todos => {
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

createTodo(todos, 'Покормить кота')
createTodo(todos, 'Сходить в магазин')

function completeToDoById(todos, toDoId) {
	const todo = todos.find(todo => todo[toDoKeys.id] === toDoId)
	if (!todo) {
		callback_error(toDoId)
	} else {
		return (todo[toDoKeys.isCompleted] = !todo[toDoKeys.isCompleted])
	}
}

// function deleteTodoById(todos, toDoId) {
// 	const todo_index = todos.findIndex(todo => todo[toDoKeys['id']] === toDoId)
//   if (todo_index === -1) {
//     console.log(callback_error(toDoId))
//     return todos
//   }
//     todos.splice(todo_index,1)
//     console.log(todos)
// }

const deleteTodoById = (todos, toDoId) => {
  return todos.filter((todo) => todo[toDoKeys.id] !== toDoId)
}

deleteTodoById(todos, 1)

// function deleteTodoById(todos, toDoId) {
//   const newTodos = [...todos]
//   --toDoId
// 	let count = 0
// 	for (let i = -1; i < toDoId; i++) {
// 		count++
//   }
// 	return newTodos.splice(toDoId, 1)
// }

// console.log(deleteTodoById(todos, 0))

console.log(todos)
