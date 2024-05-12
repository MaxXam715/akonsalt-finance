export default function DocumentsAndCertificates() {
    const content = {
        "tabs": [
            {title: "Дипломы", key: "diplomas"},
            {title: "Удостоверения", key: "certificates"},
            {title: "Свидетельства", key: "evidence"}
        ],
        "content": {
            "diplomas": [
                {
                    title: "Диплом МГТУ им. Н.Э. Баумана",
                    img: "/assets/img/DocumentsAndCertificates/dip-1.png",
                    link: "/assets/documents/Диплом МГТУ им. Н.Э. Баумана.pdf"
                },
                {
                    title: "Диплом МГУТиУ им. К.Г. Разумовского",
                    img: "/assets/img/DocumentsAndCertificates/dip-2.png",
                    link: "/assets/documents/Диплом_МГУТиУ_им_К_Г_Разумовского.pdf"
                },
            ],
            "certificates": [
                {
                    title: "Удостоверение МГТУ им. Н.Э. Баумана",
                    img: "/assets/img/DocumentsAndCertificates/cert-1.jpg",
                    link: "/assets/documents/Удостоверение_МГТУ_им_Н_Э_Баумана.pdf"
                },
                {
                    title: "Удостоверение РАНХиГС Управление Государственными и Муниципальными",
                    img: "/assets/img/DocumentsAndCertificates/cert-2.jpg",
                    link: "/assets/documents/Удостоверение_РАНХиГС_Управление_Государственными_и_Муниципальными.pdf"
                },
                {
                    title: "Удостоверение Финансового Консультанта",
                    img: "/assets/img/DocumentsAndCertificates/cert-3.jpg",
                    link: "/assets/documents/Удостоверение_Финансового_Консультанта.pdf"
                }
            ],
            "evidence": [
                {
                    title: "Свидетельство о квалификации Финансовый Консультант",
                    img: "/assets/img/DocumentsAndCertificates/evidence-1.jpg",
                    link: "/assets/documents/Свидетельство_о_квалификации_Финансовый_Консультант.pdf"
                }
            ]
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
            cardHTML.setAttribute("href", content.link);
            cardHTML.setAttribute("target", "_blank");
            cardHTML.classList.add("item");
            cardHTML.innerHTML = `
            <div class="preview-photo">
                <img src="${content.img}" class="image" />    
            </div>
            <div class="footer">
                <span class="title">Диплом о профессиональной переподготовке</span>
            </div>`;
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