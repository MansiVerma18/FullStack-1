const form = document.getElementById("form");
const username = document.getElementById("username");;
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");
const small = document.querySelector("small");



form.addEventListener('submit', function(e) {
    e.preventDefault();
    Input();
})

function Input() {

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordConfirmValue = passwordConfirm.value.trim();
    if (usernameValue === '') {
        error(username, "Username cannot be blank");

    } else if (!isValid(usernameValue)) {
        error(username, "Username is not valid");
    } else {
        noerror(username)
    }
    if (emailValue === '') {
        error(email, "Email cannot be blank");
    } else if (!isEmailValid(emailValue)) {
        error(email, "Email ID is not valid")
    } else {
        noerror(email)
    }
    if (passwordValue === '') { error(password, "Password cannot be blank"); } else {
        noerror(password)
    }
    if (passwordConfirmValue === '') { error(passwordConfirm, "Password confirmation cannot be blank"); } else if (passwordValue != passwordConfirmValue) {
        error(passwordConfirm, "Password not matched");
    } else {
        noerror(passwordConfirm)
    }
}

function error(input, msg) {
    const formControl = input.parentNode;
    formControl.className = 'input error';
    const small = formControl.querySelector('small');
    small.innerHTML = msg;
}

function noerror(input) {
    const formControl = input.parentNode;
    formControl.className = 'input noerror';

}

function isEmailValid(email) {
    return /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,3})$/.test(email);
}

function isValid(username) {
    return /^[a-z0-9]{4,24}$/.test(username);
}