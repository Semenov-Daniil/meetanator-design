const body = document.body.getBoundingClientRect();
const header = document.querySelector('header');
const index_section = [...document.querySelector('.index-main').getElementsByTagName('section')];

window.addEventListener('scroll', function(event) {
    if (scrollY > 0) {
        header.classList.remove('header-start');
        header.classList.remove('header-a');
        header.classList.add('header-skroll');
    } else {
        header.classList.remove('header-skroll');
    }
});