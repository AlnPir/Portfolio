<template>
  <v-container>
    <h1 class="subheading text-center">{{ $t("skills.title") }}</h1>
    <v-row>
      <v-col sm="12">
        <v-expansion-panels :value="0">
          <v-expansion-panel>
            <v-expansion-panel-header>
              <h2 class="text-center">{{ $t(items[0].title) }}</h2>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <SkillCard :card="items[0].card"></SkillCard>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-row>
          <v-col cols="12" sm="6">
            <v-expansion-panels :value="0">
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <h2 class="text-center">{{ $t(items[1].title) }}</h2>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <SkillCard :card="items[1].card"></SkillCard>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
          <v-col cols="12" sm="6">
            <v-expansion-panels :value="0">
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <h2 class="text-center">{{ $t(items[2].title) }}</h2>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <SkillCard :card="items[2].card"></SkillCard>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import SkillCard from "@/components/SkillCard";

export default {
  name: "Skills",
  components: { SkillCard },
  data() {
    return {
      items: [
        {
          title: "DevOps",
          card: [
            {
              text: "Virtualization",
              items: [
                {
                  brand: require("@/assets/img/brand/vagrant.png"),
                  name: "Vagrant",
                },
              ],
            },
            {
              text: "CI/CD",
              items: [
                {
                  brand: require("@/assets/img/brand/ansible.png"),
                  name: "Ansible",
                },
                {
                  brand: require("@/assets/img/brand/jenkins.png"),
                  name: "Jenkins",
                },
                {
                  brand: require("@/assets/img/brand/gitlab.png"),
                  name: "Gitlab",
                },
              ],
            },
            {
              text: "Tests",
              items: [
                {
                  brand: require("@/assets/img/brand/jmeter.png"),
                  name: "Jmeter",
                },
              ],
            },
            {
              text: "Containerization ",
              items: [
                {
                  brand: require("@/assets/img/brand/docker.png"),
                  name: "Docker",
                },
              ],
            },
            {
              text: "Project Management",
              items: [
                {
                  brand: require("@/assets/img/brand/scrum.png"),
                  name: "Scrum",
                },
              ],
            },
          ],
        },
        {
          title: "Dev",
          card: [
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
                  brand: require("@/assets/img/brand/symfony.png"),
                  name: "Symfony",
                },
                {
                  brand: require("@/assets/img/brand/typo3.png"),
                  name: "TYPO3",
                },
                {
                  brand: require("@/assets/img/brand/java.png"),
                  name: "Java",
                },
                {
                  brand: require("@/assets/img/brand/spring.png"),
                  name: "Spring",
                },
              ],
            },
            {
              text: "Versionning / Build",
              items: [
                {
                  brand: require("@/assets/img/brand/git.png"),
                  name: "Git",
                },
                {
                  brand: require("@/assets/img/brand/npm.png"),
                  name: "npm",
                },
                {
                  brand: require("@/assets/img/brand/composer.png"),
                  name: "Composer",
                },
                {
                  brand: require("@/assets/img/brand/maven.png"),
                  name: "Maven",
                },
              ],
            },
          ],
        },
        {
          title: "Ops",
          card: [
            {
              text: "Server / Proxy / Load Balancer",
              items: [
                {
                  brand: require("@/assets/img/brand/nginx.png"),
                  name: "Nginx",
                },

                {
                  brand: require("@/assets/img/brand/traefik.png"),
                  name: "Traefik",
                },
              ],
            },
            {
              text: "Scripting",
              items: [
                {
                  brand: require("@/assets/img/brand/python.png"),
                  name: "Python",
                },
                {
                  brand: require("@/assets/img/brand/c.png"),
                  name: "C",
                },
                {
                  brand: require("@/assets/img/brand/bash.png"),
                  name: "Bash",
                },
              ],
            },
            {
              text: "Database",
              items: [
                {
                  brand: require("@/assets/img/brand/mariadb.png"),
                  name: "MariaBD",
                },
                {
                  brand: require("@/assets/img/brand/elasticsearch.png"),
                  name: "ElasticSearch",
                },
              ],
            },
            {
              text: "Operating System",
              items: [
                {
                  brand: require("@/assets/img/brand/debian.png"),
                  name: "Debian",
                },
                {
                  brand: require("@/assets/img/brand/windows.png"),
                  name: "Windows",
                },
                {
                  brand: require("@/assets/img/brand/archlinux.png"),
                  name: "ArchLinux",
                },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped></style>
