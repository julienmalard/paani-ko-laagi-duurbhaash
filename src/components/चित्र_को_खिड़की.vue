<template>
  <v-dialog v-model="dialogue" scrollable max-width="400">
    <template v-slot:activator="{ on, attrs }">
      <slot name="activator" v-bind="{ on, attrs }"></slot>
    </template>

    <v-card>
      <v-card-title class="headline"> चित्र </v-card-title>
      <v-divider />
      <v-card-text>
        <v-skeleton-loader v-if="!चित्र_ठेगाना" class="ma-4" type="image" />
        <v-img v-else :src="चित्र_ठेगाना" class="ma-4" contain />
      </v-card-text>
      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="secondary" text outlined @click="() => रद्द_गर्न()">
          रद्द गर्न
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "चित्र_को_खिड़की",
  props: ["chitra"],
  data: function () {
    return {
      dialogue: false,

      चित्र_ठेगाना: null as null | string,
    };
  },
  watch: {
    chitra: async function (val) {
      const चित्र = await this.$ग्राहक.तारामंडल.obtFichierSFIP(val);
      if (चित्र) {
        const ठेगाना = URL.createObjectURL(
          new Blob([चित्र.buffer], { type: "image/png" })
        );
        this.चित्र_ठेगाना = ठेगाना;
      } else {
        this.चित्र_ठेगाना = null;
      }
    },
  },
  methods: {
    रद्द_गर्न: function () {
      this.dialogue = false;
    },
  },
});
</script>

<style></style>
