export function initHero() {
    const hero = document.getElementById('hero-section');
    hero.innerHTML = `
        <div class="hero-wrapper">
            <img src="public/assets/images/hero.jpg" 
                 alt="Featured Post">
            <div class="hero-text-content">
                <h1>Documenting My Journey: One Day at a Time</h1>
                <div class="meta">
                    <span>By Pratham Khairmode</span> &bull; <span>February 22, 2026</span>
                </div>
            </div>
        </div>
    `;
}
