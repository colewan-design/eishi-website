<template>
    <div class="bg-grey-lighten-4">
        <v-container class="py-16">
            <v-row class="align-stretch" dense>
                <!-- Contact Information + Form -->
                <v-col cols="12" md="6">
                    <div class="mb-10">
                        <h1 class="text-h4 text-primary mb-4">{{ t.contactUs }}</h1>
                        <p class="mb-4">{{ t.contactP1 }}</p>
                        <p class="mb-2"><strong>Email:</strong> {{ t.eishiGmail }}</p>
                        <p class="mb-6"><strong>Phone:</strong> (+63) 917-575-5044</p>

                        <h2 class="text-h5 mb-2">Location:</h2>
                        <p class="mb-1"><strong>Main Office:</strong> JC 81 KM5, Pico, La Trinidad, Benguet</p>
                        <p class="mb-6"><strong>Extension Office:</strong> 365-B, Rev. Rulite Bldg., Lower Magsaysay,
                            Baguio</p>
                    </div>

                    <v-row dense>
                        <v-col cols="12" sm="6">
                            <v-text-field label="First Name" variant="outlined" rounded="lg" density="comfortable" />
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-text-field label="Last Name" variant="outlined" rounded="lg" density="comfortable" />
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="Email" type="email" variant="outlined" rounded="lg"
                                density="comfortable" />
                        </v-col>
                        <v-col cols="12">
                            <v-textarea label="Message" rows="4" variant="outlined" rounded="lg"
                                density="comfortable" />
                        </v-col>
                        <v-col cols="12" class="text-center mt-4">
                            <v-btn color="primary" rounded="lg" size="large">Submit</v-btn>
                        </v-col>
                    </v-row>
                </v-col>

                <!-- Google Map -->
                <v-col cols="12" md="6">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.3700534123524!2d120.59247911541932!3d16.44500908862986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a15087cccdff%3A0xf6ad87a275e82d71!2sPico%2C%20La%20Trinidad%2C%20Benguet!5e0!3m2!1sen!2sph!4v1646639577151!5m2!1sen!2sph"
                        width="100%" height="100%" style="border: 0; border-radius: 12px; min-height: 600px"
                        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { mapState } from 'pinia';
import { useLanguageStore } from '@/stores/languageStore';

export default {
    name: 'Contact',
    computed: {
        ...mapState(useLanguageStore, ['t']),
    },
};
</script>