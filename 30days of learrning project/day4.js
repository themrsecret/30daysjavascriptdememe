let result = parseInt(prompt(`2 + 5 kaç yapar?`,`2 + 5`))

if (result == `7`) {
    console.log(`Doğru cevabı verdin!`)
} else {
    console.log(`Hatalı cevap verdin Doğru cevap 7!`)
}

console.log(
    result == 7 ? `DOĞRU CEVAP` :`YANLIŞ CEVAP`
)

switch(result){
   
    case `7`:
    console.log(`Doğru cevap - switch`)
break

case `5`:
    console.log(`cevap hatalı ama aferin`)
break

        default:
        console.log(`hatalı cevap - swtich`)

    }

let number = 5
if (number == 4) {
    //
} else if (number > 5) {
    //
} else if (number > 5) {
    //
} else {
   //
}