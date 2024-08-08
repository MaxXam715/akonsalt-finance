import FAQ from "/components/FAQ/FAQ.js";

export default function Advantages() {
    var html = document.createElement("section");
    html.classList.add("section-container");
    html.classList.add("my-advantages");
    html.innerHTML = `
    <div class="G-container">
        <h2 class="title-heading heading-gradient-2">Преимущества<br>работы со мной</h2>
        <div class="list-advantages"></div>
        <div class="faq-wrapper"></div>
    </div>`;
    document.querySelector("#app").append(html);

    html.querySelector(".faq-wrapper").append(FAQ());

    const listAdvantages = [
        {
            title: "Актуальность",
            desc: "Предоставляет актуальную информацию в сфере финансового консалтинга",
            icon: "relevance"
        },
        {
            title: "Независимость",
            desc: "Обеспечивает независимость в консультировании",
            icon: "users"
        },
        {
            title: "Экспертность",
            desc: "Аккредитован - Советом по Профессиональным Квалификациям Финансового Рынка",
            icon: "star"
        }
    ];

    for (var i in listAdvantages) {
        itemAdv(listAdvantages[i]);
    }

    function itemAdv(adv) {
        var advHTML = document.createElement("div");
        advHTML.classList.add("item");
        advHTML.innerHTML = `
        <i class="icon ${adv.icon}"></i>
        <span class="title">${adv.title}</span>
        <span class="desc">${adv.desc}</span>`;
        html.querySelector(".list-advantages").append(advHTML);
    }
}