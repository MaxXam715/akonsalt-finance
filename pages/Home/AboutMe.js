export default function AboutMe() {
    var html = document.createElement("section");
    html.classList.add("section-container");
    html.classList.add("about-me");
    html.innerHTML = `
    <div class="G-container">
        <div class="row-container">
            <div class="about-text">
                <h3 class="title-heading">Аконсалт-Финанс приветствует Вас:</h3>
                <div class="my-skills">
                    <div class="item">
                        <span class="title">Профессионал</span>
                        <span class="desc">Включен в Московский Инновационный Кластер</span>
                    </div>
                    <div class="item">
                        <span class="title">Аналитик</span>
                        <span class="desc">Анализ финансового положения компании/клиента, учитывая доходы расходы, активы, обязательства и риски</span>
                    </div>
                    <div class="item">
                        <span class="title">Разработка</span>
                        <span class="desc">Разработка стратегии развития компании/клиента с учётом скрытых рисков</span>
                    </div>
                </div>
            </div>
            <div class="my-photo">
                <img src="/assets/img/my-photo-1.jpg" class="photo">
            </div>
        </div>
        <div class="action-block">
<!--            <button type="button" class="btn btn-primary js-open-feedback">Записаться на консультацию</button>-->
            <a href="/about" class="btn btn-outline btn-shadow">Подробнее ещё</a>
        </div>
    </div>`;
    document.querySelector("#app").append(html);

    // html.querySelector(".js-open-feedback").addEventListener("click", () => openModalFeedback());
}