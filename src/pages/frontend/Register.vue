<template>
  <div class="background-login">
    <v-app id="inspire">
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-1 pa-3" width="800">
              <v-card-text>
                <div class="layout column align-center">
                  <img
                    :src="require('../../assets/app/logo.svg')"
                    alt="percursu"
                    width="100"
                    height="100"
                  />
                  <h1 class="flex my-4 primary--text">Percursu</h1>
                  <small>Criar uma conta de utilizador</small>
                </div>
                <v-form ref="form">
                  <v-container grid-list-md ma-0 pa-0>
                    <v-layout row wrap>
                      <v-flex xs12 md6>
                        <v-text-field
                          prepend-icon="mdi-account"
                          v-model="formData.name"
                          name="name"
                          label="Nome"
                          type="text"
                          v-validate="'required|alpha'"
                          data-vv-name="name"
                          :error-messages="errors.collect('name')"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 md6>
                        <v-text-field
                          v-model="formData.lastname"
                          name="lastname"
                          label="Apelidos"
                          type="text"
                          v-validate="'required|alpha_spaces'"
                          data-vv-name="lastname"
                          :error-messages="errors.collect('lastname')"
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs12 md6>
                        <v-text-field
                          v-model="formData.email"
                          prepend-icon="mdi-email"
                          name="email"
                          label="Email"
                          type="text"
                          v-validate="'required|email'"
                          data-vv-name="email"
                          :error-messages="errors.collect('email')"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 md6>
                        <v-text-field
                          v-model="formData.username"
                          name="username"
                          label="Utilizador"
                          type="text"
                          v-validate="'required|alpha_dash'"
                          data-vv-name="username"
                          :error-messages="errors.collect('username')"
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs12 md6>
                        <v-text-field
                          v-model="formData.password"
                          prepend-icon="mdi-lock"
                          name="password"
                          label="Palavra Passe"
                          type="password"
                          ref="password"
                          v-validate="'required|min:8'"
                          data-vv-name="password"
                          :error-messages="errors.collect('password')"
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs12 md6>
                        <v-text-field
                          v-model="formData.password_confirmation"
                          name="password"
                          label="Confirmar Palavra Passe"
                          type="password"
                          v-validate="'required|confirmed:password'"
                          data-vv-name="password_confirmation"
                          :error-messages="errors.collect('password_confirmation')"
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs12>
                        <v-radio-group row>
                          <v-radio color="blue" label="Masculino" value="m"></v-radio>
                          <v-radio color="orange" label="Feminino" value="f"></v-radio>
                        </v-radio-group>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-form>
              </v-card-text>
              <div class="login-btn">
                <v-btn :to="{name: 'login'}" small text rounded dark color="primary">
                  <v-icon small left dark>mdi-login</v-icon>Entrar
                </v-btn>

                <v-btn :to="{name:'home'}" icon x-small text dark>
                  <v-icon color="primary" small dark>mdi-home</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn icon x-smal>
                  <v-icon color="blue" x-smal>mdi-facebook-box</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon color="red">mdi-twitter-box</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon color="light-blue">mdi-google</v-icon>
                </v-btn>
                <v-btn rounded @click="register()" block color="primary">Registar</v-btn>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import { flashAlert } from "@/mixins/AppAlerts";
import { clearForm } from "@/mixins/Form";

export default {
  mixins: [flashAlert, clearForm],

  data() {
    return {
      formData: {
        name: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
        gender: "nd",
        avatar: "default.svg",
        status: false
      },
      sending: false,
      acoountCreated: false
    };
  },

  mounted() {},

  methods: {
    register() {
      this.$validator.validateAll().then(valid => {
        if (valid) {
          this.sending = true;
          axios
            .post("/register", this.$data.formData)
            .then(response => {
              this.sending = false;
              this.acoountCreated = true;
              this.$swal({
                type: "info",
                title: "Registo Criado com Sucesso",
                text:
                  "Os seus dados já foram registados, aguarde a ativação da conta. em breve enviaremos email de ativação...",
                footer:
                  "Apreciamos a sua participação nesta plataforma... Boa Sorte"
              });
              this.clear();
              this.$router.push({ path: "/" });
            })
            .catch(err => {
              this.sending = false;
              this.acoountCreated = false;
            });
        }
      });
    }
  }
};
</script>
