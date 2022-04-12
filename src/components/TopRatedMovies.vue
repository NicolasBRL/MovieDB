<template>
    <div>
        <h1>Top 50: Les mieux notés </h1>
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
    name: 'TopRatedMovies',
    data() {
        return{
        movies: [],
        error: false
        }
    },
    methods: {
        getAllMovies: function () {
            axios
            .get('https://api.themoviedb.org/3/discover/movie/?api_key=d10c1bd7eca8fdf88d0274921e84e3b8&sort_by=vote_count.desc&page=1&vote_count.gte=1000&language=fr')
            .then( (resp) => {
                this.movies = resp.data.results
            })
            .catch(this.error = true)
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
    created: function(){
        this.getAllMovies()
    }
}
</script>