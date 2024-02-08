function counter() {
    let count = 0
    function setCount() {
        count++
        return count
    }
    function down() {
        count--
        return count
    }
    return {
        up: up,
        down: down
    }
}

let count = counte()

console.log(
    count()
)
console.log(
    count()
)
console.log(
    count()
)