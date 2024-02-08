const fonksiyon = number => number **  2

function cube(cb, number){
    return cb(number) * number
}

// console.log( cube(fonksiyon, 3) )

const a = s1 => {
    const b = s2 => {
        const c = s3 => {
            return s1 + s2 + s3
        }
        return c
    }
    return b
}

// console.log( a(5)(10)(20) )

const numbers = [1, 3, 5, 7, 9]
let total = 0
let calculate = (number, index) => total += (number + index)
numbers.forEach(calculate)
// console.log(total)

let users = [
    {
        id: 1,
        name:'Tayfun',
        age: 29,
        gender: 1
    },
    {
        id: 2,
        name: 'Ahmet',
        age: 24,
        gender: 1
    },
    {
        id: 3,
        name: 'Mehmet',
        age: 29,
        gender: 1
    },
    {
        id: 4,
        name: 'Zerafet',
        age: 29,
        gender: 2
    }
]

    users = users.map(user => {
        if ( user.id == 2 ) {
            user.name = 'Hakan'
        }
        return user
    })

    const women = users.filter(user => user.gender == 2)
    const men = users.filter(user => user.gender == 1 && user.age > 24)

    console.log(men)

function sayHello() {
    console.log('hello!')
}

const interval= setInterval(sayHello, 1000)
//clearInterval
//clearTimeout

const timeout = setTimeout(() => {
    clearInterval(interval)
console.log('interva işlemi iptal edildi!')
}, 5000)

setTimeout(() => {
    clearTimeout(timeout)
    console.log('timeout işlemi iptal edildi, interval devam edecek...')
}, 3000)

const names =['Tayfun', 'Ahmet', 'Mehmet']
const numaralar = [3, 6, 2, 1, 10, 1.2, 20, 9]
names.sort((a, b) => b - a)
//numaralar.sort((a, b) => b - a)

console.log(names)