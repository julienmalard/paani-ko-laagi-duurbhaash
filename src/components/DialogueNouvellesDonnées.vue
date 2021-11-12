<template>
  <v-dialog v-model="dialogue" scrollable max-width="400">
    <template v-slot:activator="{ on, attrs }">
      <slot name="activator" v-bind="{ on, attrs }"></slot>
    </template>

    <v-card>
      <v-card-title class="headline"> नयाँ डाता </v-card-title>
      <v-divider />

      <v-card-text class="mt-3">
        <v-text-field
          v-model="वर्षा"
          flat
          dense
          outlined
          class="mt-2"
          label="वर्षा"
        />
        <v-file-input
          v-model="चित्र"
          accept="image/*"
          label="चित्र"
          dense
          outlined
        ></v-file-input>
        <v-text-field
          v-model="अकांश"
          flat
          dense
          outlined
          class="mt-2"
          label="अकांश"
        />
        <v-text-field
          v-model="देशान्तर"
          flat
          dense
          outlined
          class="mt-2"
          label="देशान्तर"
        />
        <v-text-field
          v-model="उचाई"
          flat
          dense
          outlined
          class="mt-2"
          label="उचाई"
        />
      </v-card-text>
      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="secondary" text outlined @click="fermer">
          रद्द गर्न
        </v-btn>
        <v-btn
          color="primary"
          :disabled="!तयार"
          depressed
          @click="() => डाता_थप्नुहोस्()"
        >
          राख्न
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import mixins from "vue-typed-mixins";

import mixinIPA from "@/mixins/तारामंडल";

export default mixins(mixinIPA).extend({
  name: "dialogueNouvellesDonnées",
  data: function () {
    return {
      dialogue: false,

      तालिका_पहिचान: undefined as undefined | string,
      चित्र: null as null | File,
      वर्षा: null as null | string,
      अकांश: null as null | string,
      देशान्तर: null as null | string,
      उचाई: null as null | string,
    };
  },
  mixins: [mixinIPA],
  computed: {
    तयार: function (): boolean {
      const { चित्र, वर्षा, अकांश, देशान्तर, उचाई } = this;

      return Boolean(चित्र && वर्षा && अकांश && देशान्तर && उचाई);
    },
  },
  methods: {
    async डाता_थप्नुहोस्() {
      if (!this.तालिका_पहिचान) throw new Error("प्रारम्भ गरिएको छैन");

      const { चित्र, वर्षा, अकांश, देशान्तर, उचाई } = this;

      if (!चित्र || !वर्षा || !अकांश || !देशान्तर || !उचाई) {
        throw new Error("अपूर्ण डाता");
      }

      await this.$तारामंडल.डाता_थप्नुहोस्(
        this.तालिका_पहिचान,
        new Date(),
        चित्र,
        Number.parseFloat(वर्षा),
        Number.parseFloat(अकांश),
        Number.parseFloat(देशान्तर),
        Number.parseFloat(उचाई)
      );
      this.fermer();
    },
    fermer() {
      this.dialogue = false;
      this.चित्र = null;
      this.वर्षा = null;
      this.अकांश = null;
      this.देशान्तर = null;
      this.उचाई = null;
    },
  },

  mounted: async function () {
    const तालिका_पहिचानलाई_बिर्सनुहोस् =
      await this.$तारामंडल.तालिका_पहिचान_पछ्याउनुहोस(
        (तालिका_पहिचान?: string) => (this.तालिका_पहिचान = तालिका_पहिचान)
      );
    this.पछि_बिर्सनुहोस्(तालिका_पहिचानलाई_बिर्सनुहोस्);
  },
});
</script>

<style></style>
