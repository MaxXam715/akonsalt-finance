export default function WhoWillBenefitServices() {
    var html = document.createElement("section");
    html.classList.add("section-container");
    html.classList.add("who-will-benefit-services");
    html.innerHTML = `
    <div class="G-container">
        <h3 class="title-heading heading-gradient">Кому подойдут услуги</h3>
    
        <div class="nav-container">
            <button type="button" class="btn btn-tab active">Условия участия</button>
            <button type="button" class="btn btn-tab">Условия участия</button>
            <button type="button" class="btn btn-tab">Условия участия</button>
        </div>
        <div class="switch-content">
            <div class="grid-container">
                <div class="item">
                    <span class="title">Российское юридическое лицо</span>
                    <img src="/assets/img/WhoWillBenefitServices/terms-participation/image-1.png" class="image" />
                </div>
                <div class="item">
                    <span class="title">Проект соответствует приоритетным направлениям</span>
                    <img src="/assets/img/WhoWillBenefitServices/terms-participation/image-2.png" class="image" />
                </div>
                <div class="item">
                    <span class="title">Есть команда из двух и более человек</span>
                    <img src="/assets/img/WhoWillBenefitServices/terms-participation/image-3.png" class="image" />
                </div>
            </div>
        </div>
    </div>`;
    document.querySelector("#app").append(html);
}