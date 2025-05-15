<style scoped>
.zoom-efect {
  transform: scale(1.1);
  transition: transform 1s ease;
}

.hero-container {
  width: 100%;
  height: 50vh;
  overflow: hidden;
  position: relative;
}

.video-background {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  background: rgba(0, 0, 0, 0.4);
  padding: 1rem;
}

.full-width-card {
  margin: 0;
  padding: 0;
}

.full-width-img {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}
</style>
<template>
  <div class="hero-container position-relative ">
    <video autoplay loop muted playsinline class="video-background">
      <source src="/eishi/videos/sample.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Overlay Text -->
    <div class="overlay d-flex flex-column align-center justify-center text-center">
      <h1 class="animate__animated  animate__swing font-weight-bold mb-4 display-1 display-md-2 display-lg-1">
        {{ t.welcome }}
      </h1>
      <v-btn rounded size="x-large" class="mt-5" color="primary">
        <RouterLink to="/about" class="mx-2 text-decoration-none text-white">
          {{ t.aboutUs }}
        </RouterLink>
      </v-btn>
    </div>

  </div>
  <!-- desktop -->
  <div class="bg-grey-lighten-4">
    <v-container class="pt-10 mb-10" fluid v-if="!isMobileView">
      <v-row>
        <v-col class="mx-auto" cols="9">
          <v-card class="mx-auto ma-2 " variant="text">
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
    <!-- mobile -->
    <v-container class="pt-10 mb-10" fluid v-if="isMobileView">
      <v-row>
        <v-col>
          <v-card class="mx-auto ma-2 " variant="text">
            <span class="text-body-1" style="line-height: 2;">
              <p class="mb-5" data-aos="fade-right">
                {{ t.homeParagraph1 }}
              </p>
              <p data-aos="fade-left">
                {{ t.homeParagraph2 }}
              </p>
            </span>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>

  <v-container fluid id="features" class="mt-2">
    <v-row align="center" justify="center">
      <v-col>
        <v-row align="center" justify="space-around">
          <v-col cols="12" class="text-center">
            <h1 class="font-weight-light display-2">{{ t.business }}</h1>

          </v-col>
          <!-- desktop cards -->
          <v-col class="text-center" v-for="(feature, i) in business_holdings" :key="i" v-if="!isMobileView">
            <v-hover>
              <template v-slot:default="{ isHovering, props }">
                <v-card :to="feature.link" class="card " shaped :elevation="isHovering ? 10 : 4" rounded="lg">
                  <v-img v-bind="props" :src="feature.img" height="300px" cover :class="isHovering ? 'zoom-efect' : ''">
                    <div class="fill-height bottom-gradient"></div>
                  </v-img>
                  <v-card-text class="text-center py-6">
                    <h3 class="font-weight-medium text-primary text-h6">{{ t[feature.title] }}</h3>
                  </v-card-text>

                </v-card>
              </template>
            </v-hover>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
  <!-- Mobile view cards -->
  <v-card to="/business_holdings/batangas/poultry_farm" flat
    class="cursor-pointer ma-2 animate__animated animate__fadeInLeftBig">
    <v-img data-aos="fade-right" v-if="isMobileView" src="/eishi/Batangas Poultry Farm.jpg" cover height="300"
      gradient="to top, rgba(0, 0, 0, 0.8), rgba(50, 50, 50, 0.5)">
      <v-container class="fill-height d-flex align-center justify-center">
        <div class="text-center text-white">
          <h2 class="text-h4 mb-4">{{ t.batangasPoultry }}</h2>
        </div>
      </v-container>
      <template v-slot:placeholder>
        <v-row align="center" class="fill-height ma-0" justify="center">
          <v-progress-circular color="grey-lighten-5" indeterminate></v-progress-circular>
        </v-row>
      </template>
    </v-img>
  </v-card>

  <v-card to="/business_holdings/pangasinan_farm" flat
    class="cursor-pointer ma-2 animate__animated animate__fadeInLeftBig">
    <v-img data-aos="fade-left" v-if="isMobileView" src="/eishi/Pangasinan Farm.jpg" cover height="300"
      gradient="to top, rgba(0, 0, 0, 0.8), rgba(50, 50, 50, 0.5)">
      <v-container class="fill-height d-flex align-center justify-center">
        <div class="text-center text-white">
          <h2 class="text-h4 mb-4">{{ t.pangasinanFarm }}</h2>
        </div>
      </v-container>
      <template v-slot:placeholder>
        <v-row align="center" class="fill-height ma-0" justify="center">
          <v-progress-circular color="grey-lighten-5" indeterminate></v-progress-circular>
        </v-row>
      </template>
    </v-img>
  </v-card>

  <v-card to="/business_holdings/assigned_properties" flat
    class="cursor-pointer ma-2 animate__animated animate__fadeInLeftBig">
    <v-img data-aos="fade-right" v-if="isMobileView" src="/eishi/1732160486501.jpg" cover height="300"
      gradient="to top, rgba(0, 0, 0, 0.8), rgba(50, 50, 50, 0.5)">
      <v-container class="fill-height d-flex align-center justify-center">
        <div class="text-center text-white">
          <h2 class="text-h4 mb-4">{{ t.assignedProperties }}</h2>
        </div>
      </v-container>
      <template v-slot:placeholder>
        <v-row align="center" class="fill-height ma-0" justify="center">
          <v-progress-circular color="grey-lighten-5" indeterminate></v-progress-circular>
        </v-row>
      </template>
    </v-img>
  </v-card>

  <v-card to="/business_holdings/kalinga_residential" flat
    class="cursor-pointer ma-2 animate__animated animate__fadeInLeftBig">
    <v-img data-aos="fade-left" v-if="isMobileView" src="/eishi/Solinea3.jpg" cover height="300"
      gradient="to top, rgba(0, 0, 0, 0.8), rgba(50, 50, 50, 0.5)">
      <v-container class="fill-height d-flex align-center justify-center">
        <div class="text-center text-white">
          <h2 class="text-h4 mb-4">{{ t.kalingaResidential }}</h2>
        </div>
      </v-container>
      <template v-slot:placeholder>
        <v-row align="center" class="fill-height ma-0" justify="center">
          <v-progress-circular color="grey-lighten-5" indeterminate></v-progress-circular>
        </v-row>
      </template>
    </v-img>
  </v-card>

  <v-card to="/business_holdings/cebu_condominium" flat
    class="cursor-pointer ma-2 animate__animated animate__fadeInLeftBig">
    <v-img data-aos="fade-right" v-if="isMobileView" src="/eishi/DJI_0598-min.jpg" cover height="300"
      gradient="to top, rgba(0, 0, 0, 0.8), rgba(50, 50, 50, 0.5)">
      <v-container class="fill-height d-flex align-center justify-center">
        <div class="text-center text-white">
          <h2 class="text-h4 mb-4">{{ t.cebuCondo }}</h2>
        </div>
      </v-container>
      <template v-slot:placeholder>
        <v-row align="center" class="fill-height ma-0" justify="center">
          <v-progress-circular color="grey-lighten-5" indeterminate></v-progress-circular>
        </v-row>
      </template>
    </v-img>
  </v-card>

  <v-container class="mt-10 mb-10" fluid>
    <v-row>
      <v-col>
        <v-divider></v-divider>
      </v-col>
    </v-row>
  </v-container>


</template>
<script>
import { mapState } from 'pinia';
import { useLanguageStore } from '@/stores/languageStore';
export default {
  name: 'HomeView',
  data() {

    return {
      isMobileView: false,
      business_holdings: [
        {
          img: "/eishi/Batangas Poultry Farm.jpg",
          title: "batangasPoultry",
          link: "/business_holdings/batangas/poultry_farm",
        },
        {
          img: "/eishi/Pangasinan Farm.jpg",
          title: "pangasinanFarm",
          link: "/business_holdings/pangasinan_farm",
        },
        {
          img: "/eishi/1732160486501.jpg",
          title: "assignedProperties",
          link: "/business_holdings/assigned_properties",
        },
        {
          img: "/eishi/Solinea3.jpg",
          title: "kalingaResidential",
          link: "/business_holdings/kalinga_residential",
        },
        {
          img: "/eishi/DJI_0598-min.jpg",
          title: "cebuCondo",
          link: "/business_holdings/cebu_condominium",
        },
      ],

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