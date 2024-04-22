export default function Header() {
    const phoneMask = phoneNumber(phone);

    var headerHTML = document.createElement("header");
    headerHTML.classList.add("G-header");
    headerHTML.innerHTML = `
    <div class="G-container">
        <div class="col-logo">
            <a href="/">
                <img src="/assets/img/logo.svg" alt="logo" class="logo">
            </a>
        </div>
        <div class="col-nav">
            <nav class="nav-wrapper">
                <a href="/about" class="item">Обо мне</a>
                <a href="/cases" class="item">Кейсы</a>
                <a href="/services" class="item">Услуги</a>
                <a href="/blog" class="item">Блог</a>
                <a href="/contacts" class="item">Контакты</a>
            </nav>
        </div>
        <div class="col-events">
            <a href="tel:${phoneMask}" class="btn btn-outline btn-shadow btn-tel-number">${phoneMask}</a>
            <a href="tel:${phoneMask}" class="btn btn-outline btn-aspect btn-tel-icon"><i class="icon phone"></i></a>
        </div>
    </div>`;
    document.querySelector("#app").before(headerHTML);

    window.addEventListener('scroll', function () {
        if (window.scrollY > 20) {
            headerHTML.classList.add("is-scrolled");
        } else {
            headerHTML.classList.remove("is-scrolled");
        }
    });
}