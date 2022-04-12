<template>
    <div class="btn-container">
        <button type="button" class="btn btn-dark" v-on:click="sortMovie('sortedByTitle')">Trier par titre</button>
        <button type="button" class="btn btn-dark" v-on:click="sortMovie('sortedByDate')">Trier par date de sortie</button>
        <button type="button" class="btn btn-dark" v-on:click="sortMovie('sortedByRating')">Trier par note</button>
    </div>
</template>

<script>
export default {
    name: 'SortButtons',
    props: ['movies'],
    data() {
        return{
            sortedByTitle: false, // false : films non triés par ordre alphabétique
            sortedByDate: false, // false : films non triés par date
            sortedByRating: false, // false : films non triés par note
        }
    },
    methods: {
        sortMovie: function (sortBy) {
            let that = this;
            if(sortBy == 'sortedByTitle'){
                this.$props.movies.sort(function(a, b){
                    if(a.title < b.title) { return ((that.sortedByTitle) ? '' : '-') + 1; }
                    if(a.title > b.title) { return ((that.sortedByTitle) ? '-' : '') + 1; }
                    return 0;
                })

                this.sortedByTitle = !this.sortedByTitle;
            }else if(sortBy == 'sortedByDate'){

                this.$props.movies.sort(function(a, b){
                    if(a.release_date < b.release_date) { return ((that.sortedByDate) ? '-' : '') + 1; }
                    if(a.release_date > b.release_date) { return ((that.sortedByDate) ? '' : '-') + 1; }
                    return 0;
                })

                this.sortedByDate = !this.sortedByDate;
            }else if(sortBy == 'sortedByRating'){

                this.$props.movies.sort(function(a, b){
                    if(a.vote_average < b.vote_average) { return ((that.sortedByRating) ? '-' : '') + 1; }
                    if(a.vote_average > b.vote_average) { return ((that.sortedByRating) ? '' : '-') + 1; }
                    return 0;
                })

                this.sortedByRating = !this.sortedByRating;
            }

            this.$emit("sort-movies", this.$props.movies)
        }
    }
}
</script>

<style scoped>
.btn-container{
    display: flex;
    justify-content: center;
    align-items: center;
}

.btn-container button:nth-child(2){
    margin: 0 16px
}
</style>