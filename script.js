const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#confirm-password');

function checkValidity() {
    return password == passwordConfirm;
}



console.log(checkValidity());
