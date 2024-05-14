document.addEventListener('DOMContentLoaded', function () {
    var headerBurger = document.querySelector('.headerBurger');
    var headerMenu = document.querySelector('.headerMenu');
    var headerLinks = document.querySelectorAll('.headerLink');
    var body = document.body;
    var header = document.querySelector('header');

    function toggleClasses() {
        headerBurger.classList.toggle('active');
        headerMenu.classList.toggle('active');
        body.classList.toggle('lock');
        checkScroll();
    }

    function checkScroll() {
        if (window.scrollY > 50 || body.classList.contains('lock')) {
            // Если есть прокрутка или меню открыто, добавляем класс "scrolled"
            header.classList.add('scrolled');
        } else {
            // Если нет прокрутки и меню закрыто, убираем класс "scrolled"
            header.classList.remove('scrolled');
        }
    }

    headerBurger.addEventListener('click', function (event) {
        toggleClasses();
    });

    headerLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            toggleClasses();
        });
    });

    window.addEventListener('scroll', function () {
        checkScroll();
    });
});
