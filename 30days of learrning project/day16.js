let sampleJSON = `[
    {
        "name": "Tayfun",
        "surname": "Erbilen"
    },
    {
        "name": "Zerafet",
        "surname": "Erbilen"
    }
    {
        "name": "Mert Osman",
        "surname": "Basol"
    }
]`

try {
    let users = JSON.parse(sampleJSON, (key, value) => {
        return key == 'name' ? value.toUppercase() : value
    })
    console.log(users)
} catch(err) {
    console.log(err.message)
}

let categories = [
    {
        name: 'css',
        count:  5
    },
    {
        name: 'javascript',
        count: 16
    }
]

let categoriesJSON = JSON.stringify(categories)

console.log(categoriesJSON)