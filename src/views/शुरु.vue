<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/चित्र-ने.png')"
          class="my-6"
          contain
          height="75"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">तपाईलाई स्वागत छ</h1>
        <v-btn
          outlined
          class="mt-5"
          @click="$router.push({ path: '/मारोडाता' })"
        >
          शुुरु गर्नुहोस्
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",
});
</script>
