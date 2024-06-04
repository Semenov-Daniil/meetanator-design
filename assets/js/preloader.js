let preloader = true;

const body = document.querySelector('body');
const header = document.querySelector('header');
const main = document.querySelector('main');

if (preloader) {
    const preloader_wrapp = document.querySelector('.preloader-wrapp');

    body.classList.add('overflow-hidden');
    preloader_wrapp.classList.add('preloader-wrapp-show');

    setTimeout(() => {
        preloader_wrapp.classList.remove('preloader-wrapp-show');
        
        header.classList.add('header-a');
        main.classList.add('main-a');
        
        setTimeout(() => {
            header.classList.remove('header-a');
            header.classList.remove('header-start');
            main.classList.remove('main-a');
            main.classList.remove('main-start');
            body.classList.remove('overflow-hidden');
        }, 1500);
    }, 4500);
} else {
    body.classList.add('overflow-hidden');
    header.classList.add('header-a');
    main.classList.add('main-a');
    
    setTimeout(() => {
        header.classList.remove('header-a');
        header.classList.remove('header-start');
        main.classList.remove('main-a');
        main.classList.remove('main-start');
        body.classList.remove('overflow-hidden');
    }, 2000);
}
