// 1)

const FIRSTNAME = 'Alexey'
const LASTNAME = 'Martoyas'
const isStudent = true

// 2)

const AGE = 18
const CURRENTYEAR = 2026
const BIRTHYEAR = CURRENTYEAR - AGE
console.log(`Год рождения студента: ${BIRTHYEAR} год`);

// 3)

console.log(`Меня зовут ${FIRSTNAME} ${LASTNAME}, мне ${AGE} лет. Я ученик курса: ${isStudent}`);


// 4)

let a ='123'
let b = +'456'
let c = Number('789')
let d = Boolean(0)
let e = Boolean(' ')
let result = a + b + c + d + e
console.log(result);

// 123456789falsetrue