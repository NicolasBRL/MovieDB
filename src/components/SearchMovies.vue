<template>
    <div>
        <h1>Rechercher un film</h1>
        <input v-model="filmName" @input="searchFilm()" placeholder="Nom du film">

        <SortButtons  @sortBy="sortMovie" />
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

        sortMovie: function (sortBy, order) {
            if(sortBy == 'sortedByTitle'){
                this.movies.sort(function(a, b){
                    if(a.title < b.title) { return ((order) ? '-' : '') + 1; }
                    if(a.title > b.title) { return ((order) ? '' : '-') + 1; }
                    return 0;
                })
            }else if(sortBy == 'sortedByDate'){
                this.movies.sort(function(a, b){
                    if(a.release_date < b.release_date) { return ((order) ? '' : '-') + 1; }
                    if(a.release_date > b.release_date) { return ((order) ? '-' : '') + 1; }
                    return 0;
                })
            }else if(sortBy == 'sortedByRating'){
                this.movies.sort(function(a, b){
                    if(a.vote_average < b.vote_average) { return ((order) ? '' : '-') + 1; }
                    if(a.vote_average > b.vote_average) { return ((order) ? '-' : '') + 1; }
                    return 0;
                })
            }
        }
    },
}
</script>

<style scoped>
h1, .btn-container{
    margin: 32px 0
}
</style>