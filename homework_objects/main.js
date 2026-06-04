// Задача 1
const characteristics = 'characteristics'
const line = '\n'

const person = {
	name: 'Alex',
	lastName: 'Martoyas',
	age: 16,
	isProgrammer: true,
	characteristics: {
		weight: 66,
		height: 190,
		footSize: 45,
	},

	greet: () => {
		console.log(
			`Привет меня зовут ${person.name}.\nМне ${person.age} лет,\nмой рост - ${person[characteristics].height}см,\nвес - ${person[characteristics]['weight']}кг,\nразмер ноги - ${person[characteristics]['footSize']}см.\n`,
		)
	},
}

person.greet()

// Задача 2

const isEmpty = obj => {
	for (let keys in obj) {
		obj[keys] === null ? console.log(true) : console.log(false)
		break
	}
}

isEmpty(person)

// Задача 3

const task = {
	title: 'learn JS',
	description: 'learn JS and ...',
	isCompleted: false,
}

const modifications = {
	title: 'learn JS',
	price: 500,
	isCompleted: true,
}

function cloneAndModify(object, modifications) {
	const obj = { ...object, ...modifications }
	for (let keys in obj) {
		console.log(`${keys}: ${obj[keys]}`)
	}
}

cloneAndModify(task, modifications)

// Задача 4

// Пример использования:
const myObject = {
	method1() {
		console.log('Метод 1 вызван')
	},
	method2() {
		console.log('Метод 2 вызван')
	},
	property: 'Это не метод',
}

const callAllMethods = object => {
	let methods = []
	for (let method in object) {
    if (
      typeof object[method] === 'function' &&
      object[method] !== undefined
    ) {
      object[method]()
    }
	}

}

callAllMethods(myObject)

