import { callback_error, toDoKeys } from '../constants.js'

const getNewToDoId = arr => {
	return (
		arr.reduce((maxId, todo) => Math.max(maxId, todo[toDoKeys.id]), 0) + 1
	)
}

export const createTodo = (arr, todo) => {
  const newTodo = {
    [toDoKeys['id']]: getNewToDoId(arr),
    [toDoKeys['text']]: todo.trim(),
    [toDoKeys['isCompleted']]: false,
  }
  arr.push(newTodo)
  return newTodo
}

export function completeToDoById(arr, toDoId) {
	const todo = arr.find(todo => todo[toDoKeys.id] === toDoId)
	if (!todo || todo === null) {
		console.log(callback_error(toDoId))
		return null
	} else {
		todo[toDoKeys.isCompleted] = !todo[toDoKeys.isCompleted]
	}
	return todo
}

export const deleteTodoById = (arr, toDoId) => {
	const todoIndex = arr.findIndex(arr => arr[toDoKeys.id] === toDoId)
	if (todoIndex === -1) {
		return null
	}
	arr.splice(todoIndex, 1)
	return arr
}