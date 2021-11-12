<template>
  <div>
    <v-navigation-drawer permanent expand-on-hover app>
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar @click="$router.push('/')">
            <v-img
              :src="require('../assets/चित्र-छोटा.png')"
              contain
              height="25"
            ></v-img>
          </v-list-item-avatar>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item link @click="$router.push({ path: '/मारोडाता' })">
          <v-list-item-icon>
            <v-icon>mdi-database</v-icon>
          </v-list-item-icon>
          <v-list-item-title>मारो डाताहरु</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="$router.push({ path: '/समुदाय' })">
          <v-list-item-icon>
            <v-icon>mdi-share-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-title>समुदाय डाताहरु</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
