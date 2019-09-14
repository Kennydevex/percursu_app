<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="partner_menu" app clipped disable-resize-watcher>
      <v-container grid-list-md>
        <v-row class="mb-5">
          <v-col cols="12" align="center" justify="center">
            <v-avatar size="80">
              <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar" />
            </v-avatar>
          </v-col>

          <v-col cols="12" align="center" justify="center">
            <h3
              class="display-1 text-uppercase font-weight-thin teal--text text--darken-3"
            >Nome Apelito</h3>
          </v-col>
          <v-col cols="12" align="center" justify="center">
            <span class="text-capitalize font-weight-light">{{partnerAge}} Anos de Idade</span>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row>
          <v-col cols="12" align="center" justify="center">
            <v-btn
              text
              @click="$vuetify.goTo('#personal', options)"
              tile
              color="primary"
            >Dados Pessoais</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" align="center" justify="center">
            <v-btn @click="$vuetify.goTo('#contacts', options)" text tile color="primary">Contactos</v-btn>
            <!-- <v-btn href="#contacts" text tile color="primary">Contactos</v-btn> -->
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" align="center" justify="center">
            <v-btn text @click="$vuetify.goTo('#address', options)" tile color="primary">Endereço</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" align="center" justify="center">
            <v-btn
              text
              @click="$vuetify.goTo('#formations', options)"
              tile
              color="primary"
            >Formações</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" align="center" justify="center">
            <v-btn
              text
              @click="$vuetify.goTo('#experiences', options)"
              tile
              color="primary"
            >Experiências</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" align="center" justify="center">
            <v-btn
              text
              @click="$vuetify.goTo('#abilities', options)"
              tile
              color="primary"
            >Habilidades</v-btn>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row>
          <v-col cols="12" align="center" justify="center">
           <v-btn color="primary" icon><v-icon>mdi-linkedin</v-icon></v-btn>
           <v-btn color="primary" icon><v-icon>mdi-facebook</v-icon></v-btn>
           <v-btn color="primary" icon><v-icon>mdi-twitter</v-icon></v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-navigation-drawer>

    <v-content class="mt-0">
      <v-container fluid class="mt-0 pt-0">
        <v-row align="center" justify="space-around">
          <v-img
            :src="`http://http://104.238.165.7/images/folks/cover/${authUser.folk.cover}`"
            aspect-ratio="1"
            class="grey lighten-2"
            max-height="300"
          >
            <v-row align="end" justify="end" class="lightbox white--text pa-2 fill-height">
              <v-col class="text-right pa-12">
                <div
                  class="subheading display-4 grey--text text--lighten-3"
                >{{partner.folk.name}} {{partner.folk.lastname}}</div>
                <div class="body-1">{{partner.folk.user.email}}</div>
              </v-col>
            </v-row>
          </v-img>
        </v-row>

        <v-row id="personal">
          <v-col>
            <v-card>
              <v-card-title primary-title>Dados Pessoais</v-card-title>
              <v-card-text>
                <v-card color="transparent" flat>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title>Nome</v-list-item-title>
                      <v-list-item-subtitle>Nome: {{partner.folk.name}}</v-list-item-subtitle>
                      <v-list-item-subtitle>Apelido: {{partner.folk.lastname}}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item three-line>
                    <v-list-item-content>
                      <v-list-item-title>Idade</v-list-item-title>
                      <v-list-item-subtitle>{{partnerAge}}</v-list-item-subtitle>
                      <v-list-item-subtitle>Nascido em {{partnerBirth}}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title>Genero</v-list-item-title>
                      <v-list-item-subtitle>{{partner.folk.gender == 'm' ? 'Masculino': partner.folk.gender == 'f'?'Feminino':'Não Definido'}}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title>NIF</v-list-item-title>
                      <v-list-item-subtitle>{{partner.folk.nif}}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row id="contacts">
          <v-col cols="12" md="4" sm="8" xs="12">
            <v-card flat class="ma-0 pa-0">
              <div class="text-right pa-8 title teal--text ma-0 pa-0">Contactos</div>
              <v-card-text>
                <v-expansion-panels>
                  <v-expansion-panel v-if="partner.folk.phones.length >0">
                    <v-expansion-panel-header>Telefones</v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <v-row>
                        <v-col>
                          <v-list-item two-line>
                            <v-list-item-content v-for="(phone, i) in partner.folk.phones" :key="i">
                              <v-list-item-title>{{phone.type ==1 ? 'Pessoal': phone.type==2? 'Casa':'Trabalho'}}</v-list-item-title>
                              <v-list-item-subtitle>{{phone.number}}</v-list-item-subtitle>
                            </v-list-item-content>
                          </v-list-item>
                        </v-col>
                      </v-row>
                    </v-expansion-panel-content>
                  </v-expansion-panel>

                  <v-expansion-panel v-if="partner.folk.couriers.length >0">
                    <v-expansion-panel-header>Correios Eletrónicos</v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <v-row>
                        <v-col>
                          <v-list-item two-line>
                            <v-list-item-content
                              v-for="(email, i) in partner.folk.couriers"
                              :key="i"
                            >
                              <v-list-item-title>{{email.type ==1 ? 'Pessoal': email.type==2? 'Casa':'Trabalho'}}</v-list-item-title>
                              <v-list-item-subtitle>{{email.email}}</v-list-item-subtitle>
                            </v-list-item-content>
                          </v-list-item>
                        </v-col>
                      </v-row>
                    </v-expansion-panel-content>
                  </v-expansion-panel>

                  <v-expansion-panel>
                    <v-expansion-panel-header>Sítios eb</v-expansion-panel-header>
                    <v-expansion-panel-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-content>
                  </v-expansion-panel>

                  <v-expansion-panel>
                    <v-expansion-panel-header>Redes Sociais</v-expansion-panel-header>
                    <v-expansion-panel-content></v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row id="address">
          <v-col cols="12" md="6">
            <v-card>
              <v-card-title primary-title>Endereço</v-card-title>
              <v-card-text>
                <v-card color="transparent" flat>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title>País</v-list-item-title>
                      <v-list-item-subtitle>{{partner.folk.address.country}}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-content>
                      <v-list-item-title>Cidade</v-list-item-title>
                      <v-list-item-subtitle>{{partner.folk.address.city}}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-content>
                      <v-list-item-title>Rua</v-list-item-title>
                      <v-list-item-subtitle>{{partner.folk.address.street}}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-content>
                      <v-list-item-title>Código Postal</v-list-item-title>
                      <v-list-item-subtitle>{{partner.folk.address.postcode}}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row id="formations">
          <v-col cols="12" md="6">
            <v-card flat>
              <v-card-title primary-title>Formações Realizadas</v-card-title>
              <v-timeline :dense="$vuetify.breakpoint.smAndDown">
                <v-timeline-item v-for="(formation, i) in partner.formations" :key="i">
                  <span slot="opposite">{{formation.to}}</span>
                  <v-card class="elevation-2">
                    <v-card-title class="headline">{{formation.designation}}</v-card-title>
                    <v-card-text>
                      <div>
                        <div>Instituição: {{formation.institution}}</div>
                        <div>Disciplinas/Módulos Chaves: {{formation.subjects}}</div>
                        <v-divider></v-divider>
                        <div>País: {{formation.country}}</div>
                      </div>
                    </v-card-text>
                    <v-card-actions>
                      <v-chip
                        :color="formation.ongoing?'primary':'warning'"
                        small
                        outlined
                      >{{formation.ongoing?"Concluido":"Em Andamento"}}</v-chip>
                    </v-card-actions>
                  </v-card>
                </v-timeline-item>
              </v-timeline>
            </v-card>
          </v-col>
        </v-row>

        <v-row id="experiences">
          <v-col>Experiencias</v-col>
        </v-row>

        <v-row id="abilities">
          <v-col>Habilidades</v-col>
        </v-row>
        <!-- 
        <v-row id="abilities">
          <v-col>{{partner}}</v-col>
        </v-row>-->
      </v-container>
    </v-content>

    <template>
      <v-btn :to="{name: 'colaboradores'}" color="primary" dark small fixed top right fab>
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </template>
    <template>
      <v-btn @click="partner_menu=!partner_menu" color="primary" dark small fixed bottom right fab>
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </template>

    <v-footer app>
      <span>
        &copy; Percursu - 2019 || Perfil de
        <b>{{partner.folk.name}}</b>
      </span>
    </v-footer>
  </v-app>
</template>

<script>
import * as easings from "vuetify/es5/services/goto/easing-patterns";

// import ViewPartner from "@back/percursu/partners/View";
import { getChargesDatas, getPartnersDatas } from "@/mixins/HelpersData";
export default {
  mixins: [getPartnersDatas],
  data() {
    return {
      partner_menu: true,
      itens: [{ icon: "mdi-home", title: "Home" }],
      username: this.$route.params.username,
      partner: [],

      fab: false,

      duration: 1300,
      offset: 0,
      easing: "easeInOutCubic",
      easings: Object.keys(easings)
    };
  },

  created() {
    this.getSinglePartiner(this.username);
  },

  computed: {
    options() {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing
      };
    },
    partnerAge() {
      // return moment().diff(this.partner.folk.birthdate, "years");
      // return moment(new Date()).diff(moment(this.partner.folk.birthdate,"MM/DD/YYYY"),'years',true);
    },
    partnerBirth() {
      return moment(this.partner.folk.birthdate).format("MM/DD/YYYY");
    }
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
          .get("/partner/" + username)
          .then(response => {
            this.partner = response.data.data;
          })
          .catch(error => {});
      }
    }
  }
};
</script>
