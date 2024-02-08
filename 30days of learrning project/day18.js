const test = callback => {
    setTimeout(() => {
        callback('hata oluştu!', [])
    }, 2000)
}


const callback = (err, data) => {
    if (err) {
        console.log('hata', err)
    } else {
        console.log('data', data)
    }
}

// test(callback)

const promise = new Promise(( resolve, reject) => {
    setTimeout(() => {
        reject('islem basarili')
    }, 1500)
    //resolve('islem basarili')
    //reject(islem basarisiz)
})

/*
promise.then((data) => {
    console.log(data)
}).catch(err => {
    console.warn(err)
})
*/

const API_URL = 'https:jsonplaceholder.typicode.com/posts'


const getPosts = async () => {
    try {
        const response = await fetch(API_URL)
        const data = await response.json()
        console.log(data)
    }  catch(err) {
        console.error(err)
    }
}

getPosts()