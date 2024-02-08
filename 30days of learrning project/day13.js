let age = 29

console.log('ben %d yasindayim ve %d yilinda dogdum', age, 1993)

console.log('30 days of javascript')

console.log(['tayfun', 'erbilen', 'prototürk'])

console.log({
    name: 'tayfun',
    surbname: 'erbilen'
})

console.log('%cDur!', 'font-size: 50px; font-family: Arial; color: red; text')

console.warn('uyari mesaji')

console.error('sen naptin gardas')

let names = ['tayfun', 'mert', 'gökhan']

console.table({
    name: 'tayfun',
    surname: 'erbilen'
})

new Array(10).fill().map((value, index) => index)