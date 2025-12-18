import { ViteSSG } from 'vite-plugin-ssg';
import App from './App.jsx';
import { articles } from './data/articles.js';

const articleRoutes = articles.map(a => `/approfondimenti/${a.id}`);

export const createApp = ViteSSG(App, {
  routes: [
    '/',                // Home
    '/about',           // Chi Sono
    '/services',        // Servizi
    '/contact',         // Contatti
    '/approfondimenti', // Approfondimenti
    ...articleRoutes    // tutte le pagine articoli
  ],
});