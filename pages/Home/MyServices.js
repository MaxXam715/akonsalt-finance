import FeedbackConsultation from "./FeedbackConsultation.js";

export default function MyServices() {
    var html = document.createElement("section");
    html.classList.add("section-container");
    html.classList.add("my-services");
    html.innerHTML = `
    <div class="G-container">
        <div class="header">
            <h3 class="title-heading">Какие услуги доступны?</h3>
            <span class="desc">Комплекс консультационных и информационных услуг. Также и интеграции финансовых решений стартапов в бизнес , более того  профессиональная помощь на всех этапах сотрудничества</span>
        </div>
        <div class="list-my-services"></div>
        <div class="action-block">
            <a href="/services" class="btn btn-primary">Смотреть все услуги</a>
        </div>
    </div>`;
    document.querySelector("#app").append(html);


    html.querySelector(".G-container").append(FeedbackConsultation());

    const myServices = [
        {
            id: 1,
            title: "Разработка индивидуального финансового плана",
            desc: "Советник помогает клиентам определить финансовые цели, составить бюджет и разработать стратегию достижения поставленных целей.",
            img: "/assets/img/services/service-1.jpg"
        },
        {
            id: 2,
            title: "Финансовое планирование",
            desc: "Более конкретная услуга, которая включает в себя анализ рынка, подбор финансовых инструментов и разработку лучших стратегий в соответствии с финансовыми целями клиента.",
            img: "/assets/img/services/service-2.jpg"
        },
        {
            id: 3,
            title: "Финансовое консультирование предпринимателей",
            desc: "Советник помогает предпринимателям развивать свои бизнесы, оценивает финансовые показатели, разрабатывает стратегии финансового управления и помогает в принятии стратегических решений",
            img: "/assets/img/services/service-3.jpg"
        },
        {
            id: 4,
            title: "Управление рисками",
            desc: "Советник помогает клиентам определить и оценить риски, связанные с их финансовыми решениями, и разрабатывает стратегии управления рисками",
            img: "/assets/img/services/service-4.jpg"
        },
        {
            id: 5,
            title: "Страхование",
            desc: "Советник помогает клиентам определить необходимость страхования и подобрать подходящие страховые продукты, включая автомобильное страхование, медицинское страхование и др.",
            img: "/assets/img/services/service-5.jpg"
        },
        {
            id: 6,
            title: "Кредитное консультирование",
            desc: "Советник помогает клиентам разобраться в предложениях банков и выбрать наиболее подходящий кредитный продукт.",
            img: "/assets/img/services/service-6.jpg"
        }
    ];

    for (var i in myServices) {
        itemService(myServices[i]);
    }

    function itemService(service) {
        var serviceHTML = document.createElement("div");
        serviceHTML.classList.add("item");
        serviceHTML.innerHTML = `
        <div class="img-preview">
            <img src="${service.img}" class="photo" />
        </div>
        <div class="text-preview">
            <h3 class="title">${service.title}</h3>
            <div class="desc-preview">
                <p class="desc">${service.desc}</p>
                <button type="button" class="btn btn-primary js-open-feedback">Заказать услугу</button>
            </div>
        </div>`;
        html.querySelector(".list-my-services").append(serviceHTML);

        serviceHTML.querySelector(".js-open-feedback").addEventListener("click", () => openModalFeedback({service: service.title}));
    }
}