<template>
  <div class="movies-container">
    <div class="card-container">
      <div v-for="movie in movies" :key="movie.id" class="card">
        <router-link :to="'/MoviesDetails/' + movie.id" class="nav-link">
          <div class="card-body">
            <h2>{{ movie.title }}</h2>
            <img :src="'https://image.tmdb.org/t/p/w185/' + movie.poster_path" />
            <p><strong>Sortie:</strong> {{ movie.release_date }}</p>
            <p><strong>Note moyenne:</strong> {{ movie.vote_average }}</p>
            <p><strong>Résumé:</strong> {{ movie.overview.substring(0, 200) }}...</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoviesList",
  props: ['movies']
};
</script>

<style scoped>
a{
  color: unset
}
</style>