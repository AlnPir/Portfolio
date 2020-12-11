<template>
  <v-dialog
    v-model="show"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <template v-slot:activator="{ on }">
      <v-btn color="primary" class="mb-2" v-on="on">{{
        $t(`general.btn_more`)
      }}</v-btn>
    </template>
    <v-card>
      <v-toolbar color="primary">
        <v-toolbar-title class="font-weight-bold">{{
          $t(dialog.title)
        }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn icon @click="show = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-card-title>{{ $t("projects.desc_project") }}</v-card-title>
      <v-card-text class="body-1" v-html="$t(dialog.desc)"></v-card-text>
      <v-divider />
      <v-card-title class="primary--text center mb-n3">{{
        $t("projects.techs_used")
      }}</v-card-title>
      <v-row>
        <v-flex v-for="(item, key) in dialog.skills" :key="`skills-${key}`" m6>
          <v-card class="ma-5 px-2 elevation-4">
            <v-card-title class="nobreak subheading font-weight-bold">
              {{ item.text }}
            </v-card-title>
            <v-divider></v-divider>
            <v-row>
              <v-flex
                class="pa-4"
                v-for="skill in item.items"
                :key="`skills-${key}-${skill.name}`"
              >
                <v-card-text class="center">
                  <v-btn class="mr-3" icon href target="_blank">
                    <v-img :src="skill.brand" width="40"></v-img>
                  </v-btn>
                  {{ skill.name }}
                </v-card-text>
              </v-flex>
            </v-row>
          </v-card>
        </v-flex>
      </v-row>
      <v-divider></v-divider>
      <v-card-title>{{ $t("projects.technical_details") }}</v-card-title>
      <v-card-text
        class="body-1"
        v-html="$t(dialog.technical_details)"
      ></v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "DialogProject",
  props: ["dialog"],
  data() {
    return {
      show: false,
    };
  },
};
</script>
