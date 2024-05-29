export default function FirstScreen() {
    var html = document.createElement("section");
    html.classList.add("section-container");
    html.classList.add("section-promo");
    html.innerHTML = `
    <div class="G-container">
        <div class="bg-gradient"></div>
        <div class="grid-container">
            <div class="about-me">
                <h1 class="title-heading">Я, Андраник Саркисович</h1>
                <p class="desc">Квалифицированный и аккредитованный финансовый советник, состою в Федеральном реестре независимой оценки квалификации (свидетельство 08.00800.01.00000003.27)</p>
                <button type="button" class="btn btn-primary js-open-feedback">Записаться на консультацию</button>
            </div>
            <div class="col-photo">
                <img src="/assets/img/my-photo-3.png" alt="me">
            </div>
        </div>
    </div>`;
    document.querySelector("#app").append(html);

    html.querySelector(".js-open-feedback").addEventListener("click", () => openModalFeedback());
}