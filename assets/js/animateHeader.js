const body = document.body.getBoundingClientRect();
const header = document.querySelector('header');
const index_section = [...document.querySelector('.index-main').getElementsByTagName('section')];

window.addEventListener('scroll', function(event) {
    if (this.scrollY > 0) {
        header.classList.remove('header-start');
        header.classList.remove('header-a');
        header.classList.add('header-skroll');
    } else {
        header.classList.remove('header-skroll');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = this.getAttribute('href') === "#" ? document.body : document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});