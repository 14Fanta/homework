//Задание 1.

const users = [
	{ name: 'Alex', age: 24, isAdmin: false },
	{ name: 'Bob', age: 13, isAdmin: false },
	{ name: 'John', age: 31, isAdmin: true },
	{ name: 'Jane', age: 20, isAdmin: false },
]

users.push(
	{ name: 'Ann', age: 19, isAdmin: false },
	{ name: 'Jack', age: 43, isAdmin: true },
)

// Задача 2.

const getUserAverageAge = users => {
	let arrNum = []
	let sumAge = 0
	let sumPerson = 0
	for (let i in users) {
		sumAge += users[i].age
		sumPerson = arrNum.push(++i)
	}
	const finResult = sumAge / sumPerson
	console.log(`${finResult} лет - средний возраст всех пользователей`)
}

getUserAverageAge(users)

// Задача 3.

function getAllAdmins(users) {
	let array = []
	for (let i in users) {
		if (users[i].isAdmin === true) {
			array.push(users[i].name)
		}
	}
	console.log(`${array} - Администраторы`)
}

getAllAdmins(users)

// Задача 4.

function first(arr, n) {
	let arrayUsers = []
	for (let i = 0; i <= n - 1; i++) {
		arrayUsers.push(arr[i])
  }
  arrayUsers.length == 0 ? console.log([]) : console.log(arrayUsers.at(0))
}

first(users, 2)

