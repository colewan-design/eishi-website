<template>
    <v-app-bar app flat height="150" src="/imgages/bgDrawer.jpg">
        <v-container>
            <v-row>
                <v-col class="text-right">
                    <router-link to="/" class="mx-2">
                        <v-img :width="300" aspect-ratio="16/9" cover src="/eishi/eishi logo.jpg" />
                    </router-link>


                </v-col>
                <v-col class="mt-10" cols="7">

                    <v-btn variant="plain">
                        <RouterLink to="/"
                            class="mx-2 text-decoration-none text-black font-weight-bold text-capitalize">
                            {{ t.home }}
                        </RouterLink>
                    </v-btn>
                    <v-btn variant="plain">
                        <RouterLink to="/about"
                            class="mx-2 text-decoration-none text-black font-weight-bold text-capitalize">
                            {{ t.about }}
                        </RouterLink>
                    </v-btn>
                    <v-btn variant="plain">
                        <router-link to="/contact"
                            class="mx-2 text-decoration-none text-black font-weight-bold text-capitalize">
                            {{ t.contact }}
                        </router-link>
                    </v-btn>
                    <v-btn variant="plain">
                        <RouterLink to="/business_holdings"
                            class="mx-2 text-decoration-none text-black font-weight-bold text-capitalize">
                            {{ t.business }}
                        </RouterLink>
                    </v-btn>
                    <v-btn variant="plain">
                        <RouterLink to="/partnership_opportunities"
                            class="mx-2 text-decoration-none text-black font-weight-bold text-capitalize">
                            {{ t.partnership }}
                        </RouterLink>
                    </v-btn>
                    <v-menu>
                        <template v-slot:activator="{ props }">
                            <v-btn color="primary" v-bind="props">
                                <v-icon> mdi-web-box</v-icon>
                                <span class="text-black text-capitalize">
                                    {{ selectedLanguage === 'Japanese' ? '日本語' : 'English' }}
                                </span>
                            </v-btn>
                        </template>

                        <v-list>
                            <v-list-item @click="changeLanguage('English')">
                                <v-list-item-title>English</v-list-item-title>
                            </v-list-item>
                            <v-list-item @click="changeLanguage('Japanese')">
                                <v-list-item-title>日本語</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-col>
            </v-row>
        </v-container>
    </v-app-bar>
</template>


<script>
import { mapState, mapActions } from 'pinia';
import { RouterLink } from 'vue-router'
import { useLanguageStore } from '@/stores/languageStore';

export default {
    name: 'Navigation',
    components: {
        RouterLink,
    },
    props: {
        color: String,
        flat: Boolean,
    },
    computed: {
        ...mapState(useLanguageStore, ['selectedLanguage', 't']),
    },
    methods: {
        ...mapActions(useLanguageStore, ['changeLanguage']),
    }
}
</script>