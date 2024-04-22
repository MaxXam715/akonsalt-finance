export default function FAQ() {
    createCSSLink("/components/FAQ/FAQ.css");

    const arrayFAQ = [
        {
            question: "Что делает инвестиционный советник?",
            answer: "Предоставляю актуальные и своевременные финансовые рекомендации и аналитику",
        },
        {
            question: "Что делает финансовый консультант?",
            answer: "Предоставляю актуальные и своевременные финансовые рекомендации и аналитику",
        },
        {
            question: "Сколько денег я смогу получать пассивно?",
            answer: "Предоставляю актуальные и своевременные финансовые рекомендации и аналитику",
        },
        {
            question: "Сколько денег нужно, чтобы начать инвестировать?",
            answer: "Предоставляю актуальные и своевременные финансовые рекомендации и аналитику",
        },
        {
            question: "Где торговать зарубежными акциями?",
            answer: "Предоставляю актуальные и своевременные финансовые рекомендации и аналитику",
        }
    ];

    var html = document.createElement("div");
    html.classList.add("faq-container");
    html.innerHTML = `
    <h3 class="title-block">Часто задаваемые вопросы</h3>
    <span class="desc-block">Постарался ответить на все вопросы, которые чаще всего задают</span>
    <div class="grid-container">
        <div class="col-letter">
            <span class="question">?</span>
        </div>
        <div class="col-questions"></div>
    </div>`;

    for (var i in arrayFAQ) {
        itemQuestion(arrayFAQ[i]);
    }

    var allQuestion = html.querySelectorAll(".col-questions .item");

    allQuestion.forEach( function (question) {
        question.addEventListener("click", function () {
            this.classList.toggle("show");
        });
    });

    function itemQuestion(faq) {
        var questionHTML = document.createElement("div");
        questionHTML.classList.add("item");
        questionHTML.innerHTML = `
        <span class="title">${faq.question}</span>
        <div class="answer-container">
            <span class="desc">${faq.answer}</span>
        </div>`;
        html.querySelector(".col-questions").append(questionHTML);
    }

    return html;
}