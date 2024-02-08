//Destructuring -> şeklini bozma
//Spread -> Dağılma, yayma
//Rest ->  Kalanın tamamı

/*
const numbers = [10, undefined, 14]

const [
    number1,
    number2 = 1,
    number3
] = number5



const stack = [
    ['HTML', 'CSS', ['JAVASCRİPT', 'REACT', 'SVELTE']],
    ['PHP', 'MYSQL', 'NODEJS']
]

const [[firstLanguage, secondLanguage, [FirstThirdLanguage]], backend] = stack

console.log(FirstThirdLanguage)
*/


/*
const names = ['tayfun', 'zarafet', 'ahmet', 'hakan', 'mehmet', 'gökhan']

const [myName, myWifeName, myFriendName, thereNames] = names

console.log(myName)
console.log(myWifeName)
console.log(myFriendName)
console.log(otherNames)
*/

/*
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stackhom'],
    ['Norway', 'Oslo'],
    ['Turkey', 'Ankara',]
]

for (const country of countries) {
    console.log('Ülke: ${country[0]} - Başkent: ${country[1]}')
}
*/

/*
const user = {
    name: 'Tayfun',
    surname: 'Erbilen',
    age: 29,
    pets: {
        cats:['Asil'],
        dogs: ['monti']
    }
}

const{surname: soyad} = user

console.log(surname)
*/


/*
function multiply([number1, number2]) {
    return number1 *number2
}

const numbers = [10, 10]

console.log(
    multiply(numbers)
)
*/

const numbers = [1, 3, 5]
console.log(
    [0, ...numbers, 5]
)