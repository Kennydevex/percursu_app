<template>
  <v-card tile flat mt-0 pt-0>
    <swiper ref="mySwiper" :options="swiperOption">
      <swiper-slide>
        <v-img
          class="white--text slide--igm"
          :src="require('@/assets/app/sliders/slide1.jpg')"
          aspect-ratio="2.75"
        >
          <div class="appCard ani" swiper-animate-effect="fadeIn" swiper-animate-duration="4s">
            <div
              class="appCard-header ani"
              swiper-animate-delay="1s"
              swiper-animate-effect="fadeIn"
              swiper-animate-duration="2s"
            >
              <div
                class="title font-weight-light text-uppercase grey--text text--lighten-2"
              >Fromação Profissional</div>
            </div>
            <div class="header_divider"></div>

            <v-divider
              class="ani ml-5"
              swiper-animate-delay="1s"
              swiper-animate-effect="rotateInDownRight"
              swiper-animate-duration="2s"
              inset
            ></v-divider>

            <div
              class="divider ani inset"
              swiper-animate-effect="rotateInUpRight"
              swiper-animate-duration="4s"
            ></div>
            <div
              class="appCard-content ani"
              swiper-animate-delay="1s"
              swiper-animate-effect="slideInRight"
              swiper-animate-duration="2s"
            >
              <p
                class="font-weight-medium"
              >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae accusamus quisquam provident natus.</p>
              <div
                class="appCard-footer ani text-xs-right"
                swiper-animate-effect="bounceInUp"
                swiper-animate-duration="3s"
              >
                <v-btn small outlined color="grey lighten-3" tile>Detalhes</v-btn>
              </div>
            </div>
          </div>
        </v-img>
      </swiper-slide>
      <swiper-slide>
        <v-img
          class="white--text slide--igm"
          :src="require('@/assets/app/sliders/slide2.jpg')"
          aspect-ratio="2.75"
        >
          <div class="appCard ani" swiper-animate-effect="fadeIn" swiper-animate-duration="4s">
            <div
              class="appCard-header ani"
              swiper-animate-delay="1s"
              swiper-animate-effect="fadeIn"
              swiper-animate-duration="2s"
            >
              <div
                class="title font-weight-light text-uppercase grey--text text--lighten-2"
              >Comunidade educativa</div>
            </div>

            <v-divider
              class="ani ml-5"
              swiper-animate-delay="1s"
              swiper-animate-effect="rotateInDownRight"
              swiper-animate-duration="2s"
              inset
            ></v-divider>
            <div
              class="divider ani inset"
              swiper-animate-effect="rotateInUpRight"
              swiper-animate-duration="4s"
            ></div>

            <div
              class="appCard-content ani"
              swiper-animate-delay="1s"
              swiper-animate-effect="slideInRight"
              swiper-animate-duration="2s"
            >
            
              <p
                class="font-weight-medium"
              >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae accusamus quisquam provident natus.</p>
              <div
                class="appCard-footer ani text-xs-right"
                swiper-animate-effect="bounceInUp"
                swiper-animate-duration="3s"
              >
                <v-btn small outlined color="grey lighten-3" tile>Detalhes</v-btn>
              </div>
            </div>
          </div>
        </v-img>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </v-card>
</template>

<script>
import * as swiperAni from "@/helpers/lib/swiper.animate.min.js";
import { appFilters } from "@/mixins/Filters";

export default {
  mixins: [appFilters],
  data() {
    return {
      swiperOption: {
        spaceBetween: 60,
        centeredSlides: true,
        autoplay: {
          delay: 5500,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },

        zoom: true,

        effect: "fade",

        on: {
          slideChange: function() {
            swiperAni.swiperAnimate(this);
          }
        }
      }
    };
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
};
</script>


<style  scoped  lang="scss">
$primary_background: rgba(77, 0, 13, 1);
$background: linear-gradient(
  0deg,
  rgba(77, 0, 13, 0) 0%,
  rgba(77, 0, 13, 0) 13%,
  rgba(77, 0, 13, 0.008823597798494398) 19%,
  rgba(77, 0, 13, 0.09145656553637083) 28%,
  rgba(77, 0, 13, 0.14187673360359765) 39%,
  rgba(77, 0, 13, 0.27633051511620277) 45%,
  rgba(77, 0, 13, 0.43599438066242124) 54%,
  rgba(77, 0, 13, 0.7749299548921131) 81%,
  rgba(77, 0, 13, 1) 100%
);
$polign: polygon(0 0, 100% 0, 72% 94%, 0 100%);
$screen-xs: 600px;
$screen-sm: 600px;
$screen-md: 600px;

@mixin xs {
  @media only screen and (max-width: #{$screen-xs}) {
    @content;
  }
}

@mixin sm {
  @media only screen and (min-width: 600px) {
    @content;
  }
}

@mixin md {
  @media only screen and (min-width: 768px) {
    @content;
  }
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.appCard {
  margin: 0;
  padding: 0px;
  height: 100%;
  overflow: hidden;
  left: 0px;
  position: absolute;
  background: $primary_background;
  background: $background;

  @include xs {
    width: 100%;
    font-size: 12px;
  }
  @include sm {
    width: 70%;
    -webkit-clip-path: $polign;
    clip-path: $polign;
  }
  @include md {
    width: 50%;
    -webkit-clip-path: $polign;
    clip-path: $polign;
  }

  &-header {
    width: 100%;
    padding: 10px 40px;
    display: block;
    box-sizing: border-box;
    @include xs {
      padding: 10px 20px;
    }
    @include sm {
      padding: 20px;
    }
  }
  &-content {
    width: 100%;
    height: auto;
    padding: 40px;
    display: block;
    box-sizing: border-box;
    justify-content: flex-end;
    overflow: inherit;
    color: #d1d0d0;
    background: #004d4d;
    @include xs {
      padding: 20px;
      background: transparent;
    }
    @include sm {
      padding: 20px;
    }
  }
  .divider {
    position: absolute;
    right: 40px;
    top: 30px;
    bottom: 10%;
    border-left: 1px solid #d3f3f3;
  }
}
</style>