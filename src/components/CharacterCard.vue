<template>
    <div class="character-card">
        <img :src="character.image" :alt="character.name">
        <h3>{{ character.name }}</h3>
        <router-link :to="{ name: 'character-details', params: { id: character.id}}">Ver Detalles</router-link>
    </div>
</template>

<script>
export default {
        props: {
            character: Object,
        },
    };
</script>