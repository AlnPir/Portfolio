<template>
  <v-container fluid>
    <h1 class="subheading text-center mb-5">{{ $t("skills.title") }}</h1>

    <v-card class="ma-3 px-2 elevation-4" v-for="(item, key) in items" :key="`skills-${key}`">
      <v-card-title class="nobreak subheading font-weight-bold">
        {{
        $t(item.text)
        }}
      </v-card-title>
      <v-divider></v-divider>
      <v-row>
        <v-flex class="pa-4" v-for="skill in item.items" :key="`skills-${key}-${skill.name}`">
          <v-card-text class="center">
            <v-btn class="mr-3" icon href target="_blank">
              <v-img :src="(skill.brand)" width="40"></v-img>
            </v-btn>
            {{ skill.name }} :
            <span
              class="green--text text--lighten-1"
              v-if="skill.score <= 1"
            >{{ $t('skills.mastery.beginner') }}</span>
            <span
              class="light-green--text text--darken-1"
              v-else-if="skill.score <=2"
            >{{ $t('skills.mastery.basic') }}</span>
            <span
              class="yellow--text 0text--lighten-1"
              v-else-if="skill.score <= 3"
            >{{ $t('skills.mastery.common') }}</span>
            <span
              class="amber--text text--darken-1"
              v-else-if="skill.score <= 4"
            >{{ $t('skills.mastery.mastered') }}</span>
            <span class="red--text text--lighten-1" v-else>{{ $t('skills.mastery.advanced') }}</span>

            <v-rating
              v-model="skill.score"
              dense
              background-color="none"
              color="blue lighten-2"
              half-increments
              readonly="true"
              class="pt-3"
            ></v-rating>
          </v-card-text>
        </v-flex>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      items: [
        {
          text: "skills.languages",
          items: [
            {
              brand: require("@/assets/img/brand/html5.png"),
              name: "HTML5",
              score: 4.5
            },
            {
              brand: require("@/assets/img/brand/css3.png"),
              name: "CSS3",
              score: 3
            },
            {
              brand: require("@/assets/img/brand/js.png"),
              name: "JavaScript",
              score: 3
            },
            {
              brand: require("@/assets/img/brand/php.png"),
              name: "PHP",
              score: 4.5
            },
            {
              brand: require("@/assets/img/brand/java.png"),
              name: "Java",
              score: 4
            },
            {
              brand: require("@/assets/img/brand/python.png"),
              name: "Python",
              score: 3
            },
            {
              brand: require("@/assets/img/brand/kotlin.png"),
              name: "Kotlin",
              score: 2.5
            },
            {
              brand: require("@/assets/img/brand/rust.png"),
              name: "Rust",
              score: 1
            },
            {
              brand: require("@/assets/img/brand/bash.png"),
              name: "Bash",
              score: 1
            }
          ]
        },
        {
          text: "skills.frameworks",
          items: [
            {
              brand: require("@/assets/img/brand/typo3.png"),
              name: "TYPO3",
              score: 4.5
            },
            {
              brand: require("@/assets/img/brand/symfony.png"),
              name: "Symfony",
              score: 4
            },
            {
              brand: require("@/assets/img/brand/vuejs.png"),
              name: "Vue.js",
              score: 3.5
            },
            {
              brand: require("@/assets/img/brand/spring.png"),
              name: "Spring",
              score: 2.5
            }
          ]
        },
        {
          text: "skills.libs",
          items: [
            {
              brand: require("@/assets/img/brand/vuetify.png"),
              name: "Vuetify",
              score: 3.5
            },
            {
              brand: require("@/assets/img/brand/bootstrap.png"),
              name: "Bootstrap 4",
              score: 4
            }
          ]
        },
        {
          text: "skills.databases",
          items: [
            {
              brand: require("@/assets/img/brand/mariadb.png"),
              name: "MariaBD",
              score: 4.5
            },
            {
              brand: require("@/assets/img/brand/sqlite.png"),
              name: "Sqlite",
              score: 3.5
            },
            {
              brand: require("@/assets/img/brand/mongodb.png"),
              name: "MongoDb",
              score: 1
            },
            {
              brand: require("@/assets/img/brand/elasticsearch.png"),
              name: "ElasticSearch",
              score: 1
            }
          ]
        },
        {
          text: "skills.managers",
          items: [
            {
              brand: require("@/assets/img/brand/npm.png"),
              name: "npm",
              score: 2
            },
            {
              brand: require("@/assets/img/brand/git.png"),
              name: "Git",
              score: 3
            }
          ]
        },
        {
          text: "skills.server",
          items: [
            {
              brand: require("@/assets/img/brand/nginx.png"),
              name: "Nginx",
              score: 3
            },
            {
              brand: require("@/assets/img/brand/docker.png"),
              name: "Docker",
              score: 4
            },
            {
              brand: require("@/assets/img/brand/traefik.png"),
              name: "Traefik",
              score: 3
            }
          ]
        },
        {
          text: "skills.os",
          items: [
            {
              brand: require("@/assets/img/brand/debian.png"),
              name: "Debian",
              score: 4.5
            },
            {
              brand: require("@/assets/img/brand/windows.png"),
              name: "Windows",
              score: 4.5
            },
            {
              brand: require("@/assets/img/brand/archlinux.png"),
              name: "ArchLinux",
              score: 3.5
            }
          ]
        },
        {
          text: "skills.methodology",
          items: [
            {
              brand: require("@/assets/img/brand/scrum.png"),
              name: "Agile - Scrum",
              score: 4
            }
          ]
        }
      ]
    };
  }
};
</script>