import MobileNav from "../MobileNav/MobileNav.js";

export default function Header() {
    const phoneMask = phoneNumber(global_phone);

    var headerHTML = document.createElement("header");
    headerHTML.classList.add("G-header");
    headerHTML.innerHTML = `
    <div class="G-container">
        <div class="col-logo">
            <a href="/" class="logo-text">Аконсалт-Финанс
<!--                <img src="/assets/img/logo.svg?v=1.03" alt="logo" class="logo">-->
            </a>
        </div>
        <div class="col-nav">
            <nav class="nav-wrapper">
                <a href="/about" class="item">Обо мне</a>
                <a href="/services" class="item">Услуги</a>
<!--                <a href="/blog" class="item">Блог</a>-->
                <a class="item anchor-contact">Контакты</a>
            </nav>
        </div>
        <div class="col-events">
            <a href="tel:${phoneMask}" class="btn btn-outline btn-shadow btn-tel-number">${phoneMask}</a>
            <a href="tel:${phoneMask}" class="btn btn-outline btn-aspect btn-tel-icon"><i class="icon phone"></i></a>
            <button type="button" class="btn btn-outline btn-aspect btn-burger">
                <i class="icon burger"></i>
            </button>
        </div>
    </div>`;
    document.querySelector("#app").before(headerHTML);

    // при скроле добавляем класс <header>
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            headerHTML.classList.add("is-scrolled");
        } else {
            headerHTML.classList.remove("is-scrolled");
        }
    });

    // по клику на "Контакты" опускаемся вниз сайта к блоку <footer>
    headerHTML.querySelector(".nav-wrapper .anchor-contact").addEventListener("click", function () {
        const footer = document.querySelector("footer");
        if (footer) {
            footer.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // открываем мобильное меню
    headerHTML.querySelector(".col-events .btn-burger").addEventListener("click", function () {
        MobileNav();
    });
}