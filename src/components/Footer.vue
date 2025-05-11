<template>
    <v-container>
        <!-- Partner Logos Section -->
        <v-row justify="center">
            <v-col v-for="(logo, i) in partner_logo" :key="i" cols="12" sm="6" md="3" class="text-center my-5">
                <a v-if="logo.link" :href="logo.link" target="_blank" rel="noopener" class="text-decoration-none">
                    <div class="d-flex justify-center">
                        <v-img :height="70" :src="logo.img" />
                    </div>
                    <h4 class="font-weight-regular text-center mt-2 text-black">{{ logo.title }}</h4>
                </a>

                <!-- Fallback if no link -->
                <div v-else>
                    <div class="d-flex justify-center">
                        <v-img :height="70" :src="logo.img" />
                    </div>
                    <h4 class="font-weight-regular text-center mt-2">{{ logo.title }}</h4>
                </div>
            </v-col>

        </v-row>

        <!-- Call to Action -->
        <v-row>
            <v-col class="text-center mt-10 mb-10">
                <v-btn size="large" color="primary" rounded="xl">
                    {{ t.becomePartner }}
                </v-btn>
            </v-col>
        </v-row>
    </v-container>

    <!-- Footer Info Section -->
    <v-sheet class="bg-primary py-10">
        <v-container>
            <v-row class="text-white" align="start" justify="space-between">
                <v-col cols="12" md="4" class="text-center text-md-left mb-6 mb-md-0">
                    <v-img :width="200" aspect-ratio="16/9" cover src="/eishi/eishi logo 2.png"
                        class="mx-auto mx-md-0" />
                </v-col>

                <v-col cols="12" sm="6" md="4" class="text-center text-md-left mb-6 mb-md-0">
                    <h3 class="mb-4">Location</h3>
                    <p>JC 81 KM5, Pico, La Trinidad, Benguet (main office)</p>
                    <p>365-B, Rev. Rulite Bldg., Lower Magsaysay, Baguio (extension office)</p>
                </v-col>

                <v-col cols="12" sm="6" md="4" class="text-center text-md-left">
                    <h3 class="mb-4">{{ t.contact }}</h3>
                    <p>{{ t.eishiGmail }}</p>
                    <p>(+63) 917-575-5044</p>
                </v-col>
            </v-row>
        </v-container>
    </v-sheet>
</template>

<script>
import { RouterLink } from 'vue-router'
import { mapState } from 'pinia';
import { useLanguageStore } from '@/stores/languageStore';
export default {
    name: 'Footer',
    components: {
        RouterLink
    },
    data() {
        return {

            partner_logo: [
                {
                    img: ("/eishi/logo/epartners-logo.png"),
                    title: "E.PARTNERS Co., Ltd.",
                    link: "https://epartners-offshore.com/en/",
                },
                {
                    img: ("/eishi/logo/meishin-group.jpg"),
                    title: "Meiship Group Co., Ltd.",
                    link: "https://meishin-group.co.jp/",
                },
                {
                    img: ("/eishi/logo/hotel-osaka-logo.png"),
                    title: "Hotel Osaka",
                    link: "https://www.hostelosaka.net/",
                },

                {
                    img: ("/eishi/logo/domoganlawoffice-logo.jpg"),
                    title: "Domogan & Associates Law Office",
                    link: "",
                },
                {
                    img: ("/eishi/logo/dcm-logo.jpg"),
                    title: "The Law Firm of Domogan, Chan and Mabalot",
                    link: "",
                },
            ],
        };
    },
    computed: {
        ...mapState(useLanguageStore, ['t']),
    },
}
</script>