<template>
  <div class="bg-grey-lighten-4">
    <v-img v-if="isMobileView" src="/images/1732160495699.jpg" cover height="500" height-sm="400" height-xs="300"
      class="mt-5">
      <template v-slot:placeholder>
        <v-row align="center" class="fill-height ma-0" justify="center">
          <v-progress-circular color="grey-lighten-5" indeterminate></v-progress-circular>
        </v-row>
      </template></v-img>
    <div>
      <v-img v-if="!isMobileView" src="/images/1732160495699.jpg" cover height="400" height-sm="400" height-xs="300"
        class="mt-5">
        <template v-slot:placeholder>
          <v-row align="center" class="fill-height ma-0" justify="center">
            <v-progress-circular color="grey-lighten-5" indeterminate></v-progress-circular>
          </v-row>
        </template>
      </v-img>

    </div>
  </div>
  <div class="bg-grey-lighten-4">
    <v-container>
      <v-row>
        <v-col cols="10" class="mx-auto">
          <p class="mt-10 text-body-1">
            {{ t.aboutP1 }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>

  <v-container class="py-16">
    <v-row>
      <v-col cols="12" md="4" class="mx-auto">
        <span class="font-weight-light text-h4 text-primary">
          {{ t.companyOverview }}
        </span>
        <p class="text-justify mb-5 mt-5 text-body-1">
          {{ t.aboutP2 }}
        </p>
        <p class="text-justify text-body-1">
          {{ t.aboutP3 }}
        </p>
      </v-col>



      <v-col v-if="!isMobileView" cols="12" md="4" class="mx-auto">
        <v-img src="/images/1732160499420.jpg" height="300" height-sm="250" height-xs="200" cover>
          <template v-slot:placeholder>
            <v-row align="center" class="fill-height ma-0" justify="center">
              <v-progress-circular color="grey-lighten-5" indeterminate></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
  <v-img v-if="isMobileView" src="/images/1732160499420.jpg" height="300" cover>
    <template v-slot:placeholder>
      <v-row align="center" class="fill-height ma-0" justify="center">
        <v-progress-circular color="grey-lighten-5" indeterminate></v-progress-circular>
      </v-row>
    </template>
  </v-img>

  <div class="bg-primary">
    <v-container class="py-16">
      <v-row>
        <v-col cols="12" md="4" class="mx-auto text-md-right text-center mb-6 mb-md-0">
          <span class="mr-md-10 text-h3 text-h4-sm text-h5-xs">
            {{ t.missionVision }}
          </span>
        </v-col>
        <v-col cols="12" md="4" class="mx-auto">
          <span class="text-body-1 text-justify">
            {{ t.aboutP4 }}
          </span>
        </v-col>
      </v-row>
    </v-container>
  </div>

  <v-img gradient="to top, rgba(0, 0, 0, 0.8), rgba(50, 50, 50, 0.5)" src="/images/1732160494493.jpg" height="600"
    height-sm="400" height-xs="300" class="oppenheimer-filter" cover>
    <v-container class="fill-height d-flex align-center justify-center">
      <div class="text-center text-white">
        <h2 class="text-h4 mb-4">{{ t.whyUs }}</h2>
        <p class="text-body-1">
          {{ t.aboutP5 }}
        </p>
      </div>
    </v-container>
    <template v-slot:placeholder>
      <v-row align="center" class="fill-height ma-0" justify="center">
        <v-progress-circular color="grey-lighten-5" indeterminate></v-progress-circular>
      </v-row>
    </template>
  </v-img>
</template>

<script>
import { mapState } from 'pinia';
import { useLanguageStore } from '@/stores/languageStore';
export default {
  name: 'HomeView',
  data() {

    return {
      isMobileView: false,
    };
  },
  computed: {
    ...mapState(useLanguageStore, ['t']),
  },
  mounted() {
    this.checkMobileView(); // check on initial load
    window.addEventListener('resize', this.checkMobileView); // attach resize listener
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobileView); // clean up
  },
  methods: {
    checkMobileView() {
      this.isMobileView = this.$vuetify.display.mobile;
    },
  },
};
</script>