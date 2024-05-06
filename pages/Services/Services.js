import FormFields from "../../plugins/form-fields/form-fields.js";

export default function Services() {
    var formFields = new FormFields();

    const arrayServices = [
        {
            title: "Разработка индивидуального финансового плана",
            desc: "Консультант поможет вам разработать стратегию управления вашими финансами, исходя из ваших конкретных целей и потребностей.",
        },
        {
            title: "Анализ текущей финансовой ситуации",
            desc: "Консультант проведет детальный анализ вашей текущей финансовой ситуации, чтобы определить возможности для улучшения и оптимизации ваших финансов.",
        },
        {
            title: "Оценка рисков",
            desc: "Консультант поможет вам оценить риски, связанные с вашими  финансовыми решениями, и предложит стратегии для минимизации этих рисков.",
        },
        {
            title: "Планирование пенсии",
            desc: "Консультант поможет вам разработать план для обеспечения финансовой безопасности в период пенсионной жизни.",
        },
        {
            title: "Консультации по вопросам имущественного страхования",
            desc: "Консультант поможет вам выбрать наиболее подходящие варианты страхования для защиты вашего имущества.",
        },
        {
            title: "Планирование наследства",
            desc: "Консультант поможет вам разработать план наследования, чтобы гарантировать передачу вашего имущества согласно ваших пожеланий и минимизировать налоги.",
        },
        {
            title: "Финансовое планирование для предпринимателей",
            desc: "Консультант может помочь владельцам бизнесов разработать финансовые стратегии и планы для успешного развития своего предприятия.",
        },
        {
            title: "Консультации по управлению рисками",
            desc: "онсультант поможет вам разработать стратегии для управления рисками на финансовых рынках и защиты вашего капитала.",
        },
        {
            title: "Консультации по пенсионному обеспечению",
            desc: "Консультант поможет вам разобраться в пенсионной системе, подобрать наиболее выгодные варианты пенсионного обеспечения и определить сумму, необходимую для достижения желаемого уровня жизни после выхода на пенсию.",
        },
        {
            title: "Консультации по международным финансам",
            desc: "Консультант поможет вам освоить международные финансовые рынки, оценить риски.",
        },
        {
            title: "Консультации по управлению ликвидностью",
            desc: "Консультант поможет вам разработать стратегии для эффективного управления ликвидностью вашего бизнеса или личных финансов.",
        },
        {
            title: "Финансовый аудит",
            desc: "Консультант может провести аудит вашей финансовой деятельности, чтобы оценить ее эффективность и найти способы ее улучшения.",
        },
        {
            title: "Управление долгами",
            desc: "Консультант поможет вам разработать стратегию по управлению вашими долгами, включая долгосрочные и краткосрочные кредиты, чтобы минимизировать повышенные затраты на проценты и эффективно управлять вашими обязательствами.",
        },
        {
            title: "Планирование образовательных расходов",
            desc: "Консультант поможет вам разработать план для финансирования образования ваших детей или себя, включая выбор наиболее подходящих средств накопления и инвестирования.",
        },
        {
            title: "Финансовая консультация при покупке или продаже недвижимости.",
            desc: "Консультант поможет вам принять обоснованные решения, связанные с покупкой или продажей недвижимости, и предоставит советы по финансированию, оценке и минимизации налоговых обязательств.",
        },
        {
            title: "Планирование личных финансов для молодежи",
            desc: "Консультант может помочь молодым людям разработать план личных финансов, включая управление долгами и накопления на будущие цели.",
        },
        {
            title: "Финансовая поддержка бизнесов",
            desc: "Консультант может предоставить советы и поддержку предпринимателям в области финансов, включая управление операционным капиталом, привлечение финансирования и планирование роста.",
        },
        {
            title: "Финансовое планирование для свадьбы",
            desc: "Консультант поможет вам разработать бюджет для свадьбы и предложит стратегии для эффективного управления расходами и достижения ваших свадебных целей.",
        },
        {
            title: "Консультации по личным финансовым вопросам",
            desc: "Консультант будет готов ответить на любые вопросы, связанные с личными финансами, и предоставит вам профессиональные советы и рекомендации в соответствии с вашими потребностями и целями.",
        },
        {
            title: "",
            desc: "",
        },
        {
            title: "",
            desc: "",
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

    // paymentService();

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
                <span class="cost">40 000 ₽</span>
            </div>
        </div>`;
        html.querySelector(".list-services").append(serviceHTML);

        html.querySelectorAll(".js-open-feedback").forEach(function (btn) {
            btn.addEventListener("click", openModalFeedback);
        })
    }
}