<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style>
* {
  font-size: 14px;
}

h2 {
  font-size: 18px;
}

@media screen and (max-width: 800px) {
  * {
    font-size: 12px;
  }
  h2 {
    font-size: 16px;
  }
}
</style>
