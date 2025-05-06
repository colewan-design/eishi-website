<template>
  <div style="position: relative; width: 100%; height: 100vh; overflow: hidden;">
    <div style="height: 100vh;">
      <video autoplay loop muted playsinline style="width: 100%; height: 100%; object-fit: cover;">
        <source src="/eishi/videos/sample.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>


    <!-- Centered text overlay -->
    <div class="d-flex flex-column align-center justify-center text-center"
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; color: white; background: rgba(0,0,0,0.4);">
      <h1 style="font-size: 5rem;" class="font-weight-bold mb-4">{{ t.welcome }}</h1>
      <v-btn rounded size="x-large" class="mt-5" color="primary">
        <RouterLink to="/about" class="mx-2 text-decoration-none text-white">{{ t.aboutUs }}</RouterLink>
      </v-btn>
    </div>

  </div>
  <v-container class="mt-10 mb-10" fluid>
    <v-row>
      <v-col class="mx-auto" cols="9">
        <v-card class="mx-auto ma-2" flat>
          <span class="text-body-1" style="line-height: 2;">
            <p class="mb-5">
              {{ t.homeParagraph1 }}
            </p>
            <p>
              {{ t.homeParagraph2 }}
            </p>
          </span>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <v-container fluid id="features" class="mt-2">
    <v-row align="center" justify="center">
      <v-col>
        <v-row align="center" justify="space-around">
          <v-col cols="12" class="text-center">
            <h1 class="font-weight-light display-2">{{ t.business }}</h1>

          </v-col>
          <v-col cols="12" sm="4" class="text-center pa-10" v-for="(feature, i) in business_holdings" :key="i">
            <v-hover>
              <template v-slot:default="{ isHovering, props }">
                <v-card class="card" shaped :elevation="isHovering ? 10 : 4">
                  <v-img v-bind="props" :src="feature.img" height="300px" cover :class="isHovering ? 'zoom-efect' : ''">
                    <div class="fill-height bottom-gradient"></div>
                  </v-img>
                  <h1 class="font-weight-regular">{{ t[feature.title] }}</h1>

                </v-card>
              </template>
            </v-hover>
          </v-col>

        </v-row>
        <v-row>

          <v-btn size="x-large" class="mx-auto mt-5" color="primary" rounded="lg">
            {{ t.browseBusiness }}
          </v-btn>

        </v-row>
      </v-col>
    </v-row>
  </v-container>

  <v-container class="mt-10 mb-10" fluid>
    <v-row>
      <v-col>
        <v-divider></v-divider>
      </v-col>
    </v-row>
  </v-container>


</template>
<style>
.zoom-efect {
  transform: scale(1.1);
  transition: transform 0.5s ease;
}
</style>
<script>
import { mapState } from 'pinia';
import { useLanguageStore } from '@/stores/languageStore';
export default {
  name: 'HomeView',
  data() {

    return {
      business_holdings: [
        {
          img: "/eishi/Batangas Poultry Farm.jpg",
          title: "batangasPoultry",
        },
        {
          img: "/eishi/Pangasinan Farm.jpg",
          title: "pangasinanFarm",
        },
        {
          img: "/eishi/Assigned Properties.jpg",
          title: "assignedProperties",
        },
        {
          img: "/eishi/Kalinga.jpg",
          title: "kalingaResidential",
        },
        {
          img: "/eishi/Cebu.jpg",
          title: "cebuCondo",
        },
      ],

    };
  },
  computed: {
    ...mapState(useLanguageStore, ['t']),
  },
  methods: {
  },
};
</script>