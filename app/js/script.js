console.log('hello world');
const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
btnHamburger.addEventListener('click', e => {
    e.preventDefault;
    console.log('Hamburger button clicked')

    if (header.classList.contains('open')){
        header.classList.remove('open')
        overlay.classList.add('fade-out')
        overlay.classList.remove('fade-in')
    }else {
        header.classList.add('open')
        overlay.classList.add('fade-in')
        overlay.classList.remove('fade-out')
    }
    
})