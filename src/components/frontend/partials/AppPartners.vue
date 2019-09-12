<template>
  <div class="white">
    <v-container grid-list-xs>
      <v-row>
        <v-col cols="12">
          <v-row align="center" justify="center">
            <h2 class="text-center font-weight-thin">Curriculums</h2>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" justify="canter" align="center">
          <div
            @mouseenter="$refs.swiperRef.swiper.autoplay.stop()"
            @mouseleave="$refs.swiperRef.swiper.autoplay.start()"
          >
            <swiper :options="swiperOption" ref="swiperRef">
              <swiper-slide></swiper-slide>
              <swiper-slide>
                <v-avatar color="primary" size="100">
                  <img
                    v-if="avatar"
                    src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
                    alt="avatar"
                  />
                  <span v-else>VJ</span>
                </v-avatar>
              </swiper-slide>
              <swiper-slide>
                <v-avatar color="primary" size="100">
                  <img
                    v-if="avatar"
                    src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
                    alt="avatar"
                  />
                  <span v-else>VJ</span>
                </v-avatar>
              </swiper-slide>
              <swiper-slide>
                <v-avatar color="primary" size="100">
                  <img
                    v-if="avatar"
                    src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
                    alt="avatar"
                  />
                  <span v-else>VJ</span>
                </v-avatar>
              </swiper-slide>
              <swiper-slide>
                <v-avatar color="primary" size="100">
                  <img
                    v-if="avatar"
                    src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
                    alt="avatar"
                  />
                  <span v-else>VJ</span>
                </v-avatar>
              </swiper-slide>
              <swiper-slide>
                <v-avatar color="primary" size="100">
                  <img
                    v-if="avatar"
                    src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
                    alt="avatar"
                  />
                  <span v-else>VJ</span>
                </v-avatar>
              </swiper-slide>
              <swiper-slide>
                <v-avatar color="primary" size="100">
                  <img
                    v-if="avatar"
                    src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
                    alt="avatar"
                  />
                  <span v-else>VJ</span>
                </v-avatar>
              </swiper-slide>
              <swiper-slide>
                <v-avatar color="primary" size="100">
                  <img
                    v-if="avatar"
                    src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
                    alt="avatar"
                  />
                  <span v-else>VJ</span>
                </v-avatar>
              </swiper-slide>
              <swiper-slide>
                <v-avatar color="primary" size="100">
                  <img
                    v-if="avatar"
                    src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
                    alt="avatar"
                  />
                  <span v-else>VJ</span>
                </v-avatar>
              </swiper-slide>
              <swiper-slide>
                <v-avatar color="primary" size="100">
                  <img
                    v-if="avatar"
                    src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
                    alt="avatar"
                  />
                  <span v-else>VJ</span>
                </v-avatar>
              </swiper-slide>
              <swiper-slide>
                <v-avatar color="primary" size="100">
                  <img
                    v-if="avatar"
                    src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
                    alt="avatar"
                  />
                  <span v-else>VJ</span>
                </v-avatar>
              </swiper-slide>
              <swiper-slide>
                <v-avatar color="primary" size="100">
                  <img
                    v-if="avatar"
                    src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
                    alt="avatar"
                  />
                  <span v-else>VJ</span>
                </v-avatar>
              </swiper-slide>
              <swiper-slide>
                <v-avatar color="primary" size="100">
                  <img
                    v-if="avatar"
                    src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
                    alt="avatar"
                  />
                  <span v-else>VJ</span>
                </v-avatar>
              </swiper-slide>
              <div class="swiper-pagination mt-5" slot="pagination"></div>
            </swiper>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
// import {categoriesTags} from '@mixins/CategoriesTags'
export default {
  // mixins: [categoriesTags],
  name: "",
  data: () => ({
    avatar: true,
    swiperOption: {
        
      slidesPerView: 3,
      spaceBetween: 5,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true
      },
      //   navigation: {
      //     nextEl: ".swiper-button-next",
      //     prevEl: ".swiper-button-prev"
      //   },

      autoplay: {
        delay: 5000
      },

      breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        }
      }
    }
  })
};
</script>
<style lang="scss" scoped>
</style>
