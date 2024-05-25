const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#confirm-password');
const passwordInputs = document.querySelector('.password-inputs');
const errorMsg = document.querySelector('.error');


function checkValidity() {
    if(password.value == passwordConfirm.value){
    password.setCustomValidity('');
    passwordConfirm.setCustomValidity('');
    errorMsg.textContent = '';
   } else {
    password.setCustomValidity('Passwords do not match');
    passwordConfirm.setCustomValidity('Passwords do not match');
    errorMsg.textContent = '*Passwords do not match';
   }
}

passwordInputs.addEventListener('input', () => {
    checkValidity();
})

