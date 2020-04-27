<template>
  <div id="app">
    <div v-if="loading">
      <transition name="welcome">
        <Welcome></Welcome>
      </transition>
    </div>
    <div v-else>
      <v-app>
        <Nav></Nav>
        <v-content class="ma-4">
          <transition name="fade">
            <router-view></router-view>
          </transition>
        </v-content>

        <!-- <PopinContact></PopinContact> -->

        <Footer></Footer>
      </v-app>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import PopinContact from "@/components/PopinContact";
import Footer from "@/components/Footer";
import Welcome from "@/components/Welcome";

export default {
  name: "App",
  components: {
    Nav,
    PopinContact,
    Footer,
    Welcome
  },
  data() {
    return {
      loading: true
    };
  },
  beforeMount() {
    setTimeout(() => {
      this.loading = false;
    }, 700);
  }
};
</script>

<style>
.body-1,
.body-2,
.subtitle-1,
.display-2,
.display-1 {
  color: #fff !important;
}

.nobreak {
  word-break: break-word;
}

.center {
  text-align: center;
}
</style>