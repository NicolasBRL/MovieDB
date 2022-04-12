<template>
    <div class="btn-container">
        <button type="button" class="btn btn-dark" v-on:click="sortBy('sortedByTitle')">Trier par titre</button>
        <button type="button" class="btn btn-dark" v-on:click="sortBy('sortedByDate')">Trier par date de sortie</button>
        <button type="button" class="btn btn-dark" v-on:click="sortBy('sortedByRating')">Trier par note</button>
    </div>
</template>

<script>
export default {
    name: 'SortButtons',
    data() {
        return{
            sortedBy: {
                sortedByTitle: false, // false : films non triés par ordre alphabétique
                sortedByDate: false, // false : films non triés par date
                sortedByRating: false, // false : films non triés par note
            }
        }
    },
    methods: {
        sortBy(sort_by){
            this.$emit( 'sortBy', sort_by, !this.sortedBy[sort_by] )
            this.sortedBy[sort_by] = !this.sortedBy[sort_by]
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