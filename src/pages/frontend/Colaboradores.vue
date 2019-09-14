<template>
  <v-container grid-list-md class="pt-0">
    <v-layout row wrap>
      <v-flex xs12>
        <app-map></app-map>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12>
        <v-card class="mt-3">
            <app-partners></app-partners>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12>
        <v-card color="transparent" flat class="mt-2">
          <!-- <v-toolbar color="white" class="elevation-1">
            <v-text-field
              flat
              solo
              prepend-icon="mdi-magnify"
              placeholder="Procurar..."
              hide-details
              class="hidden-sm-and-down"
            ></v-text-field>
            <v-btn icon>
              <v-icon>mdi-filter-variant</v-icon>
            </v-btn>
          </v-toolbar>-->

          <v-container class="mt-2 pa-0">
            <v-layout row wrap>
              <template v-for="(partner, index) in activedPartners">
                <v-flex xs12 md3 :key="index">
                  <v-card>
                    <v-list-item>
                      <v-list-item-avatar
                        color="grey"
                        size="50"
                        :src="`http://http://104.238.165.7/images/folks/avatar/${authUser.folk.avatar}`"
                      ></v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title
                          class="subtitle-2"
                        >{{partner.folk.name}} {{partner.folk.lastname}}</v-list-item-title>
                        <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-img
                      :src="`http://http://104.238.165.7/images/folks/cover/${authUser.folk.cover}`"
                      height="93"
                    ></v-img>
                    <v-card-actions>
                      <v-btn
                        small
                        @click="onViewPartner(partner.folk.user.username)"
                        text
                        rounded
                        outlined
                        color="primary"
                      >Ver</v-btn>
                      <v-spacer></v-spacer>
                      <v-btn icon small>
                        <v-icon small>mdi-heart</v-icon>
                      </v-btn>
                      <v-btn icon small>
                        <v-icon small>mdi-share-variant</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-flex>
              </template>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12>
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
          <v-btn
            :to="{name: 'login'}"
            color="primary"
            dark
            medium
            fixed
            bottom
            right
            fab
            class="mb-5"
          >
            <v-icon>mdi-login-variant</v-icon>
          </v-btn>
        </template>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AppPartners from "@/components/frontend/partials/AppPartners";
import CreatePartner from "@/components/backend/percursu/partners/Create";
import UpdatePartner from "@/components/backend/percursu/partners/Update";
import AppMap from "@/components/frontend/partials/AppMap";
import { getPartnersDatas } from "@/mixins/HelpersData";

export default {
  mixins: [getPartnersDatas],

  components: {
    AppMap,
    AppPartners
  },

  methods: {
    onViewPartner: function(username) {
      this.$router.push({ name: "app-partner", params: { username } });
    }
  }
};
</script>