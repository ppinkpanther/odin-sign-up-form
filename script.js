const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#confirm-password');
const passwordInputs = document.querySelector('.password-inputs');


function checkValidity() {
    if(password.value == passwordConfirm.value){
    password.setCustomValidity('');
    passwordConfirm.setCustomValidity('');
   } else {
    password.setCustomValidity('Passwords do not match');
    passwordConfirm.setCustomValidity('Passwords do not match');
   }

   console.log(password.checkValidity(), passwordConfirm.checkValidity())
}

passwordInputs.addEventListener('input', () => {
    console.log(password.value, passwordConfirm.value);
    checkValidity();
})

