export function getTodosFromLocalStorage() {
  return JSON.parse(localStorage.getItem('todos'))
}

export const setTodosToLocaleStorage = todo => {
	localStorage.setItem('todos', JSON.stringify(todo))
}
