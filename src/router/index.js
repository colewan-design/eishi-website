import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue'),
    },
    {
      path: '/business_holdings',
      name: 'business_holdings',
      component: () => import('../views/BusinessHoldings.vue'),
    },
    {
      path: '/partnership_opportunities',
      name: 'partnership_opportunities',
      component: () => import('../views/PartnershipOpportunities.vue'),
    },
    {
      path: '/business_holdings/batangas/poultry_farm',
      name: 'batangas_poultry_farm',
      component: () => import('../views/business_holdings/batangas_poultry_farm.vue'),
    },
    {
      path: '/business_holdings/assigned_properties',
      name: 'assigned_properties',
      component: () => import('../views/business_holdings/assigned_properties.vue'),
    },
    {
      path: '/business_holdings/cebu_condominium',
      name: 'cebu_condominium',
      component: () => import('../views/business_holdings/cebu_condominium.vue'),
    },
    {
      path: '/business_holdings/kalinga_residential',
      name: 'kalinga_residential',
      component: () => import('../views/business_holdings/kalinga_residential.vue'),
    },
    {
      path: '/business_holdings/pangasinan_farm',
      name: 'pangasinan_farm',
      component: () => import('../views/business_holdings/pangasinan_farm.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top
    return { top: 0 };
  },
})

export default router
