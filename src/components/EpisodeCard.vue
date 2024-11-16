<template>
    <div class="episode-card">
        <h3>{{ episode.name }}</h3>
        <p>Air Date: {{ episode.air_date }}</p>
        <router-link :to="{ name: 'episode-details', params: { id: episode.id}}">Ver Detalles</router-link>  
    </div>
</template>

<script>
export default {
    props: {
        episode: Object,
    },
};
</script>