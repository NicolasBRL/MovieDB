<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <router-link to="/" class="navbar-brand">VueJS Movies</router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/FrenchMovies" class="nav-link">Film français</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/AmericanMovies" class="nav-link">Film américain</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/TopRatedMovies" class="nav-link">Top 50 : les mieux notés</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/LastMovies" class="nav-link">Film de 2022</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/SearchMovies" class="nav-link">Recherche un film</router-link>
              </li>
            </ul>
          </div>
        </nav>
    </header>
</template>

<script>
export default {
  name: 'HeaderNav'
}
</script>