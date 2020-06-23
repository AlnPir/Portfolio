<template>
  <v-container>
    <h1 class="subheading text-center">{{ $t('projects.title') }}</h1>

    <v-row fluid>
      <v-card
        class="mx-auto mt-5"
        max-width="320"
        shaped
        v-for="(project, key) in items"
        :key="`project-${key}`"
      >
        <v-img src="@/assets/img/bg-2.webp" height="200px"></v-img>

        <v-card-title>
          {{ $t(project.title) }}
          <v-spacer></v-spacer>
          <v-btn icon href="https://github.com/AlnPir?tab=repositories" target="_blank">
            <v-icon>mdi-github</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-subtitle>{{ $t(project.desc) }}</v-card-subtitle>

        <v-card-actions>
          <DialogProject :dialog="project.dialog"></DialogProject>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>


<script>
import DialogProject from "@/components/DialogProject";

export default {
  name: "Projects",
  components: { DialogProject },
  data() {
    return {
      items: [
        {
          title: "projects.cv.title",
          desc: "projects.cv.desc",
          dialog: {
            title: "projects.cv.title",
            desc: "projects.cv.dialog.desc",
            technical_details: "projects.cv.dialog.technical_details",
            skills: [
              {
                text: "Frontend",
                items: [
                  {
                    brand: require("@/assets/img/brand/html5.png"),
                    name: "HTML5"
                  },
                  {
                    brand: require("@/assets/img/brand/css3.png"),
                    name: "CSS3"
                  },
                  {
                    brand: require("@/assets/img/brand/js.png"),
                    name: "JavaScript"
                  },
                  {
                    brand: require("@/assets/img/brand/vuejs.png"),
                    name: "Vue.js"
                  },
                  {
                    brand: require("@/assets/img/brand/vuetify.png"),
                    name: "Vuetify"
                  }
                ]
              },
              {
                text: "Backend",
                items: [
                  {
                    brand: require("@/assets/img/brand/php.png"),
                    name: "PHP"
                  },
                  {
                    brand: require("@/assets/img/brand/git.png"),
                    name: "Git"
                  },
                  {
                    brand: require("@/assets/img/brand/npm.png"),
                    name: "npm"
                  }
                ]
              }
            ]
          }
        }
        // {
        //   title: "projects.gym_web.title",
        //   desc: "projects.gym_web.desc",
        //   dialog: {
        //     title: "projects.gym_web.title",
        //     desc: "projects.gym_web.dialog.desc",
        //     technical_details: "projects.gym_web.dialog.technical_details",
        //     skills: [
        //       {
        //         text: "Frontend",
        //         items: [
        //           {
        //             brand: require("@/assets/img/brand/html5.png"),
        //             name: "HTML5"
        //           },
        //           {
        //             brand: require("@/assets/img/brand/css3.png"),
        //             name: "CSS3"
        //           },
        //           {
        //             brand: require("@/assets/img/brand/js.png"),
        //             name: "JavaScript"
        //           },
        //           {
        //             brand: require("@/assets/img/brand/bootstrap.png"),
        //             name: "Bootstrap 4",
        //             score: 4
        //           }
        //         ]
        //       },
        //       {
        //         text: "Backend",
        //         items: [
        //           {
        //             brand: require("@/assets/img/brand/php.png"),
        //             name: "PHP"
        //           },
        //           {
        //             brand: require("@/assets/img/brand/symfony.png"),
        //             name: "Symfony"
        //           },
        //           {
        //             brand: require("@/assets/img/brand/nginx.png"),
        //             name: "Nginx"
        //           },
        //           {
        //             brand: require("@/assets/img/brand/docker.png"),
        //             name: "Docker"
        //           },
        //           {
        //             brand: require("@/assets/img/brand/git.png"),
        //             name: "Git"
        //           },
        //           {
        //             brand: require("@/assets/img/brand/debian.png"),
        //             name: "Debian"
        //           }
        //         ]
        //       }
        //     ]
        //   }
        // },
        // {
        //   title: "projects.gym_desktop.title",
        //   desc: "projects.gym_desktop.desc",
        //   dialog: {
        //     title: "projects.gym_desktop.title",
        //     desc: "projects.gym_desktop.dialog.desc",
        //     technical_details: "projects.gym_desktop.dialog.technical_details",
        //     skills: [
        //       {
        //         text: "Frontend",
        //         items: [
        //           {
        //             brand: require("@/assets/img/brand/html5.png"),
        //             name: "HTML5"
        //           },
        //           {
        //             brand: require("@/assets/img/brand/css3.png"),
        //             name: "CSS3"
        //           },
        //           {
        //             brand: require("@/assets/img/brand/js.png"),
        //             name: "JavaScript"
        //           },
        //           {
        //             brand: require("@/assets/img/brand/npm.png"),
        //             name: "npm"
        //           },
        //           {
        //             brand: require("@/assets/img/brand/vuejs.png"),
        //             name: "Vue.js"
        //           },
        //           {
        //             brand: require("@/assets/img/brand/vuetify.png"),
        //             name: "Vuetify"
        //           }
        //         ]
        //       },
        //       {
        //         text: "Backend",
        //         items: [
        //           {
        //             brand: require("@/assets/img/brand/java.png"),
        //             name: "Java"
        //           },
        //           {
        //             brand: require("@/assets/img/brand/spring.png"),
        //             name: "Spring"
        //           },
        //           {
        //             brand: require("@/assets/img/brand/docker.png"),
        //             name: "Docker"
        //           },
        //           {
        //             brand: require("@/assets/img/brand/git.png"),
        //             name: "Git"
        //           },
        //           {
        //             brand: require("@/assets/img/brand/bootstrap.png"),
        //             name: "Gradle ",
        //             score: 4
        //           },
        //           {
        //             brand: require("@/assets/img/brand/bootstrap.png"),
        //             name: "Tomcat ",
        //             score: 4
        //           }
        //         ]
        //       }
        //     ]
        //   }
        // }
      ]
    };
  }
};
</script>

<style scoped></style>
