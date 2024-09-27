import Vue from 'vue';
import Router from 'vue-router';
import ProfilePage from '@/components/ProfilePage.vue'; // Import page profile
import ShowcasePage from '@/components/ShowcasePage.vue'; // Import page showcase

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Profile',
      component: ProfilePage
    },
    {
      path: '/showcase',
      name: 'Showcase',
      component: ShowcasePage
    }
  ]
});
