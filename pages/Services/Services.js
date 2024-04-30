import FormFields from "../../plugins/form-fields/form-fields.js";

export default function Services() {
    var formFields = new FormFields();

    const arrayServices = [
        {
            title: "Разработка индивидуального финансового плана",
            desc: "Предоставляю актуальные и своевременные финансовые рекомендации и аналитику",
        },
        {
            title: "Анализ текущей финансовой ситуации",
            desc: "Предоставляю актуальные и своевременные финансовые рекомендации и аналитику",
        },
        {
            title: "Финансовое консультирование предпринимателей",
            desc: "Предоставляю актуальные и своевременные финансовые рекомендации и аналитику",
        },
        {
            title: "Оценка рисков",
            desc: "Предоставляю актуальные и своевременные финансовые рекомендации и аналитику",
        },
        {
            title: "Планирование пенсии",
            desc: "Предоставляю актуальные и своевременные финансовые рекомендации и аналитику",
        },
        {
            title: "Финансовое образование",
            desc: "Предоставляю актуальные и своевременные финансовые рекомендации и аналитику",
        },
        {
            title: "Консультации по вопросам имущественного страхования",
            desc: "Предоставляю актуальные и своевременные финансовые рекомендации и аналитику",
        },
        {
            title: "Планирование наследства",
            desc: "Предоставляю актуальные и своевременные финансовые рекомендации и аналитику",
        }
    ];

    var html = document.createElement("section");
    html.classList.add("section-container");
    html.classList.add("services");
    html.innerHTML = `
    <div class="header">
        <div class="G-container">
            <h3 class="title-heading">Все услуги</h3>
        </div>
    </div>
    <div class="G-container">
        <div class="grid-container">
            <div class="left-col">
                <div class="list-services"></div>
            </div>
            <div class="right-col"></div>
        </div>
    </div>`;
    document.querySelector("#app").append(html);

    paymentService();

    function paymentService() {
        var paymentHTML = document.createElement("div");
        paymentHTML.classList.add("payment-service");
        paymentHTML.innerHTML = `
        <div class="G-container">
            <div class="header">
                <h3 class="title-heading">Оплата</h3>
                <span class="desc">Оплата производится при оформлении заказа на услугу. Данная страница предназначена для разовых платежей.</span>
            </div>
            <div class="row-container">
                <div class="col-payment">
                    <div class="qr-container">
                        <img src="/assets/img/layout/qr-payment.png" alt="QR">
                    </div>
                    <form>
                        <h4 class="title-form">QR код</h4>
                        <span class="desc-form">Оплата любой суммы</span>
                        <button type="button" class="btn btn-primary">Оплатить</button>
                        <img src="/assets/img/layout/robokassa-logo.svg?v=1.02" class="logo-kassa" alt="">
                    </form>
                </div>
                <div class="col-info">
                    <span class="title">Безопасность платежей</span>
                    <span class="desc">Robokassa — это универсальное решение для приема платежей с функционалом фискализации без покупки или аренды кассы (Робочеки). Информацию о тарифах на обслуживание и других возможностях можно найти</span>
                    <span class="desc">При оплате картой клиент сначала формирует заказ на сайте, затем нажимает на кнопку «Оплатить заказ» или автоматически переводится на страницу оплаты (опционально). Платёжная страница находится на стороне самого Банка, поэтому данные клиента защищены со стороны банковской системы безопасности. При успешной оплате в CRM фиксируется информация о дате и сумме оплаты.</span>
                    <span class="desc">Во вкладке «Детали заказа» можно ознакомиться с перечнем оплачиваемых услуг.</span>
                </div>
            </div>
        </div>`;
        html.append(paymentHTML);

        const form = paymentHTML.querySelector("form");

        form.querySelector(".btn").before(
            formFields.inputText({label: "", name: "summ", placeholder: "Введите сумму...", validate: "true"})
        )
    }

    // выводим все услуги
    for (var i in arrayServices) {
        serviceItemTmpl(arrayServices[i]);
    }

    // по клику на услугу - открываем/закрываем аккордион
    var allServices = html.querySelectorAll(".list-services .service-item");
    allServices.forEach(function (question) {
        question.querySelector(".title").addEventListener("click", function () {

            // Удаляем активный класс у всех элементов, кроме текущего
            allServices.forEach(function (item) {
                if (item !== question) {
                    item.classList.remove("active");
                    var panel = item.querySelector(".desc-container");
                    if (panel.style.maxHeight) {
                        panel.style.maxHeight = null;
                    }
                }
            });

            this.closest(".service-item").classList.toggle("active");
            var panel = this.nextElementSibling;

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });

    function serviceItemTmpl(service) {
        var serviceHTML = document.createElement("div");
        serviceHTML.classList.add("service-item");
        serviceHTML.innerHTML = `
        <span class="title">${service.title}</span>
        <div class="desc-container">
            <span class="text">${service.desc}</span>
            <div class="events-footer">
                <button type="button" class="btn btn-primary js-open-feedback">Заказать услугу</button>
                <button type="button" class="btn btn-outline btn-shadow js-open-feedback">Консультация</button>
            </div>
        </div>`;
        html.querySelector(".list-services").append(serviceHTML);

        html.querySelectorAll(".js-open-feedback").forEach(function (btn) {
            btn.addEventListener("click", openModalFeedback);
        })
    }
}