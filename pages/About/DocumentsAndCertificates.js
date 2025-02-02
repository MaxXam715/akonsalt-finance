export default function DocumentsAndCertificates() {
    const content = {
        "tabs": [
            {title: "Дипломы", key: "diplomas"},
            {title: "Удостоверения", key: "identity"},
            {title: "Свидетельства", key: "evidence"},
            {title: "Сертификаты", key: "certificates"},
            {title: "Благодарности", key: "gratitude"}
        ],
        "content": {
            "diplomas": [
                {
                    title: "Диплом МГУТиУ им. К.Г. Разумовского",
                    img: "/assets/img/documents/diplomas/diploma-5.jpg?v=2",
                    link: "/assets/documents/diplomas/diploma-5.pdf"
                },
                {
                    title: "Диплом МГУТиУ им. К.Г. Разумовского",
                    img: "/assets/img/documents/diplomas/diploma-6.jpg?v=2",
                    link: "/assets/documents/diplomas/diploma-6.pdf"
                },
                {
                    title: "Диплом МГУТиУ им. К.Г. Разумовского",
                    img: "/assets/img/documents/diplomas/diploma-7.jpg?v=2",
                    link: "/assets/documents/diplomas/diploma-7.pdf"
                },
                {
                    title: "Диплом МГУТиУ им. К.Г. Разумовского",
                    img: "/assets/img/documents/diplomas/diploma-8.jpg?v=2",
                    link: "/assets/documents/diplomas/diploma-8.pdf"
                },
                {
                    title: "Диплом МГУТиУ им. К.Г. Разумовского",
                    img: "/assets/img/documents/diplomas/diploma-9.jpg?v=2",
                    link: "/assets/documents/diplomas/diploma-9.pdf"
                },
                {
                    title: "Диплом МГУТиУ им. К.Г. Разумовского",
                    img: "/assets/img/documents/diplomas/diploma-10.jpg?v=2",
                    link: "/assets/documents/diplomas/diploma-11.pdf"
                },
                {
                    title: "Диплом МГУТиУ им. К.Г. Разумовского",
                    img: "/assets/img/documents/diplomas/diploma-11.jpg?v=2",
                    link: "/assets/documents/diplomas/diploma-11.pdf"
                },
            ],
            "identity": [
                {
                    title: "Удостоверение МГТУ им. Н.Э. Баумана",
                    img: "/assets/img/documents/identity/identity-1.jpg?v=2",
                    link: "/assets/documents/identity/identity-1.pdf"
                },
                {
                    title: "Удостоверение Финансового Консультанта",
                    img: "/assets/img/documents/identity/identity-3.jpg?v=2",
                    link: "/assets/documents/identity/identity-3.pdf"
                },
                {
                    title: "Удостоверение Финансового Консультанта",
                    img: "/assets/img/documents/identity/identity-4.jpg?v=2",
                    link: "/assets/documents/identity/identity-4.pdf"
                },
                {
                    title: "Удостоверение Финансового Консультанта",
                    img: "/assets/img/documents/identity/identity-5.jpg?v=2",
                    link: "/assets/documents/identity/identity-5.pdf"
                },
                {
                    title: "Удостоверение РАНХиГС Управление Государственными и Муниципальными",
                    img: "/assets/img/documents/identity/identity-2.jpg?v=2",
                    link: "/assets/documents/identity/identity-2.pdf"
                },
            ],
            "evidence": [
                {
                    title: "Свидетельство о квалификации Финансовый Консультант",
                    img: "/assets/img/documents/evidence/evidence-1.jpg?v=2",
                    link: "/assets/documents/evidence/evidence-1.pdf?v=2"
                },
                {
                    title: "Свидетельство о квалификации Финансовый Консультант",
                    img: "/assets/img/documents/evidence/evidence-2.jpg?v=2",
                    link: "/assets/documents/evidence/evidence-2.pdf?v=2"
                },
            ],
            "certificates": [
                {
                    title: "Сертификат",
                    img: "/assets/img/documents/certificates/certificate-1.jpg?v=2",
                    link: "/assets/documents/certificates/certificate-1.pdf"
                },
                {
                    title: "Сертификат",
                    img: "/assets/img/documents/certificates/certificate-2.jpg?v=2",
                    link: "/assets/documents/certificates/certificate-2.pdf"
                },
                {
                    title: "Сертификат",
                    img: "/assets/img/documents/certificates/certificate-4.jpg?v=2",
                    link: "/assets/documents/certificates/certificate-4.pdf"
                },
                {
                    title: "Сертификат",
                    img: "/assets/img/documents/certificates/certificate-6.jpg?v=2",
                    link: "/assets/documents/certificates/certificate-6.pdf"
                },
                {
                    title: "Сертификат",
                    img: "/assets/img/documents/certificates/certificate-7.jpg?v=2",
                    link: "/assets/documents/certificates/certificate-7.pdf"
                },
                {
                    title: "Сертификат",
                    img: "/assets/img/documents/certificates/certificate-3.jpg?v=2",
                    link: "/assets/documents/certificates/certificate-3.pdf"
                },
                {
                    title: "Сертификат",
                    img: "/assets/img/documents/certificates/certificate-5.jpg?v=2",
                    link: "/assets/documents/certificates/certificate-5.pdf"
                },
            ],
            "gratitude": [
                {
                    title: "Свидетельство о квалификации Финансовый Консультант",
                    img: "/assets/img/documents/gratitude/gratitude-1.jpg?v=2",
                    link: "/assets/documents/gratitude/gratitude-1.pdf?v=2"
                }
            ],
        }
    };

    var html = document.createElement("section");
    html.classList.add("section-container");
    html.classList.add("documents-and-certificates");
    var htmlInner = `
    <div class="G-container">
        <h3 class="title-heading heading-gradient">Документы и свидетельства</h3>
        <div class="nav-container">`;
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
    outputCard("diplomas");

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

            var cardHTML = document.createElement("a");
            cardHTML.setAttribute("href", content.img);
            cardHTML.setAttribute("target", "_blank");
            cardHTML.classList.add("item");
            cardHTML.innerHTML = `
            <div class="preview-photo">
                <img src="${content.img}?v=6" class="image" />    
            </div>
<!--            <div class="footer">-->
<!--                <span class="title">Диплом о профессиональной переподготовке</span>-->
<!--            </div>-->
`;
            outputTag.append(cardHTML);

            // cardHTML.addEventListener("click", function () {
            //     var arrayPhoto = [];
            //
            //     for (var i in content.img) {
            //         arrayPhoto.push({
            //             src: content.img[i],
            //             type: "image",
            //         });
            //     }
            //
            //     const fancybox = Fancybox.show(arrayPhoto);
            // });
        }
    }
}