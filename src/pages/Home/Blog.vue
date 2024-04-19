<script setup>
const arrayBlog = [
  {
    title: "Новость из мира инвестиций - доллар стоит 30 рублей",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan.",
    image: "/src/assets/img/services/service-4.jpg"
  },
  {
    title: "Новость из мира инвестиций - доллар стоит 30 рублей",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan.",
    image: "/src/assets/img/services/service-4.jpg"
  },
  {
    title: "Новость из мира инвестиций - доллар стоит 30 рублей",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan.",
    image: "/src/assets/img/services/service-4.jpg"
  }
];
</script>

<template>
  <section class="section-container blog">
    <div class="G-container">
      <div class="header-section">
        <h3 class="heading heading-gradient">Блог</h3>
        <router-link to="/blog" class="btn btn-outline btn-shadow">Смотреть все</router-link>
      </div>
      <div class="grid-container">
        <router-link class="blog-article" to="" v-for="article in arrayBlog">
          <div class="img-preview">
            <img :src="article.image" class="image">
          </div>
          <div class="desc-container">
            <div class="title">{{ article.title }}</div>
            <div class="desc">{{ article.desc }}</div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.blog {
  .header-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;

    .heading {

    }

    .btn {

    }
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(390px, 1fr));
    grid-gap: 24px;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }

    .blog-article {
      display: flex;
      flex-direction: column;
      border-radius: 16px;
      background: rgba(24, 24, 27, 0.50);
      padding-bottom: 32px;
      box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.00), 0px 0px 0px 1px rgba(244, 244, 245, 0.10), 0px 0px 0px 0px #FFF;

      .img-preview {
        position: relative;
        width: 100%;
        aspect-ratio: 504 / 326;

        .image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        &:after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 50%, rgba(0, 0, 0, 0.00) 100%);
        }
      }

      .desc-container {
        padding: 0 32px;
        margin-top: 16px;

        .title {
          color: #E4E4E7;
          font-size: 22px;
          font-weight: 600;
          line-height: 120%; /* 26.4px */
          margin-bottom: 16px;
        }

        .desc {
          color: var(--Gray-1);
          font-size: 14px;
          font-weight: 400;
          line-height: 150%; /* 21px */
        }
      }
    }
  }
}
</style>