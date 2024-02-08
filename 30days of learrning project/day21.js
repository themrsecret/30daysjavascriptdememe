//const h1 = document.getElementsByTagName('h1');
//const h1 = document.getElementsByClassName('title-1')

const title = document.getElementById('title')

title.setAttribute('style', 'color: blue; background-color: yellow')
title.setAttribute('title', 'test baslik')
titlesetAttribute('class', 'adana')

//title.dataset.id = '5'

title.style.color = 'blue'
title.style.backgroundColor = 'yellow'
title.title = 'test baslik'
title.className = 'adana'

console.log(
    document.querySelectorAll('.title-1')
)

document.querySelectorAll('.title-1').forEach(item => console.log(item))

/*
let len = h1.length
for (let i = 0; i < len; i++) {
    console.log(
        h1[i]
    )
}

[ ...h1].forEach(item => {
    console.log(item)
})
*/