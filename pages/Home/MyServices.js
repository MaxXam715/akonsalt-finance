import FeedbackConsultation from "./FeedbackConsultation.js";

export default function MyServices() {
    var html = document.createElement("section");
    html.classList.add("section-container");
    html.classList.add("my-services");
    html.innerHTML = `
    <div class="G-container">
        <div class="header">
            <h3 class="title-heading">Какие услуги я осуществляю?</h3>
            <span class="desc">Полный комплекс услуг любой сложности: <br> от консалтинга и обучения, до интеграций решений стартапов в бизнес, а также оказываем профессиональную помощь на всех этапах сотрудничества</span>
        </div>
        <div class="list-my-services"></div>
        <div class="action-block">
            <router-link to="/my-services" class="btn btn-primary">Смотреть все услуги</router-link>
        </div>
    </div>`;
    document.querySelector("#app").append(html);


    html.querySelector(".G-container").append(FeedbackConsultation());

    const myServices = [
        {
            id: 1,
            title: "Разработка индивидуального финансового плана",
            desc: "Консультант помогает клиентам определить финансовые цели, составить бюджет и разработать стратегию достижения поставленных целей",
            img: "/assets/img/services/service-1.jpg"
        },
        {
            id: 2,
            title: "Финансовое планирование",
            desc: "Консультант 2 помогает 2 клиентам 2 определить финансовые цели, составить бюджет и разработать стратегию достижения поставленных целей",
            img: "/assets/img/services/service-2.jpg"
        },
        {
            id: 3,
            title: "Финансовое консультирование предпринимателей",
            desc: "Консультант 3 помогает 3 клиентам 3 определить финансовые цели, составить бюджет и разработать стратегию достижения поставленных целей",
            img: "/assets/img/services/service-3.jpg"
        },
        {
            id: 4,
            title: "Управление рисками",
            desc: "Консультант 4 помогает 4 клиентам 4 определить финансовые цели, составить бюджет и разработать стратегию достижения поставленных целей",
            img: "/assets/img/services/service-4.jpg"
        },
        {
            id: 5,
            title: "Страхование",
            desc: "Консультант 5 помогает 5 клиентам 5 определить финансовые цели, составить бюджет и разработать стратегию достижения поставленных целей",
            img: "/assets/img/services/service-5.jpg"
        },
        {
            id: 6,
            title: "Кредитное консультирование",
            desc: "Консультант 6 помогает 6 клиентам 6 определить финансовые цели, составить бюджет и разработать стратегию достижения поставленных целей",
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
                <button type="button" class="btn btn-primary">Заказать услугу</button>
            </div>
        </div>`;
        html.querySelector(".list-my-services").append(serviceHTML);
    }
}