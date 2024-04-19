<script setup>
import FAQ from "../../components/FAQ.vue";

const listAdvantages = [
  {
    title: "Актуальность",
    desc: "Предоставляю актуальные и своевременные финансовые рекомендации и аналитику",
    icon: "relevance"
  },
  {
    title: "Независимость",
    desc: "Обеспечиваю независимость в своих советах, не имея финансовых интересов в конкретных продуктах или услугах",
    icon: "users"
  },
  {
    title: "Надежность",
    desc: "Обеспечиваю независимость в своих советах, не имея финансовых интересов в конкретных продуктах или услугах",
    icon: "relevance"
  }
];
</script>

<template>
  <section class="section-container my-advantages">
    <div class="G-container">
      <h2 class="title-heading heading-gradient-2">Преимущества<br>работы со мной</h2>
      <div class="list-advantages">
        <div class="item" v-for="adv in listAdvantages">
          <i class="icon" :class="adv.icon"></i>
          <span class="title">{{ adv.title }}</span>
          <span class="desc">{{ adv.desc }}</span>
        </div>
      </div>
      <div class="faq-wrapp er">
        <FAQ/>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.my-advantages {
  background-color: #fff;
  margin-top: -60px;
  padding-top: 160px;

  .list-advantages {
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 70px;
    margin-top: 80px;
    margin-bottom: 100px;

    .item {
      width: 100%;
      padding-top: 24px;
      border-top: 1px solid #D2D2D2;

      .icon {
        font-size: 28px;
      }

      .title {
        color: var(--Black);
        font-size: 36px;
        font-weight: 700;
        line-height: 110%;
        margin-top: 17px;
        margin-bottom: 20px;
      }

      .desc {
        max-width: 430px;
        color: var(--Gray-1);
        font-size: 18px;
        font-weight: 500;
        line-height: 140%;
      }

      @media (max-width: 767px) {
        .title {
          font-size: 28px;
        }

        .desc {
          font-size: 16px;
        }
      }
    }
  }

  .faq-wrapper {
    padding-top: 50px;
  }
}
</style>