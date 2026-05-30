//                     Задача №1.
// let number_1 = +prompt("Введите число для проверки на чётность:",0)
// const NUMBER = !isNaN(number_1) ? (!(number_1 % 2) ? alert(`Число, которое Вы ввели: ${number_1} -чётное`) : alert(`Число, которое Вы ввели: ${number_1} - не чётное`)) : alert(`То, что Вы ввели оказлось недопустимым значением: ${number_1}.
// Введите число!!!`)

alert('Задача№1')

let inputNumber = +prompt(
	'Введите число, которое будем проверять на чётность:',
	0,
)

if (!isNaN(inputNumber)) {
	if (!(inputNumber % 2)) {
		alert(`Ваше число оказалось ЧЁТНЫМ: ${inputNumber}`)
	} else {
		alert(`Ваше число оказалось НЕчётным: ${inputNumber}`)
	}
} else {
	alert(`То, что Вы ввели оказлось недопустимым значением:
Введите число!!!`)
}

//                    Задача№2

alert('Задача №2')

let userAge = +prompt('Сколько Вам лет ?', 0)
let discount = 0
// if (!isNaN(userAge)) {
// 	if (userAge < 18) {
// 		discount = 10
// 	} else if (userAge >= 18 || userAge <= 65) {
// 		discount = 26
// 	} else {
// 		discount = 30
// 	}
// 	alert(`Скидка ${discount}%`)
// } else {
// 	alert('Вы ввели явно не ВОЗРАСТ. Введите возраст!!!')
// }

if (!isNaN(userAge)) {
	switch (true) {
		case userAge <= 18:
			discount = 10
			break
		case userAge > 18 && userAge <= 65:
			discount = 26
			break
		default:
			discount = 30
			break
	}
	alert(`Скидка: ${discount}%`)
} else {
	alert('Вы ввели явно не ВОЗРАСТ. Введите возраст!!!')
}

//  Задача №3

const USERNAME = prompt('Введите имя:')
const PASSWORD = prompt('Введите пароль(12345):')

switch (USERNAME) {
	case 'user':
	case 'admin':
		switch (PASSWORD) {
			case '12345':
				alert('Доступ разрешён!')
				break

			default:
				alert('Доступ запрещён!')
				break
		}
		break

	default:
		alert('Доступ запрещён!')
		break
}

// Заадча №4

alert('Задача №4')

const WEIGHT = +prompt('Введите вес посылки (в киллограммах)')
const TYPE_PARCEL = prompt(`Введите тип посылки
Допустимые варианты: "Стандарт", "Экспресс", "Премиум"`)
const PRICE_POOR = 5
const PRICE_MEDIUM = 10
const PRICE_EXPENSIVE = 15
const STANDARD = 1
const EXPRESS = 1.5
const PREMIUM = 2

if (!isNaN(WEIGHT)) {
	if (TYPE_PARCEL.length !== 0) {
		switch (true) {
			case WEIGHT <= 0:
				alert(`Некорректный вес посылки`)
				break
			case TYPE_PARCEL !== 'Стандарт' &&
				TYPE_PARCEL !== 'Экспресс' &&
				TYPE_PARCEL !== 'Премиум':
				alert('Неверный тип доставки')
				break
			default:
				const PRICE =
					WEIGHT <= 1
						? PRICE_POOR
						: WEIGHT > 1 && WEIGHT <= 5
							? PRICE_MEDIUM
							: PRICE_EXPENSIVE
				const COEFFICIENT =
					TYPE_PARCEL === 'Премиум'
						? PREMIUM
						: TYPE_PARCEL === 'Экспресс'
							? EXPRESS
							: STANDARD

				const RES = PRICE * COEFFICIENT
				alert(`Итоговая стоимость доставки: ${RES}$`)
				break
		}
	} else {
		alert('Введите значения')
	}
} else {
	alert('Что-то пошло не так !!!')
}
