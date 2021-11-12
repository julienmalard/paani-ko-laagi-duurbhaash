import Vue from "vue";
import { client } from "@constl/ipa";

export default Vue.extend({
  data: function () {
    return {
      crochets: [] as client.schémaFonctionOublier[],
    };
  },
  methods: {
    पछि_बिर्सनुहोस्(
      crochet: client.schémaFonctionOublier | client.schémaFonctionOublier[]
    ): void {
      if (!Array.isArray(crochet)) {
        crochet = [crochet];
      }
      this.crochets = [...crochet, ...this.crochets];
    },
  },
  destroyed: function () {
    this.crochets.forEach((c) => c());
    this.crochets = [];
  },
});
