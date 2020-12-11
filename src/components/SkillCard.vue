<template>
  <v-row>
    <v-flex v-for="(item, key) in card" :key="`skills-${key}`">
      <v-card class="ma-2 elevation-4">
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
              <v-btn class="mr-3" icon disabled target="_blank">
                <v-img :src="skill.brand" width="40"></v-img>
              </v-btn>
              {{ skill.name }}
            </v-card-text>
          </v-flex>
        </v-row>
      </v-card>
    </v-flex>
  </v-row>
</template>

<script>
export default {
  name: "SkillCard",
  props: ["card"],
  data() {
    return {};
  },
};
</script>
