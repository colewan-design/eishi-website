<template>
    <v-app-bar app flat height="auto" src="/imgages/bgDrawer.jpg">
        <v-container>
            <v-row align="center" justify="space-between">
                <!-- Logo -->
                <v-col cols="6" md="3" class="d-flex align-center">
                    <router-link to="/" class="mx-2">
                        <v-img :width="150" aspect-ratio="16/9" cover src="/eishi/eishi logo.jpg" />
                    </router-link>
                </v-col>

                <!-- Desktop Nav Links -->
                <v-col md="7" class="d-none d-md-flex align-center justify-end">
                    <RouterLink to="/">
                        <v-btn class="mx-2 text-decoration-none text-black text-capitalize" variant="plain">{{ t.home
                            }}</v-btn>
                    </RouterLink>
                    <RouterLink to="/about">
                        <v-btn class="mx-2 text-decoration-none text-black text-capitalize" variant="plain">{{ t.about
                            }}</v-btn>
                    </RouterLink>
                    <router-link to="/contact">
                        <v-btn variant="plain" class="mx-2 text-decoration-none text-black text-capitalize">{{ t.contact
                            }}</v-btn>
                    </router-link>

                    <!-- Business/Holdings Menu -->
                    <v-menu>
                        <template v-slot:activator="{ props }">
                            <v-btn variant="plain" color="primary" v-bind="props">
                                <span class="text-decoration-none text-capitalize text-black">{{ t.business }}</span>
                            </v-btn>
                        </template>

                        <v-list>
                            <v-list-item to="/business_holdings/batangas/poultry_farm">
                                <v-list-item-title>{{ t.batangasPoultry }}</v-list-item-title>
                            </v-list-item>
                            <v-list-item to="/business_holdings/pangasinan_farm">
                                <v-list-item-title>{{ t.pangasinanFarm }}</v-list-item-title>
                            </v-list-item>
                            <v-list-item to="/business_holdings/assigned_properties">
                                <v-list-item-title>{{ t.assignedProperties }}</v-list-item-title>
                            </v-list-item>
                            <v-list-item to="/business_holdings/cebu_condominium">
                                <v-list-item-title>{{ t.cebuCondo }}</v-list-item-title>
                            </v-list-item>
                            <v-list-item to="/business_holdings/kalinga_residential">
                                <v-list-item-title>{{ t.kalingaResidential }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                    <RouterLink to="/partnership_opportunities">
                        <v-btn class="mx-2 text-decoration-none text-black text-capitalize" variant="plain">{{
                            t.partnership }}</v-btn>
                    </RouterLink>

                    <!-- Language Menu -->
                    <v-menu>
                        <template v-slot:activator="{ props }">
                            <v-btn color="primary" v-bind="props">
                                <v-icon>mdi-web-box</v-icon>
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

                <!-- Mobile Hamburger -->
                <v-col cols="6" class="d-flex d-md-none justify-end">
                    <v-btn icon @click="menuOpen = true">
                        <v-icon>mdi-menu</v-icon>
                    </v-btn>
                </v-col>

                <v-dialog v-model="menuOpen" fullscreen transition="slide-x-reverse-transition">
                    <v-card>
                        <v-toolbar dense flat>
                            <v-spacer></v-spacer>
                            <v-btn icon @click="menuOpen = false">
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                        </v-toolbar>

                        <v-list>
                            <v-list-item to="/" tag="router-link" @click="menuOpen = false">
                                <v-list-item-title>{{ t.home }}</v-list-item-title>
                            </v-list-item>
                            <v-list-item to="/about" tag="router-link" @click="menuOpen = false">
                                <v-list-item-title>{{ t.about }}</v-list-item-title>
                            </v-list-item>
                            <v-list-item to="/contact" tag="router-link" @click="menuOpen = false">
                                <v-list-item-title>{{ t.contact }}</v-list-item-title>
                            </v-list-item>
                            <v-list-group>
                                <template v-slot:activator="{ props }">
                                    <v-list-item v-bind="props" color="primary" title="Business/Holdings">

                                    </v-list-item>
                                </template>
                                <v-list-item @click="menuOpen = false" to="/business_holdings/batangas/poultry_farm">
                                    <v-list-item-title>{{ t.batangasPoultry }}</v-list-item-title>
                                </v-list-item>
                                <v-list-item @click="menuOpen = false" to="/business_holdings/pangasinan_farm">
                                    <v-list-item-title>{{ t.pangasinanFarm }}</v-list-item-title>
                                </v-list-item>
                                <v-list-item @click="menuOpen = false" to="/business_holdings/assigned_properties">
                                    <v-list-item-title>{{ t.assignedProperties }}</v-list-item-title>
                                </v-list-item>
                                <v-list-item @click="menuOpen = false" to="/business_holdings/cebu_condominium">
                                    <v-list-item-title>{{ t.cebuCondo }}</v-list-item-title>
                                </v-list-item>
                                <v-list-item @click="menuOpen = false" to="/business_holdings/kalinga_residential">
                                    <v-list-item-title>{{ t.kalingaResidential }}</v-list-item-title>
                                </v-list-item>
                            </v-list-group>
                            <v-list-item to="/partnership_opportunities" tag="router-link" @click="menuOpen = false">
                                <v-list-item-title>{{ t.partnership }}</v-list-item-title>
                            </v-list-item>
                            <v-list-group>
                                <template v-slot:activator="{ props }">
                                    <v-list-item v-bind="props" color="primary" title="Language">

                                    </v-list-item>
                                </template>
                                <v-list-item @click="() => { changeLanguage('English'); menuOpen = false }">
                                    <v-list-item-title>English</v-list-item-title>
                                </v-list-item>
                                <v-list-item @click="() => { changeLanguage('Japanese'); menuOpen = false }">
                                    <v-list-item-title>日本語</v-list-item-title>
                                </v-list-item>
                            </v-list-group>

                        </v-list>
                    </v-card>
                </v-dialog>
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
    data() {
        return {
            menuOpen: false,
        };
    },
    computed: {
        ...mapState(useLanguageStore, ['selectedLanguage', 't']),
    },
    mounted() {
        console.log(this.$vuetify.display.mobile)
    },
    methods: {
        ...mapActions(useLanguageStore, ['changeLanguage']),
    }
}
</script>