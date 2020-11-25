<template>
  <v-container>
    <h1 class="subheading text-center">{{ $t("projects.title") }}</h1>
    <p class="text-center">{{ $t("projects.desc") }}</p>
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
          <span class="caption">{{ project.status }}</span>
          <v-btn icon :href="`${project.repository}`" target="_blank">
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
          repository: "https://github.com/AlnPir/Portfolio",
          status: "100%",
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
                    name: "HTML5",
                  },
                  {
                    brand: require("@/assets/img/brand/css3.png"),
                    name: "CSS3",
                  },
                  {
                    brand: require("@/assets/img/brand/js.png"),
                    name: "JavaScript",
                  },
                  {
                    brand: require("@/assets/img/brand/vuejs.png"),
                    name: "Vue.js",
                  },
                  {
                    brand: require("@/assets/img/brand/vuetify.png"),
                    name: "Vuetify",
                  },
                ],
              },
              {
                text: "Backend",
                items: [
                  {
                    brand: require("@/assets/img/brand/php.png"),
                    name: "PHP",
                  },
                  {
                    brand: require("@/assets/img/brand/git.png"),
                    name: "Git",
                  },
                  {
                    brand: require("@/assets/img/brand/npm.png"),
                    name: "npm",
                  },
                ],
              },
            ],
          },
        },
        {
          title: "projects.fitness_center.title",
          desc: "projects.fitness_center.desc",
          repository: "https://github.com/AlnPir/FitnessCenter",
          status: "100%",
          dialog: {
            title: "projects.fitness_center.title",
            desc: "projects.fitness_center.dialog.desc",
            technical_details:
              "projects.fitness_center.dialog.technical_details",
            skills: [
              {
                text: "Frontend",
                items: [
                  {
                    brand: require("@/assets/img/brand/html5.png"),
                    name: "HTML5",
                  },
                  {
                    brand: require("@/assets/img/brand/css3.png"),
                    name: "CSS3",
                  },
                  {
                    brand: require("@/assets/img/brand/js.png"),
                    name: "JavaScript",
                  },
                  {
                    brand: require("@/assets/img/brand/bootstrap.png"),
                    name: "Bootstrap 4",
                  },
                ],
              },
              {
                text: "Backend",
                items: [
                  {
                    brand: require("@/assets/img/brand/php.png"),
                    name: "PHP",
                  },
                  {
                    brand: require("@/assets/img/brand/composer.png"),
                    name: "Composer",
                  },
                  {
                    brand: require("@/assets/img/brand/symfony.png"),
                    name: "Symfony",
                  },
                  {
                    brand: require("@/assets/img/brand/mariadb.png"),
                    name: "MariaDB",
                  },
                ],
              },
              {
                text: "Server",
                items: [
                  
                  {
                    brand: require("@/assets/img/brand/nginx.png"),
                    name: "Nginx",
                  },
                  {
                    brand: require("@/assets/img/brand/docker.png"),
                    name: "Docker",
                  },
                  {
                    brand: require("@/assets/img/brand/git.png"),
                    name: "Git",
                  },
                  {
                    brand: require("@/assets/img/brand/linux.png"),
                    name: "Linux",
                  },
                ],
              },
            ],
          },
        },
        {
          title: "projects.microshop.title",
          desc: "projects.microshop.desc",
          repository: "https://github.com/AlnPir/MicroShop",
          status: "30%",
          dialog: {
            title: "projects.microshop.title",
            desc: "projects.microshop.dialog.desc",
            technical_details:
              "projects.microshop.dialog.technical_details",
            skills: [
              {
                text: "Frontend",
                items: [
                  {
                    brand: require("@/assets/img/brand/html5.png"),
                    name: "HTML5",
                  },
                  {
                    brand: require("@/assets/img/brand/css3.png"),
                    name: "CSS3",
                  },
                  {
                    brand: require("@/assets/img/brand/js.png"),
                    name: "JavaScript",
                  },
                  {
                    brand: require("@/assets/img/brand/npm.png"),
                    name: "npm",
                  },
                  {
                    brand: require("@/assets/img/brand/vuejs.png"),
                    name: "Vue.js",
                  },
                  {
                    brand: require("@/assets/img/brand/vuetify.png"),
                    name: "Vuetify",
                  },
                ],
              },
              {
                text: "Backend",
                items: [
                  {
                    brand: require("@/assets/img/brand/java.png"),
                    name: "Java",
                  },
                  {
                    brand: require("@/assets/img/brand/spring.png"),
                    name: "Spring",
                  },
                   {
                    brand: require("@/assets/img/brand/maven.png"),
                    name: "Maven",
                  },
                ],
              },
              {
                text: "Server",
                items: [
                  {
                    brand: require("@/assets/img/brand/tomcat.png"),
                    name: "Tomcat",
                  },
                  {
                    brand: require("@/assets/img/brand/docker.png"),
                    name: "Docker",
                  },
                  {
                    brand: require("@/assets/img/brand/git.png"),
                    name: "Git",
                  },
                  {
                    brand: require("@/assets/img/brand/linux.png"),
                    name: "Linux",
                  },
                ],
              },
            ],
          },
        },
        //  {
        //   title: "projects.devops_pipeline.title",
        //   desc: "projects.devops_pipeline.desc",
        //   repository: "",
        //   status: "5%",
        //   dialog: {
        //     title: "projects.devops_pipeline.title",
        //     desc: "projects.devops_pipeline.dialog.desc",
        //     technical_details:
        //       "projects.devops_pipeline.dialog.technical_details",
        //     skills: [
        //     {
        //       text: "Virtualization",
        //       items: [
        //         {
        //           brand: require("@/assets/img/brand/vagrant.png"),
        //           name: "Vagrant",
        //         },
        //       ],
        //     },
        //     {
        //       text: "CI/CD",
        //       items: [
        //         {
        //           brand: require("@/assets/img/brand/ansible.png"),
        //           name: "Ansible",
        //         },
        //         {
        //           brand: require("@/assets/img/brand/jenkins.png"),
        //           name: "Jenkins",
        //         },
        //         {
        //           brand: require("@/assets/img/brand/gitlab.png"),
        //           name: "Gitlab",
        //         },
        //       ],
        //     },
        //     {
        //       text: "Tests",
        //       items: [
        //         {
        //           brand: require("@/assets/img/brand/jmeter.png"),
        //           name: "Jmeter",
        //         },
        //       ],
        //     },
        //     {
        //       text: "Containerization ",
        //       items: [
        //         {
        //           brand: require("@/assets/img/brand/docker.png"),
        //           name: "Docker",
        //         },
        //       ],
        //     },
        //     {
        //       text: "Project Management",
        //       items: [
        //         {
        //           brand: require("@/assets/img/brand/scrum.png"),
        //           name: "Scrum",
        //         },
        //       ],
        //     },
        //   ],
        //   },
        // },
      ],
    };
  },
};
</script>

<style scoped></style>
