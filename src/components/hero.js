export function initHero() {
    const hero = document.getElementById('hero-section');
    hero.innerHTML = `
        <div class="hero-wrapper">
            <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=2070" 
                 alt="Featured Post">
            <div class="hero-text-content">
                <span class="category">Featured News</span>
                <h1>Documenting My Journey: One Day at a Time</h1>
                <div class="meta">
                    <span>By John Doe</span> &bull; <span>February 21, 2026</span>
                </div>
            </div>
        </div>
    `;
}
