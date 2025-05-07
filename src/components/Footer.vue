<template>
    <v-container>
        <v-row justify="center">
            <v-col>
                <v-row>
                    <v-col cols="12" class="text-center " style="padding-bottom: 10rem;">
                        <h1 class="font-weight-light display-2 text-primary">{{ t.partners }}</h1>
                    </v-col>

                    <v-col cols="12" sm="3" v-for="(logo, i) in partner_logo" :key="i" class="text-center ma-5">
                        <div class="d-flex justify-center">
                            <v-img :height="70" :src="logo.img"></v-img>
                        </div>
                        <h4 class="font-weight-regular text-center mt-2">{{ logo.title }}</h4>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <v-row>
            <v-col class="text-center mt-10 mb-10">
                <v-btn size="x-large" class="mx-auto mt-5" color="primary" rounded="lg">
                    {{ t.becomePartner }}
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
    <v-sheet class="bg-primary">
        <v-container>
            <v-row>
                <v-col>
                    <v-img :width="300" aspect-ratio="16/9" cover src="/eishi/eishi logo 2.png" />
                </v-col>
                <v-col>
                    <h1 class="mb-10">Location</h1>
                    <p>
                        JC 81 KM5, Pico, La Trinidad, Benguet (main office)
                    </p>

                    <p>
                        365-B, Rev. Rulite Bldg., Lower Magsaysay, Baguio (extension office)
                    </p>
                </v-col>
                <v-col>
                    <h1 class="mb-10">
                        {{ t.contact }}
                    </h1>
                    <p>
                        {{ t.eishiGmail }}
                    </p>
                    <p>
                        (+63) 917-575-5044
                    </p>
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
                },
                {
                    img: ("/eishi/logo/meishin-group.jpg"),
                    title: "Meiship Group Co., Ltd.",
                },
                {
                    img: ("/eishi/logo/hotel-osaka-logo.png"),
                    title: "Hotel Osaka",
                },

                {
                    img: ("/eishi/logo/domoganlawoffice-logo.jpg"),
                    title: "Domogan & Associates Law Office",
                },
                {
                    img: ("/eishi/logo/dcm-logo.jpg"),
                    title: "The Law Firm of Domogan, Chan and Mabalot",
                },
            ],
        };
    },
    computed: {
        ...mapState(useLanguageStore, ['t']),
    },
}
</script>