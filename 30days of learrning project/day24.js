const ul = document.querySelector('ul')
const deleteButtons = document.querySelectorAll('.delete-btn')
//const deleteButtons = ul.children

console.log(
    deleteButtons
)

deleteButtons.forEach(btn => {
    btn.addEventListener('click', e => {
        e.target.removeEventListener()
        if (ul.childElementCount == 0) {
            ul.remove()
        }
    })
})

const test = document.querySelector('.test')

console.log(
    test.clientWidth
)

{/* <div class="scroll-content" style="height: 70px; overflow: auto">
  test <br>
  test <br>
  test <br>
  test <br>
  test <br>
  test <br>
  test <br>
  test <br>
  test <br>
  test <br>
  test <br>
</div> */}

{/* <script>
document.querySelector('.scroll-content').scrollTop += 100

console.log(
    document.querySelector('.scroll-content').scrollTop
)
</script> */}

{/* <button type="button">buton</button>
<button type="submit">submit button</button>
<button type="reset">reset button</button>
<button disabled type="submit">disabled submit button</button>

<script>
const buttons = document.querySelectorAll('button')

for (const button of buttons) {
    // tipi submit olan ve disabled olan oge olup olmadini kontrol et
    console.log(
        button.matches('[type=submit][disabled]'),
        button
    )
}
</script> */}

{/* <a href="https://prototurk.com">prototurk</a>
<a href="https://youtube.com/prototurkcom" title="Prototurk youtube kanalı">prototurk youtube</a>

<script>
const aElements = document.querySelectorAll('a')

for (const a of aElements) {
    if (a.hasAttribute('title')) {
        a.style.backgroundColor = 'yellow'
    }
}
</script>

<h1>başlık</h1>
<h1 title="örnek başlık">başlık 2</h1>

<script>
const h1Elements = document.querySelectorAll('h1')

for (const h1 of h1Elements) {
    if (!h1.hasAttributes()) {
        h1.style.backgroundColor = 'yellow'
    }
}
</script> */}

{/* <input type="text" />
<button>toggle</button>

<script>
const button = document.querySelector('button')
const input = document.querySelector('input')
  
button.addEventListener('click', () => {
  input.toggleAttribute('disabled')
})
</script> */}