<template>
  <div>
    <v-app-bar
      dark
      color="teal"
    >
      <v-toolbar-title>
        <router-link to="/" class="text-decoration-none text-decoration-none font-weight-bold white--text">
          miniBLOG
        </router-link>
      </v-toolbar-title>
      <v-spacer />
      <span> username </span>
      <v-btn dark class="mx-3">
        <router-link to="/login" class="white--text text-decoration-none font-weight-bold">
          ログイン
        </router-link>
      </v-btn>
    </v-app-bar>
  </div>
</template>
