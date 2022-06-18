const parallax = document.querySelector('.section'),
    images = document.querySelector('.logo'),
    footer = document.querySelector('.footer__logo')

window.addEventListener('scroll', function () {
    let windowY = window.scrollY

    if (window.scrollY < 150) {
        images.style.transform = `translateY(${windowY}px)`
    }
})
window.addEventListener('scroll', function (){
    if (window.scrollY > 1700){
        footer.style.transform = `translateX(150px)`
    }else if (window.scrollY < 2500){
        footer.style.transform = `translateX(0px)`

    }
})
