// {/* <a href="about.html">Hakkimda</a>
// <a href="https://prototurk.com">prototurk.com</a>
// <script>
// 	const aTags = document.querySelectorAll('a')
// 	aTags.forEach(a => {
// 		a.addEventListener('click', e => {
// 			// eger link dis bir baglanti iceriyorsa
// 			// varsayilan davranisi engelle
// 			if (e.target.getAttribute('href').includes('http')) {
// 				if (!confirm('Guvenli olmayan bir siteye gitmeye calisiyorsunuz?')) {
// 					e.preventDefault()
// 				}
// 			}
// 		})
// 	})
// </script> */

// <div class="test1">
//     test1
//     <div class="test2">
//         test2
//         <div class="test3">test3</div>
//     </div>
// </div>
// <script>
// 	const test1 = document.querySelector('.test1')
// 	const test2 = document.querySelector('.test2')
// 	const test3 = document.querySelector('.test3')

//     test2.addEventListener('click', e => console.log('test2 tiklandi'))
//     test1.addEventListener('click', e => console.log('test1 tiklandi'))
//     test3.addEventListener('click', e => console.log('test3 tiklandi'))
// </script>

// test3.addEventListener('click', e => {
//     e.stopPropagation()
//     console.log('test3 tiklandi')
// })

// <h1>prototurk.com</h1>
// <style>
//     h1 {
//         color: red;
//     }
// </style>
// <script>
//     document.styleSheets[0].cssRules[0].style.setProperty('color', 'blue')
//     //document.styleSheets[0].cssRules[0].style.setProperty('color', 'blue', 'important')
// </script>

// <h1>prototurk.com</h1>
// <style>
//     h1 {
//         color: red !important;
//     }
// </style>
// <script>
//     document.styleSheets[0].cssRules[0].style.removeProperty('color')
// </script>

// <h1>prototurk.com</h1>
// <style>
//     h1 {
//         color: red !important;
//     }
// </style>
// <script>
//     console.log(
//       document.styleSheets[0].cssRules[0].style.getPropertyValue('color')
//     )
// </script>
// <h1>prototurk.com</h1>
// <style>
//     h1 {
//         color: red !important;
//     }
// </style>
// <script>
//     console.log(
//       document.styleSheets[0].cssRules[0].style.getPropertyPriority('color') === 'important' ? 'important kullanilmis' : 'cokta onemli degil!'
//     )
// </script>

// const mq = window.matchMedia('(max-width: 480px)')
// console.log(mq.matches) // true ya da false
// console.log(mq.media) // sorgumuzun değeri

// const mq = window.matchMedia('(max-width: 480px)')

// mq.addEventListener('change', e => {
//   console.log(e.matches) // eşleşip eşleşmediğini döndürür
// })