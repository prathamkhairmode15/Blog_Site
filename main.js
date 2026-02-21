import { initHeader } from './src/components/header.js';
import { initHero } from './src/components/hero.js';
import { initPostGrid } from './src/components/post-grid.js';
import { initSidebar } from './src/components/sidebar.js';
import { initFooter } from './src/components/footer.js';

document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initHero();
    initPostGrid(null, 4);
    initSidebar();
    initFooter();
});
