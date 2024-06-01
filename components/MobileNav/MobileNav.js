export default function MobileNav() {
    var navHTML = document.createElement("div");
    navHTML.classList.add("mobile-menu");
    navHTML.innerHTML = `
    <div class="nav-wrapper">
        <button type="button" class="btn btn-outline btn-aspect btn-close-nav">
            <i class="icon close"></i>
        </button>
        <div class="nav-container">
            <a href="/" class="logo-container">
                <img src="/assets/img/logo.svg?v=1.02" alt="logo">
            </a>
            <nav class="nav-wrapper">
                <a href="/" class="item">Главная</a>
                <a href="/about" class="item">Обо мне</a>
<!--                <a href="/cases" class="item">Кейсы</a>-->
<!--                <a href="/services" class="item">Услуги</a>-->
<!--                <a href="/blog" class="item">Блог</a>-->
                <a class="item anchor-contact">Контакты</a>
            </nav>
            <div class="contact-me">
                <a href="tel: ${global_phone}" class="btn btn-primary btn-call">${phoneNumber(global_phone)}</a>
                <a href="mailto: ${global_email}" class="btn btn-outline btn-shadow btn-email">${global_email}</a>
            </div>
        </div>
    </div>`;
    document.querySelector(".G-header").before(navHTML);

    requestAnimationFrame( () => {
        navHTML.classList.add("show");
        document.body.classList.add("no-scroll");
    });

    navHTML.querySelector(".btn-close-nav").addEventListener("click", function () {
        closeNav();
    });

    // по клику на "Контакты" опускаемся вниз сайта к блоку <footer>
    navHTML.querySelector(".nav-wrapper .anchor-contact").addEventListener("click", function () {
        const footer = document.querySelector("footer");
        if (footer) {
            closeNav();
            footer.scrollIntoView({ behavior: 'smooth' });
        }
    });

    function closeNav() {
        navHTML.classList.remove("show");
        navHTML.addEventListener('transitionend', function(e) {
            navHTML.remove();
        });
        document.body.classList.remove("no-scroll");
    }
}