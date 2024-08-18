const body = document.querySelector('body');
const main_index = document.getElementsByClassName('index-main')[0];
const preloader = document.querySelector('.preloader-wrapp');
let sections = [...main_index.querySelectorAll('section')];
const height_precent = 70;

sections.forEach((section, index) => {
    if (section.getBoundingClientRect()['top'] <= (window.innerHeight / 100 * height_precent)) {
        sections.splice(0, 1);
        if (preloader) {
            section.classList.add('preloader-show');
        }
        section.classList.add('section-show');
        console.log(section);
    }
});

// window.addEventListener('scroll', function(event) {
//     sections.forEach((section, index) => {
//         if (section.getBoundingClientRect()['top'] <= (window.innerHeight / 100 * height_precent)) {
//             sections.splice(0, 1);
//             let animateWrapp = section.querySelector('.section-animation-wrapp');
//             section.style.setProperty('--animation-delay', '2.8s');
//             animateWrapp.classList.add('section-show');
//             console.log(section);
//         }
//     });
// });