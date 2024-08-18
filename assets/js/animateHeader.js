const body = document.body.getBoundingClientRect();
const preloader = document.querySelector('.preloader-wrapp');
const header = document.querySelector('header');

if (preloader) {
    header.classList.add('preloader-show');
}

if (window.scrollY > 0) {
    header.classList.add('header-skroll');
}

window.addEventListener('scroll', function(event) {
    if (this.scrollY > 0) {
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