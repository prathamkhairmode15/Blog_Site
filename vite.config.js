import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about.html'),
                contact: resolve(__dirname, 'contact.html'),
                learnings: resolve(__dirname, 'learnings.html'),
                post: resolve(__dirname, 'post.html'),
                practices: resolve(__dirname, 'practices.html'),
            },
        },
    },
});
