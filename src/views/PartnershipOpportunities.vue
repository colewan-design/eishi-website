<style>
.spaced-paragraphs p {
    margin-bottom: 1.5rem;
    /* equivalent to mb-6 */
}

.container-margin {
    margin-bottom: 7rem;
    margin-top: 7rem;
}

.container-padding {
    padding-bottom: 7rem;
    padding-top: 7rem;
}
</style>
<template>
    <v-container class="py-10">
        <v-row class="mb-8">
            <v-col cols="12" md="6">
                <span class="text-h3 text-primary">{{ t.partnershipOpportunities }}</span>
            </v-col>
        </v-row>

    </v-container>
    <div class="bg-grey-lighten-4">
        <v-container class="container-padding">
            <v-row>
                <v-col class="spaced-paragraphs">

                    <p class="text-h5 text-justify">
                        {{ t.partnershipOpportunitiesP1 }}
                    </p>
                    <p class="text-body-1 text-justify">
                        {{ t.partnershipOpportunitiesP2 }}
                    </p>
                </v-col>
            </v-row>
        </v-container>
    </div>
    <v-container>
        <v-row class="container-margin">
            <v-col class="spaced-paragraphs">
                <span class="text-h4 text-primary"> {{ t.forBusinessPartners }}</span>
                <p class="text-body-1 text-justify">
                    {{ t.partnerP1 }}
                </p>
            </v-col>
            <v-col>
                <v-img cover height="300" src="/images/1732160491688.jpg"></v-img>
            </v-col>

        </v-row>
        <v-divider inset></v-divider>
        <v-row class="container-margin">

            <v-col>
                <v-img cover height="300" src="/images/1732160494493.jpg"></v-img>
            </v-col>
            <v-col class="spaced-paragraphs">
                <span class="text-h4 text-primary"> {{ t.governmentCollab }}</span>
                <p class="text-body-1 text-justify">
                    {{ t.governmentCollabP1 }}
                </p>
            </v-col>

        </v-row>
        <v-divider inset></v-divider>
        <v-row class="container-margin">
            <v-col class="spaced-paragraphs">
                <span class="text-h4 text-primary">{{ t.corporateSocial }}</span>
                <p class="text-body-1 text-justify">
                    {{ t.corporateSocialP1 }}
                </p>
            </v-col>
            <v-col>
                <v-img cover height="300" src="/images/1732160497759.jpg"></v-img>
            </v-col>
        </v-row>
    </v-container>
    <v-img gradient="to top, rgba(0, 0, 0, 0.8), rgba(50, 50, 50, 0.5)" src="/images/1732160495699.jpg" height="600"
        class="oppenheimer-filter" cover>
        <v-container class="fill-height d-flex align-center justify-center">
            <v-row>
                <v-col cols="10" class="mx-auto">
                    <div class="text-white">
                        <h2 class="text-h4 mb-4">{{ t.partnerBenefitTitle }}</h2>
                        <v-container class="ml-10 text-body-1">
                            <ul>
                                <li>{{ t.partnerBenefitP1 }}</li>
                                <li>{{ t.partnerBenefitP2 }}</li>
                                <li>{{ t.partnerBenefitP3 }}</li>
                            </ul>
                        </v-container>
                        <p class="text-body-1">
                            {{ t.partnerBenefitSummary }}
                        </p>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-img>
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
};
</script>