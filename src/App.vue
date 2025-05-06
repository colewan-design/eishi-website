<template>
  <v-app>
    <Navigation :color="color" :flat="flat" />
    <v-main>

      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<style>
/* Global styles: Do NOT use <style scoped> */
.v-main {
  background-image: url('/images/bgMain.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

<script>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import { RouterView } from 'vue-router'
export default {
  name: 'App',
  components: {
    Navigation,
    Footer,
    RouterView,
  },

  data: () => ({
    fab: null,
    color: "",
    flat: null,
  }),

  created() {
    const top = window.pageYOffset || 0;
    if (top <= 60) {
      this.color = "transparent";
      this.flat = true;
    }
  },

  watch: {
    fab(value) {
      if (value) {
        this.color = "secondary";
        this.flat = false;
      } else {
        this.color = "transparent";
        this.flat = true;
      }
    },
  },

  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 60;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>
