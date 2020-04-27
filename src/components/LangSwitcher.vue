<template>
  <v-menu offset-y bottom transition="slide-y-transition">
    <v-list>
      <v-list-tile
        v-for="lang in languages"
        @click="setLanguage(lang.value)"
        v-show="lang.value !== $i18n.locale"
        :key="`lang-${lang.value}`"
      >
        <v-list-tile-title>
          <v-btn>{{lang.value}}</v-btn>
        </v-list-tile-title>
      </v-list-tile>
    </v-list>

    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on">{{$i18n.locale}}</v-btn>
    </template>
  </v-menu>
</template>

<script>
export default {
  name: "LangSwitcher",
  computed: {
    languages: function() {
      return [
        {
          text: this.$t("general.english"),
          value: "en"
        },
        {
          text: this.$t("general.french"),
          value: "fr"
        }
      ];
    }
  },
  methods: {
    setLanguage: function(lang) {
      this.$i18n.locale = lang;
    }
  }
};
</script> 