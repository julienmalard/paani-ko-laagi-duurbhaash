<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold my-3">समुदाय डाताहरु</h1>
        <v-list>
          <avalokan
            v-for="डाता in डाताहरु"
            :key="डाता.élément.empreinte"
            :data="डाता.élément"
            :maro="मारो(डाता)"
            :yogdanakarta="डाता.idBdAuteur"
          />
        </v-list>

        <div v-if="!डाताहरु.length">
          <p class="subheading font-weight-regular text--disabled">
            अहिले कुनै डाताहरु उपलब्ध छैनन्।
          </p>
          <v-btn
            outlined
            class="mt-2"
            @click="$router.push({ path: encodeURI('/मारोडाता') })"
          >
            मारो डाताहरु
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import mixins from "vue-typed-mixins";

import avalokan from "@/components/अवलोकन.vue";

import mixinIPA from "@/mixins/तारामंडल";

import { réseau } from "@constl/ipa";
import { S4W_डाता } from "@/plugins/तारामंडल/केन्दीय-पानिकोलागिदूर्भाषहरु";

export default mixins(mixinIPA).extend({
  name: "समुदाय",
  components: { avalokan },
  mixins: [mixinIPA],
  data: function () {
    return {
      डाताहरु: [] as réseau.élémentDeMembre<S4W_डाता>[],
      मारो_पहिचान: undefined as string | undefined,
    };
  },
  methods: {
    मारो: function (डाता: réseau.élémentDeMembre<S4W_डाता>): boolean {
      return डाता.idBdAuteur === this.मारो_पहिचान;
    },
  },
  mounted: async function () {
    const मारो_पहिचान_बिर्सनुहोस् =
      await this.$ग्राहक.तारामंडल.suivreIdBdRacine(
        (पहिचान: string) => (this.मारो_पहिचान = पहिचान)
      );
    const डाता_लाई_बिर्सनुहोस् = await this.$ग्राहक.सबैको_डाता_पछ्याउनुहोस्(
      (डाताहरु: réseau.élémentDeMembre<S4W_डाता>[]) => (this.डाताहरु = डाताहरु)
    );
    this.पछि_बिर्सनुहोस्([डाता_लाई_बिर्सनुहोस्, मारो_पहिचान_बिर्सनुहोस्]);
  },
});
</script>

<style></style>
