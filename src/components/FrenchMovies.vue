<template>
    <div>
        <h1>Film Français </h1>
        <SortButtons :movies="movies"  @sortBy="sortMovies" />

        <MoviesList :movies="movies"  :error="error" />
    </div>
</template>

<script>
import SortButtons from './utils/SortButtons.vue'
import MoviesList from './utils/MoviesList.vue'
import axios from 'axios'

export default {
    components: { SortButtons, MoviesList },
    name: 'FrenchMovies',
    data() {
        return{
            movies: [],
            error: false,
        }
    },
    methods: {
        getAllMovies: function () {
        axios
            .get('https://api.themoviedb.org/3/discover/movie/?api_key=d10c1bd7eca8fdf88d0274921e84e3b8&language=fr&with_original_language=fr&vote_count.gte=1000')
            .then( (resp) => {
                this.movies = resp.data.results
            })
            .catch(this.error = true)
        },

        sortMovies(sortedMovies) {  // déclenchée si tri effectuée dans SortButtons
            this.movies = sortedMovies; // on stocke les films triés dans les movies des datas du composant 
        }
    },
    created: function(){
        this.getAllMovies()
    }
}
</script>