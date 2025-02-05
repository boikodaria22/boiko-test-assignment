<template>
  <div class="fixed-action-btn">
    <v-btn color="secondary" large @click="router.back"> Back </v-btn>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style scoped>
.fixed-action-btn {
  position: fixed;
  bottom: 0px;
  right: 0px;
  z-index: 1000;
  width: 100%;
  background-color: white;
  padding: 15px 30px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: right;
}

.v-btn {
  font-weight: bold;
}
</style>
