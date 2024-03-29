<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card width="100%">
        <v-card-title primary-title>
          <small class="font-weight-light text-capitalize">
            Registo de Utilizador
          </small>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-container grid-list-md fluid>
            <v-form ref="form">
              <v-layout wrap>
                <v-flex xs12>
                  <v-alert
                    outlined
                    type="warning"
                    :value="true"
                    dismissible
                  >Para que o registo seja armazenado na base de dados adequadamente, pessamos que tenhas bom senso em inserir os seus dados pessoais e os seus contactos</v-alert>
                </v-flex>
                <v-flex xs12>
                  <v-subheader>Dados Pessoais</v-subheader>
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field
                    outlined
                    label="Nome*"
                    name="name"
                    v-model="formData.name"
                    v-validate="'required|alpha'"
                    data-vv-name="name"
                    :error-messages="errors.collect('name')"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field
                    outlined
                    label="Apelido*"
                    name="lastname"
                    v-model="formData.lastname"
                    v-validate="'required|alpha'"
                    data-vv-name="lastname"
                    :error-messages="errors.collect('lastname')"
                    required
                  ></v-text-field>
                </v-flex>

                <v-flex xs12 md6>
                  <v-text-field
                    outlined
                    label="BI/CNI"
                    v-validate="'max:6|numeric'"
                    data-vv-name="BI"
                    :error-messages="errors.collect('BI')"
                    v-model="formData.ic"
                    hint="Insira o seu nº de BI ou CNI"
                  ></v-text-field>
                </v-flex>

                <v-flex xs12 md6>
                  <v-text-field
                    outlined
                    label="NIF"
                    v-validate="'max:11|numeric'"
                    data-vv-name="nif"
                    :error-messages="errors.collect('nif')"
                    v-model="formData.nif"
                    hint="Insira o seu NIF"
                  ></v-text-field>
                </v-flex>

                <v-flex xs12 md6>
                  <input
                    style="display:none"
                    name="from_field_target"
                    ref="valDate"
                    v-model="valDate"
                    type="text"
                  />
                  <v-menu
                    v-model="birthdate_menu"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        outlined
                        name="birthdate"
                        label="Data de Nascimento"
                        :value="formattingBirthdate"
                        prepend-inner-icon="mdi-calendar"
                        readonly
                        v-on="on"
                        v-validate="'required|date_format:dd/MM/yyyy|before:valDate'"
                        data-vv-as="birthdate"
                        :error-messages="errors.collect('birthdate')"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="formData.birthdate"
                      @input="birthdate_menu= false"
                      locale="pt-pt"
                    ></v-date-picker>
                  </v-menu>
                </v-flex>

                <v-flex xs12 md6>
                  <v-radio-group v-model="formData.gender" row>
                    <v-radio color="blue" label="Masculino" value="m"></v-radio>
                    <v-radio color="orange" label="Feminino" value="f"></v-radio>
                  </v-radio-group>
                </v-flex>

                <v-flex xs12>
                  <v-subheader>Conta e Autenticação</v-subheader>
                </v-flex>

                <v-flex xs12 md4>
                  <v-text-field
                    outlined
                    label="Utilizador*"
                    name="username"
                    v-validate="'required'"
                    data-vv-name="username"
                    :error-messages="errors.collect('username')"
                    v-model="formData.username"
                    required
                    hint="Escolha um nome único que identifica a sua conta"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field
                    outlined
                    label="Email*"
                    name="email"
                    prepend-inner-icon="mdi-email"
                    v-validate="'required|email'"
                    data-vv-name="email"
                    :error-messages="errors.collect('email')"
                    v-model="formData.email"
                    required
                    hint="Introduza um email válido e que estás a usar"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 md2>
                  <v-text-field
                    label="Telefone"
                    prepend-inner-icon="mdi-cellphone-basic"
                    v-model="formData.phone_number"
                    outlined
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-text-field
                    outlined
                    label="Palavra Passe*"
                    name="password"
                    v-model="formData.password"
                    v-validate="'required|min:8'"
                    data-vv-name="password"
                    :error-messages="errors.collect('password')"
                    :type="showPass ? 'text' : 'password'"
                    :append-icon="showPass ? 'mdi-eye-off' : 'mdi-eye'"
                    @click:append="showPass = !showPass"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-text-field
                    outlined
                    label="Confirmacão da palavra passe"
                    name="password_confirmation"
                    v-model="formData.password_confirmation"
                    v-validate="'required'"
                    data-vv-name="password_confirmation"
                    :error-messages="errors.collect('password_confirmation')"
                    type="password"
                  ></v-text-field>
                </v-flex>

                <v-flex xs12>
                  <v-subheader>Permissão de Acesso</v-subheader>
                </v-flex>

                <v-flex xs12 md6>
                  <v-select
                    height="10"
                    outlined
                    name="roles"
                    :items="roles"
                    v-model="formData.roles"
                    item-text="name"
                    item-value="name"
                    label="Função de utilizador"
                    prepend-inner-icon="mdi-clipboard-account"
                    no-data-text="Nenhuma função registada"
                    chips
                    multiple
                    deletable-chips
                  ></v-select>
                </v-flex>

                <v-flex xs12 md6>
                  <v-select
                    height="10"
                    outlined
                    name="permissions"
                    :items="permissions"
                    v-model="formData.permissions"
                    item-text="name"
                    item-value="name"
                    label="Permissão de utilizador"
                    prepend-inner-icon="mdi-clipboard-text"
                    no-data-text="Nenhuma permissão registada"
                    chips
                    multiple
                    deletable-chips
                  ></v-select>
                </v-flex>

                <v-flex xs12>
                  <p>Ativação</p>
                  <v-switch
                    v-model="formData.status"
                    :label="formData.status ? 'Ativo':'Inativo'"
                    color="indigo"
                    value
                    input-value="true"
                    hide-details
                  ></v-switch>
                </v-flex>
              </v-layout>
            </v-form>
          </v-container>
          <small>*Campos de preenchimento obrigatório</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="addUser" rounded color="primary">Guardar</v-btn>
          <v-btn rounded text @click="clear">
            <v-icon>mdi-eraser</v-icon>
          </v-btn>
          <v-btn rounded text @click="goBack">
            <v-icon>mdi-keyboard-backspace</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import validateDictionary from "@/helpers/api/validateDictionary";
