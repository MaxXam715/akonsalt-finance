import FAQ from "/components/FAQ/FAQ.js";

export default function TheyCooperateWithMe() {
    var html = document.createElement("section");
    html.classList.add("section-container");
    html.classList.add("they-cooperate-with-me");
    html.innerHTML = `
    <div class="G-container">
        <div class="header">
            <h3 class="title-heading">Со мной сотрудничают</h3>
            <span class="desc">Официально состою в реестре квалифицированного инвестора </span>
        </div>
        <div class="list-banks">
            <div class="item">
                <img src="/assets/img/banks/sber.png" alt="sber">
            </div>
            <div class="item">
                <img src="/assets/img/banks/bks.svg" alt="bks">
            </div>
            <div class="item">
                <img src="/assets/img/banks/vtb.svg" alt="vtb">
            </div>
        </div>
        <div class="faq-wrapper"></div>
    </div>`;
    document.querySelector("#app").append(html);

    html.querySelector(".faq-wrapper").append(FAQ());
}