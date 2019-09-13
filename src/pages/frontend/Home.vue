<template>
  <div>
    <section>
      <app-slider></app-slider>
    </section>
    <section>
      <app-missions></app-missions>
    </section>
    <section>
      <app-parralax></app-parralax>
    </section>
    <section class="white">
      <app-partners></app-partners>
    </section>
    <section>
      <app-companies></app-companies>
    </section>
    <section class="white">
      <app-featured></app-featured>
    </section>
    <section>
      <app-map></app-map>
    </section>

    <template v-if="authUser">
      <v-btn
        :to="{name: 'editar-colobaradores', params: {username: authUser.username}}"
        color="primary"
        dark
        medium
        fixed
        bottom
        right
        fab
        class="mb-5"
        v-if="authUser.folk.partner"
      >
        <v-icon>mdi-account-edit</v-icon>
      </v-btn>

      <v-btn
        :to="{name: 'criar-colobaradores'}"
        color="primary"
        dark
        medium
        fixed
        bottom
        right
        fab
        class="mb-5"
        v-if="!authUser.folk.partner"
      >
        <v-icon>mdi-account-plus</v-icon>
      </v-btn>
    </template>

    <template v-else>
      <v-btn :to="{name: 'login'}" color="primary" dark medium fixed bottom right fab class="mb-5">
        <v-icon>mdi-login-variant</v-icon>
      </v-btn>
    </template>
  </div>
</template>
<script>
import AppSlider from "@/components/frontend/partials/AppSlider";
import AppParralax from "@/components/frontend/partials/AppParralax";
import AppFeatured from "@/components/frontend/partials/AppFeatured";
import AppCompanies from "@/components/frontend/partials/AppCompanies";
import AppPartners from "@/components/frontend/partials/AppPartners";
import AppMissions from "@/components/frontend/partials/AppMissions";
import AppMap from "@/components/frontend/partials/AppMap";
export default {
  data() {
    return {
      fab: false
    };
  },

  components: {
    AppSlider,
    AppMissions,
    AppMap,
    AppParralax,
    AppFeatured,
    AppCompanies,
    AppPartners
  }
};
</script>

<style>
/* This is for documentation purposes and will not be needed in your application */
#create .v-speed-dial {
  position: fixed;
  z-index: 100;
}

#create .v-btn--floating {
  position: relative;
}
</style>