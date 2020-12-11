<template>
  <v-menu offset-y bottom transition="slide-y-transition">
    <v-list class="my-n1">
      <v-btn
        text
        v-for="lang in languages"
        @click="setLanguage(lang.value)"
        v-show="lang.value !== $i18n.locale"
        :key="`lang-${lang.value}`"
        ><v-img :src="lang.flag" width="20" class="mr-1"></v-img
        >{{ lang.value }}</v-btn
      >
    </v-list>

    <template v-slot:activator="{ on }">
      <v-btn text disabled class="my-n2" v-on="on"
        ><v-img :src="languages.fr.flag" width="20" class="mr-1"></v-img
        >{{ $i18n.locale }}
        <v-img
          src="@/assets/img/menu-down.png"
          width="20"
          class="mr-n3"
        ></v-img>
      </v-btn>
    </template>
  </v-menu>
</template>

<script>
import { localize } from "vee-validate";
import fr from "@/assets/img/fr.svg";
import en from "@/assets/img/en.svg";

export default {
  name: "LangSwitcher",
  data: () => ({
    languages: {
      en: {
        value: "en",
        flag: en,
      },
      fr: {
        value: "fr",
        flag: fr,
      },
    },
  }),
  methods: {
    setLanguage: function(lang) {
      this.$i18n.locale = lang;
      localize(lang);
    },
  },
};
</script>
