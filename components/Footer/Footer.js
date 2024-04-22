export default function Footer() {
    const phoneMask = phoneNumber(phone);
    const currentYear = new Date().getFullYear();

    var footerHTML = document.createElement("footer");
    footerHTML.classList.add("G-footer");
    footerHTML.innerHTML = `
    <div class="G-container">
        <div class="top-line"></div>
        <div class="text-block">
            <h3 class="heading heading-gradient">Контакты</h3>
            <p class="desc">Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan.</p>
        </div>
        <div class="row-events">
            <a href="https://t.me/${phone}" target="_blank" class="btn btn-outline">Telegram</a>
            <a href="https://wa.me/${phone}" target="_blank" class="btn btn-outline">WhatsApp</a>
            <a href="'tel:${phoneMask}" class="btn btn-outline">${phoneMask}</a>
            <button type="button" class="btn btn-primary">Заказать звонок</button>
        </div>
        <div class="cooperate-container">
            <div class="user-info">
                <span>ИП ${legal_IP}</span>
                <span>ИНН ${legal_INN}</span>
                <span>ОГРНИП ${legal_OGRNIP}</span>
                <a href="https://nok-nark.ru/cert/list/?filter%5BCODE%5D=08.00800.01.00000003.27&filter%5BACTIVE_FROM%5D=11.01.2024&sort%5Bby%5D=CODE&sort%5Border%5D=asc" target="_blank">Реестр НОК</a>
            </div>
            <div class="tech-block">
                <router-link to="/privacy-policy">Политика конфиденциальности</router-link>
                <span>© ${currentYear} Все права защищены</span>
            </div>
        </div>
    </div>`;
    document.querySelector("#app").after(footerHTML);
}