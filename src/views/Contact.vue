<template>
    <v-container class="py-10">
        <v-row class="mb-8">
            <v-col cols="12" md="6">
                <h1 class="mb-6">{{ t.contact }}</h1>
                <p class="mb-6">
                    {{ t.contactP1 }}
                </p>
                <p class="mb-2">
                    <strong>Email:</strong> {{ t.eishiGmail }}
                </p>
                <p class="mb-6">
                    <strong>Phone:</strong> (+63) 917-575-5044
                </p>
                <h2 class="mb-4">Location:</h2>
                <p class="mb-2">
                    <strong>Main Office:</strong> JC 81 KM5, Pico, La Trinidad, Benguet
                </p>
                <p class="mb-6">
                    <strong>Extension Office:</strong> 365-B, Rev. Rulite Bldg., Lower Magsaysay, Baguio
                </p>
                <v-row>
                    <v-col cols="12" md="6" class="mb-4">
                        <v-text-field variant="outlined" rounded label="First Name" class="mb-4"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="mb-4">
                        <v-text-field variant="outlined" rounded label="Last Name" class="mb-4"></v-text-field>
                    </v-col>
                    <v-col cols="12" class="mb-4">
                        <v-text-field variant="outlined" type="email" rounded label="Email" class="mb-4"></v-text-field>
                    </v-col>
                    <v-col cols="12" class="mb-4">
                        <v-textarea variant="outlined" rounded label="Message" rows="4" class="mb-4"></v-textarea>
                    </v-col>
                    <v-col cols="12" class="text-center">
                        <v-btn color="primary" rounded>Submit</v-btn>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" md="6">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.3700534123524!2d120.59247911541932!3d16.44500908862986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a15087cccdff%3A0xf6ad87a275e82d71!2sPico%2C%20La%20Trinidad%2C%20Benguet!5e0!3m2!1sen!2sph!4v1646639577151!5m2!1sen!2sph"
                    width="100%" height="600" style="border:0; border-radius: 12px;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
import { mapState } from 'pinia';
import { useLanguageStore } from '@/stores/languageStore';
export default {
    name: 'contact',
    computed: {
        ...mapState(useLanguageStore, ['t']),
    },
};
</script>