<template>
    <v-container class="py-10">
        <v-row>
            <v-col cols="12" md="6">
                <!-- Main Image Display -->
                <v-img :src="selectedImage" class="rounded-lg main-image" cover>
                    <template v-slot:placeholder>
                        <v-row align="center" class="fill-height ma-0" justify="center">
                            <v-progress-circular color="grey-lighten-5" indeterminate></v-progress-circular>
                        </v-row>
                    </template>
                </v-img>



                <!-- Thumbnails -->
                <v-row class="mt-4 d-flex flex-nowrap overflow-auto" dense no-gutters style="gap: 8px;">
                    <div v-for="(img, index) in images" :key="index" style="flex: 0 0 auto; width: 80px;">
                        <v-card variant="outlined" class="thumbnail-card"
                            :class="{ 'selected-thumbnail': img === selectedImage }">
                            <v-img :src="img" height="80" width="80" cover @click="selectImage(img)"
                                style="cursor: pointer;"></v-img>
                        </v-card>
                    </div>
                </v-row>



            </v-col>

            <!-- Info Section -->
            <v-col cols="12" md="6" class="spaced-paragraphs">
                <h2 class="text-h4 text-primary">Batangas Tokyo Poultry Farm</h2>
                <p class="text-body-1">Location: San Jose, Batangas, Philippines</p>
                <p class="text-body-1">{{ t.batangasP1 }}</p>
            </v-col>
        </v-row>

    </v-container>
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
        ...mapState(useLanguageStore, ['t']),
    },
    data() {
        return {
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
    },
    methods: {
        selectImage(img) {
            this.selectedImage = img;
        },
    },
};
</script>

<style scoped>
.thumbnail-card {
    border: 1px solid #ccc;
    /* Default gray border */
    transition: border-color 0.3s ease;
}

.thumbnail-card.selected-thumbnail {
    border-color: #1976d2;
    /* Vuetify primary blue */
}

/* Scoped CSS */
@media (max-width: 600px) {
    .main-image {
        height: 60vw !important;
    }

    .spaced-paragraphs p {
        font-size: 14px;
    }

    .spaced-paragraphs h2 {
        font-size: 20px;
    }
}
</style>
