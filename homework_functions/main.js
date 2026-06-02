// Задача 1.
function calculateFinalPrice(basePrice, discountPercentage, taxRate) {
	const SUMMA = basePrice * (discountPercentage / 100)
	const PRISEDISCOUNT = basePrice - SUMMA
	const SUMMATAX = PRISEDISCOUNT * taxRate
	const FINALPRICE = PRISEDISCOUNT + SUMMATAX
	return FINALPRICE
}

console.log(calculateFinalPrice(100, 10, 0.2)) 
console.log(calculateFinalPrice(100, 10, 0)) 

// Задача 2.

function checkAccess(userName, userPassword) {
	const PASSWORD = +userPassword
	if (userName === 'admin' && PASSWORD === 123456) {
		console.log('Доступ разрешен')
	} else {
		console.log('Доступ запрещен')
	}
}

checkAccess('admin', 123456)

// Задача  3.

function getTimeOfDay(currentTime) {
	const CURRENTTIME = Number(currentTime)
	if (!isNaN(CURRENTTIME)) {
		if (CURRENTTIME < 0 && CURRENTTIME > 23) {
			console.log('Некорректное время')
		} else {
			if (CURRENTTIME >= 0 && CURRENTTIME <= 5) {
				console.log('Ночь')
			} else if (CURRENTTIME >= 6 && CURRENTTIME <= 11) {
				console.log('Утро')
			} else if (CURRENTTIME >= 12 && CURRENTTIME <= 17) {
				console.log('День')
			} else if (CURRENTTIME >= 18 && CURRENTTIME <= 23) {
				console.log('Вечер')
			}
		}
	}
}

getTimeOfDay(11)

// Задача  4.

function findFirstEven(start, end) {
	for (let i = start; i <= end; i++) {
		if (i % 2 === 0) {
			console.log(`${i} - первое четное число в диапазоне от ${start} до ${end}`)
			break
		}
	}
}

findFirstEven(8, 10)
findFirstEven(4, 10)
findFirstEven(5, 10) 