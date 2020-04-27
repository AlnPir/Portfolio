<template>
  <v-container>
    <v-layout justify-center align-center>
      <v-container>
        <h1>404</h1>
        <p>
          <strong>File not found</strong>
        </p>
        <p>{{ $t('general.404') }}</p>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "NotFound"
};
</script>

<style scoped>
</style>
