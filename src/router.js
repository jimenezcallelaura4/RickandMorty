import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import EpisodeListPage from './pages/EpisodeListPage.vue';
import EpisodeDetailsPage from './pages/EpisodeDetailsPage.vue';
import CharacterDetailsPage from './pages/CharacterDetailsPage.vue';

const routes = [
    { path: '/', component: HomePage, name: 'home' },
    { path: '/episodes' , component: EpisodeListPage, name: 'episodes' },
    { path: '/episodes/:id', component: EpisodeDetailsPage, name: 'episode-details'},
    { path: '/characters/:id', component: CharacterDetailsPage, name: 'character-details'},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 
