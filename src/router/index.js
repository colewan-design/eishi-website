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
  ],
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top
    return { top: 0 };
  },
})

export default router
