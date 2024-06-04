let header = document.querySelector('header');

window.addEventListener('scroll', function(event) {
    console.log(scrollY);
    if (scrollY > 0) {
        header.classList.remove('header-start');
        header.classList.remove('header-a');
        header.classList.add('header-skroll');
    } else {
        header.classList.remove('header-skroll');
    }
});