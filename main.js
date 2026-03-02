import { initHeader } from './src/components/header.js';
import { initHero } from './src/components/hero.js';
import { initPostGrid } from './src/components/post-grid.js';
import { initSidebar } from './src/components/sidebar.js';
import { initFooter } from './src/components/footer.js';

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const tag = urlParams.get('tag');

    initHeader();
    initHero();
    initPostGrid(category, null, 'post-grid-section', tag);
    initSidebar();
    initFooter();
});
