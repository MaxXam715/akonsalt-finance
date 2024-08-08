import Modal from "/plugins/modal/modal.js";
import FormFields from "/plugins/form-fields/form-fields.js";
import sendTelegram from "/js/sendTelegram.js";
import SuccessSend from "/components/modal/SuccessSend/SuccessSend.js";
import sendByEmail from "/js/sendByEmail.js";

export default function ModalFeedback(data) {
    var formFields = new FormFields();
    const isService = data.service || "";

    var modalHTML = document.createElement("div");
    modalHTML.classList.add("modal-wrapper");
    modalHTML.innerHTML = `
    <div class="header">
        <span class="title">Записаться на консультацию</span>
        <p class="desc">${isService}</p>    
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

        if (getValuesForm.error) {
            alert("Ошибка при отправке формы")
            return false;
        }

        modal.closeModal();

        SuccessSend();
        sendTelegram(getValuesForm, isService);
        sendByEmail(getValuesForm, isService);
    });
}