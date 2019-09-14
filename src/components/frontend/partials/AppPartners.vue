<template>
  <v-container grid-list-xs>
    <v-row>
      <v-col cols="12">
        <v-row align="center" justify="center">
          <h2 class="text-center font-weight-thin">Destaques</h2>
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
            <template v-for="(partner, i) in featuredPartners">
              <swiper-slide :key="i">
                <v-avatar
                  @click="onViewPartner(partner.folk.user.username)"
                  class="featured_partner"
                  color="grey lighten-3"
                  size="130"
                >
                  <img :src="require('../../../assets/app/default/account.svg')" alt="avatar" />
                </v-avatar>
              </swiper-slide>
            </template>
            <div class="swiper-pagination mt-5" slot="pagination"></div>
          </swiper>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { getPartnersDatas } from "@/mixins/HelpersData";
export default {
  mixins: [getPartnersDatas],
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
  }),

  created() {
    this.getFeaturedPartners();
  },

  methods: {
    onViewPartner: function(username) {
      this.$router.push({ name: "app-partner", params: { username } });
    }
    // getFeatured() {
    //   this.featuredPartners = this.activedPartners.filter(function(partner) {
    //     return partner.featured == true;
    //   });
    // }
  }
};
</script>
<style lang="scss" scoped>
.featured_partner {
  cursor: pointer;
}
</style>
