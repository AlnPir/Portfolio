<template>
  <div class="experiences">
    <h1 class="subheading text-center mb-5">{{ $t("employment.title") }}</h1>
    <v-timeline dense>
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :color="item.color"
        small
      >
        <h4
          :class="`${item.color}--text  text--lighten-2 mb-2`"
          v-text="$t(item.year)"
        ></h4>
        <span slot="opposite" v-text="$t(item.year)"></span>
        <v-card class="elevation-4">
          <v-card-title class="nobreak headline" :class="`${item.color}`">
            <v-icon dark size="42" class="mr-4">{{ item.icon }}</v-icon>
            {{ $t(item.job) }}
          </v-card-title>

          <v-card-text
            class="body-1 py-2"
            v-html="$t(item.description)"
          ></v-card-text>
          <v-card-text class="body-2">
            <span class="blue--text text--lighten-2">{{
              $t(item.company)
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
  name: "Experiences",
  data: () => ({
    items: [
      {
        color: "purple",
        year: "employment.latest.date",
        company: "employment.latest.company",
        job: "employment.latest.job",
        icon: "mdi-magnify",
        description: "employment.latest.desc",
        address: "employment.latest.address",
      },
      {
        color: "cyan",
        year: "employment.2.date",
        company: "employment.2.company",
        job: "employment.2.job",
        icon: "mdi-school",
        description: "employment.2.desc",
        address: "employment.2.address",
      },
      {
        color: "grey",
        year: "employment.3.date",
        company: "employment.3.company",
        job: "employment.3.job",
        icon: "mdi-email-outline",
        description: "employment.3.desc",
        address: "employment.3.address",
      },
      {
        color: "red",
        year: "employment.4.date",
        company: "employment.4.company",
        job: "employment.4.job",
        icon: "mdi-account-multiple-outline",
        description: "employment.4.desc",
        address: "employment.4.address",
      },
      {
        color: "green",
        year: "employment.first.date",
        company: "employment.first.company",
        job: "employment.first.job",
        icon: "mdi-terrain",
        description: "employment.first.desc",
        address: "employment.first.address",
      },
    ],
  }),
};
</script>
