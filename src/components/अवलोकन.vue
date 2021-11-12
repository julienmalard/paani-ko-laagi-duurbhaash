<template>
  <v-list-group
    :prepend-icon="
      Math.floor(Math.random() * 2)
        ? 'mdi-face-woman-profile'
        : 'mdi-face-man-profile'
    "
  >
    <template v-slot:activator>
      <v-list-item-content>
        <v-list-item-title v-text="मिति"></v-list-item-title>

        <v-list-item-subtitle>वर्षा: {{ वर्षा }} मि॰ मी॰</v-list-item-subtitle>
      </v-list-item-content>
    </template>

    <v-list-item>
      <v-list-item-content class="text-left">
        <v-list-item-title>
          योगदानकर्ता: {{ maro ? "म" : योगदानकर्ता }}
        </v-list-item-title>
      </v-list-item-content>
      <v-list-item-action>
        <v-btn v-if="maro" icon>
          <v-icon color="error" @click="() => मेटाउनुहोस्()">mdi-delete</v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>

    <v-list-item>
      <v-list-item-content class="text-left">
        <v-list-item-title> समन्वय: {{ समन्वय }} </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item>
      <v-list-item-content class="text-left">
        <v-list-item-title>
          चित्र:
          <chitr-ko-khidki :chitra="data.données.चित्र.cid">
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on">mdi-image</v-icon>
            </template>
          </chitr-ko-khidki>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider />
  </v-list-group>
</template>

<script lang="ts">
import { உரைக்கு as संख्या } from "ennikkai";

import chitrKoKhidki from "@/components/चित्र_को_खिड़की.vue";

export default {
  name: "अवलोकन",
  props: ["data", "maro", "yogdanakarta"],
  components: { chitrKoKhidki },
  computed: {
    मिति: function (): string {
      return new Date(this.data.données.मिति).toLocaleDateString(
        "hi-NE-u-nu-deva-ca-indian"
      );
    },
    वर्षा: function (): string {
      return संख्या(this.data.données.वर्षा, "देवनागरी");
    },
    समन्वय: function (): string {
      const देशान्तर = संख्या(this.data.données.देशान्तर, "देवनागरी");
      const अकांश = संख्या(this.data.données.अकांश, "देवनागरी");
      const उचाई = संख्या(this.data.données.उचाई, "देवनागरी");
      return `(${देशान्तर}, ${अकांश}, ${उचाई})`;
    },
    योगदानकर्ता: function (): string {
      return this.yogdanakarta
        ? this.yogdanakarta.slice(9, 9 + 15) + "..."
        : "अज्ञात";
    },
  },
  methods: {
    मेटाउनुहोस्: async function () {
      await this.$ग्राहक.डाता_मेटाउनुहोस्(this.data.empreinte);
    },
  },
};
</script>

<style></style>
