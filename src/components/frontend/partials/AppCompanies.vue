<template>
  <v-container grid-list-xs>
     <v-row>
      <v-col cols="12">
        <v-row align="center" justify="center" class="grey lighten-5">
          <h2 class="text-center font-weight-thin">Parceiros</h2>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-row align="center" justify="center" class="grey lighten-5">
          <v-card v-for="n in 5" :key="n" class="ma-3 pa-6" outlined tile>Empresa {{n}}</v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
