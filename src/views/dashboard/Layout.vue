<template>
  <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="sidebarMenu = !sidebarMenu"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-icon>mdi-account</v-icon>
  </v-app-bar>
  <v-navigation-drawer 
      v-model="sidebarMenu" 
      app
      floating
      >
      <v-list dense color="primary" dark>
          <v-list-item>
              <v-list-item-title>
                  <h3 class="font-weight-thin">A-HOST</h3>
              </v-list-item-title>
          </v-list-item>
      </v-list>
      <v-list>
          <v-list-item v-for="item in items" :key="item.title" link :to="item.href">
              <v-icon color="primary">{{ item.icon }}</v-icon>
              <v-list-item-title class="primary--text ml-3">{{ item.title }}</v-list-item-title>
          </v-list-item>
      </v-list>
  </v-navigation-drawer>

  <v-main>
    <v-container fluid>
      <!-- If using vue-router -->
      <!-- <h1>TEST 18hausdhaosdnakjndsakjn</h1> -->
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app>
    <!-- -->
  </v-footer>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "DashboardLayout",
  setup() {
    const sidebarMenu = ref<boolean>(true);
    const items = ref([
        { title:"Dashboard", href:"/", icon:"mdi-home-outline" },
        { title:"Expense", href:"/expense", icon:"mdi-shield-account" },
        // { title:"Components", href:"/expense", icon:"mdi-palette-swatch" },
        // { title:"Customers", href:"/customers", icon:"mdi-account-search-outline" },
        // { title:"Orders", href:"/orders", icon:"mdi-bus-clock" },
    ]);

    return { sidebarMenu, items };
  },
});
</script>