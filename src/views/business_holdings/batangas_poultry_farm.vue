<template>
    <v-container>
        <v-row>
            <!-- mobile view -->
            <v-col cols="12" v-if="isMobileView">
                <v-carousel continuous cycle v-model="selectedIndex" hide-delimiters :show-arrows="false" height="400"
                    class="rounded-lg">
                    <v-carousel-item v-for="(img, index) in images" :key="index" :src="img" class="main-image" cover />
                </v-carousel>

                <!-- Thumbnails -->
                <v-row class="mt-4 d-flex flex-nowrap overflow-auto" dense no-gutters style="gap: 8px;">
                    <div v-for="(img, index) in images" :key="index" style="flex: 0 0 auto; width: 80px;"
                        @click="selectImageByIndex(index)">
                        <v-card variant="outlined" class="thumbnail-card"
                            :class="{ 'selected-thumbnail': index === selectedIndex }">
                            <v-img :src="img" height="80" width="80" cover style="cursor: pointer;" />
                        </v-card>
                    </div>
                </v-row>

            </v-col>
            <!-- desktop view -->
            <v-col cols="6" v-if="!isMobileView">
                <v-carousel continuous cycle v-model="selectedIndex" height="500" :show-arrows="false"
                    class="rounded-lg">
                    <v-carousel-item v-for="(img, index) in images" :key="index" :src="img" class="main-image" cover />
                </v-carousel>
            </v-col>

            <!-- Info Section -->
            <v-col cols="12" md="6" class="spaced-paragraphs">
                <h2 class="text-h4 font-weight-bold">{{ t.batangasPoultry }}</h2>
                <p class="text-body-1">Location: San Jose, Batangas, Philippines</p>
                <p class="text-body-1 text-justify">{{ t.batangasP1 }}</p>
                <p class="text-body-1 text-justify">{{ t.batangasP2 }}</p>
                <p class="text-body-1 text-justify">{{ t.batangasP3 }}</p>
                <p class="text-body-1 text-justify">{{ t.batangasP4 }}</p>
            </v-col>
        </v-row>

    </v-container>
    <v-divider></v-divider>
    <v-container fluid id="features" class="mt-2">
        <v-row align="center" justify="center">
            <v-col>
                <v-row align="center" justify="space-around">

                    <!-- desktop cards -->
                    <v-col class="text-center" v-for="(feature, i) in business_holdings" :key="i" v-if="!isMobileView">
                        <v-hover>
                            <template v-slot:default="{ isHovering, props }">
                                <v-card :to="feature.link" class="card" shaped :elevation="isHovering ? 10 : 1"
                                    rounded="lg">
                                    <v-img v-bind="props" :src="feature.img" height="100" cover>
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

    <!-- mobile view cards -->
    <template v-for="(feature, i) in business_holdings" :key="i">
        <transition :name="i % 2 === 0 ? 'scroll-x-transition' : 'scroll-x-reverse-transition'" appear>
            <v-card :to="feature.link" variant="text" class="cursor-pointer ma-2">
                <v-img v-if="isMobileView" :src="feature.img" cover
                    gradient="to top, rgba(0, 0, 0, 0.8), rgba(50, 50, 50, 0.5)">
                    <v-container class="fill-height d-flex align-center justify-center">
                        <div class="text-center text-white">
                            <h2 class="text-h4 mb-4"> {{ t[feature.title] }}</h2>
                        </div>
                    </v-container>

                    <!-- Optional: Loading Placeholder -->
                    <template v-slot:placeholder>
                        <v-row align="center" class="fill-height ma-0" justify="center">
                            <v-progress-circular color="grey-lighten-5" indeterminate></v-progress-circular>
                        </v-row>
                    </template>
                </v-img>
            </v-card>
        </transition>
    </template>
    <v-divider></v-divider>
</template>

<script>
import { mapState } from 'pinia';
import { useLanguageStore } from '@/stores/languageStore';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import '@/plugins/swiper'; // Just loads the CSS globally

export default {
    name: 'business_holdings',
    components: {
        Swiper,
        SwiperSlide,
    },
    computed: {
        selectedImage() {
            return this.images[this.selectedIndex];
        },
        ...mapState(useLanguageStore, ['t']),
    },
    data() {
        return {
            selectedIndex: 0,
            isMobileView: false,
            business_holdings: [

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
            images: [
                'https://picsum.photos/seed/1/600/400',
                'https://picsum.photos/seed/2/600/400',
                'https://picsum.photos/seed/3/600/400',
                'https://picsum.photos/seed/4/600/400',
                'https://picsum.photos/seed/5/600/400',
                'https://picsum.photos/seed/6/600/400',
            ],
            selectedImage: '', // default will be first image
            modules: [Autoplay, Pagination, Navigation],
        };
    },

    mounted() {
        this.selectedImage = this.images[0]; // Set default selected image
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
        selectImageByIndex(index) {
            this.selectedIndex = index;
        },
    },
};
</script>

<style>
.thumbnail-card {
    border: 1px solid #ccc;
    /* Default gray border */
    transition: border-color 0.3s ease;
}

.thumbnail-card.selected-thumbnail {
    border-color: #1976d2;
    /* Vuetify primary blue */
}

.spaced-paragraphs p {
    margin-bottom: 2rem;
    /* equivalent to mb-6 */
}

/* Scoped CSS */
@media (max-width: 600px) {
    .main-image {
        height: 80vw !important;
    }

    .spaced-paragraphs p {
        font-size: 14px;
    }

    .spaced-paragraphs h2 {
        font-size: 20px;
    }
}
</style>