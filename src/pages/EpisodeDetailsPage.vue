<template>
    <div>
        <h1>{{ episode.name }}</h1>
        <p>Air Date: {{ episode.air_date }}</p>
        <h2>Characters</h2>
        <div class="characters-list">
            <CharacterCard v-for="character in characters" :key="character.id" :character="character" />
        </div>
    </div>
</template>


<script>
import axios from 'axios';
import CharacterCard from '../components/CharacterCard.vue';

export default {
    components: { CharacterCard },
    data() {
        return {
            episode: null,
            characters: [],
        };
    },
    async created() {
        const episodeId = this.$route.params.id;
        const response = await axios.get(`https://rickandmortyapi.com/api/episode/${episodeId}`);
        this.episode = response.data;
    
        const characterResponses = await Promise.all(
            this.episode.characters.map((url) => axios.get(url))
        );
        this.characters = characterResponses.map((res) => res.data);
    },
};
</script>