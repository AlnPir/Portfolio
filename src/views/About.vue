<template>
  <div class="about">
    <v-container>
      <v-layout justify-center align-center>
        <div class="text-xs-center">
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-avatar :size="250" class="pt-5 mb-n5">
              <v-img class="elevation-9" src="@/assets/img/me.png" alt="me" />
            </v-avatar>
          </v-row>

          <v-card class="col-xs-6 elevation-5 pa-2">
            <v-card-text class="display-2">
              Alan&nbsp;
              <span class="blue--text text--lighten-2">Pierre</span>
            </v-card-text>
            <v-card-text class="subtitle-1 py-0">{{
              $t("home.condition")
            }}</v-card-text>
            <v-card-text class="body-2 pt-2">Besançon, France</v-card-text>
            <v-divider />
            <v-card-text
              class="body-1"
              v-html="$t(item.about_me)"
            ></v-card-text>
            <v-card-actions @click="show = !show">
              <v-card-text
                class="blue--text text--lighten-2 headline font-italic"
                >{{ $t(`general.more_about_me`) }}</v-card-text
              >
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>{{
                  show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>
                <v-card-text
                  class="body-1"
                  v-html="$t(item.hobbies)"
                ></v-card-text>
                <blockquote class="blockquote font-italic my-n5">
                  <p>
                    " Vite et bien, ni plus ni moins. <br />
                    Être et durer, sans trop tarder. <br />
                    Ne pas subir, toujours agir. "
                  </p>
                </blockquote>
              </div>
            </v-expand-transition>
          </v-card>
        </div>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false,
    item: {
      about_me: "home.about_me",
      hobbies: "home.hobbies",
    },
  }),
};
</script>

<style scoped>
.v-avatar {
  z-index: 1;
  position: center;
}
</style>