import { clearForm } from "@/mixins/Form";
import { getRolesDatas, getPermissionsDatas } from "@/mixins/HelpersData";
import { flashAlert } from "@/mixins/AppAlerts";
import moment from 'moment'
export default {
  mixins: [getRolesDatas, getPermissionsDatas, clearForm, flashAlert],

  data: () => ({
    showPass: false,
    formErrors: [],
    birthdate_menu: false,

    formData: {
      name: "",
      lastname: "",
      username: "",
      gender: "",
      ic: "",
      phone_number: "",
      email: "",
      password: "",
      birthdate: new Date().toISOString().substr(0, 10),
      password_confirmation: "",
      status: false,
      avatar: "default.svg",
      roles: [],
      permissions: []
    },
    dictionary: validateDictionary
  }),
  created() {
    this.getPermissions();
    this.getRoles();
  },
  mounted() {
    this.$validator.localize("pt", this.dictionary);
  },

  computed: {
    valDate() {
      return moment(new Date().toISOString().substr(0, 10)).format(
        "DD/MM/YYYY"
      );
    },
    formattingBirthdate() {
      return this.formData.birthdate
        ? moment(this.formData.birthdate).format("DD/MM/YYYY")
        : "";
    }
  },
  methods: {
    addUser() {
      this.$validator.validateAll().then(noErrorOnValidate => {
        if (noErrorOnValidate) {
          axios
            .post("/users", this.$data.formData)
            .then(response => {
              this.feedback("success", response.data.msg, 3000, true, 'top');
              window.getApp.$emit("APP_UPDATE_ALL_USERS_DATA");
              this.clear();
              this.$router.push({ name: "list-users" });
              this.formErrors = [];
            })
            .catch(err => {
              this.formErrors = err.response.data.errors;
            });
        }
      });
    },
    goBack: function() {
      this.$router.push({ name: "list-users" });
    }
  }
};
</script>
