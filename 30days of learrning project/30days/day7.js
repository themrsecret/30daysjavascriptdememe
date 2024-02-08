function multiply(num1, num2) {
    let total = num1 * num2
    return total
}


let num1 = 5, num2 = 2
    let total = multiply(num1, num2)

    function sumArrayValues(array) {
        let total = 0
        for (let i = 0; i < array,length; i++) {
total += array[i]
        }
    }

    let dizi = [2, 4,  6, 8, 10]
    sumArrayValues(dizi)

    console.log(`Toplam`, sumArrayValues(dizi))
    
    function sumArrayValuesrray(array) {
        let total = 0
        for (let i = 0; i <array.length; i++) {
            total += array[i]
        }
        return total
    }



    console.log(topla(2, 5, 7, 9, 10))

    const sayHello = function(name) {
        return `hello ${name}`
    }
    console.log(sayHello(`Tayfun`));

    (function() {
        console.log(`he yo!`)
    })()

    let sayHello2 =(function(name) {
        console.log(`Hello ${name}`)
    })('Tayfun')

    // normal fonsiyon (regular function)
    function hello(name, surname) {
        return `hello ${name}`
    }

    // ok fonksiyonu (array function)
    const hello2 = (name, surname) = `hello ${name}`;

    const toplama = (num1, num2, numbers) = {
      

    }

     toplama(2, 5, 7, 8, 10)

     console.log(hello2('Ahmet', 'Altan'))

     function multiply(num1, num2) {
        return num1 * num2
     }

     console.log(multiply(10))
     console.log(multiply(15, 5))

     // call vs. invoke

     function test() {
        console.log('Test fonksiyonu çalıştı!')
     }

     // call
     test()

     function invoke(func) {
        func()
     }

     // invoke
     invoker(test)