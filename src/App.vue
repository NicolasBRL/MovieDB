<template>
  <div id="app">
    <HeaderNav />

        <div v-if="$route.path == '/'">
          <h1 class="pt-5 font-weight-light">
            Vos films préféres sont sur VueJS Movies
          </h1>
          
          <MoviesList :movies="movies"  :error="error" />
        </div>

        <div v-else>
          <router-view :key="$route.fullPath"></router-view>
        </div>
    <FooterApp />
  </div>
</template>

<script>
import HeaderNav from './components/template/HeaderNav.vue'
import FooterApp from './components/template/FooterApp.vue'
import MoviesList from './components/utils/MoviesList.vue'
import axios from 'axios';

export default {
  name: 'App',
  components: {
    HeaderNav,
    FooterApp,
    MoviesList
  },
  data() {
    return{
      movies: [],
      error: false,
      loading: true,
    }
  },
  methods: {
    getAllMovies: function (components) {
      axios
        .get('https://api.themoviedb.org/3/discover/movie?api_key=d10c1bd7eca8fdf88d0274921e84e3b8&page=1&language=fr')
        .then( (resp) => {
            components.movies = resp.data.results
            components.loading = false;
        })
        .catch(components.error = true)
    }
  },
  created: function(){
    this.getAllMovies(this)
  }
}
</script>

<style>
body{margin: 0}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.card-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card-container .card{
  width: calc(100% / 5);
  margin: 32px
}
</style>
