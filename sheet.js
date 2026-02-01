const scriptURL = 'https://script.google.com/macros/s/AKfycbyctsJz44kN6g0GGPkvXcWyvL56LgDYGoqVh-QrOlsSdZshCfKO_j3PfX1ZZd2QHmla2g/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})