import Vue from 'vue';
import App from './App.vue';
import FrenchMovies from './components/FrenchMovies.vue';
import AmericanMovies from './components/AmericanMovies.vue';
import TopRatedMovies from './components/TopRatedMovies.vue';
import LastMovies from './components/LastMovies.vue';
import SearchMovies from './components/SearchMovies.vue';
import MoviesDetails from './components/MoviesDetails.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: App
    },
    {
      path: '/FrenchMovies',
      component: FrenchMovies
    },
    {
      path: '/AmericanMovies',
      component: AmericanMovies
    },
    {
      path: '/TopRatedMovies',
      component: TopRatedMovies
    },
    {
      path: '/LastMovies',
      component: LastMovies
    },
    {
      path: '/SearchMovies',
      component: SearchMovies
    },
    {
      path: '/MoviesDetails/:id',
      component: MoviesDetails
    }
  ]
})


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
