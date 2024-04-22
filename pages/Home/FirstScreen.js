export default function FirstScreen() {
    var html = document.createElement('section');
    html.classList.add('section-promo');
    html.innerHTML = `
    <div class="G-container">
        <div class="bg-gradient"></div>
        <div class="row-container">
            <div class="about-me">
                <h1 class="title-heading">Превратите свои мечты в <br>реальность с Invest Globals</h1>
                <p class="desc">Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan.</p>
            </div>
            <div class="row-action">
                <button type="button" class="btn btn-primary">Записаться на консультацию</button>
                <button type="button" class="btn btn-outline btn-shadow">Заказать услугу</button>
            </div>
        </div>
    </div>
    <div class="video-container">
        <video controls="false" autoplay muted loop>
            <source src="/assets/video/FirstScreenVideo.mp4" type="video/mp4">
        </video>
    </div>`;
    document.querySelector("#app").append(html);
}