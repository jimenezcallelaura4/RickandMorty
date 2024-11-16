<template>
    <div>
        <h1>Episodios</h1>
        <div class="episodes-list">
            <EpisodeCard v-for="episode in episodes" :key="episode.id" :episode="episode"></EpisodeCard>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import EpisodeCard from '../components/EpisodeCard.vue';

export default {
    components: { EpisodeCard },
    data() {
        return {
            episodes: [],
        };
    },
    async created() { 
        const response = await axios.get('https://rickandmortyapi.com/api/episode');
        this.episodes = response.data.results;
    },
};
</script>