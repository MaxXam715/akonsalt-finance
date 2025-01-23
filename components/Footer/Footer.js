export default function Footer() {
    const phoneMask = phoneNumber(global_phone);
    const currentYear = new Date().getFullYear();

    var footerHTML = document.createElement("footer");
    footerHTML.classList.add("G-footer");
    footerHTML.innerHTML = `
    <div class="G-container">
        <div class="top-line"></div>
        <div class="text-block">
            <h3 class="heading heading-gradient">Контакты</h3>
        </div>
        <div class="row-events">
<!--            <a href="https://t.me/${global_phone}" target="_blank" class="btn btn-outline">Telegram</a>-->
<!--            <a href="https://wa.me/${global_phone}" target="_blank" class="btn btn-outline">WhatsApp</a>-->
            <a href="mailto: ${global_email}" target="_blank" class="btn btn-outline">E-mail</a>
            <a href="tel:${global_phone}" class="btn btn-outline">${phoneMask}</a>
            <button type="button" class="btn btn-primary js-open-feedback">Записаться на консультацию</button>
        </div>
        <div class="cooperate-container">
            <div class="user-info">
<!--                <span>Физическое лицо</span>-->
                <a href="https://nok-nark.ru/cert/detail/65a0031cf1686" target="_blank">Федеральный реестр независимой оценки квалификации</a>
                <a href="https://www.consultant.ru/document/cons_doc_LAW_61801/" target="_blank">ФЗ РФ №152-ФЗ «О персональных данных»</a>
                <a href="https://ivo.garant.ru/#/document/12148555/paragraph/3471:0" target="_blank">ФЗ РФ №149-ФЗ «О защите информации»</a>
            </div>
            <div class="tech-block">
                <a href="/privacy-policy">Политика конфиденциальности</a>
                <span>© 2024-${currentYear} «Аконсалт-Финанс». <br>https://akonsalt-finance.ru/</span>
            </div>
        </div>
    </div>`;
    document.querySelector("#app").after(footerHTML);

    footerHTML.querySelector(".js-open-feedback").addEventListener("click", () => openModalFeedback());
}