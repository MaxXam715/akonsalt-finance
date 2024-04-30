export default function WhoWillBenefitServices() {
    const content = {
        "tabs": [
            {title: "Условия участия", key: "terms-participation"},
            {title: "Стадия развития", key: "stage-dev"},
            {title: "Направленность проекта", key: "focus-project"}
        ],
        "content": {
            "terms-participation": [
                {title: "Физическим лицам", img: "/assets/img/WhoWillBenefitServices/terms-participation/image-1.png"},
                {title: "Юридическим лицам", img: "/assets/img/WhoWillBenefitServices/terms-participation/image-2.png"},
                {title: "Start Up (новые проекты)", img: "/assets/img/WhoWillBenefitServices/terms-participation/image-3.png"}
            ],
            "stage-dev": [
                {title: "Есть команда из двух и более человек 2", img: "/assets/img/WhoWillBenefitServices/terms-participation/image-3.png"},
                {title: "Проект соответствует приоритетным направлениям 2", img: "/assets/img/WhoWillBenefitServices/terms-participation/image-2.png"},
                {title: "Российское юридическое лицо 2", img: "/assets/img/WhoWillBenefitServices/terms-participation/image-1.png"}
            ],
            "focus-project": [
                {title: "Есть команда из двух и более человек 3", img: "/assets/img/WhoWillBenefitServices/terms-participation/image-3.png"},
                {title: "Российское юридическое лицо 3", img: "/assets/img/WhoWillBenefitServices/terms-participation/image-1.png"},
                {title: "Проект соответствует приоритетным направлениям 3", img: "/assets/img/WhoWillBenefitServices/terms-participation/image-2.png"}
            ]
        }
    };

    var html = document.createElement("section");
    html.classList.add("section-container");
    html.classList.add("who-will-benefit-services");
    var htmlInner = `
    <div class="G-container">
        <h3 class="title-heading heading-gradient">Кому подойдут услуги</h3>
        <div class="nav-container" style="display: none">`;
            for (var i in content.tabs) {
                var tab = content.tabs[i];
                htmlInner += `<button type="button" class="btn btn-tab" data-tab="${tab.key}">${tab.title}</button>`;
            }
            htmlInner += `
        </div>
        <div class="switch-content">
            <div class="grid-container"></div>
        </div>
    </div>`;
    html.innerHTML = htmlInner;
    document.querySelector("#app").append(html);

    // выводим таб по-умолчанию
    outputCard("terms-participation");

    // по клику на таб отображаем контент
    const allBtn = html.querySelectorAll(".btn-tab");
    allBtn.forEach(function (btn) {
        btn.addEventListener("click", function () {
            // Убираем активный класс у всех кнопок
            allBtn.forEach(function (btn) {
                btn.classList.remove("active");
            });

            let nameTab = this.getAttribute("data-tab");
            outputCard(nameTab);
        });
    });

    function outputCard(nameTab) {
        const contents = content.content[nameTab];
        const outputTag = html.querySelector(".switch-content .grid-container");
        html.querySelector(".nav-container .btn-tab[data-tab='"+nameTab+"']").classList.add("active");
        outputTag.innerHTML = "";

        for (var i in contents) {
            const content = contents[i];

            var cardHTML = document.createElement("div");
            cardHTML.classList.add("item");
            cardHTML.innerHTML = `
            <span class="title">${content.title}</span>
            <img src="${content.img}" class="image" />`;
            outputTag.append(cardHTML);
        }
    }
}