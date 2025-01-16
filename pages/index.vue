<!-- file: pages/index.vue -->
<template>
  <div class="home">
    <!-- Banner Slider -->
    <div class="banner-slider">
      <swiper
        :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
        :slides-per-view="1"
        :loop="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :pagination="{ clickable: true }"
        :navigation="true"
      >
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          <img :src="slide.image" :alt="slide.title" class="slider-image">
          <div class="slider-content">
            <h2>{{ slide.title }}</h2>
            <p>{{ slide.description }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <h1>Trang chính</h1>
    <NuxtLink to="/about">Đi đến trang Giới thiệu</NuxtLink>
    <br />
    <NuxtLink to="/users">Đi đến danh sách người dùng</NuxtLink>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      SwiperAutoplay: Autoplay,
      SwiperPagination: Pagination,
      SwiperNavigation: Navigation,
      slides: [
        {
          image: 'https://24hstore.vn/upload_images/images/hinh-nen-may-tinh/hinh_nen_thien_nhien_(2).jpg',
          title: 'Slide 1',
          description: 'Mô tả cho slide 1'
        },
        {
          image: 'https://mega.com.vn/media/news/0106_hinh-nen-may-tinh-full-hd62.jpg',
          title: 'Slide 2',
          description: 'Mô tả cho slide 2'
        },
        {
          image: 'https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/ai-la-nguoi-dam-me-nhung-bau-troi-dem-day-sao-dep-den-nao-long-nao.jpg',
          title: 'Slide 3',
          description: 'Mô tả cho slide 3'
        }
      ]
    }
  }
}
</script>

<style scoped>
.home {
  max-width: 1100px;
  margin: 0 auto;
}
.banner-slider {
  padding-top: 50px;
  width: 100%;
  height: 500px;
  margin-bottom: 2rem;
}

.slider-image {
  width: 100%;
  height: 500px;
  object-fit: cover;
}

.slider-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.5);
  color: white;
}

.slider-content h2 {
  margin: 0;
  font-size: 2rem;
}

.slider-content p {
  margin: 0.5rem 0 0;
}

:root {
  --swiper-theme-color: #fff;
}
</style>
