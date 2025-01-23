export default function MyAchievements() {
    var html = document.createElement("section");
    html.classList.add("section-container");
    html.classList.add("my-achievements");
    html.innerHTML = `
    <div class="G-container">
        <div class="header">
            <h2 class="title-heading heading-gradient-2">Доска успехов и достижений</h2>
        </div>
        <div class="list-achievements">
            <span class="item">Включен в сторонники партии Единая Россия</span>
            <span class="item">Включен в Московский иновационный кластер</span>
            <span class="item">Включен в Торгово-Промышленную Палату РФ</span>
            <span class="item">Профессиональный участник рынка ценных бумаг</span>
            <span class="item">Включен в Московскую Торгово-Промышленную Палату</span>
            <span class="item">Включен в Экспертный Совет по инновационному развитию</span>
            <span class="item">Включен в Федеральный реестр независимой оценки квалификации</span>
            <span class="item">Эксперт Федеральной инновационной площадки Минобрнауки России</span>
            <span class="item">Эксперт XXI Всероссийского конкурса молодежных авторских проектов</span>
            <span class="item">Включен в Экспертный Совет по защите конкуренции на рынке финансовых услуг</span>
        </div>
    </div>`;
    document.querySelector("#app").append(html);
}