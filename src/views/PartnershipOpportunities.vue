<style>
.spaced-paragraphs p {
    margin-bottom: 1.5rem;
    /* equivalent to mb-6 */
}
</style>
<template>
    <v-container class="py-10">
        <v-row class="mb-8">
            <v-col cols="12" md="6">
                <span class="text-h3 text-primary">Partnership Opportunities</span>
            </v-col>
        </v-row>

    </v-container>
    <div class="bg-grey-lighten-4">
        <v-container>
            <v-row>
                <v-col class="spaced-paragraphs">

                    <p class="text-body-1 text-justify">
                        At Eishi Property Holdings, we recognize the transformative power of collaboration in the real
                        estate sector.
                    </p>
                    <p class="text-body-1 text-justify">
                        We are actively seeking partnerships with local and international firms, government agencies,
                        and investors who share our vision for sustainable development and community enhancement.
                    </p>
                </v-col>
            </v-row>
        </v-container>
    </div>
    <v-container>
        <v-row>
            <v-col>
                <span>For Business Partners</span>
                <p>
                    We offer various partnership models tailored to meet your organization's unique needs. Whether
                    you’re looking to co-develop residential or commercial properties, or you seek to leverage our
                    expertise in navigating the Philippine real estate market, Eishi is your ideal partner. Together, we
                    can create impactful projects that deliver mutual benefits and enhance property value.
                </p>
            </v-col>
            <v-col>
                <v-img height="300" src="/images/1732160491688.jpg"></v-img>
            </v-col>
            <v-divider inset></v-divider>
        </v-row>
        <v-row>

            <v-col>
                <v-img height="300" src="/images/1732160494493.jpg"></v-img>
            </v-col>
            <v-col>
                <span>For Government Collaborations</span>
                <p>
                    Eishi is committed to fostering public-private partnerships (PPP) that address community needs while
                    ensuring sustainable growth. We welcome collaboration with government agencies to develop affordable
                    housing, infrastructure projects, and urban developments that align with public goals.
                </p>
            </v-col>
            <v-divider inset></v-divider>
        </v-row>
    </v-container>
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