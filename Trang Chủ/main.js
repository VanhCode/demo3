window.addEventListener("scroll", function () {
    var header = document.querySelector(".nav-hea");
    var headerTop = document.querySelector('.header-top');
    if (window.scrollY > 0) {
        header.classList.add("sticky")
        headerTop.style.display = 'none'
    } else {
        header.classList.remove("sticky")
        headerTop.style.display = 'flex'
    }
});

const arrImg = [
    'img/banner7.png',
    'img/banner8.png',
    'img/banner6.png'
];
let index = 0;
const hinh = document.querySelector('#hinh');

function changeImage() {
    hinh.src = arrImg[index];
    index++;
    if (index >= arrImg.length) {
        index = 0;
    }
}

setInterval(changeImage, 5000);

