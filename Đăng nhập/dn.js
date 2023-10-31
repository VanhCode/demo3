var icon1 = document.querySelector('.fa-eye');
var icon2 = document.querySelector('.fa-eye-slash');
var inputs = document.querySelectorAll('input');

icon2.addEventListener('click', () => {
    icon2.style.display = 'none';
    inputs[1].setAttribute('type', 'text')
    icon1.style.display = 'block';
});

icon1.addEventListener('click', () => {
    icon1.style.display = 'none';
    inputs[1].setAttribute('type', 'password');
    icon2.style.display = 'block';
});


