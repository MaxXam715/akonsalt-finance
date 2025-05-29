export default function FirstScreen() {
    var html = document.createElement("section");
    html.classList.add("section-container");
    html.classList.add("section-promo");
    html.innerHTML = `
    <div class="G-container">
        <div class="bg-gradient"></div>
        <div class="grid-container">
            <div class="about-me">
                <h1 class="title-heading">Основатель <br>Аконсалт-Финанс</h1>
                <h2 class="my-name">Андраник Саркисович</h2>
                <div class="desc-wrapper">
                    <p class="desc">Аккредитованный финансовый консультант.</p>
                    <p class="desc">Сертифицированный венчурный аналитик</p>
                    <p class="desc">Сертифицированный консультант по коммерциализации интеллектуальной собственности</p>
                </div>
<!--                <button type="button" class="btn btn-primary js-open-feedback">Записаться на консультацию</button>-->
            </div>
            <div class="col-photo">
                <img src="/assets/img/my-photo-3.png" alt="me">
            </div>
        </div>
    </div>`;
    document.querySelector("#app").append(html);

    // html.querySelector(".js-open-feedback").addEventListener("click", () => openModalFeedback());
}