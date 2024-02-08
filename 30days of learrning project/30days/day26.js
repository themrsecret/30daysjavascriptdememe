{/* <form id="form1"></form>
<form id="form2"></form>

<script>
  console.log(document.forms)
  console.log(document.forms.form2)
</script> */}

{/* <form action="" id="form1">
  <input type="text" name="username"> <br>
  <button type="button">Gönder</button>
</form> */}

// script>
// 	const btn = document.querySelector('button')
// 	{/* btn.addEventListener('click', () => { */}
// 		document.forms.form1.submit()
// 	{/* }) */}
// </script><

{/* <form action="" id="form1" novalidate>
  <input type="text" name="username" required> <br>
  <input type="password" name="password" minlength="3" maxlength="10" required> <br>
  <div>bu div etiketinin hiçbir önemi yok</div>
  <input type="email" name="email" required> <br>
  <button type="submit">Gonder</button>
</form>

<script>
	const form1 = document.getElementById('form1')
	form1.addEventListener('submit', e => {
		e.preventDefault();
		[...e.target.elements].forEach(element => {
			console.log(element.validity)
		})
	})
</script> */}

{/* <form action="" id="form1" novalidate>
  <input type="text" name="username" required> <br>
  <input type="password" name="password" minlength="3" maxlength="10" required> <br>
  <div>bu div etiketinin hiçbir önemi yok</div>
  <input type="email" name="email" required> <br>
  <input type="number" min="20" max="40" step="2" /> <br>
  <button type="submit">Gonder</button>
</form>

<script>
	const form1 = document.getElementById('form1')
	form1.addEventListener('submit', e => {
		e.preventDefault();
		[...e.target.elements].forEach(element => {
			console.log(element.validationMessage)
		})
	})
</script> */}

{/* <form action="" id="form1" novalidate>
  <input type="text" name="username" required> <br>
  <input type="password" name="password" minlength="3" maxlength="10" required> <br>
  <div>bu div etiketinin hiçbir önemi yok</div>
  <input type="email" name="email" required> <br>
  <input type="number" min="20" max="40" step="2" /> <br>
  <button type="submit">Gonder</button>
</form>

<script>
  function checkValidity(element) {
		if (element.validity.badInput) {
			element.setCustomValidity('Geçersiz bir değer girdiniz')
		} else if (element.validity.patternMismatch) {
			element.setCustomValidity('Geçersiz bir format girdiniz')
		} else if (element.validity.rangeUnderflow) {
			element.setCustomValidity('Minimum değerden daha az')
		} else if (element.validity.rangeOverflow) {
			element.setCustomValidity('Minimum değerden daha fazla')
		} else if (element.validity.stepMismatch) {
			element.setCustomValidity('Adımda bir sıkıntı var')
		} else if (element.validity.tooLong) {
			element.setCustomValidity('Çok uzun be gardaş')
		} else if (element.validity.tooShort) {
			element.setCustomValidity('Bu da çok kısa kaldı')
		} else if (element.validity.typeMismatch) {
			element.setCustomValidity('Tipsiz misin biraz?')
		} else if (element.validity.valueMissing) {
			element.setCustomValidity('Buralar hep dutluk!')
		} else {
			element.setCustomValidity('')
		}
		element.reportValidity()
  }

	document.forms.form1.addEventListener('submit', e => {
		e.preventDefault();
		[...e.target.elements].reverse().forEach(element => {
			checkValidity(element)
      // elemanın kontrolünü anlık olarak yapmaya devam et
      element.addEventListener('input', function(e) {
				checkValidity(e.target)
      })
		})
	})
</script> */}