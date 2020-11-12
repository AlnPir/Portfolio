<template>
  <div class="education">
    <h1 class="subheading text-center mb-5">{{ $t("education.title") }}</h1>
    <v-timeline dense reverse>
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :color="item.color"
        small
      >
        <h4
          :class="`${item.color}--text text-right text--lighten-2 mb-2`"
          v-text="$t(item.year)"
        ></h4>
        <v-card class="elevation-4">
          <v-card-title class="nobreak headline" :class="`${item.color}`">
            <v-icon dark size="42" class="mr-4">{{ item.icon }}</v-icon>
            {{ $t(item.degree) }}
          </v-card-title>
          <v-card-text
            class="body-1 py-2"
            v-html="$t(item.description)"
          ></v-card-text>
          <v-card-text class="body-2">
            <span class="blue--text text--lighten-2">{{
              $t(item.school)
            }}</span>
            <br />
            {{ $t(item.address) }}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  name: "Education",
  data: () => ({
    items: [
      {
        color: "red",
        year: "education.latest.date",
        school: "education.latest.school",
        degree: "education.latest.degree",
        description: "education.latest.desc",
        address: "education.latest.address",
      },
      {
        color: "purple",
        year: "education.2.date",
        school: "education.2.school",
        degree: "education.2.degree",
        description: "education.2.desc",
        address: "education.2.address",
      },
      {
        color: "blue",
        year: "education.3.date",
        degree: "education.3.degree",
        icon: "mdi-alert",
      },
      {
        color: "green",
        year: "education.4.date",
        school: "education.4.school",
        degree: "education.4.degree",
        description: "education.4.desc",
        address: "education.4.address",
      },
      {
        color: "orange",
        year: "education.5.date",
        school: "education.5.school",
        degree: "education.5.degree",
        description: "education.5.desc",
        address: "education.5.address",
      },
      {
        color: "light-green",
        year: "education.first.date",
        school: "education.first.school",
        degree: "education.first.degree",
        description: "education.first.desc",
        address: "education.first.address",
      },
    ],
  }),
};
</script>
