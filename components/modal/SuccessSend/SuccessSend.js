import Modal from "/plugins/modal/modal.js";

export default function SuccessSend() {
    var modalHTML = document.createElement("div");
    modalHTML.classList.add("modal-wrapper");
    modalHTML.innerHTML = `
    <div class="header">
        <span class="title">Заявка отправлена</span>
        <p class="desc">Спасибо! Ваша заявка принята, наш менеджер скоро свяжется с вами</p>   
        <img src="/assets/img/check-send.png" class="check-send" /> 
    </div>`;

    var modal = new Modal({
        title: "",
        classModal: 'modal-success-send',
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
}