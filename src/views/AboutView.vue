<style scoped>
.oppenheimer-filter::v-deep img {
  filter: brightness(0.6) contrast(1.2) saturate(0.7) sepia(0.2) hue-rotate(-20deg);
  object-fit: cover;
}
</style>

<template>
  <v-container>
    <span class="font-weight-light text-h3 text-primary">{{ t.whoWeAre }}</span>
  </v-container>
  <div class="bg-grey-lighten-4">
    <v-container class="pt-0 mt-0">
      <v-img src="/images/1732160495699.jpg" cover height="500" class="mt-5">
      </v-img>
      <p class="mt-10 mb-10 text-body-1">
        {{ t.aboutP1 }}
      </p>
    </v-container>
  </div>
  <v-container style="padding-top: 5rem;padding-bottom: 5rem;">
    <v-row>
      <v-col>
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

      <v-col>

        <v-img src="/images/1732160499420.jpg" height="300" cover></v-img>
      </v-col>
    </v-row>
  </v-container>
  <div class="bg-primary">
    <v-container style="padding-top: 10rem;padding-bottom: 10rem;">
      <v-row>
        <v-col class="text-right">
          <span class="mr-10 text-h3">{{ t.missionVision }} </span>
        </v-col>
        <v-col>
          <span class="text-body-1 text-justify">
            {{ t.aboutP4 }}
          </span>
        </v-col>
      </v-row>
    </v-container>
  </div>

  <v-img gradient="to top, rgba(0, 0, 0, 0.8), rgba(50, 50, 50, 0.5)" src="/images/1732160494493.jpg" height="600"
    class="oppenheimer-filter" cover>
    <v-container class="fill-height d-flex align-center justify-center">
      <div class="text-center text-white">
        <h2 class="text-h4 mb-4">{{ t.whyUs }}</h2>
        <p class="text-body-1">
          {{ t.aboutP5 }}
        </p>
      </div>
    </v-container>
  </v-img>



</template>

<script>
import { mapState } from 'pinia';
import { useLanguageStore } from '@/stores/languageStore';
export default {
  name: 'AboutView',
  computed: {
    ...mapState(useLanguageStore, ['t']),
  },
  methods: {
  },
};
</script>