// regex
// 1 - RegExp constructor
//regex tanimi
//ben 30 yasindayim ve 1993 yilinde dogdum

// let str = 'Ben yasindayim ve 1993 yilinda doğdum'
// let username = 'tayfun erbilen'

// let pattern = 'love'
// let flag = 'gi'
// let regEx = new RegExp(pattern, flag)

//let regex = /love/gi

//let regEx = new RegExp('love', 'gi')

/*
let word = /salak/
let comment = prompt('yorumunu yaz! ama yazarken dikkatli ol!')

console.log(
    word.test(comment)
)
*/

/*
let string = 'I l0ve javascript and I love prototurk'

console.log(
    string.match(/love/i)
)
*/


/*
const txt = 'Python is the most beauiful language that a humen begin has ever created I recomend python
for a firts progrmming language'

let matchReplaced = txt.replace(/python/gi, 'JavaScript')
console.log(matchReplaced)

*/

/*
let str = 'Ben 30 yasindayim ve 1993 yil,nde dogdum telefon no 3242342342'

console.log(
    str.match(/\b[a-z]+\b/gi)
)

*/

/*
let name = 'tayfiz';

console.log(
    /a?n$/.test(name)
)


*/


/*
function is_valid_variable(str) {
    console.log(
        /^[a-z]+$/i.test(str)
    )
}



is_valid_variable('first_name') // True

is_valid_variable('First-name') // False

is_valid_variable('1first_name') // False

is_valid_variable('firstname') // True


*/


let date= '2022-12-12'


console.log(
    date.match(/(\d{4})-(\d{2}-{\d{2}})/)
)