<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold my-3">मारो डाताहरु</h1>
        <v-list>
          <nayan-data-ko-kidki>
            <template v-slot:activator="{ on, attrs }">
              <v-list-item v-bind="attrs" v-on="on">
                <v-list-item-avatar>
                  <v-icon>mdi-plus</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>डाताहरु थप्नुहोस्</v-list-item-content>
              </v-list-item>
            </template>
          </nayan-data-ko-kidki>
          <v-divider />
          <avalokan
            v-for="डाता in डाताहरु"
            :key="डाता.empreinte"
            :data="डाता"
            :maro="true"
          />
        </v-list>

        <p
          v-if="!डाताहरु.length"
          class="subheading font-weight-regular text--disabled"
        >
          अहिले कुनै डाताहरु उपलब्ध छैनन्।
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import mixins from "vue-typed-mixins";

import nayanDataKoKidki from "@/components/नयाँ_डाता_को_खिड़की.vue";
import avalokan from "@/components/अवलोकन.vue";

import mixinIPA from "@/mixins/तारामंडल";

import { valid } from "@constl/ipa";

import { S4W_डाता } from "@/plugins/तारामंडल/केन्दीय-पानिकोलागिदूर्भाषहरु";

export default mixins(mixinIPA).extend({
  name: "मारोडाता",
  components: { nayanDataKoKidki, avalokan },
  mixins: [mixinIPA],
  data: function () {
    return {
      डाताहरु: [] as valid.élémentDonnées<S4W_डाता>[],
    };
  },
  mounted: async function () {
    const मारो_डाता_बिर्सनुहोस् = await this.$ग्राहक.मारो_डाता_पछ्याउनुहोस्(
      (डाताहरु: valid.élémentDonnées<S4W_डाता>[]) => (this.डाताहरु = डाताहरु)
    );
    this.पछि_बिर्सनुहोस्(मारो_डाता_बिर्सनुहोस्);
  },
});
</script>
