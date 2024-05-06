import FAQ from "/components/FAQ/FAQ.js";

export default function TheyCooperateWithMe() {
    var html = document.createElement("section");
    html.classList.add("section-container");
    html.classList.add("they-cooperate-with-me");
    html.innerHTML = `
    <div class="G-container">
<!--        <div class="header">-->
<!--            <h3 class="title-heading">Со мной сотрудничают</h3>-->
<!--            <span class="desc">По Указанию Банка России от 29.04.2015 N 3629-У (ред. от 17.09.2021) "О признании лиц квалифицированными инвесторами и порядке ведения реестра лиц, признанных квалифицированными инвесторами" (Зарегистрировано в Минюсте России 28.05.2015 N 37415) состою в реестрах квалифицированных инвесторов </span>-->
<!--        </div>-->
        <div class="list-banks">
<!--            <div class="item">-->
<!--                <img src="/assets/img/banks/tinkoff-black.svg" alt="tinkoff">-->
<!--            </div>-->
<!--            <div class="item">-->
<!--                <img src="/assets/img/banks/sber.png" alt="sber">-->
<!--            </div>-->
<!--            <div class="item">-->
<!--                <img src="/assets/img/banks/bks.svg" alt="bks">-->
<!--            </div>-->
<!--            <div class="item">-->
<!--                <img src="/assets/img/banks/vtb.svg" alt="vtb">-->
<!--            </div>-->
        </div>
        <div class="faq-wrapper"></div>
    </div>`;
    document.querySelector("#app").append(html);

    html.querySelector(".faq-wrapper").append(FAQ());
}