<template>
  <div class="nav">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      :style="{
        'background-image': `linear-gradient(0deg, rgba(32,32,32,1) 0%, rgba(37,37,37,1) 25%, rgba(48,48,48,1) 50%, rgba(53,53,53,1) 75%, rgba(64,64,64,1) 100%)`,
      }"
    >
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="@/assets/img/me.png" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              Alan&nbsp;
              <span class="blue--text text--lighten-2">Pierre</span>
            </v-list-item-title>
            <v-list-item-subtitle>{{
              $t(`navigation_drawer.status`)
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item-group>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            route
            :to="item.route"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon" color="blue lighten-2"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{
                $t(`navigation_drawer.${item.text}`)
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

        <PopinContact></PopinContact>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      dark
      src="@/assets/img/bg-nav.webp"
    >
      <v-row id="rowIcons">
        <v-btn icon disabled class="mx-auto">
          <v-img src="@/assets/img/logo.png" width="50"></v-img>
        </v-btn>
        <v-btn
          icon
          class="mx-auto"
          href="https://github.com/AlnPir"
          target="_blank"
        >
          <v-icon>mdi-github</v-icon>
        </v-btn>
        <v-btn
          icon
          class="mx-auto"
          href="https://www.linkedin.com/in/alan-pierre-95657419a/"
          target="_blank"
        >
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
      </v-row>
      <v-spacer />
      <LangSwitcher></LangSwitcher>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
  </div>
</template>

<script>
import LangSwitcher from "@/components/LangSwitcher";
import PopinContact from "@/components/PopinContact";

export default {
  name: "Nav",
  components: {
    LangSwitcher,
    PopinContact,
  },
  data() {
    return {
      drawer: null,
      items: [
        { icon: "mdi-contacts", text: "about_me", route: "/" },
        {
          icon: "mdi-history",
          text: "experiences",
          route: "/experiences",
        },
        {
          icon: "mdi-school",
          text: "education",
          route: "/education",
        },
        {
          icon: "mdi-help-circle",
          text: "skills",
          route: "/skills",
        },
        {
          icon: "mdi-cellphone-link",
          text: "projects",
          route: "/projects",
        },
      ],
    };
  },
};
</script>

<style scoped>
#rowIcons {
  max-width: 200px;
  min-width: 200px;
}
</style>
