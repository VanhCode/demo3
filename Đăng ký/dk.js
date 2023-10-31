var icon1 = document.querySelectorAll('.fa-eye');
var icon2 = document.querySelectorAll('.fa-eye-slash');
var inputs = document.querySelectorAll('input');

icon2[0].addEventListener('click', () => {
    icon2[0].style.display = 'none';
    inputs[3].setAttribute('type', 'text')
    icon1[0].style.display = 'block';
});

icon1[0].addEventListener('click', () => {
    icon1[0].style.display = 'none';
    inputs[3].setAttribute('type', 'password');
    icon2[0].style.display = 'block';
});

icon2[1].addEventListener('click', () => {
    icon2[1].style.display = 'none';
    inputs[4].setAttribute('type', 'text')
    icon1[1].style.display = 'block';
});

icon1[1].addEventListener('click', () => {
    icon1[1].style.display = 'none';
    inputs[4].setAttribute('type', 'password');
    icon2[1].style.display = 'block';
});


function send() {
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const phone = document.querySelector('#phone');
    const password = document.querySelector('#password');
    const newPassword = document.querySelector('#newPassword');

    const nameError = document.querySelector('#name_error');
    const emailError = document.querySelector('#email_error');
    const phoneError = document.querySelector('#phone_error');
    const passwordError = document.querySelector('#password_error');
    const newPasswordError = document.querySelector('#newPassword_error');

    let count = 0;

    if (name.value === '') {
        nameError.innerHTML = "Trường này không được để trống!"
        nameError.style.color = 'red';
        count++;
    } else if (name.value.length < 5) {
        nameError.innerHTML = "Tên phải lớn hơn 5 kí tự!"
        nameError.style.color = 'red';
        count++;
    } else {
        nameError.innerHTML = "";
    }

    if (email.value === '') {
        emailError.innerHTML = "Trường này không được để trống!"
        emailError.style.color = 'red';
        count++;
    } else {
        emailError.innerHTML = "";
    }

    if (phone.value === '') {
        phoneError.innerHTML = "Trường này không được để trống!"
        phoneError.style.color = 'red';
        count++;
    } else {
        phoneError.innerHTML = "";
    }

    if (password.value === '') {
        passwordError.innerHTML = "Trường này không được để trống!"
        passwordError.style.color = 'red';
        count++;
    } else {
        passwordError.innerHTML = "";
    }

    if (newPassword.value === '') {
        newPasswordError.innerHTML = "Trường này không được để trống!"
        newPasswordError.style.color = 'red';
        count++;
    } else {
        newPasswordError.innerHTML = "";
    }

    if (count > 0) {
        return false;
    } else {
        return alert("OK"); 
    }
}

function clearError(inputId) {
    document.getElementById(inputId + '_error').innerHTML = '';
}

function blurs() {
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const phone = document.querySelector('#phone');
    const password = document.querySelector('#password');
    const newPassword = document.querySelector('#newPassword');

    const nameError = document.querySelector('#name_error');
    const emailError = document.querySelector('#email_error');
    const phoneError = document.querySelector('#phone_error');
    const passwordError = document.querySelector('#password_error');
    const newPasswordError = document.querySelector('#newPassword_error');

    let count = 0;

    if (name.value === '') {
        nameError.innerHTML = "Trường này không được để trống!"
        nameError.style.color = 'red';
        count++;
    } else if (name.value.length < 5) {
        nameError.innerHTML = "Tên phải lớn hơn 5 kí tự!"
        nameError.style.color = 'red';
        count++;
    } else {
        nameError.innerHTML = "";
    }

    if (email.value === '') {
        emailError.innerHTML = "Trường này không được để trống!"
        emailError.style.color = 'red';
        count++;
    } else {
        emailError.innerHTML = "";
    }

    if (phone.value === '') {
        phoneError.innerHTML = "Trường này không được để trống!"
        phoneError.style.color = 'red';
        count++;
    } else {
        phoneError.innerHTML = "";
    }

    if (password.value === '') {
        passwordError.innerHTML = "Trường này không được để trống!"
        passwordError.style.color = 'red';
        count++;
    } else {
        passwordError.innerHTML = "";
    }

    if (newPassword.value === '') {
        newPasswordError.innerHTML = "Trường này không được để trống!"
        newPasswordError.style.color = 'red';
        count++;
    } else {
        newPasswordError.innerHTML = "";
    }

    if (count > 0) {
        return false;
    }
}

