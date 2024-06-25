const body = document.body.getBoundingClientRect();
const index_section = [...document.querySelector('.index-main').getElementsByTagName('section')];

window.addEventListener('scroll', function(event) {
    console.log(this.scrollY, body.height);

    index_section.forEach(section => {
        console.log(section.getBoundingClientRect());
    });
});