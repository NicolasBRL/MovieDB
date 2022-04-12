<template>
    <div>
        <h1>Rechercher un film</h1>
        <input v-model="filmName" @input="searchFilm()" placeholder="Nom du film">

        <SortButtons :movies="movies" @sortBy="sortMovie" />
        <MoviesList :movies="movies"  :error="error" />
    </div>
</template>

<script>
import SortButtons from './utils/SortButtons.vue'
import MoviesList from './utils/MoviesList.vue'
import axios from 'axios'

export default {
    components: { SortButtons, MoviesList },
    name: 'SearchMovies',
    data(){
        return{
            filmName: null,
            error: false,
            movies: []
        }
    },
    methods: {
        searchFilm: function(){
            if(this.filmName){
                axios
                .get('https://api.themoviedb.org/3/search/movie/?api_key=d10c1bd7eca8fdf88d0274921e84e3b8&language=fr-FR&query=' + this.filmName + '&page=1')
                .then( (resp) => {
                    this.movies = resp.data.results
                })
                .catch(this.error = true)
            }else{
                this.filmName = null;
                this.movies = [];
            }
        }, 

        sortMovies(sortedMovies) {  // déclenchée si tri effectuée dans SortButtons
            this.movies = sortedMovies; // on stocke les films triés dans les movies des datas du composant 
        }
    },
}
</script>

<style scoped>
h1, .btn-container{
    margin: 32px 0
}
</style>