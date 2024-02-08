//localStorage.setItem('name', 'tayfun')


// const names = ['tayfun', 'ahmet', 'mert']
// const user = {
//     name: 'tayfun',
//     surname: 'erbilen'
// }

// localStorage.setItem('user', JSON.stringify(user))
// localStorage.setItem('names', JSON.stringify(names))

// console.log(
//     localStorage
// )

// console.log(
//     JSON.parse(localStorage.getItem('user'))
// )

const basket = JSON.parse(localStorage.getItem('basket')) || []
const products = [
    {
        id: 1,
        title:'MacBook Pro 2021',
        preice: 40_000
    },
    {
        id: 2,
        title: 'Keychron K6',
        price: 100
    },
    {
        id: 3,
        title: 'NuPhy Halo65',
        price: 140
    },
]

function addBasket(productId) {
    basket.push(productId)
    localStorage.set
}

//addBasket(2)
//addBasket(3)

console.log(basket)

saveToStrage()

function removeBasket(productId) {
    basket = basket.filter(id => id == productId)
}