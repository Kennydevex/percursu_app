<template>
  <div>
    <v-parallax src="http://localhost:8000/images/folks/avatar/1568084449.jpeg" height="300">
      <v-layout
        data-aos="fade-down"
        data-aos-duration="2000"
        column
        align-center
        justify-center
        class="white--text"
      >
        <img :src="require('../../../assets/app/logo.svg')" alt="Percursu" height="100" />
        <h1 class="white--text display-1 text-center font-weight-thin">Nha Percursu</h1>
        <div
          class="subheading text-center mt-3 font-weight-light"
        >Projetar um perfil digno do meu percurso</div>
        <!-- <v-btn class="mt-3" color="blue lighten-2" dark href="/pre-made-themes">Criar Um Perfil</v-btn> -->
        <template>
          <div data-aos="zoom-out-up" data-aos-delay="300">
            <template v-if="authUser">
              <!-- :to="{name: 'editar-colobaradores', params: {username: authUser.username}}" -->
              <v-btn
                v-if="authUser.folk.partner"
                class="mt-3"
                color="primary"
                rounded
                dark
                href="/pre-made-themes"
              >Editar o Meu Perfil</v-btn>
              <!-- :to="{name: 'criar-colobaradores'}" -->
              <v-btn
                v-if="!authUser.folk.partner"
                class="mt-3"
                color="primary"
                rounded
                dark
                href="/pre-made-themes"
              >Criar Um Perfil</v-btn>
            </template>

            <template v-else>
              <!-- :to="{name: 'login'}" -->
              <v-btn
                class="mt-3"
                color="primary"
                rounded
                dark
                href="/pre-made-themes"
              >Criar uma conta</v-btn>
            </template>
          </div>
        </template>
      </v-layout>
    </v-parallax>
  </div>
</template>

