document.addEventListener('DOMContentLoaded', function() {
    let animationShown = getCookie('animationShown');

    // if (!animationShown) {
    //     // Показываем анимацию, если она еще не была показана
    //     document.querySelector('.preloader-wrapp').style.display = 'block';
    //     setCookie('animationShown', 'true', 1); // Устанавливаем куки на 1 день
    // }
});

// Функция для получения значения куки по имени
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

// Функция для установки куки с именем, значением и временем жизни в днях
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}