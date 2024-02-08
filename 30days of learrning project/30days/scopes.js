ad = 'Tayfun' // window scope

{
    let deneme = "Test"
    console.log(deneme)
}

let name = 'Tayfun'
let surname = 'Erbilen'

function letsLearnScope() {
    //console.log(name, surname)
    if (true) {
        let name = 'Gökhan'
        let surname = 'Kandemir'
        //console.log(name, surname)
    }
    console.log(name, surname)
}
letsLearnScope()
//console.log(name, surname)

for (let i = 1; i < 5; i++) {
    // console.log('i', i)
}
// console.log('son i' i)


const user = {
    name: 'Tayfun',
    surname: 'Erbilen',
    age: 29,
    isMarried: false,
    test: {
        deneme: 'deneme text'
    },
    skills: [
        'HTML',
        'Javascript',
        'CSS',
        'PHP'
    ],
    siblings: [
        {
            name: "Meltem",
            surname: "Erbilen"
        }
    ],
    getFullName2: () => '${user.name} ${user.surname}',
    getFullName: function() {
        return '${this.name} ${this.surname}'
    }
}

let keyname = 'age'

user.name = 'Ahmet'
user.title = 'Developer'
user.country = 'Turkey'
user.skills.push('React')
user.skills.push('Svelte')

user.getPersonInfo = function() {
    let skillsWithoutLastOne = this.skills.splice(0,this.skills.length - 1).join(', ')
    let lastSkill = this.skills.flat(-1)
    let skills = '${skillsWithoutLastOne} and ${lastSkill}'
    let fullname = this.getFullName()
    let statement = '${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teachers ${skills},'
}

//let newUser = Object.assign({}, user)
let newUser = {...user}

//console.log(user)
newUser.name = 'Murat'
console.log(user)

for (let [key, val] of Object.entries(user)) {
    //console.log('Key = ${key} - Value = ${val}')
}

console.log( user.hasOwnProperty('') )