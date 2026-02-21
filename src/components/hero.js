export function initHero() {
    const hero = document.getElementById('hero-section');
    hero.innerHTML = `
        <div class="hero-wrapper">
            <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=2070" 
                 alt="Featured Post">
            <div class="hero-text-content">
                <span class="category" style="display: inline-block; background: var(--primary-color); color: #fff; padding: 0.3rem 1rem; border-radius: 20px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; margin-bottom: 1rem; letter-spacing: 1px;">Featured News</span>
                <h1>Documenting My Journey: One Day at a Time</h1>
                <div class="meta" style="font-size: 0.9rem; font-weight: 300; opacity: 0.8;">
                    <span>By John Doe</span> &bull; <span>February 21, 2026</span>
                </div>
            </div>
        </div>
    `;
}
