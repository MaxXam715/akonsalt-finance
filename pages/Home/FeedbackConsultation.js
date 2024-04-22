export default function FeedbackConsultation() {
    var html = document.createElement("div");
    html.classList.add("feedback-consultation");
    html.innerHTML = `
    <div class="content">
        <img src="/assets/img/my-photo-1.jpg" alt="" class="my-photo">
        <h3 class="title-form">Нужна профессиональная консультация?</h3>
        <span class="desc-form">Заполните форму, наши эксперты свяжутся с вами в течение дня и ответят на все возникшие вопросы</span>
        <form>
            <InputField type="text" placeholder="Ваше имя" />
            <InputField type="text" placeholder="Телефон" />
            <button type="button" class="btn btn-outline btn-shadow">Отправить</button>
        </form>
    </div>`;

    return html;
}