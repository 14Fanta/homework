console.log('Задача №1')

for (let i = 1; i <= 20; i++) {
	if (i % 4 !== 0) {
		console.log(i)
	}
}

console.log('Задача №2 на экране')

const number = +prompt('Введите число для подсчёта факториала')
let factorial = 1

for (let i = 1; i <= number; i++) {
	factorial *= i
}

alert(`!${number} - ${factorial}.`)
console.log(`!${number} - ${factorial}.`)

console.log('Задача №3')

let line = ""
let row = "Ч "
let board = "Б "
for (let i = 1; i <= 8; i++){
  for (let j = 1; j <= 4; j++){

    line += row + board
  }
  line += "\n"
}
console.log(line);