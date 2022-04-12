<template>
    <div class="row container" style="margin: 0 auto">
        <div class="col-md-6">
            <img :src="'https://image.tmdb.org/t/p/w500' + movies.poster_path" />
        </div>
        <div class="col-md-6">
            
            <div v-if="trailer">
                <iframe width="560" height="315" :src="'https://www.youtube.com/embed/' + trailer" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <h1>{{movies.title}}</h1>
            <span>{{ movies.tagline }}</span>
            <p><strong>Sortie:</strong> {{ movies.release_date }}</p>
            <p><strong>Note moyenne:</strong> {{ movies.vote_average }}</p>
            <p><strong>Titre original:</strong> {{ movies.original_title }}</p>
            <p><strong>Langue original:</strong> {{ movies.original_language }}</p>
            <p><strong>Résumé:</strong> {{ movies.overview }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'MoviesDetails',
    data() {
        return{
        movies: [],
        trailer: null,
        error: false
        }
    },
    methods: {
        getMovie: function () {
            axios
            .get('https://api.themoviedb.org/3/movie/'+ this.$route.params.id + '?api_key=d10c1bd7eca8fdf88d0274921e84e3b8&language=fr-FR')  
            .then( (resp) => {
                this.movies = resp.data
                console.log(resp.data)
            })
            .catch(this.error = true)
        },
        getTrailer: function() {
            axios
            .get('http://api.themoviedb.org/3/movie/'+ this.$route.params.id + '/videos?api_key=d10c1bd7eca8fdf88d0274921e84e3b8&language=fr-FR')  
            .then( (resp) => {
                this.trailer = resp.data.results[0].key
            })
            .catch(this.error = true)
        }
    },
    created: function(){
        this.getMovie(),
        this.getTrailer()
    }
}
</script>