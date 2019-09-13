<template>
  <v-app>
    <v-navigation-drawer permanent fixed clipped v-model="partner_menu">
      <v-container grid-list-md>
        <v-row>
          <v-col cols="12" align="center" justify="center">
            <v-btn outlined tile color="primary">Dados Pessoais</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" align="center" justify="center">
            <v-btn outlined tile color="primary">Contactos</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" align="center" justify="center">
            <v-btn outlined tile color="primary">Endereço</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" align="center" justify="center">
            <v-btn outlined tile color="primary">Formações</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" align="center" justify="center">
            <v-btn outlined tile color="primary">Experiências</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" align="center" justify="center">
            <v-btn outlined tile color="primary">Habilidades</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-navigation-drawer>
    <v-container grid-list-xs>
      <v-layout row wrap>
        <v-flex xs12>
          <v-content>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis corrupti veritatis molestiae at mollitia expedita deleniti enim debitis odit. Iste vitae sequi dolores? Asperiores earum dolorum molestias laborum hic quibusdam? {{partner}}</v-content>
        </v-flex>
      </v-layout>
    </v-container>
    <template>
      <v-btn :to="{name: 'login'}" color="primary" dark small fixed bottom right fab>
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </template>
  </v-app>
</template>
  

<script>
// import ViewPartner from "@back/percursu/partners/View";
import { getChargesDatas, getPartnersDatas } from "@/mixins/HelpersData";

export default {
  mixins: [getPartnersDatas],
  data() {
    return {
      partner_menu: true,
      itens: [{ icon: "mdi-home", title: "Home" }],
      username: this.$route.params.username,
      partner: []
    };
  },

  created() {
    this.getSinglePartiner(this.username);
  },
  // components: {
  //   ViewPartner
  // },
  methods: {
    getSinglePartiner: function(username) {
      if (this.partners.length > 0) {
        this.partner = this.partners.find(
          partner => partner.folk.user.username == username
        );
      } else {
        axios
          .get("/partners/" + username)
          .then(response => {
            this.partner = response.data.data;
          })
          .catch(error => {});
      }
    }
  }
};
</script>
