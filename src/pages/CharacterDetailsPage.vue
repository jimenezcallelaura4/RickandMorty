<template>
    <div class="character-container">
        <img :src="character.image" :alt="character.name" />
        <h1>{{ character.name }}</h1>
        <p>Status: {{ character.status }}</p>
        <p>Species: {{ character.species }}</p>
        <p>Gender: {{ character.gender }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            character : null,
        };
    },
    async created() {
        const characterId = this.$route.params.id;
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${characterId}`);
        this.character = response.data;
    }
}
</script>