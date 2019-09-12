<template lang="html">
  <v-container grid-list-xs>
    <v-layout row wrap align-center>
      <v-flex xs12 text-xs-center my-3>
        <h2>Notícias e Eventos</h2>
      </v-flex>
    </v-layout>
    <v-layout row wrap data-aos="zoom-in"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
    <template v-for="i in 10">
      <v-flex xs12 sm3 pa-3  :key="i">
        <v-card>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" aspect-ratio="2.75"></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Teste</h3>
              <div><h4>Um pequeno resumo de teste...</h4></div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="primary" tile>Ver</v-btn>
            <!-- <v-btn flat color="orange">LER</v-btn> -->
          </v-card-actions>
        </v-card>
      </v-flex>

    </template>

  </v-layout>
</v-container>
</template>

<script>

export default {
}
</script>

<style lang="css">
</style>
