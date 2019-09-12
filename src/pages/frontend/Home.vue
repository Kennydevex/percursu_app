<template>
  <div>
    <app-slider></app-slider>
    <app-missions></app-missions>
    <app-parralax></app-parralax>
    <app-partners></app-partners>
    <app-companies></app-companies>
    <app-featured></app-featured>
    <app-map></app-map>

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
    AppPartners,
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