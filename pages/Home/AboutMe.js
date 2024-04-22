export default function AboutMe() {
    var html = document.createElement("section");
    html.classList.add("section-container");
    html.classList.add("about-me");
    html.innerHTML = `
    <div class="G-container">
        <div class="row-container">
            <div class="about-text">
                <h3 class="title-heading">Меня зовут Андраник Саркисович, я независимый финансовый советник</h3>
                <div class="my-skills">
                    <div class="item">
                        <span class="title">Профессионал</span>
                        <span class="desc">Профессиональный участник по финансовому просвещению, состоит в СРО НАСФП</span>
                    </div>
                    <div class="item">
                        <span class="title">Аналитик</span>
                        <span class="desc">Анализирует финансовое положение клиента, включая доходы, расходы, активы и обязательства</span>
                    </div>
                    <div class="item">
                        <span class="title">Консультант</span>
                        <span class="desc">Обучает клиента финансовой грамотности и помогает принимать обоснованные финансовые решения</span>
                    </div>
                </div>
            </div>
            <div class="my-photo">
                <img src="/assets/img/my-photo-1.jpg" class="photo">
            </div>
        </div>
        <div class="action-block">
            <button type="button" class="btn btn-primary">Записаться на консультацию</button>
            <button type="button" class="btn btn-outline btn-shadow">Подробнее обо мне</button>
        </div>
    </div>`;
    document.querySelector("#app").append(html);
}