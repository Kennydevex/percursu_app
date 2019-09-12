<template>
<div class="white">
  <v-container grid-list-xs>
    <v-row>
      <v-col cols="12">
        <v-row align="center" justify="center">
          <h2 class="text-center font-weight-thin">Publicações</h2>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div
          @mouseenter="$refs.swiperRef.swiper.autoplay.stop()"
          @mouseleave="$refs.swiperRef.swiper.autoplay.start()"
        >
          <swiper :options="swiperOption" ref="swiperRef">
            <swiper-slide>
              <v-card class="ma-1" tile>
                <v-img
                  class="white--text"
                  height="120px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                ></v-img>

                <v-card-text>
                  <v-container grid-list-xs fluid>
                    <span>Number 10</span>
                    <br />
                    <span class="text--primary">
                      <span>Whitehaven Beach</span>
                      <br />
                    </span>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-btn text color="primary" rounded outlined x-small>Ver</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn text color="grey" x-small>
                    <v-icon small>mdi-share-variant</v-icon>
                  </v-btn>
                  <!-- <v-btn text color="grey" x-small @click="sheet = !sheet">
                    <v-icon small>mdi-share-variant</v-icon>
                  </v-btn>-->
                </v-card-actions>
              </v-card>
            </swiper-slide>
            <swiper-slide>
              <v-card class="ma-1" tile max-width="400">
                <v-img
                  class="white--text"
                  height="120px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                ></v-img>

                <v-card-text>
                  <span>Number 10</span>
                  <br />
                  <span class="text--primary">
                    <span>Whitehaven Beach</span>
                    <br />
                  </span>
                </v-card-text>

                <v-card-actions>
                  <v-btn text color="primary" rounded outlined x-small>Ver</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn text color="grey" x-small>
                    <v-icon small>mdi-share-variant</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </swiper-slide>
            <swiper-slide>
              <v-card class="ma-1" tile max-width="400">
                <v-img
                  class="white--text"
                  height="120px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                ></v-img>

                <v-card-text>
                  <span>Number 10</span>
                  <br />
                  <span class="text--primary">
                    <span>Whitehaven Beach</span>
                    <br />
                  </span>
                </v-card-text>

                <v-card-actions>
                  <v-btn text color="primary" rounded outlined x-small>Ver</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn text color="grey" x-small>
                    <v-icon small>mdi-share-variant</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </swiper-slide>
            <swiper-slide>
              <v-card class="ma-1" tile max-width="400">
                <v-img
                  class="white--text"
                  height="120px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                ></v-img>

                <v-card-text>
                  <span>Number 10</span>
                  <br />
                  <span class="text--primary">
                    <span>Whitehaven Beach</span>
                    <br />
                  </span>
                </v-card-text>

                <v-card-actions>
                  <v-btn text color="primary" rounded outlined x-small>Ver</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn text color="grey" x-small>
                    <v-icon small>mdi-share-variant</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </swiper-slide>
            <swiper-slide>
              <v-card class="ma-1" tile max-width="400">
                <v-img
                  class="white--text"
                  height="120px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                ></v-img>

                <v-card-text>
                  <span>Number 10</span>
                  <br />
                  <span class="text--primary">
                    <span>Whitehaven Beach</span>
                    <br />
                  </span>
                </v-card-text>

                <v-card-actions>
                  <v-btn text color="primary" rounded outlined x-small>Ver</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn text color="grey" x-small>
                    <v-icon small>mdi-share-variant</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </swiper-slide>
            <swiper-slide>
              <v-card class="ma-1" tile max-width="400">
                <v-img
                  class="white--text"
                  height="120px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                ></v-img>

                <v-card-text>
                  <span>Number 10</span>
                  <br />
                  <span class="text--primary">
                    <span>Whitehaven Beach</span>
                    <br />
                  </span>
                </v-card-text>

                <v-card-actions>
                  <v-btn text color="primary" rounded outlined x-small>Ver</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn text color="grey" x-small>
                    <v-icon small>mdi-share-variant</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </swiper-slide>
            <swiper-slide>
              <v-card class="ma-1" tile max-width="400">
                <v-img
                  class="white--text"
                  height="120px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                ></v-img>

                <v-card-text>
                  <span>Number 10</span>
                  <br />
                  <span class="text--primary">
                    <span>Whitehaven Beach</span>
                    <br />
                  </span>
                </v-card-text>

                <v-card-actions>
                  <v-btn text color="primary" rounded outlined x-small>Ver</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn text color="grey" x-small>
                    <v-icon small>mdi-share-variant</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </swiper-slide>
            <swiper-slide>
              <v-card class="ma-1" tile max-width="400">
                <v-img
                  class="white--text"
                  height="120px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                ></v-img>

                <v-card-text>
                  <span>Number 10</span>
                  <br />
                  <span class="text--primary">
                    <span>Whitehaven Beach</span>
                    <br />
                  </span>
                </v-card-text>

                <v-card-actions>
                  <v-btn text color="primary" rounded outlined x-small>Ver</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn text color="grey" x-small>
                    <v-icon small>mdi-share-variant</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </swiper-slide>
            <swiper-slide>
              <v-card class="ma-1" tile max-width="400">
                <v-img
                  class="white--text"
                  height="120px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                ></v-img>

                <v-card-text>
                  <span>Number 10</span>
                  <br />
                  <span class="text--primary">
                    <span>Whitehaven Beach</span>
                    <br />
                  </span>
                </v-card-text>

                <v-card-actions>
                  <v-btn text color="primary" rounded outlined x-small>Ver</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn text color="grey" x-small>
                    <v-icon small>mdi-share-variant</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </swiper-slide>
            <swiper-slide>
              <v-card class="ma-1" tile max-width="400">
                <v-img
                  class="white--text"
                  height="120px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                ></v-img>

                <v-card-text>
                  <span>Number 10</span>
                  <br />
                  <span class="text--primary">
                    <span>Whitehaven Beach</span>
                    <br />
                  </span>
                </v-card-text>

                <v-card-actions>
                  <v-btn text color="primary" rounded outlined x-small>Ver</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn text color="grey" x-small>
                    <v-icon small>mdi-share-variant</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </swiper-slide>
            <swiper-slide>
              <v-card class="ma-1" tile max-width="400">
                <v-img
                  class="white--text"
                  height="120px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                ></v-img>

                <v-card-text>
                  <span>Number 10</span>
                  <br />
                  <span class="text--primary">
                    <span>Whitehaven Beach</span>
                    <br />
                  </span>
                </v-card-text>

                <v-card-actions>
                  <v-btn text color="primary" rounded outlined x-small>Ver</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn text color="grey" x-small>
                    <v-icon small>mdi-share-variant</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </swiper-slide>
            <swiper-slide>
              <v-card class="ma-1" tile max-width="400">
                <v-img
                  class="white--text"
                  height="120px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                ></v-img>

                <v-card-text>
                  <span>Number 10</span>
                  <br />
                  <span class="text--primary">
                    <span>Whitehaven Beach</span>
                    <br />
                  </span>
                </v-card-text>

                <v-card-actions>
                  <v-btn text color="primary" rounded outlined x-small>Ver</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn text color="grey" x-small>
                    <v-icon small>mdi-share-variant</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </swiper-slide>
            <swiper-slide>
              <v-card class="ma-1" tile max-width="400">
                <v-img
                  class="white--text"
                  height="120px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                ></v-img>

                <v-card-text>
                  <span>Number 10</span>
                  <br />
                  <span class="text--primary">
                    <span>Whitehaven Beach</span>
                    <br />
                  </span>
                </v-card-text>

                <v-card-actions>
                  <v-btn text color="primary" rounded outlined x-small>Ver</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn text color="grey" x-small>
                    <v-icon small>mdi-share-variant</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
      </v-col>
    </v-row>
    <!-- <div class="text-center">
      <v-bottom-sheet v-model="sheet" inset>
        <v-list>
          <v-subheader>Open in</v-subheader>
          <v-list-item v-for="tile in tiles" :key="tile.title" @click="sheet = false">
            <v-list-item-avatar>
              <v-avatar size="32px" tile>
                <img
                  :src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${tile.img}`"
                  :alt="tile.title"
                />
              </v-avatar>
            </v-list-item-avatar>
            <v-list-item-title>{{ tile.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-bottom-sheet>
    </div>-->
  </v-container>
  </div>
</template>
<script>
// import {categoriesTags} from '@mixins/CategoriesTags'
export default {
  // mixins: [categoriesTags],
  name: "",
  data: () => ({
    sheet: false,
    tiles: [
      { img: "keep.png", title: "Keep" },
      { img: "inbox.png", title: "Inbox" },
      { img: "hangouts.png", title: "Hangouts" },
      { img: "messenger.png", title: "Messenger" },
      { img: "google.png", title: "Google+" }
    ],
    swiperOption: {
      slidesPerView: 4,
      spaceBetween: 10,
      // loop: true,
      loopFillGroupWithBlank: true,
      // pagination: {
      //   el: ".swiper-pagination",
      //   type: 'fraction'
      // },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },

      autoplay: {
        delay: 3000
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
