<template>
  <v-list-item link>
    <v-list-item-avatar>
      <v-icon>
      {{ Math.floor(Math.random() * 2) ? 'mdi-face-woman-profile' : 'mdi-face-man-profile' }}
      </v-icon>
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title v-text="मिति"></v-list-item-title>

      <v-list-item-subtitle>वर्षा: {{ वर्षा }} मि॰ मी॰</v-list-item-subtitle>
    </v-list-item-content>

    <v-list-item-action>
      <v-btn v-if="maro" icon>
        <v-icon color="error" @click="()=>मेटाउनुहोस्()">mdi-delete</v-icon>
      </v-btn>
    </v-list-item-action>

  </v-list-item>
</template>

<script lang="ts">
import { உரைக்கு as संख्या} from "ennikkai"

export default {
  name: "observation",
  props: ["data", "maro"],
  computed: {
    मिति: function (): string {
      return new Date(this.data.données.मिति).toLocaleDateString("hi-NE-u-nu-deva-ca-indian")
    },
    वर्षा: function (): string {
      return संख्या(this.data.données.वर्षा, "देवनागरी")
    },
  },
  methods: {
    मेटाउनुहोस्: async function () {
      await this.$तारामंडल.डाता_मेटाउनुहोस्(this.data.empreinte)
    }
  }
}
</script>

<style>

</style>
