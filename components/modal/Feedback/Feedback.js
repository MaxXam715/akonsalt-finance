import Modal from "../../../plugins/modal/modal.js";
import FormFields from "/plugins/form-fields/form-fields.js";
import sendTelegram from "/js/sendTelegram.js";

export default function ModalFeedback() {
    var formFields = new FormFields();

    var modalHTML = document.createElement("div");
    modalHTML.classList.add("modal-wrapper");
    modalHTML.innerHTML = `
    <div class="header">
        <span class="title">Записаться на консультацию</span>
<!--        <p class="desc">Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus</p>    -->
    </div>
    <form>
        <button type="button" class="btn btn-primary btn-send-request">Отправить</button>
        <div class="personal-data">Нажимая на кнопку отправить, вы соглашаетесь с <a href="/privacy-policy" target="_blank">политикой конфиденциальности</a> и подтверждаете , что вы владелец указанного номера телефона</div>
    </form>`;

    const form = modalHTML.querySelector("form");

    form.prepend(
        formFields.inputText({label: "", name: "name", placeholder: "Имя", validate: "true"}),
        formFields.inputText({label: "", name: "phone", placeholder: "Телефон", mask: "phone", validate: "true"})
    )

    var modal = new Modal({
        title: "",
        classModal: 'modal-feedback',
        content: modalHTML,
        mode: 'center',
        width: '500px',
        footerEvents:{
            cancel: {
                active: false
            },
            submit: {
                active: false,
            },
        }
    });


    modalHTML.querySelector(".btn-send-request").addEventListener("click", function () {
        var getValuesForm = formFields.getValuesForm(form);

        if (getValuesForm.error) return false;

        console.log("getValuesForm", getValuesForm)

        sendTelegram(getValuesForm);

    });
}