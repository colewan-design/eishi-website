<style>
.spaced-paragraphs p {
    margin-bottom: 1.5rem;
    /* equivalent to mb-6 */
}
</style>
<template>
    <v-parallax src="/images/25101.jpg" cover>
        <v-container class="py-10">
            <v-row class="mb-8">
                <v-col cols="12" md="6">
                    <span class="text-h3 text-primary">{{ t.business }}</span>
                </v-col>
            </v-row>

        </v-container>
        <v-container>
            <v-row>
                <v-col class="spaced-paragraphs">
                    <p class="text-h4 text-primary">
                        Batangas Tokyo Poultry Farm
                    </p>
                    <p class="text-body-1 text-justify">
                        Location: San Jose, Batangas, Philippines
                    </p>
                    <p class="text-body-1 text-justify">
                        {{ t.batangasP1 }}
                    </p>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <swiper :modules="modules" :slides-per-view="3" :space-between="20" :loop="true"
                        :autoplay="{ delay: 2500 }" :pagination="{ clickable: true }" :navigation="true">
                        <swiper-slide v-for="(img, index) in images" :key="index">
                            <v-img :src="img" height="350px" cover class="rounded-lg"></v-img>
                        </swiper-slide>
                    </swiper>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="spaced-paragraphs">
                    <p class="text-body-1 text-justify">
                        {{ t.batangasP2 }}
                    </p>
                    <p class="text-body-1 text-justify">
                        {{ t.batangasP3 }}
                    </p>
                    <p class="text-body-1 text-justify">
                        {{ t.batangasP4 }}
                    </p>
                </v-col>
                <v-divider inset></v-divider>
            </v-row>

        </v-container>

        <v-container>
            <v-row>
                <v-col class="spaced-paragraphs">
                    <p class="text-h4 text-primary">
                        {{ t.pangasinanFarm }}
                    </p>
                    <p class="text-body-1 text-justify">
                        {{ t.pangasinanLocation }}
                    </p>
                    <p class="text-body-1 text-justify">
                        {{ t.pangasinanP1 }}
                    </p>
                    <p class="text-body-1 text-justify">
                        {{ t.pangasinanP2 }}
                    </p>
                    <p class="text-body-1 text-justify">
                        {{ t.pangasinanP3 }}
                    </p>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <swiper :modules="modules" :slides-per-view="3" :space-between="20" :loop="true"
                        :autoplay="{ delay: 2500 }" :pagination="{ clickable: true }" :navigation="true">
                        <swiper-slide v-for="(img, index) in images" :key="index">
                            <v-img :src="img" height="350px" cover class="rounded-lg"></v-img>
                        </swiper-slide>
                    </swiper>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="spaced-paragraphs">
                    <p class="text-body-1 text-justify mb-5">
                        {{ t.pangasinanP4 }}
                    </p>
                    <p class="text-body-1 text-justify mb-5">
                        {{ t.pangasinanP5 }}
                    </p>
                    <p class="font-weight-bold text-body-1 text-justify">
                        {{ t.whyDairy }}
                    </p>
                    <p class="text-body-1 text-justify">
                        {{ t.dairyP1 }}
                    </p>
                    <p class="text-body-1 text-justify">
                        {{ t.dairyP2 }}
                    </p>
                    <p class="text-body-1 text-justify">
                        {{ t.dairyP3 }}
                    </p>

                    <p class="font-weight-bold text-body-1 text-justify">
                        {{ t.whyPoultry }}
                    </p>
                    <p class="text-body-1 text-justify">
                        {{ t.poultryP1 }}
                    </p>
                    <p class="text-body-1 text-justify">
                        {{ t.poultryP2 }}
                    </p>

                    <p class="font-weight-bold text-body-1 text-justify">
                        {{ t.whyFeed }}
                    </p>
                    <p class="text-body-1 text-justify">
                        {{ t.feedP1 }}
                    </p>
                    <p class="text-body-1 text-justify">
                        {{ t.feedP2 }}
                    </p>

                    <p class="font-weight-bold text-body-1 text-justify">
                        {{ t.whyRange }}
                    </p>
                    <p class="text-body-1 text-justify">
                        {{ t.rangeP1 }}
                    </p>
                    <p class="text-body-1 text-justify">
                        {{ t.rangeP2 }}
                    </p>

                </v-col>
                <v-divider inset></v-divider>
            </v-row>
        </v-container>

        <v-container>
            <v-row>
                <v-col class="spaced-paragraphs">
                    <p class="text-h4 text-primary">
                        {{ t.assignedProperties }}
                    </p>
                    <p class="text-body-1 text-justify">
                        Locations: Taguig City, Muntinlupa City, Morong Rizal and San Jose, Batangas, Philippines.
                    </p>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <swiper :modules="modules" :slides-per-view="3" :space-between="20" :loop="true"
                        :autoplay="{ delay: 2500 }" :pagination="{ clickable: true }" :navigation="true">
                        <swiper-slide v-for="(img, index) in images" :key="index">
                            <v-img :src="img" height="350px" cover class="rounded-lg"></v-img>
                        </swiper-slide>
                    </swiper>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="spaced-paragraphs">
                    <p class="text-body-1 text-justify">
                        {{ t.assignedPropertiesP1 }}
                    </p>
                    <p class="text-body-1 text-justify">
                        {{ t.assignedPropertiesP2 }}
                    </p>
                </v-col>
                <v-divider inset></v-divider>
            </v-row>

        </v-container>

        <v-container>
            <v-row>
                <v-col class="spaced-paragraphs">
                    <p class="text-h4 text-primary">
                        {{ t.cebuCondo }}
                    </p>
                    <p class="text-body-1 text-justify">
                        {{ t.cebuCondoLocation }}
                    </p>
                    <p class="text-body-1 text-justify">
                        {{ t.cebuP1 }}
                    </p>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <swiper :modules="modules" :slides-per-view="3" :space-between="20" :loop="true"
                        :autoplay="{ delay: 2500 }" :pagination="{ clickable: true }" :navigation="true">
                        <swiper-slide v-for="(img, index) in images" :key="index">
                            <v-img :src="img" height="350px" cover class="rounded-lg"></v-img>
                        </swiper-slide>
                    </swiper>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="spaced-paragraphs">
                    <p class="text-body-1 text-justify">
                        {{ t.cebuP2 }}
                    </p>
                </v-col>
                <v-divider inset></v-divider>
            </v-row>

        </v-container>

        <v-container>
            <v-row>
                <v-col class="spaced-paragraphs">
                    <p class="text-h4 text-primary">
                        {{ t.residentialLands }}
                    </p>
                    <p class="text-body-1 text-justify">
                        {{ t.residentialLocation }}
                    </p>
                    <p class="text-body-1 text-justify">
                        {{ t.residentialLandsP1 }}
                    </p>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <swiper :modules="modules" :slides-per-view="3" :space-between="20" :loop="true"
                        :autoplay="{ delay: 2500 }" :pagination="{ clickable: true }" :navigation="true">
                        <swiper-slide v-for="(img, index) in images" :key="index">
                            <v-img :src="img" height="350px" cover class="rounded-lg"></v-img>
                        </swiper-slide>
                    </swiper>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="spaced-paragraphs">
                    <p class="text-body-1 text-justify">
                        {{ t.residentialLandsP2 }}
                    </p>
                </v-col>
            </v-row>

        </v-container>
    </v-parallax>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import '@/plugins/swiper'; // Just loads the CSS globally

import { mapState } from 'pinia';
import { useLanguageStore } from '@/stores/languageStore';
export default {
    name: 'business_holdings',
    components: {
        Swiper,
        SwiperSlide,
    },
    computed: {
        ...mapState(useLanguageStore, ['t']),
    },
    data() {
        return {
            images: [
                'https://picsum.photos/seed/1/400/300',
                'https://picsum.photos/seed/2/400/300',
                'https://picsum.photos/seed/3/400/300',
                'https://picsum.photos/seed/4/400/300',
                'https://picsum.photos/seed/5/400/300',
                'https://picsum.photos/seed/6/400/300',
            ],
            modules: [Autoplay, Pagination, Navigation], // <-- pass modules here
        };
    },
};
</script>