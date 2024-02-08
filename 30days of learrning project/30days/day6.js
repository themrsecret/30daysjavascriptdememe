for (let i = 1; i < 5; i++) {
    console.log(`${i} * ${i} = ${i * i}`)
}

const names = ['Tayfun', 'Mehmet', 'Gökhan', 'Ahmet', 'Oğuzhan', 'Süleyman', 'kanuni']

for (let i = 0; i < names.length; i++) {
    console.log(names[i])
}

let numbers = [5, 10, 15]
let sum = 0

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}

console.log('Toplam', sum)

let countries = ['turkey', 'cyprus', 'azerbaijan']
let newCountries = []

for (let i = 0; i < countries.length; i++) {
    newCountries.push(countries[i])
}

console.log(countries)
console.log(newCountries)

let i = 0
while (i <names.length) {
    console.log('İsim', names[i])
    i++
}

do {
    console.log('İsim', names[i])
    i++
} while(i < names.length)

for(let name of names) {
   if (name == 'Gökhan') {
    console.log(`${name} es geçildi`)
    continue
   }
    if (name == 'Oğuzhan') {
        console.log(`${name} es geçildi`)
        break
    }
    console.log('Ad', name)
}