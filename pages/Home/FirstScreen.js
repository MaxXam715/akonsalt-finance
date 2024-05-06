export default function FirstScreen() {
    var html = document.createElement('section');
    html.classList.add('section-promo');
    html.innerHTML = `
    <div class="G-container">
        <div class="bg-gradient"></div>
        <div class="row-container">
            <div class="about-me">
                <h1 class="title-heading">Финансовые решения <br>на высшем уровне</h1>
                <p class="desc">Финансовый консультант с уникальными навыками анализа и прогнозирования рыночных тенденций для достижения высокой финансовой эффективности.</p>
            </div>
            <div class="row-action">
                <button type="button" class="btn btn-primary js-open-feedback">Записаться на консультацию</button>
                <a href="/services" class="btn btn-outline btn-shadow">Заказать услугу</a>
            </div>
        </div>
        
<!--        <div class="official-partner">-->
<!--            <span class="title">Официальный партнёр</span>-->
<!--            <img src="/assets/img/tinkoff.svg" alt="tinkoff">-->
<!--        </div>-->
    </div>
    <div class="video-container">
        <video controls="false" autoplay muted loop>
            <source src="/assets/video/FirstScreenVideo.mp4" type="video/mp4">
        </video>
    </div>`;
    document.querySelector("#app").append(html);

    html.querySelector(".js-open-feedback").addEventListener("click", openModalFeedback);
}