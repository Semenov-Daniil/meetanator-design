let header = document.querySelector('.header');
let nav = document.querySelector('.header nav');

window.addEventListener('scroll', function(event) {
    if (scrollY > 0) {
        header.style.boxShadow = 'inset 0 0 0 1px hsla(0,0%,100%,.12), 0 0 0 1px rgba(0,0,0,.04)';
        nav.style.paddingBlock = '0.8rem';
    } else {
        header.style.boxShadow = '';
        nav.style.paddingBlock = '';
    }
});