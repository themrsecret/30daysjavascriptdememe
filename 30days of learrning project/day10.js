const tayfun = {
    name: 'tayfun',
    surname: 'erbilen'
}
const ahmet = {
    name: 'ahmet'
}

const map = new Map (Object.entries(tayfun))

console.log(
    Object.fromEntries(map.entries())
)