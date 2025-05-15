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
            <v-img v-if="!isMobileView" src="/images/1732160495699.jpg" cover height="400" height-sm="400"
                height-xs="300" class="mt-5">
                <template v-slot:placeholder>
                    <v-row align="center" class="fill-height ma-0" justify="center">
                        <v-progress-circular color="grey-lighten-5" indeterminate></v-progress-circular>
                    </v-row>
                </template>
            </v-img>

        </div>
    </div>
    <div class="bg-grey-lighten-4">
        <v-container class="py-16">
            <v-row class="align-stretch" dense>
                <!-- Contact Information + Form -->
                <v-col cols="12" md="4" class="mx-auto">
                    <div class="mb-10">
                        <h1 v-if="!isMobileView" class="text-h2 text-primary mb-4">Have Any Queries? Feel Free To
                            Contact Us
                        </h1>
                        <h1 v-if="isMobileView" class="text-h3 text-primary mb-4">Have Any Queries? Feel Free To Contact
                            Us
                        </h1>
                        <p class="mb-4 text-medium-emphasis">{{ t.contactP1 }}</p>
                        <div class="ma-10">
                            <p class="mb-4">
                                <strong>
                                    <v-icon color="primary">mdi-email</v-icon>
                                </strong> {{ t.eishiGmail }}
                            </p>
                            <p class="mb-6">
                                <strong> <v-icon color="primary">mdi-phone</v-icon>
                                </strong> (+63) 917-575-5044
                            </p>
                        </div>

                        <h2 class="text-h5 mb-2">Location:</h2>
                        <p class="mb-1 text-high-emphasis">
                            <strong>Main Office:</strong>
                            <a class="text-decoration-none"
                                href="https://www.google.com/maps/search/?api=1&query=JC+81+KM5,+Pico,+La+Trinidad,+Benguet"
                                target="_blank">
                                JC 81 KM5, Pico, La Trinidad, Benguet
                            </a>
                        </p>

                        <p class="mb-6 text-high-emphasis">
                            <strong>Extension Office:</strong>
                            <a class="text-decoration-none"
                                href="https://www.google.com/maps/search/?api=1&query=365-B,+Rev.+Rulite+Bldg.,+Lower+Magsaysay,+Baguio"
                                target="_blank">
                                365-B, Rev. Rulite Bldg., Lower Magsaysay, Baguio
                            </a>
                        </p>

                    </div>

                </v-col>
                <v-col cols="12" md="4" class="mx-auto">
                    <v-container>

                        <v-row dense>
                            <v-col cols="12">
                                <v-text-field color="primary" style="height: 80px;" label="First Name"
                                    variant="outlined" rounded="lg" />
                            </v-col>

                            <v-col cols="12">
                                <v-text-field color="primary" style="height: 80px;" label="Email" type="email"
                                    variant="outlined" rounded="lg" />
                            </v-col>
                            <v-col cols="12">
                                <v-textarea color="primary" row-height="100" rows="10" label="Message"
                                    variant="outlined" rounded="lg" />
                            </v-col>
                            <v-col cols="12" class=" mt-4">
                                <v-btn v-if="!isMobileView" color="primary" rounded="lg" size="x-large">Send a
                                    message</v-btn>
                                <v-btn v-if="isMobileView" block color="primary" rounded="lg" size="x-large">Send a
                                    message</v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-col>

            </v-row>
        </v-container>
    </div>
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