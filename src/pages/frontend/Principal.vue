<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app disable-resize-watcher>
      <v-list dense>
        <v-list-item to="/">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Início</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item :to="{name: 'colaboradores'}">
          <v-list-item-action>
            <v-icon>mdi-account-tie</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Colaboradores</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item :to="{name: 'empregos'}">
          <v-list-item-action>
            <v-icon>mdi-hammer</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Empregos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item :to="{name: 'formacoes'}">
          <v-list-item-action>
            <v-icon>mdi-school</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Formações</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item :to="{name: 'noticias'}">
          <v-list-item-action>
            <v-icon>mdi-email</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Notícias</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-img
        class="mx-2"
        :src="require('../../assets/app/logo.svg')"
        max-height="40"
        max-width="40"
        contain
      ></v-img>

      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">Percursu</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn :ripple="false" to="/" class="pa-2" text>
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-divider vertical inset></v-divider>
        <v-btn
          :ripple="false"
          :to="{name: 'colaboradores'}"
          class="pa-2 font-weight-regular"
          text
        >Colaboradores</v-btn>
        <v-btn
          :ripple="false"
          :to="{name: 'empregos'}"
          class="pa-2 font-weight-regular"
          text
        >Empregos</v-btn>
        <v-btn
          :ripple="false"
          :to="{name: 'formacoes'}"
          class="pa-2 font-weight-regular"
          text
        >Formações</v-btn>
        <v-btn
          :ripple="false"
          :to="{name: 'noticias'}"
          class="pa-2 font-weight-regular"
          text
        >Notícias</v-btn>

        <template v-if="!authUser">
          <v-btn :to="{name: 'login'}" text>
            <v-icon>mdi-login</v-icon>
          </v-btn>
        </template>

        <template v-else>
          <v-menu left bottom>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" text>
                <v-avatar size="28px">
                  <!-- :src="`http://http://104.238.165.7/images/folks/avatar/${authUser.folk.avatar}`" -->
                  <img
                    :src="`http://http://localhost:8000/images/folks/avatar/${authUser.folk.avatar}`"
                    alt="Avatar"
                  />
                </v-avatar>
              </v-btn>
            </template>

            <v-list shaped>
              <v-list-item-group color="primary">
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  :to="!item.href ? { name: item.name } : null"
                  :href="item.href"
                  @click="item.click"
                >
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-menu>
        </template>
      </v-toolbar-items>

      <v-toolbar-items class="hidden-md-and-up">
        <v-btn :ripple="false" to="/" class="pa-2" text>
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-divider vertical inset></v-divider>
        <template v-if="!authUser">
          <v-btn :to="{name: 'login'}" text>
            <v-icon>mdi-login</v-icon>
          </v-btn>
        </template>

        <template v-else>
          <v-menu left bottom>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" text>
                <v-avatar size="28px">
                  <img
                    :src="`http://http://104.238.165.7/images/folks/avatar/${authUser.folk.avatar}`"
                    alt="Avatar"
                  />
                </v-avatar>
              </v-btn>
            </template>

            <v-list shaped>
              <v-list-item-group color="primary">
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  :to="!item.href ? { name: item.name } : null"
                  :href="item.href"
                  @click="item.click"
                >
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-menu>
        </template>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import AppFooter from "@/components/frontend/partials/Footer";
import { getPartnersDatas } from "@/mixins/HelpersData";

export default {
  mixins: [getPartnersDatas],
  name: "principal",
  data() {
    return {
      drawer: false,

      items: [
        {
          icon: "mdi-account-card-details",
          href: "#",
          title: "Meu Perfil",
          click: e => {
            this.$router.push({
              name: "app-perfil",
              params: { username: this.authUser.username }
            });
          }
        },
        {
          icon: "mdi-view-dashboard-variant",
          href: "#",
          title: "Dashboard",
          permission: "acess admin panel",
          click: e => {
            this.$router.push({ name: "dashboard" });
          }
        },
        {
          icon: "mdi-logout",
          href: "#",
          title: "Terminar Sessão",
          click: e => {
            this.logout();
          }
        }
      ]
    };
  },

  created() {
    this.getActivedPartners();
  },

  components: {
    AppFooter
  },

  methods: {
    teste() {
      console.log("No menu");
    },

  

    location() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          console.log(position);
        });
      } else {
        console.log("Não suporta maps");
      }
    },

    logout: function() {
      this.$store.commit("logout");
      this.$router.push("/");
    }
  }
};
</script>