import FormFields from "/plugins/form-fields/form-fields.js";

export default function FeedbackConsultation() {
    var formFields = new FormFields();

    var html = document.createElement("div");
    html.classList.add("feedback-consultation");
    html.innerHTML = `
    <div class="content">
        <img src="/assets/img/my-photo-1.jpg" alt="" class="my-photo">
        <h3 class="title-form">Нужна профессиональная консультация?</h3>
<!--        <span class="desc-form">Заполните форму, наши эксперты свяжутся с вами в течение дня и ответят на все возникшие вопросы</span>-->
        <form>
            <button type="button" class="btn btn-outline btn-shadow btn-send-request">Отправить</button>
        </form>
        <div class="personal-data">Нажимая на кнопку отправить, вы соглашаетесь с <a href="/privacy-policy" target="_blank">политикой конфиденциальности</a> и подтверждаете , что вы владелец указанного номера телефона</div>
    </div>`;

    const form = html.querySelector("form");

    form.prepend(
        formFields.inputText({label: "", name: "name", placeholder: "Имя", validate: "true"}),
        formFields.inputText({label: "", name: "phone", placeholder: "Телефон", mask: "phone", validate: "true"})
    )

    html.querySelector(".btn-send-request").addEventListener("click", function () {
        var getValuesForm = formFields.getValuesForm(form);

        if (getValuesForm.error) return false;

        console.log("getValuesForm", getValuesForm)
    });

    return html;
}